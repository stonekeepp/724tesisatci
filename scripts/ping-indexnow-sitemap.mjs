/**
 * One-shot IndexNow sitemap ping for production.
 * Usage: node scripts/ping-indexnow-sitemap.mjs
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://724tesisatci.com").replace(
  /\/$/,
  ""
);
const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY?.trim() || "e8c4a1b2d7f94e6c9a0b1c2d3e4f5a6b";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

async function fetchSitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) {
    throw new Error(`Sitemap fetch failed: HTTP ${res.status}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    throw new Error("No URLs found in sitemap.xml");
  }
  return urls;
}

async function main() {
  const host = new URL(SITE_URL).host;
  const urls = await fetchSitemapUrls();
  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls.slice(0, 10000),
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const ok = res.status === 200 || res.status === 202;
  console.log(
    JSON.stringify(
      {
        ok,
        status: res.status,
        submitted: payload.urlList.length,
        host,
      },
      null,
      2
    )
  );
  process.exit(ok ? 0 : 1);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
