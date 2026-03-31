import { Router } from "express";
import { ZodError, z } from "zod";
import { normalizeSitePacket } from "../domain/normalizeSitePacket.js";
import type { FailureMode } from "../domain/types.js";
import { sitePacketInputSchema } from "../domain/types.js";
import { runDiligence } from "../orchestrator/runDiligence.js";

const failureModeSchema = z.enum(["power_timeout"]);

export const diligenceRunsRouter = Router();

diligenceRunsRouter.post("/", async (req, res, next) => {
  try {
    const input = sitePacketInputSchema.parse(req.body);
    const failureHeader = req.header("x-interview-failure");
    const failureMode: FailureMode | undefined = failureModeSchema.safeParse(failureHeader).success
      ? (failureHeader as FailureMode)
      : undefined;

    const { packet, warnings } = normalizeSitePacket(input);
    const summary = await runDiligence(packet, {
      baseWarnings: warnings,
      failureMode
    });

    res.status(200).json(summary);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        error: "invalid_site_packet",
        issues: error.issues
      });
      return;
    }

    next(error);
  }
});
