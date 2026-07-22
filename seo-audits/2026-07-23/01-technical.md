# Technical SEO Audit — 724tesisatci.com

**Date:** 2026-07-23  
**Target:** https://724tesisatci.com  
**Business:** Local plumbing (tesisatçı), Kağıthane / İstanbul  
**Stack:** Next.js App Router, SSR/prerender, Cloudflare CDN  
**Artifacts used:** `homepage.html`, `robots.txt`, `sitemap.xml` + live header/HTML samples

---

## Score: **86 / 100**

Strong crawl/index foundation for a local SSR site. Gaps are mostly hardening (CSP, IndexNow), sitemap freshness hygiene, and a few redirect/schema edge cases—not blocking core Kağıthane money pages.

| Category | Status | Score |
|----------|--------|------:|
| 1. Crawlability | Pass | 94 |
| 2. Indexability | Pass | 88 |
| 3. Security | Pass (with gaps) | 82 |
| 4. URL Structure | Pass | 95 |
| 5. Mobile | Pass | 92 |
| 6. Core Web Vitals (source) | Pass / watch | 78 |
| 7. Structured Data | Pass (hub gap) | 84 |
| 8. JavaScript Rendering | Pass | 96 |
| 9. IndexNow | Fail | 35 |

---

## 1. Crawlability — Pass

### robots.txt
- Present at `/robots.txt`, `200`.
- `User-agent: *` → `Allow: /`.
- AI crawlers explicitly allowed: GPTBot, ChatGPT-User, Google-Extended, anthropic-ai, ClaudeBot, PerplexityBot, Applebot-Extended (aligned with GEO-friendly posture).
- Sitemap referenced: `https://724tesisatci.com/sitemap.xml`.
- **Gap:** `/admin` is not `Disallow`’d (mitigated by `noindex` + `X-Robots-Tag`).

### Sitemap
- `/sitemap.xml` returns `200`, valid urlset, **60 URLs**.
- Includes: home, hubs, services, Kağıthane local landings, Kağıthane district + 19 neighborhoods, blog posts, legal pages.
- Excludes non-allowlisted districts (correct).
- **Issue:** `lastmod` is mostly frozen (`2026-07-09` × 52; only 1 entry at `2026-07-22`). Matches code `CONTENT_LAST_UPDATED` in `sitemapService.ts` rather than per-URL real updates.

### Sample URL crawl status
| URL | Status | Notes |
|-----|--------|-------|
| `/` | 200 | Prerender HIT, indexable |
| `/hizmetler` | 200 | Indexable |
| `/hizmet-bolgeleri/kagithane` | 200 | Indexable |
| `/kagithane-dogalgaz-tesisati` | 200 | Indexable local landing |
| `/blog` | 200 | Indexable |
| `/iletisim` | 200 | Indexable |
| `http://` → `https://` | 301/redirect | HTTPS enforced |
| `www` → apex | 301 | Host consolidation OK |
| Trailing slash (`/hizmetler/`) | 308 → `/hizmetler` | Consistent no-slash policy |

---

## 2. Indexability — Pass

### Canonicals & meta robots (sampled)
| URL | Canonical | robots meta |
|-----|-----------|-------------|
| `/` | `https://724tesisatci.com` (self) | default index |
| `/hizmetler` | self | default index |
| `/hizmet-bolgeleri/kagithane` | self | default index |
| `/kagithane-dogalgaz-tesisati` | self | default index |
| `/blog` | self | default index |
| `/iletisim` | self | default index |
| `/hizmet-bolgeleri/kagithane/caglayan` | self | default index |
| `/admin` → login | none | `noindex, nofollow` |
| Non-HQ districts (e.g. `/hizmet-bolgeleri/sisli`) | self | **`noindex, follow`** |
| `/hizmet-bolgeleri/istanbul` | — | **`noindex, follow`** |

No accidental `noindex` on money pages. No `X-Robots-Tag` on public HTML.

### District indexing policy (visible in product + HTML)

**Allowlist (code):** `INDEXABLE_DISTRICT_ALLOWLIST = {"kagithane"}` in `data/mock/districtArrivalTimes.ts`.

Policy behavior confirmed live:
- **Indexable:** Kağıthane district, Kağıthane neighborhoods, Kağıthane `/{ilce}-{hizmet}` landings.
- **noindex, follow:** all other district pages + İstanbul city hub (still HTTP 200, crawlable, not sitemap’d).
- Sitemap filters `indexable !== false` for locations/neighborhoods.
- Ad landings use `noindex: true` in mock data; admin uses layout robots + header `X-Robots-Tag`.

This is intentional index-bloat control for a HQ-first local strategy—not a bug. Comment in code: new districts need unique local proof before allowlisting.

### Duplicate / thin risk
- Many non-HQ district URLs remain publicly reachable with near-template copy (~1k words) but correctly noindexed.
- Legacy vanity URLs 308 into those noindex pages (see Issues).

---

## 3. Security — Pass (with gaps)

| Control | Result |
|---------|--------|
| HTTPS | Enforced (HTTP redirects to HTTPS) |
| HSTS | `max-age=31536000; includeSubDomains; preload` |
| X-Content-Type-Options | `nosniff` |
| X-Frame-Options | `SAMEORIGIN` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | `camera=(), microphone=(), geolocation=()` |
| CSP | **Missing** |
| Mixed content | None found in homepage HTML |
| `X-Powered-By` | `Next.js` (info leak, low risk) |
| Server | Cloudflare |

Headers are set in `next.config.ts` `headers()`. Admin/API admin paths send `X-Robots-Tag: noindex, nofollow`.

---

## 4. URL Structure — Pass

- Clean, hyphenated Turkish slugs; logical hubs (`/hizmetler`, `/hizmet-bolgeleri/...`, root local landings).
- Apex preferred; trailing slashes stripped (308).
- Legacy long URLs mapped via permanent redirects in `next.config.ts`.
- No query-parameter content URLs observed on samples.
- Soft 404s return real `404` for unknown paths.

---

## 5. Mobile — Pass

- `viewport`: `width=device-width, initial-scale=1`.
- `html lang="tr"`.
- Responsive Next/Image `srcset`/`sizes` on logo + hero.
- Sticky header / tap CTAs present in SSR HTML (phone/WhatsApp patterns).
- Mobile-first indexing: site is SSR and mobile-ready from source.

---

## 6. Core Web Vitals (source inspection) — Pass / watch

**Positive**
- Hero image preloaded with `fetchPriority="high"`.
- Font preloads present; Material Symbols subset font preloaded.
- Next.js image optimization (`/_next/image`, WebP).
- CDN cache + prerender (`x-nextjs-prerender: 1`, Cloudflare HIT).
- Document images sampled with width/height (CLS-friendly).

**Risks (field metrics not measured here)**
- Homepage HTML is large (~177KB) with many `<script>` tags → **INP** risk under interaction.
- Icon font (`material-symbols`) can contribute to late icon paint / minor CLS if fallback metrics differ.
- Default OG/Twitter image is `/logo.webp` with `summary_large_image` (not a CWV metric, but poor social LCP for shares).

**Thresholds reminder:** LCP good &lt;2.5s · INP good &lt;200ms · CLS good &lt;0.1. Recommend CrUX/PSI field check next.

---

## 7. Structured Data — Pass (hub gap)

Homepage JSON-LD types observed: `Organization`, `Plumber`, `WebSite`, `FAQPage`, `ContactPoint`, `PostalAddress`, `OpeningHoursSpecification`, `Question`/`Answer` (~8 blocks).

| Page | JSON-LD |
|------|---------|
| `/` | Rich (LocalBusiness/Plumber + FAQ + WebSite) |
| `/hizmet-bolgeleri/kagithane` | Present (~6) |
| `/kagithane-dogalgaz-tesisati` | Present (~6) |
| `/blog`, `/iletisim` | Present |
| `/hizmetler` | **0 blocks** |

Non-indexable districts omit AreaService/FAQ schemas when `indexable === false` (correct).

---

## 8. JavaScript Rendering — Pass

- Next.js SSR/prerender: title, H1, main copy, links, and schema present in raw HTML (no SPA shell).
- Crawlers do not need JS execution for primary content.
- Client JS used for consent/analytics/interactivity only.

---

## 9. IndexNow — Fail

- `/.well-known/indexnow-key.txt` → **404**
- `/indexnow-key.txt` → **404**
- No IndexNow key or ping workflow detected.

`llms.txt` is present (`200`)—good companion for AI discovery, unrelated to IndexNow.

---

## Prioritized issues

### Critical
_None identified for core indexable URLs._

### High
1. **Legacy permanent redirects land on `noindex` district pages**  
   Example: `/mecidiyekoy-tesisatci-tamir-onarim-servisi` → `308` → `/hizmet-bolgeleri/sisli` (`noindex, follow`). Similar patterns for Beşiktaş vanity URLs. Equity and discovery flow into pages you explicitly do not want indexed.  
   **Fix:** Retarget redirects to indexable Kağıthane hubs/landings (or `/hizmet-bolgeleri`) unless/until those districts are allowlisted with unique content.

### Medium
2. **No Content-Security-Policy**  
   Security headers are otherwise strong; CSP is absent.  
   **Fix:** Ship `Content-Security-Policy-Report-Only` first, then enforce (Cloudflare or `next.config.ts`).

3. **Sitemap `lastmod` mostly static**  
   52/60 URLs share `2026-07-09T00:00:00.000Z` via `CONTENT_LAST_UPDATED`. Understates freshness for services/districts/neighborhoods.  
   **Fix:** Per-entity dates (blog already uses `updatedAt`); bump real content dates on publish.

4. **`/hizmetler` hub missing structured data**  
   Important commercial hub has self-canonical + indexable meta but **zero** JSON-LD.  
   **Fix:** Add `CollectionPage` / `ItemList` (services) + BreadcrumbList.

5. **IndexNow not implemented**  
   Bing/Yandex/Naver won’t get push notifications on URL changes.  
   **Fix:** Publish key file + ping on sitemap/content publish.

### Low
6. `robots.txt` does not `Disallow: /admin` (header/meta already noindex).  
7. `X-Powered-By: Next.js` exposed.  
8. Default social image is logo (`summary_large_image`)—replace with 1200×630 brand/service creative.  
9. Non-HQ district template pages remain crawlable (budget noise); optional `Disallow` or thinner crawl path if crawl waste appears in GSC.

---

## 3 quick wins

1. **Retarget legacy redirects** away from `noindex` districts to Kağıthane indexable URLs (or the hizmet-bölgeleri hub)—highest SEO impact, config-only.  
2. **Add JSON-LD to `/hizmetler`** (`ItemList` of services + breadcrumbs)—small code change, improves hub understanding.  
3. **Add IndexNow key + publish ping** (and/or refresh sitemap `lastmod` to real dates)—faster secondary-engine recrawl after content updates.

Honorable mention: CSP Report-Only header in the same `next.config.ts` headers block as HSTS.

---

## Category notes for parent audit

- **Crawlability / SSR:** Excellent; treat as strength.  
- **Index strategy:** HQ allowlist is deliberate and correctly wired (HTML `noindex` + sitemap filter). Do not “fix” by indexing all districts without unique local proof.  
- **Security posture:** Above average for SMB local sites; CSP is the main missing control.  
- **Next measurement:** PageSpeed/CrUX for LCP/INP/CLS field data (this report is source-based only).

---

## Evidence paths

- `seo-audits/2026-07-23/robots.txt`
- `seo-audits/2026-07-23/sitemap.xml`
- `seo-audits/2026-07-23/homepage.html`
- Live `curl -sI` on sampled URLs (2026-07-23)
- Code refs: `app/robots.ts`, `lib/services/sitemapService.ts`, `data/mock/districtArrivalTimes.ts` (`INDEXABLE_DISTRICT_ALLOWLIST`), `next.config.ts` headers/redirects, `lib/services/seoService.ts`
