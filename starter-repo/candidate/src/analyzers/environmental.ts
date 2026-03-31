import type { AnalyzerContext, AnalyzerOutput, NormalizedSitePacket } from "../domain/types.js";

export async function analyzeEnvironmental(
  packet: NormalizedSitePacket,
  _context: AnalyzerContext
): Promise<AnalyzerOutput> {
  await delay(55);

  return {
    summary: `Starter environmental review complete for ${packet.siteId}.`,
    risk: "low",
    notes: [
      "Stub analyzer returns a deterministic low-risk response.",
      `Requested checks: ${packet.requestedChecks.join(", ")}.`
    ]
  };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
