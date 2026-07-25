# 01 — Technical SEO (2026-07-25 local)

**Target:** http://localhost:3000  
**Business:** Local service — Kağıthane plumbing (Next.js App Router SSR / RSC)  
**Method:** Live localhost fetch (robots, sitemap, response headers, IndexNow key, vanity redirects, sample HTML/JSON-LD)  
**Artifacts:** `seo-audits/2026-07-25-local/` (see also `signals.json`)  
**Compared to:** [`../2026-07-24-post-health/01-technical.md`](../2026-07-24-post-health/01-technical.md) (Technical **94**)

## Score: **88 / 100** (−6 vs production post-health 94)

| Category | Status | Notes |
|----------|--------|-------|
| 1. Crawlability | **Pass*** | robots Allow + AI bots; Sitemap linked — **`<loc>` / Sitemap: host = localhost** |
| 2. Indexability | **Pass*** | Self-canonicals; thin districts `noindex, follow` — **canonical host = localhost** |
| 3. Security | **Pass (app)** | next.config headers present on responses; **no Cloudflare edge** (no real HTTPS/www/http apex) |
| 4. URL structure | **Pass** | Clean hyphens; vanity long-paths → Kağıthane (308); trailing-slash strip 308 |
| 5. Mobile | **Pass** | Viewport present; responsive SSR markup |
| 6. Core Web Vitals (HTML potential) | **Watch** | Hero preload + `fetchPriority="high"`; **dev HTML ~288 KB** (lab only; heavier than prod ~187 KB) |
| 7. Structured data (detect) | **Pass** | SSR JSON-LD: Organization, Plumber, WebSite, FAQPage; **GBP `sameAs` live** |
| 8. JavaScript rendering | **Pass** | Next.js **SSR/RSC** — title, H1, canonical, JSON-LD in raw HTML (not CSR SPA) |
| 9. IndexNow | **Pass** | Key file 200; body matches key; `GET /api/indexnow` → 405 |

\*Pass for local crawlability/indexability of the running app; **fail as production-ready absolute URL hygiene** until `NEXT_PUBLIC_SITE_URL=https://724tesisatci.com`.

---

## Scope & limitations (local vs production)

| Factor | Local (this audit) | Production (post-health 94) |
|--------|--------------------|-----------------------------|
| Host | `http://localhost:3000` | `https://724tesisatci.com` |
| Edge / CDN | **None** (Next only) | Cloudflare (cache, apex/www HTTPS redirects) |
| Absolute URLs | `NEXT_PUBLIC_SITE_URL` unset → **localhost** in robots Sitemap, sitemap `<loc>`, canonical, og:url, JSON-LD `@id`/`url` | Production host |
| Cache-Control (HTML) | `no-store, must-revalidate` (dev) | CDN / prerender cache headers |
| Prerender hint | No `x-nextjs-prerender` observed | `x-nextjs-prerender: 1` / cache HIT |
| CrUX / PSI field | **N/A** | Lab/field separately |
| Security headers | Served from **next.config.ts** (same set) | Same app headers + CF TLS |

This is a **lab / local** audit. Scores for CF-only behaviors (apex HTTPS, www→non-www, edge cache) are not applicable; deductions below are for **env absolute-URL hygiene** and **dev-mode document weight**, not missing next.config security features.

---

## Live verification checklist

| Check | Result | Evidence |
|-------|--------|----------|
| `robots.txt` | **PASS** | `Allow: /` for `*` + GPTBot, ChatGPT-User, Google-Extended, anthropic-ai, ClaudeBot, PerplexityBot, Applebot-Extended |
| robots Sitemap line | **LOCAL HOST** | `Sitemap: http://localhost:3000/sitemap.xml` |
| `sitemap.xml` | **PASS (count)** | **60** `<url>` entries; hosts all `localhost` |
| Sitemap lastmods | **PASS** | `2026-07-24T00:00:00.000Z` ×52, `2026-07-24T10:00:00.000Z` ×7, `2026-07-22T10:00:00.000Z` ×1 |
| IndexNow `/{key}.txt` | **PASS** | `/e8c4a1b2d7f94e6c9a0b1c2d3e4f5a6b.txt` → **200**, `text/plain`, body `e8c4a1b2d7f94e6c9a0b1c2d3e4f5a6b` |
| HSTS | **PRESENT (config)** | `max-age=31536000; includeSubDomains; preload` (on HTTP localhost — not meaningful until HTTPS) |
| X-Content-Type-Options | **PASS** | `nosniff` |
| X-Frame-Options | **PASS** | `SAMEORIGIN` |
| Referrer-Policy | **PASS** | `strict-origin-when-cross-origin` |
| Permissions-Policy | **PASS** | `camera=(), microphone=(), geolocation=()` |
| CSP Report-Only | **PASS** | Present (enforce still deferred); `connect-src` includes `api.indexnow.org` |
| CSP enforce | **Absent** | Same as prod |
| Canonicals | **SELF + LOCAL HOST** | Home `http://localhost:3000`; Kağıthane hub self-canonical on localhost |
| noindex thin districts | **PASS** | `/hizmet-bolgeleri/sisli`, `/besiktas` → meta `noindex, follow` |
| Vanity → Kağıthane | **PASS** | `/besiktas|mecidiyekoy|levent|bebek-tesisatci-tamir-onarim-servisi` → **308** `/hizmet-bolgeleri/kagithane`; Seyrantepe → mahalle path |
| Trailing slash | **PASS** | `/hizmetler/` → **308** `/hizmetler` |
| Admin X-Robots | **PASS** | `/admin` → 307 `/admin/login` + `X-Robots-Tag: noindex, nofollow` |
| SSR vs CSR | **PASS** | H1 + JSON-LD + canonical in initial HTML; `self.__next_f` RSC flight (not empty SPA shell) |
| `sameAs` (GBP) | **PASS** | Organization + Plumber include `sameAs: ["https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8"]` |
| `llms.txt` | **PASS** | 200, text/plain (~2.1 KB) |
| IndexNow API | **PASS** | `GET /api/indexnow` → **405** (endpoint exists; POST expected) |

---

## Category detail

### 1. Crawlability — Pass* (localhost Sitemap host)

- robots.txt does not block CSS/JS or money routes.
- AI crawlers explicitly **Allowed** (training/citation visibility intentional).
- Sitemap referenced and reachable with **60** URLs (matches prod count).
- Admin routes carry `X-Robots-Tag: noindex, nofollow` (next.config).
- **Deploy gate:** without `NEXT_PUBLIC_SITE_URL`, a production build would ship localhost absolute URLs in robots + sitemap — treat as **High** deploy risk, not a local-runtime bug.

### 2. Indexability — Pass* (localhost canonicals)

- Homepage, Kağıthane hub, landings, hizmetler, iletişim: indexable (no meta robots), self-canonical on localhost.
- Thin non-Kağıthane district templates: `noindex, follow` in SSR `<head>` — correct allowlist strategy.
- Sitemap URL count 60 (Kağıthane-focused set); thin districts not relied on for index discovery.
- No conflicting noindex on money samples.
- JSON-LD entity URLs/`@id` also use `http://localhost:3000/#business` — expected locally; must be production host in deploy.

### 3. Security — Pass (app headers); CF edge N/A

Headers from `next.config.ts` observed on homepage and static key file:

| Header | Value |
|--------|-------|
| Strict-Transport-Security | `max-age=31536000; includeSubDomains; preload` |
| X-Content-Type-Options | `nosniff` |
| X-Frame-Options | `SAMEORIGIN` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | `camera=(), microphone=(), geolocation=()` |
| Content-Security-Policy-Report-Only | default-src 'self'; GTM/GA + unsafe-inline/eval; connect includes `api.indexnow.org` |
| Content-Security-Policy (enforce) | **Absent** (intentional report-only stage) |
| COOP / COEP | Absent (same as prior audits; optional harden) |

**Local gap vs prod:** no Cloudflare TLS termination, no live `http→https` or `www→apex` chain to verify here. HSTS on plain HTTP localhost is config-present only.

### 4. URL structure — Pass

- Descriptive Turkish slugs, hyphens, shallow hierarchy.
- Configured vanity URLs (legacy long tails) **308** to Kağıthane hub / Seyrantepe mahalle — single hop.
- Trailing-slash redirect `/:path+/` → `/:path+` **308**.
- Short paths like `/hizmet-bolgeleri/mecidiyekoy` are not in the vanity table (same as prod note).

### 5. Mobile — Pass

- `<meta name="viewport" content="width=device-width, initial-scale=1">` present.
- Responsive classes / sticky chrome in SSR markup; mobile-first indexing ready once deployed.

### 6. Core Web Vitals potential (HTML/source) — Watch (lab only)

**Positive LCP signals (local)**
- Hero: `fetchPriority="high"` on home-hero `<img>`; `<link rel="preload" as="image" … home-hero.webp>` with `imageSrcSet`.
- Font preload: `/fonts/material-symbols-subset.woff2`.
- Next/Image WebP pipeline (`formats: ["image/webp"]` in config).

**Risks (local lab — not field CrUX)**
- Homepage HTML **~288 KB** UTF-8 (prod post-health ~186–187 KB) — **next dev / RSC payload inflation**; do not treat as prod regression.
- Multiple `/_next/static/chunks/*.js` + RSC streaming → **INP** watch on mobile (same architectural watch as prod).
- HTML `Cache-Control: no-store` in dev — expected; not a prod caching failure.

Thresholds: LCP good &lt;2.5s · INP good &lt;200ms · CLS good &lt;0.1 (field 75th). **No CrUX/PSI** in this pass.

### 7. Structured data (detection only) — Pass

Homepage SSR JSON-LD (**4** blocks):

1. `Organization` (`@id` `#business`) + geo + **`sameAs`** (Maps short link)
2. `Plumber` (same `@id`) + hours/areaServed + **`sameAs`**
3. `WebSite`
4. `FAQPage`

**GBP note:** `googleBusinessProfileUrl` from settings is folded into `sameAs` via `buildSameAs()` — no separate Schema.org property (expected). Live value: `https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8`.

### 8. JavaScript rendering — Pass

- Framework: Next.js App Router with **RSC** (`self.__next_f` / flight payloads).
- Critical SEO in **raw HTML**: title (“Kağıthane Tesisatçı | 7/24 Su Tesisatı, Tıkanıklık”), canonical, H1 (“Kağıthane Merkezli…7/24 Tesisatçı”), meta, JSON-LD.
- Not a client-only SPA shell — Googlebot can index without full hydration for primary content.
- Dev lacks prod prerender cache headers; indexability of SSR content still holds.

### 9. IndexNow — Pass

| Item | Status |
|------|--------|
| Key hosting `/{key}.txt` | 200, body == key, `text/plain` |
| Submit API | `GET /api/indexnow` → **405** ⇒ endpoint exists; use **POST** |
| CSP connect-src | Allows `https://api.indexnow.org` |

Recommend: ping after sitemap/content deploys via `POST /api/indexnow` (ops).

---

## Issues (prioritized)

### Critical
*None for local runtime.*

### High

1. **Deploy absolute URL hygiene**  
   With unset `NEXT_PUBLIC_SITE_URL`, robots Sitemap line, all sitemap `<loc>`, link canonicals, og:url, and JSON-LD `url`/`@id` resolve to `http://localhost:3000`. **Must set** `NEXT_PUBLIC_SITE_URL=https://724tesisatci.com` before any production build/deploy.

### Medium

2. **CSP still Report-Only**  
   Same as prod — browsers do not enforce. Promote after clean report window.

3. **SSR/document + JS weight → INP watch**  
   Architectural (Next chunks + RSC). Local HTML larger than prod due to **dev**; validate weight on a production build, not `next dev`.

### Low

4. **No Cloudflare edge in this environment**  
   Cannot verify apex HTTPS / www redirects / edge cache here — expect those only on live host.

5. **`googleBusinessProfileUrl` not a JSON-LD key**  
   Informational — value correctly surfaces as `sameAs`.

6. **Thin district 200 + noindex shells**  
   Intentional allowlist; sitemap-excluded.

7. **HSTS on HTTP localhost**  
   Header present from config; meaningful only behind HTTPS (prod).

---

## Score delta vs production post-health (94)

| Change | Impact |
|--------|--------|
| Sitemap / robots / canonical / JSON-LD hosts = localhost | **−4** (deploy readiness; expected when env unset) |
| No CF edge HTTPS/www verification | **−1** (environment limitation) |
| Dev HTML ~288 KB + no prerender cache (lab noise) | **−1** (lab-only; not scored as prod regression) |
| Security headers from next.config | Unchanged Pass (parity with prod app layer) |
| IndexNow key + API 405 | Unchanged Pass |
| Vanity 308 + district noindex + GBP `sameAs` | Unchanged Pass |
| SSR/RSC critical SEO in HTML | Unchanged Pass |

**Net Technical (local): 88.**  
Re-score toward **94** on a production build with `NEXT_PUBLIC_SITE_URL` set and/or live origin (CF edge behaviors restored in the score model).

---

## Top 5 issues (summary)

1. **High (deploy)** — Set `NEXT_PUBLIC_SITE_URL` so sitemap/canonical/robots/JSON-LD never ship localhost  
2. **Medium** — CSP Report-Only (not enforced)  
3. **Medium** — JS / SSR weight → INP watch (confirm on prod build, not `next dev`)  
4. **Low** — CF edge behaviors not testable locally  
5. **Low** — Thin noindex district shells still HTTP 200  

---

## Recommendations (implementation)

1. **Deploy gate:** `NEXT_PUBLIC_SITE_URL=https://724tesisatci.com` on every production build; smoke-check robots + first sitemap `<loc>` + home canonical after deploy.  
2. Keep IndexNow key file; **POST** sitemap ping after content deploys.  
3. After clean CSP reports, flip Report-Only → enforce.  
4. Measure CWV on **production** (or `next start` standalone), not `next dev` HTML size.  
5. Do **not** expand indexable thin districts; keep allowlist + Kağıthane-focused sitemap.

---

## Pass / fail snapshot

| Check | Result |
|-------|--------|
| HTTP 200 SSR homepage | **PASS** |
| robots.txt Allow + AI bots | **PASS** |
| sitemap.xml 60 URLs | **PASS** (count) |
| Sitemap `<loc>` host | **FAIL for prod** — `http://localhost:3000/...` |
| Canonical host | **FAIL for prod** — localhost |
| IndexNow key file | **PASS** |
| HSTS / X-CTO / XFO / Referrer / Permissions | **PASS** (next.config) |
| CSP Report-Only | **PASS** |
| GBP `sameAs` in JSON-LD | **PASS** |
| Vanity redirects | **PASS** (308) |

---

*Generated: 2026-07-25 (live fetch http://localhost:3000). Lab-only — no Cloudflare edge, no field CrUX.*
