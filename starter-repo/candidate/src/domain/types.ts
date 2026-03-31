import { z } from "zod";

export const analysisTaskNames = ["zoning", "power", "environmental"] as const;

export type AnalysisTaskName = (typeof analysisTaskNames)[number];

export type TaskStatus = "completed" | "failed" | "skipped";
export type OverallStatus = "completed" | "failed";
export type FailureMode = "power_timeout";

export const sitePacketInputSchema = z.object({
  siteId: z.string().min(1),
  submittedBy: z.string().email(),
  assetType: z.string().min(1),
  location: z.object({
    city: z.string().min(1),
    state: z.string().min(1)
  }),
  documents: z.array(
    z.object({
      type: z.string().min(1),
      status: z.string().min(1)
    })
  ),
  requestedChecks: z.array(z.string().min(1)),
  priority: z.enum(["low", "medium", "high"])
});

export type SitePacketInput = z.infer<typeof sitePacketInputSchema>;

export interface NormalizedDocument {
  type: string;
  status: string;
}

export interface NormalizedSitePacket {
  siteId: string;
  submittedBy: string;
  assetType: string;
  location: {
    city: string;
    state: string;
  };
  documents: NormalizedDocument[];
  requestedChecks: AnalysisTaskName[];
  priority: "low" | "medium" | "high";
  receivedAt: string;
}

export interface AnalyzerOutput {
  summary: string;
  risk: "low" | "medium" | "high";
  notes: string[];
}

export interface DiligenceTaskSummary {
  name: AnalysisTaskName;
  status: TaskStatus;
  detail: string;
  durationMs: number | null;
  output: AnalyzerOutput | null;
}

export interface DiligenceRunSummary {
  runId: string;
  siteId: string;
  overallStatus: OverallStatus;
  normalizedPacket: NormalizedSitePacket;
  tasks: DiligenceTaskSummary[];
  warnings: string[];
}

export interface AnalyzerContext {
  failureMode?: FailureMode;
}
