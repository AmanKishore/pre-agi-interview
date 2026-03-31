import {
  analysisTaskNames,
  type AnalysisTaskName,
  type NormalizedSitePacket,
  type SitePacketInput
} from "./types.js";

const stateAliases: Record<string, string> = {
  ny: "NY",
  "new york": "NY",
  nj: "NJ",
  "new jersey": "NJ",
  ca: "CA",
  california: "CA",
  tx: "TX",
  texas: "TX"
};

const requestedCheckAliases: Record<string, AnalysisTaskName> = {
  zoning: "zoning",
  power: "power",
  environmental: "environmental",
  env: "environmental"
};

export function normalizeSitePacket(input: SitePacketInput): {
  packet: NormalizedSitePacket;
  warnings: string[];
} {
  const warnings: string[] = [];

  const assetType = input.assetType
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-");

  const stateKey = input.location.state.trim().toLowerCase();
  const fallbackState =
    input.location.state
      .trim()
      .replace(/[^a-z]/gi, "")
      .slice(0, 2)
      .toUpperCase() || input.location.state.trim().slice(0, 2).toUpperCase();
  const state = stateAliases[stateKey] ?? fallbackState;

  if (!(stateKey in stateAliases) && input.location.state.trim().length > 2) {
    warnings.push("State normalization uses a starter fallback. Expand alias coverage.");
  }

  const unknownRequestedChecks = input.requestedChecks
    .map((value) => value.trim())
    .filter((value) => !(value.toLowerCase() in requestedCheckAliases));

  if (unknownRequestedChecks.length > 0) {
    warnings.push(`Unsupported requested checks were ignored: ${Array.from(new Set(unknownRequestedChecks)).join(", ")}.`);
  }

  const requestedChecks = Array.from(
    new Set(
      input.requestedChecks
        .map((value) => requestedCheckAliases[value.trim().toLowerCase()])
        .filter((value): value is AnalysisTaskName => Boolean(value))
    )
  );

  const documents = input.documents.map((document) => ({
    type: document.type.trim().toLowerCase().replace(/[_\s]+/g, "-"),
    status: document.status.trim().toLowerCase()
  }));

  const documentStatusesByType = new Map<string, Set<string>>();

  for (const document of documents) {
    const knownStatuses = documentStatusesByType.get(document.type) ?? new Set<string>();
    knownStatuses.add(document.status);
    documentStatusesByType.set(document.type, knownStatuses);
  }

  const conflictingDocumentTypes = Array.from(documentStatusesByType.entries())
    .filter(([, statuses]) => statuses.size > 1)
    .map(([type]) => type);

  if (conflictingDocumentTypes.length > 0) {
    warnings.push(
      `Conflicting document statuses were preserved for: ${conflictingDocumentTypes.join(", ")}. Resolve document precedence explicitly.`
    );
  }

  if (documents.length === 0) {
    warnings.push("Starter normalization accepted an empty document list.");
  }

  // TODO(interview): consider stronger schema validation and richer alias handling.
  // TODO(interview): make it explicit whether all requested checks must be present.

  return {
    packet: {
      siteId: input.siteId.trim(),
      submittedBy: input.submittedBy.trim().toLowerCase(),
      assetType,
      location: {
        city: input.location.city.trim(),
        state
      },
      documents,
      requestedChecks: requestedChecks.filter((task) => analysisTaskNames.includes(task)),
      priority: input.priority,
      receivedAt: new Date().toISOString()
    },
    warnings
  };
}
