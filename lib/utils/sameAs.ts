/**
 * Normalize and dedupe sameAs profile URLs for JSON-LD.
 * Preserves first-seen order; drops empty/invalid values; collapses trailing-slash duplicates.
 */
export function normalizeSameAs(
  urls: Array<string | null | undefined>
): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const raw of urls) {
    if (typeof raw !== "string") continue;
    const trimmed = raw.trim();
    if (!trimmed) continue;

    let parsed: URL;
    try {
      parsed = new URL(trimmed);
    } catch {
      continue;
    }

    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      continue;
    }

    const path =
      parsed.pathname.length > 1 && parsed.pathname.endsWith("/")
        ? parsed.pathname.slice(0, -1)
        : parsed.pathname;
    const key = `${parsed.protocol}//${parsed.host.toLowerCase()}${path}${parsed.search}${parsed.hash}`;

    if (seen.has(key)) continue;
    seen.add(key);

    parsed.pathname = path || "/";
    result.push(parsed.toString());
  }

  return result;
}
