const NON_ALPHANUMERIC = /[^a-z0-9]+/g;

export function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(NON_ALPHANUMERIC, " ")
    .replace(/\s+/g, " ")
    .trim();
}
