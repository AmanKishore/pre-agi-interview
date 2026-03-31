import { analyzeEnvironmental } from "../analyzers/environmental.js";
import { analyzePower } from "../analyzers/power.js";
import { analyzeZoning } from "../analyzers/zoning.js";
import type {
  AnalysisTaskName,
  DiligenceRunSummary,
  DiligenceTaskSummary,
  FailureMode,
  NormalizedSitePacket,
  OverallStatus
} from "../domain/types.js";
import { analysisTaskNames } from "../domain/types.js";
import { logger } from "../lib/logger.js";
import { TimeoutError, withTimeout } from "../lib/withTimeout.js";

const STARTER_TIMEOUT_MS = 120;

const analyzers = {
  zoning: analyzeZoning,
  power: analyzePower,
  environmental: analyzeEnvironmental
} as const;

export async function runDiligence(
  packet: NormalizedSitePacket,
  options: {
    baseWarnings?: string[];
    failureMode?: FailureMode;
  } = {}
): Promise<DiligenceRunSummary> {
  const warnings = [...(options.baseWarnings ?? [])];

  const tasks = await Promise.all(
    analysisTaskNames.map(async (taskName) => {
      if (!packet.requestedChecks.includes(taskName)) {
        return createSkippedTask(taskName);
      }

      const startedAt = Date.now();

      try {
        const output = await withTimeout(analyzers[taskName](packet, { failureMode: options.failureMode }), {
          label: taskName,
          timeoutMs: STARTER_TIMEOUT_MS
        });

        return {
          name: taskName,
          status: "completed",
          detail: "Analyzer completed within the starter path.",
          durationMs: Date.now() - startedAt,
          output
        } satisfies DiligenceTaskSummary;
      } catch (error) {
        const durationMs = Date.now() - startedAt;

        if (error instanceof TimeoutError) {
          logger.warn(
            {
              taskName,
              durationMs,
              timeoutMs: STARTER_TIMEOUT_MS
            },
            "starter analyzer timed out"
          );

          return {
            name: taskName,
            status: "failed",
            detail: "Analyzer failed in the starter path. Improve recovery and operator-facing state.",
            durationMs,
            output: null
          } satisfies DiligenceTaskSummary;
        }

        logger.error({ err: error, taskName, durationMs }, "starter analyzer failed");

        return {
          name: taskName,
          status: "failed",
          detail: "Analyzer failed in the starter path. Improve recovery and operator-facing state.",
          durationMs,
          output: null
        } satisfies DiligenceTaskSummary;
      }
    })
  );

  if (tasks.some((task) => task.status === "failed")) {
    warnings.push("One or more diligence tasks failed in the starter path.");
  }

  // TODO(interview): introduce clearer task states for timeouts and partial completion.
  // TODO(interview): consider retries, backpressure, and richer operator-facing metadata.

  return {
    runId: createRunId(),
    siteId: packet.siteId,
    overallStatus: deriveOverallStatus(tasks),
    normalizedPacket: packet,
    tasks,
    warnings
  };
}

function createSkippedTask(taskName: AnalysisTaskName): DiligenceTaskSummary {
  return {
    name: taskName,
    status: "skipped",
    detail: "Check not requested in this run.",
    durationMs: null,
    output: null
  };
}

function deriveOverallStatus(tasks: DiligenceTaskSummary[]): OverallStatus {
  const requestedTasks = tasks.filter((task) => task.status !== "skipped");
  return requestedTasks.length > 0 && requestedTasks.every((task) => task.status === "completed")
    ? "completed"
    : "failed";
}

function createRunId(): string {
  return `run_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
