# Sitemap Analysis — 724tesisatci.com

**Date:** 2026-07-23  
**Source:** `seo-audits/2026-07-23/sitemap.xml` (live fetch `200`)  
**robots.txt:** `Sitemap: https://724tesisatci.com/sitemap.xml`  
**Generator:** Next.js `app/sitemap.ts` → `lib/services/sitemapService.ts`

---

## Score: **78 / 100**

Valid, complete coverage of intentional indexable URLs with correct exclusions for noindex ad/city hubs. Score held back by location-page quality gate (30 pages), near-identical `lastmod`, and blog↔landing slug cannibalization risk—not by missing money pages.

| Check | Severity | Result |
|-------|----------|--------|
| Valid XML urlset | Critical | **Pass** |
| ≤50k URLs / file | Critical | **Pass** (60) |
| HTTPS only | High | **Pass** |
| Sample URL HTTP 200 | High | **Pass** (9/9 sampled) |
| Noindex URLs in sitemap | High | **Pass** (ad landings + İstanbul hub excluded) |
| Redirected URLs in sitemap | Medium | **Pass** (no redirects on sample) |
| robots.txt sitemap ref | Medium | **Pass** |
| Location quality gate | Warning | **Warn** (30 location-intent pages) |
| Accurate `lastmod` | Low | **Fail** (86.7% identical) |
| `priority` / `changefreq` | Info | Present (ignored by Google) |

---

## Inventory (60 URLs)

| Bucket | Count | Notes |
|--------|------:|-------|
| Homepage | 1 | `/` |
| Static / hubs | 7 | hizmetler, hizmet-bolgeleri, blog, sss, hakkimizda, iletisim, legal×2 |
| Extra hub | 1 | `/hizmet-bolgeleri/kagithane-mahalleleri` |
| Service pages | 12 | `/hizmetler/[slug]` |
| Local service landings | 10 | `/kagithane-*` |
| District | 1 | `/hizmet-bolgeleri/kagithane` |
| Neighborhoods | 19 | `/hizmet-bolgeleri/kagithane/[mahalle]` |
| Blog posts | 8 | `/blog/[slug]` |

**Correctly excluded (not over-indexing):**
- Ad PPC landings (`/su-kacagi-tespiti`, `/tikaniklik-acma`, `/pimas-acma`, `/acil-tesisatci`) — `noindex,follow`, absent from sitemap
- `/hizmet-bolgeleri/istanbul` — `indexable: false` / meta `noindex,follow`, absent from sitemap
- Non-allowlisted districts (only Kağıthane in `INDEXABLE_DISTRICT_ALLOWLIST`)
- `/admin/*`

---

## Quality gates — location pages

| Gate | Threshold | Count used | Status |
|------|-----------|------------|--------|
| Warning | 30+ location pages | **30** (19 mahalle + 1 ilçe + 10 `/kagithane-*` landings) | **Triggered** |
| Hard stop | 50+ | 30 | Clear |

**Implication:** At the warning threshold, Google doorway risk rises if neighborhood pages are mostly name-swapped. Spot-check `/hizmet-bolgeleri/kagithane/celiktepe`: ~892 visible words, neighborhood-specific title/H1 — **above thin-content floor for this sample**. Still require ≥60% unique body across all 19 mahalle pages before adding more districts/neighborhoods.

**Do not** expand to remaining İstanbul ilçeleri in the sitemap until unique local proof (NAP/arrival, cases, photos, FAQs) exists per district.

---

## Missing vs extra

### Missing important URLs
None for the current allowlisted IA. Core conversion paths are present: home, 12 services, Kağıthane hub, 10 local landings, contact, FAQ.

Optional (not required):
- Image sitemap — low priority (few indexable content images beyond hero)
- News/video sitemap — N/A

### Extra / low-value in sitemap
- `/gizlilik-politikasi`, `/cerez-politikasi` — fine to keep; low crawl budget impact at 60 URLs
- Blog posts that mirror landing slugs (see cannibalization)

### Crawl vs sitemap gaps
- Live `/hizmet-bolgeleri/istanbul` is crawlable (`200`) but correctly **not** in sitemap (noindex)
- Trailing-slash variants resolve via Next (`308`) and are not duplicated in sitemap

---

## Over-indexing / cannibalization risk

| Risk | Severity | Detail |
|------|----------|--------|
| Mahalle template scale | Medium | 19 indexable neighborhood URLs at gate warning |
| Local landing × blog slug clash | Medium | e.g. `/kagithane-su-kacagi-tespiti` vs `/blog/kagithane-su-kacagi-tespiti`; same for tıkanıklık |
| Service hub × local landing | Low–Med | `/hizmetler/su-kacagi-tespit-ve-onarim` vs `/kagithane-su-kacagi-tespiti` — intentional geo split if titles/internal links stay clear |
| Legal pages indexed | Low | Negligible at this size |

---

## `lastmod` / deprecated tags

- Unique `lastmod` values: `2026-07-09T00:00:00.000Z` (majority), `…T09:00:00.000Z` (most blog), `2026-07-22T10:00:00.000Z` (1 post)
- Driven by `CONTENT_LAST_UPDATED` constant in `sitemapService.ts` for non-blog URLs
- `<priority>` and `<changefreq>` emitted on every URL — **ignored by Google**; safe to remove for cleaner XML

---

## Sample HTTP status (curl `-I`, no follow)

| URL | Status |
|-----|--------|
| `/` | 200 |
| `/hizmetler` | 200 |
| `/hizmetler/su-tesisati` | 200 |
| `/hizmet-bolgeleri/kagithane` | 200 |
| `/hizmet-bolgeleri/kagithane/celiktepe` | 200 |
| `/kagithane-su-kacagi-tespiti` | 200 |
| `/blog/su-kacagi-belirtileri` | 200 |
| `/gizlilik-politikasi` | 200 |
| `/hizmet-bolgeleri/istanbul` | 200 (noindex; not in sitemap) |

---

## Top issues

1. **Location gate WARNING at 30 pages** — freeze district expansion; audit uniqueness of all 19 mahalle pages.
2. **Blog vs local-landing slug overlap** — pick one primary URL per money keyword; demote or retarget blog titles/canonicals.
3. **Stale bulk `lastmod`** — wire real `updatedAt` (or file mtime) so Google sees meaningful change signals.
4. **Remove `priority`/`changefreq`** (hygiene only).

---

## Recommendations (priority)

1. Keep allowlist discipline; do not sitemap-index more ilçeler until content QA passes.
2. Resolve cannibalization: service-intent → `/kagithane-*` or `/hizmetler/...`; informational → `/blog/...` with distinct titles.
3. Per-URL `lastModified` from content sources (already done for blog `updatedAt`).
4. Re-crawl GSC sitemap after next content ship; confirm 60 discovered / 0 excluded errors.
