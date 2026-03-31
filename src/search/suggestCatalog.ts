import type { CatalogIndex, SearchRequest, SearchResponse, Suggestion } from "../domain/types.js";
import { normalizeText } from "./normalizeQuery.js";

interface ScoredSuggestion extends Suggestion {
  popularity: number;
}

export function suggestCatalog(request: SearchRequest, index: CatalogIndex): SearchResponse {
  const startedAt = performance.now();
  const normalizedQuery = normalizeText(request.q);
  const queryTokens = normalizedQuery.length === 0 ? [] : normalizedQuery.split(" ");

  const matches: ScoredSuggestion[] = [];

  for (const entry of index.entries) {
    if (!matchesTitlePrefix(entry.titleNormalized, normalizedQuery)) {
      continue;
    }

    matches.push({
      id: entry.id,
      title: entry.title,
      matchedOn: ["title"],
      score: scoreTitlePrefix(entry.titleNormalized, normalizedQuery, entry.popularity),
      popularity: entry.popularity
    });
  }

  matches.sort((left, right) => {
    if (right.score !== left.score) {
      return right.score - left.score;
    }

    if (right.popularity !== left.popularity) {
      return right.popularity - left.popularity;
    }

    return left.title.localeCompare(right.title);
  });

  return {
    query: request.q,
    suggestions: matches.slice(0, request.limit).map(({ popularity: _popularity, ...suggestion }) => suggestion),
    debug: {
      strategy: index.strategy,
      scannedEntries: index.entries.length,
      matchedEntries: matches.length,
      elapsedMs: roundMs(performance.now() - startedAt),
      queryTokens
    }
  };
}

function matchesTitlePrefix(titleNormalized: string, normalizedQuery: string): boolean {
  return normalizedQuery.length > 0 && titleNormalized.startsWith(normalizedQuery);
}

function scoreTitlePrefix(titleNormalized: string, normalizedQuery: string, popularity: number): number {
  return (titleNormalized === normalizedQuery ? 200 : 100) + popularity;
}

function roundMs(value: number): number {
  return Math.round(value * 1000) / 1000;
}

// TODO(interview): compare this naive full scan with token indexes, prefix maps, or caches.
// TODO(interview): expand matchedOn semantics once aliases and tags participate in ranking.
