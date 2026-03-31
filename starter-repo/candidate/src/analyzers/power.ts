import type { AnalyzerContext, AnalyzerOutput, NormalizedSitePacket } from "../domain/types.js";

export async function analyzePower(
  packet: NormalizedSitePacket,
  context: AnalyzerContext
): Promise<AnalyzerOutput> {
  const latencyMs = context.failureMode === "power_timeout" ? 275 : 45;

  await delay(latencyMs);

  return {
    summary: `Starter power review complete for ${packet.location.city}, ${packet.location.state}.`,
    risk: packet.priority === "high" ? "medium" : "low",
    notes: [
      "Stub analyzer assumes power access requires deeper diligence.",
      `Priority reviewed: ${packet.priority}.`
    ]
  };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
