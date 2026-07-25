# 01 — Technical SEO (2026-07-24 post-health)

**Target:** https://724tesisatci.com  
**Business:** Local service — Kağıthane plumbing (Next.js SSR / RSC)  
**Method:** Live fetch (robots, sitemap, headers, IndexNow key, vanity redirects, sample HTML/JSON-LD)  
**Artifacts:** `seo-audits/2026-07-24-post-health/`  
**Compared to:** [`../2026-07-24/01-technical.md`](../2026-07-24/01-technical.md) (Technical **93**)

## Score: **94 / 100** (+1 vs pre-health 93)

| Category | Status | Notes |
|----------|--------|-------|
| 1. Crawlability | **Pass** | robots Allow; AI bots allowed; Sitemap linked |
| 2. Indexability | **Pass** | Money pages indexable; thin districts `noindex, follow`; sitemap Kağıthane-only |
| 3. Security | **Pass+** | HSTS preload + X-CTO + X-Frame + Referrer-Policy + Permissions-Policy + **CSP Report-Only** |
| 4. URL structure | **Pass** | Clean hyphens; vanity long-paths → Kağıthane hub (308); www/http → apex HTTPS |
| 5. Mobile | **Pass** | Viewport present; responsive layout in SSR HTML |
| 6. Core Web Vitals (HTML potential) | **Watch** | Hero `fetchpriority=high` + image preload; HTML ~187KB + Next chunks → INP watch |
| 7. Structured data (detect) | **Pass** | SSR JSON-LD: Organization, Plumber, WebSite, FAQPage; **`sameAs` live** |
| 8. JavaScript rendering | **Pass** | Next.js **SSR/RSC** — title, H1, canonical, JSON-LD in raw HTML |
| 9. IndexNow | **Pass** | Key file 200; body matches key; `POST /api/indexnow` present (GET → 405) |

---

## Fix verification (live)

| Check | Result | Evidence |
|-------|--------|----------|
| `robots.txt` | **PASS** | `Allow: /` for `*` + GPTBot, ChatGPT-User, Google-Extended, ClaudeBot, PerplexityBot, etc.; `Sitemap: https://724tesisatci.com/sitemap.xml` |
| `sitemap.xml` | **PASS** | **60** `<url>` entries; no non-Kağıthane district URLs |
| Sitemap lastmods | **PASS (improved)** | `2026-07-24T00:00:00.000Z` ×52, `2026-07-24T10:00:00.000Z` ×7, `2026-07-22T10:00:00.000Z` ×1 — prior stale `2026-07-09` entries **gone** |
| IndexNow `/{key}.txt` | **PASS** | `https://724tesisatci.com/e8c4a1b2d7f94e6c9a0b1c2d3e4f5a6b.txt` → **200**, body `e8c4a1b2d7f94e6c9a0b1c2d3e4f5a6b`, `text/plain` |
| HSTS | **PASS** | `max-age=31536000; includeSubDomains; preload` |
| X-Content-Type-Options | **PASS** | `nosniff` |
| X-Frame-Options | **PASS** | `SAMEORIGIN` |
| Referrer-Policy | **PASS** | `strict-origin-when-cross-origin` |
| Permissions-Policy | **PASS** | `camera=(), microphone=(), geolocation=()` |
| CSP Report-Only | **PASS** | Present (enforce still deferred) |
| Canonicals | **PASS** | Home `https://724tesisatci.com`; Kağıthane hub self-canonical; districts self-canonical |
| noindex thin districts | **PASS** | `/hizmet-bolgeleri/sisli|besiktas|sariyer|beyoglu|uskudar` → `noindex, follow`; Kağıthane + mahalle **no** robots noindex |
| Vanity → Kağıthane | **PASS** | `/besiktas|mecidiyekoy|levent|bebek-tesisatci-tamir-onarim-servisi` → **308** `Location: /hizmet-bolgeleri/kagithane` |
| SSR vs CSR | **PASS** | Prerender/`x-nextjs-prerender: 1`; H1 + JSON-LD in initial HTML; RSC payloads (not CSR SPA shell) |
| `sameAs` in HTML JSON-LD | **PASS (new vs pre-health fail)** | Organization + Plumber include `sameAs: ["https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8"]` |
| `googleBusinessProfileUrl` property in JSON-LD | **Not emitted** | Setting exists in CMS/mock and is **folded into `sameAs`** via `buildSameAs()` — no separate Schema.org key (expected) |

---

## Category detail

### 1. Crawlability — Pass

- robots.txt does not block CSS/JS or money routes.
- AI crawlers explicitly **Allowed** (training/citation visibility intentional).
- Sitemap referenced and reachable.
- Admin routes carry `X-Robots-Tag: noindex, nofollow` (config).

### 2. Indexability — Pass

- Kağıthane hub + mahalle pages: indexable (no meta robots), self-canonical.
- Thin non-Kağıthane district templates: `noindex, follow` in SSR `<head>` — correct allowlist strategy.
- Sitemap excludes thin districts (crawl budget friendly).
- No conflicting noindex on homepage / hizmetler / iletisim samples.

### 3. Security — Pass+

All requested headers live on homepage response:

| Header | Value |
|--------|-------|
| Strict-Transport-Security | `max-age=31536000; includeSubDomains; preload` |
| X-Content-Type-Options | `nosniff` |
| X-Frame-Options | `SAMEORIGIN` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | `camera=(), microphone=(), geolocation=()` |
| Content-Security-Policy-Report-Only | default-src 'self'; scripts allow GTM/GA + unsafe-inline/eval; connect includes `api.indexnow.org` |
| Content-Security-Policy (enforce) | **Absent** (intentional report-only stage) |

HTTPS apex enforced: `http://` → 301 HTTPS; `www` → 301 apex.

### 4. URL structure — Pass

- Descriptive Turkish slugs, hyphens, shallow hierarchy.
- Configured vanity URLs (legacy long tails) **308** to Kağıthane hub — single hop.
- Note: short paths like `/hizmet-bolgeleri/mecidiyekoy` → **404** (not in redirect table); long vanity paths are the supported legacy URLs. Not a regression vs `next.config.ts`.

### 5. Mobile — Pass

- `<meta name="viewport" …>` present.
- Sticky header / responsive classes in SSR markup; mobile-first indexing ready.

### 6. Core Web Vitals potential (HTML/source) — Watch

**Positive LCP signals**
- Hero image: `fetchpriority="high"` + `<link rel="preload" as="image" … home-hero.webp>`.
- Fonts preloaded (woff2).
- Next/Image WebP pipeline.

**Risks (lab/HTML, not field CrUX)**
- Homepage HTML **~186–187 KB** (was ~177 KB pre-health) — large SSR document.
- **12** `/_next/static/chunks/*.js` script tags (+ RSC streaming) → main-thread / **INP** watch on mobile.
- Header logo still `loading="lazy"` (not LCP element; hero is).

Thresholds reminder: LCP good &lt;2.5s · INP good &lt;200ms · CLS good &lt;0.1 (field 75th pct). No CrUX in this pass.

### 7. Structured data (detection only) — Pass

Homepage SSR JSON-LD (4 blocks):

1. `Organization` (`@id` `#business`) + geo + **`sameAs`** (Maps short link)
2. `Plumber` (same `@id`) + hours + areaServed + **`sameAs`**
3. `WebSite`
4. `FAQPage`

**GBP note:** `googleBusinessProfileUrl` from site settings is mapped into `sameAs` only. The literal key `googleBusinessProfileUrl` does **not** appear in HTML JSON-LD (Schema.org has no standard property by that name). Pre-health `gbp_sameAs: false` is **resolved** for entity linking via `sameAs`.

### 8. JavaScript rendering — Pass

- Framework: Next.js App Router with **RSC** (`self.__next_f` / flight payloads).
- Critical SEO in **raw HTML**: title, canonical, H1 (“Kağıthane Merkezli 7/24 Tesisatçı”), meta, JSON-LD.
- `x-nextjs-prerender: 1` / cache HIT — not a client-only SPA. Googlebot sees content without needing full hydration for indexability.

### 9. IndexNow — Pass

| Item | Status |
|------|--------|
| Key hosting `/{key}.txt` | 200, body == key |
| Submit API | `GET /api/indexnow` → **405** (method not allowed) ⇒ endpoint exists; use **POST** |
| CSP connect-src | Allows `https://api.indexnow.org` |

Recommend: ping after sitemap/content deploys via `POST /api/indexnow` with `{ "sitemap": true }` (ops, not a live failure).

---

## Issues (prioritized)

### Critical
*None.*

### High
*None.*

### Medium

1. **Homepage JS / document weight → INP risk**  
   ~187 KB HTML + multiple Next chunks and RSC streaming. Monitor field INP; defer non-critical client islands; keep third-party (GTM) constrained.

2. **CSP still Report-Only**  
   Security posture is strong, but browsers do not enforce the policy. After report noise is clean, promote to enforcing `Content-Security-Policy` (watch `'unsafe-inline'` / `'unsafe-eval'` + GTM).

### Low

3. **`googleBusinessProfileUrl` not a JSON-LD key**  
   Informational only — value correctly surfaces as `sameAs`. Optional: add more profile URLs (Google full Maps place URL, social) to `sameAs` array if available.

4. **Header logo `loading="lazy"`**  
   Harmless for LCP (hero prioritized). Optional: leave as-is or eager-load if CLS on sticky header appears in lab.

5. **Thin district 200 + noindex shells**  
   Intentional. If external links accumulate, consider 301 → Kağıthane hub or soft-404 to save crawl — not urgent while unlinked/sitemap-excluded.

---

## Score delta vs pre-health (93)

| Change | Impact |
|--------|--------|
| Sitemap lastmods refreshed (no more `2026-07-09` cluster) | **+1** |
| Live `sameAs` (Maps) on Organization/Plumber | Confirmed health fix (schema/local signal; supports floor) |
| Security / IndexNow / vanity 308 / district noindex | Unchanged Pass |
| HTML weight slight increase (~177→187 KB) | Neutral / watch |

**Net Technical: 94.** Ceiling to 96–97 would need CSP enforce + measurable JS/INP trim; 98+ needs field CWV green + minimal residual headers/ops polish.

---

## Top 5 issues (summary)

1. **Medium** — Large SSR HTML + Next.js chunks → INP watch  
2. **Medium** — CSP Report-Only (not enforced)  
3. **Low** — GBP URL only via `sameAs` (no literal `googleBusinessProfileUrl` key — expected)  
4. **Low** — Header logo lazy-loaded (hero LCP OK)  
5. **Low** — Thin noindex district shells still HTTP 200  

---

## Recommendations (implementation)

1. Keep IndexNow key file; **POST** sitemap ping after each content deploy.  
2. Watch CrUX/PSI INP; split or defer non-LCP client JS.  
3. After 1–2 weeks of clean CSP reports, flip Report-Only → enforce.  
4. Do **not** expand indexable thin districts; keep allowlist + sitemap Kağıthane-only.  
5. Optionally enrich `sameAs` with a stable Google Maps place URL / review profile if distinct from the short link.

---

*Generated: 2026-07-24 (live production fetch).*
