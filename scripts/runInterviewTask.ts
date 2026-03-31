import request from "supertest";
import { benchmarkIndex, queryCorpus } from "../src/data/catalog.js";
import { suggestCatalog } from "../src/search/suggestCatalog.js";
import { createApp } from "../src/server.js";

const scenarios = [
  {
    query: "cloud",
    expectedTitle: "Cloud GPU Hosting",
    expectedMatch: "title",
    issue: "Simple title-prefix matching should already work."
  },
  {
    query: "gpu cloud",
    expectedTitle: "Cloud GPU Hosting",
    expectedMatch: "title",
    issue: "Token-order-insensitive title matching is missing."
  },
  {
    query: "redis warmup",
    expectedTitle: "Cache Warmup Orchestrator",
    expectedMatch: "alias",
    issue: "Alias matching is missing."
  },
  {
    query: "reliability",
    expectedTitle: "Incident Runbook Template",
    expectedMatch: "tag",
    issue: "Tag matching is missing."
  }
] as const;

for (const scenario of scenarios) {
  const response = await request(createApp())
    .get("/v1/search/suggest")
    .query({ q: scenario.query, limit: 3 });

  const suggestionTitles = response.body.suggestions.map((suggestion: { title: string }) => suggestion.title);
  const matchedSuggestion = response.body.suggestions.find(
    (suggestion: { title: string; matchedOn: string[] }) =>
      suggestion.title === scenario.expectedTitle && suggestion.matchedOn.includes(scenario.expectedMatch)
  );

  console.log(`Query: ${scenario.query}`);
  console.log(`- Expected behavior: ${scenario.expectedTitle} should match on ${scenario.expectedMatch}.`);
  console.log(`- Current top results: ${suggestionTitles.join(" | ") || "none"}`);
  console.log(`- Status: ${matchedSuggestion ? "looks good" : "issue detected"}`);

  if (!matchedSuggestion) {
    console.log(`- Issue: ${scenario.issue}`);
  }

  console.log("");
}

const latencySamples: Array<{ query: string; elapsedMs: number; matchedEntries: number }> = [];

for (let repeat = 0; repeat < 40; repeat += 1) {
  for (const query of queryCorpus) {
    const startedAt = performance.now();
    const response = suggestCatalog({ q: query, limit: 5 }, benchmarkIndex);
    const elapsedMs = performance.now() - startedAt;

    latencySamples.push({
      query,
      elapsedMs,
      matchedEntries: response.debug.matchedEntries
    });
  }
}

const sortedLatencies = latencySamples
  .map((sample) => sample.elapsedMs)
  .sort((left, right) => left - right);

const averageMs = sortedLatencies.reduce((sum, value) => sum + value, 0) / sortedLatencies.length;
const p95Ms = sortedLatencies[Math.max(0, Math.ceil(sortedLatencies.length * 0.95) - 1)];
const slowestSample = latencySamples.reduce((slowest, sample) =>
  sample.elapsedMs > slowest.elapsedMs ? sample : slowest
);

console.log("Latency summary:");
console.log(`- Strategy: ${benchmarkIndex.strategy}`);
console.log(`- Catalog size: ${benchmarkIndex.entries.length}`);
console.log(`- Query count: ${queryCorpus.length}`);
console.log(`- Average latency: ${roundMs(averageMs)}ms`);
console.log(`- P95 latency: ${roundMs(p95Ms)}ms`);
console.log(`- Slowest query: ${slowestSample.query} (${roundMs(slowestSample.elapsedMs)}ms, matched=${slowestSample.matchedEntries})`);
console.log(`- Entries scanned per query today: ${benchmarkIndex.entries.length}`);
console.log("");
console.log("What to do with this:");
console.log("- Use this report to decide what behavior and performance problems to fix first.");
console.log("- Compare at least two algorithm directions before committing.");
console.log("- This report is diagnosis, not proof of completion.");
console.log("- By the end of the interview, add your own correctness test(s) and create or improve the benchmark/profiling path so future optimization is easier.");

function roundMs(value: number): number {
  return Math.round(value * 1000) / 1000;
}
