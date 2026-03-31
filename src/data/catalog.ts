import catalogSeedFixture from "../../fixtures/catalog.seed.json";
import queryCorpusFixture from "../../fixtures/query-corpus.json";
import type { CatalogEntry, CatalogIndex, IndexedCatalogEntry } from "../domain/types.js";
import { normalizeText } from "../search/normalizeQuery.js";

const benchmarkLabels = ["East", "West", "Central", "Edge", "Archive", "Realtime"];

export const catalogSeed = catalogSeedFixture as CatalogEntry[];
export const queryCorpus = queryCorpusFixture as string[];

export const catalogIndex = buildSearchIndex(catalogSeed);
export const benchmarkCatalog = buildBenchmarkCatalog(catalogSeed, 60);
export const benchmarkIndex = buildSearchIndex(benchmarkCatalog);

function buildBenchmarkCatalog(seed: CatalogEntry[], copies: number): CatalogEntry[] {
  const expanded: CatalogEntry[] = [];

  for (let copy = 0; copy <= copies; copy += 1) {
    for (const entry of seed) {
      if (copy === 0) {
        expanded.push(entry);
        continue;
      }

      const label = benchmarkLabels[copy % benchmarkLabels.length];

      expanded.push({
        ...entry,
        id: `${entry.id}-${copy}`,
        title: `${entry.title} ${label} ${copy}`,
        aliases: [...entry.aliases, `${entry.title} ${label}`],
        tags: Array.from(new Set([...entry.tags, label.toLowerCase(), `batch-${(copy % 4) + 1}`])),
        popularity: Math.max(1, entry.popularity - (copy % 7))
      });
    }
  }

  return expanded;
}

function buildSearchIndex(entries: CatalogEntry[]): CatalogIndex {
  return {
    strategy: "naive_title_prefix_scan",
    entries: entries.map((entry) => ({
      ...entry,
      titleNormalized: normalizeText(entry.title),
      aliasValues: entry.aliases.map(normalizeText).filter(Boolean),
      tagValues: entry.tags.map(normalizeText).filter(Boolean)
    }))
  };
}
