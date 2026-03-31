import { z } from "zod";

export type MatchField = "title" | "alias" | "tag";

export const searchRequestSchema = z.object({
  q: z.string().trim().min(1),
  limit: z.coerce.number().int().min(1).max(10).default(5)
});

export type SearchRequest = z.infer<typeof searchRequestSchema>;

export interface CatalogEntry {
  id: string;
  title: string;
  aliases: string[];
  tags: string[];
  popularity: number;
}

export interface IndexedCatalogEntry extends CatalogEntry {
  titleNormalized: string;
  aliasValues: string[];
  tagValues: string[];
}

export interface CatalogIndex {
  strategy: string;
  entries: IndexedCatalogEntry[];
}

export interface Suggestion {
  id: string;
  title: string;
  matchedOn: MatchField[];
  score: number;
}

export interface SearchDebug {
  strategy: string;
  scannedEntries: number;
  matchedEntries: number;
  elapsedMs: number;
  queryTokens: string[];
}

export interface SearchResponse {
  query: string;
  suggestions: Suggestion[];
  debug: SearchDebug;
}
