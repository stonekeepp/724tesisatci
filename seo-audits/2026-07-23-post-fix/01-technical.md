# 01 — Technical SEO (post-fix)

**Date:** 2026-07-23  
**Target:** https://724tesisatci.com  
**Artifacts:** `homepage.html`, `robots.txt`, `sitemap.xml`, redirect headers, `homepage-headers.txt`

## Score: **90 / 100** (prior 86)

| Category | Status | Score |
|----------|--------|------:|
| Crawlability | Pass | 94 |
| Indexability | Pass | 90 |
| Security | Pass (gaps) | 82 |
| URL Structure | Pass | 95 |
| Mobile | Pass | 92 |
| CWV (source) | Pass / watch | 80 |
| Structured Data (presence) | Pass | 90 |
| JS Rendering | Pass | 96 |
| IndexNow | Fail | 35 |

### Fix verification
| Fix | Result |
|-----|--------|
| Vanity → Kağıthane (C3) | **PASS** — `/mecidiyekoy-…` → `308` `Location: /hizmet-bolgeleri/kagithane` |
| Sitemap lastmod (M1) | **PASS** — 52 URLs `2026-07-23`; 7 remain `2026-07-09`; 1 `2026-07-22` |

### Findings
- robots.txt allows `*`; AI bots allowed (GPTBot, Google-Extended, PerplexityBot, etc.). Sitemap referenced.
- Sitemap: **60 URLs**. Kağıthane allowlist indexing intact.
- Headers: HSTS preload, X-CTO, X-Frame, Referrer-Policy, Permissions-Policy. **No CSP.** HTML CDN TTL short (`cdn-cache-control` max-age=60) — good after deploy.
- Prerender HIT (`x-nextjs-prerender: 1`). TTFB strong via Cloudflare.
- IndexNow key URL **404** (unchanged).
- Homepage still large HTML (~176KB) with many `<script>` tags (~64) → INP watch.

### Residual
1. Add IndexNow  
2. CSP report-only  
3. Align remaining 7 sitemap lastmods if those entities updated  
