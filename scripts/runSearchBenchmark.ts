import { benchmarkIndex, queryCorpus } from "../src/data/catalog.js";
import { suggestCatalog } from "../src/search/suggestCatalog.js";

const repeatCount = Number(process.env.BENCH_REPEAT ?? 40);

let totalMs = 0;
let maxMs = -1;
let slowestQuery = "";

for (let repeat = 0; repeat < repeatCount; repeat += 1) {
  for (const query of queryCorpus) {
    const startedAt = performance.now();
    suggestCatalog({ q: query, limit: 5 }, benchmarkIndex);
    const elapsedMs = performance.now() - startedAt;

    totalMs += elapsedMs;

    if (elapsedMs > maxMs) {
      maxMs = elapsedMs;
      slowestQuery = query;
    }
  }
}

const sampleCount = queryCorpus.length * repeatCount;

console.log(
  JSON.stringify(
    {
      strategy: benchmarkIndex.strategy,
      catalogSize: benchmarkIndex.entries.length,
      queryCount: queryCorpus.length,
      repeatCount,
      averageMs: roundMs(totalMs / sampleCount),
      maxMs: roundMs(maxMs),
      slowestQuery,
      note: "Starter benchmark is intentionally thin. A strong candidate usually evolves this into something more useful for future optimization."
    },
    null,
    2
  )
);

function roundMs(value: number): number {
  return Math.round(value * 1000) / 1000;
}
