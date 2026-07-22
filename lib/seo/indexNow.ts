import { getSiteUrl } from "@/lib/services/seoService";

/** Public IndexNow key (also served at /{key}.txt). Override with INDEXNOW_KEY. */
export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY?.trim() || "e8c4a1b2d7f94e6c9a0b1c2d3e4f5a6b";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

function getHost(siteUrl: string): string {
  return new URL(siteUrl).host;
}

export function getIndexNowKeyLocation(siteUrl?: string): string {
  const base = siteUrl ?? getSiteUrl();
  return `${base.replace(/\/$/, "")}/${INDEXNOW_KEY}.txt`;
}

export type IndexNowResult = {
  ok: boolean;
  status: number;
  submitted: number;
  error?: string;
};

/**
 * Submit up to 10,000 URLs to IndexNow.
 * No-ops on localhost hosts (IndexNow requires a public key URL).
 */
export async function submitIndexNowUrls(
  urls: string[]
): Promise<IndexNowResult> {
  const unique = [...new Set(urls.map((u) => u.trim()).filter(Boolean))];
  if (unique.length === 0) {
    return { ok: false, status: 0, submitted: 0, error: "No URLs provided" };
  }

  const siteUrl = getSiteUrl();
  const host = getHost(siteUrl);
  if (/^(localhost|127\.0\.0\.1)(:\d+)?$/i.test(host)) {
    return {
      ok: false,
      status: 0,
      submitted: 0,
      error: "IndexNow skipped on localhost",
    };
  }

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: getIndexNowKeyLocation(siteUrl),
    urlList: unique.slice(0, 10000),
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const ok = res.status === 200 || res.status === 202;
    return {
      ok,
      status: res.status,
      submitted: payload.urlList.length,
      error: ok ? undefined : `IndexNow HTTP ${res.status}`,
    };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      submitted: 0,
      error: err instanceof Error ? err.message : "IndexNow request failed",
    };
  }
}

/** Fire-and-forget helper for publish hooks. */
export function pingIndexNowUrls(urls: string[]): void {
  void submitIndexNowUrls(urls).catch(() => undefined);
}
