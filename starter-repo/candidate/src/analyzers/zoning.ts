import type { AnalyzerContext, AnalyzerOutput, NormalizedSitePacket } from "../domain/types.js";

export async function analyzeZoning(
  packet: NormalizedSitePacket,
  _context: AnalyzerContext
): Promise<AnalyzerOutput> {
  await delay(35);

  return {
    summary: `Starter zoning review complete for ${packet.siteId}.`,
    risk: packet.assetType === "data-center" ? "medium" : "low",
    notes: [
      "Stub analyzer reviewed normalized asset type.",
      `Documents seen: ${packet.documents.length}.`
    ]
  };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
