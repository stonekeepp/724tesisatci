# 07 — Performance & Mobile Visual SEO

**Date:** 2026-07-23  
**Method:** HTML/resource inspection + Chrome headless mobile screenshots (390×844). No PageSpeed Insights API key / CrUX field data.  
**Pages:**  
- Homepage: `https://724tesisatci.com/`  
- Local landing: `https://724tesisatci.com/hizmet-bolgeleri/kagithane`

**Screenshots:**  
- `screenshots/homepage-mobile.png`  
- `screenshots/kagithane-mobile.png`

---

## Scores (lab estimate, not PSI)

| Page | Performance score | Confidence |
|------|-------------------|------------|
| Homepage | **74 / 100** | Medium (resource + HTML; no Lighthouse run) |
| Kağıthane local | **68 / 100** | Medium |
| **Combined audit** | **71 / 100** | — |

### Core Web Vitals (estimated)

| Metric | Homepage | Kağıthane | Notes |
|--------|----------|-----------|-------|
| **LCP** | Pass (likely ≤2.5s) | Pass if text LCP; risk if image LCP | Excellent TTFB; homepage hero preloaded + `fetchPriority=high` |
| **INP** | Risk / Needs Improvement | Risk | ~700KB+ JS (uncompressed) across main chunks |
| **CLS** | Pass-leaning | Pass-leaning | Fixed heights on heroes; cookie banner is `fixed` (overlay, not flow) |
| **TTFB** | Pass (~43–47ms) | Pass (~47ms) | Cloudflare + `x-nextjs-prerender: 1` + cache HIT |

> Field CrUX not available here. Validate with PageSpeed Insights / CrUX Vis when a key is available.

---

## Top issues (priority order)

1. **Heavy JS main-thread budget (INP)** — Homepage ships ~12 JS chunks; largest three alone ≈ **173KB + 173KB + 119KB** (plus polyfills ~113KB). Local plumbing pages do not need this much client JS for first interaction.
2. **Local hero not LCP-optimized** — `LocationHeroImage` uses `priority={false}` → HTML has `loading="lazy"` on `/images/hizmet-bolgeleri-hero.webp`. Raw asset **~215KB**; `w=1080` next/image ≈ **92KB**. Below-fold on mobile today (text-first), but desktop / layout changes can make this the LCP element with a delayed discover.
3. **Competing image preloads on homepage** — Head preloads both **logo.webp** (`SiteLogo` `priority`) and **home-hero.webp** (`fetchPriority="high"`). Logo steals early bandwidth from the true mobile LCP (hero is `order-first` on small screens).
4. **Cookie consent UI after hydration** — Banner (“Analitik çerez tercihi”) is client-only (`cookie-consent-title` absent from SSR HTML). Appears over content + sits above fixed mobile bottom nav (`bottom-20` / `z-[70]`). Low document CLS (fixed), but **covers hero CTAs / first viewport** until dismissed — mobile SEO / UX friction.
5. **Hero overlay cards clipped on mobile** — Homepage glass cards (`whitespace-nowrap`) sit `absolute bottom-4 right-4` and visually overflow/clip at ~390px width (see screenshot).
6. **next/image sometimes serves JPEG for WebP sources** — Several `/_next/image` variants returned `image/jpeg` (e.g. home-hero `w=750` ~28KB, `w=1080` ~47KB) depending on Accept; prefer consistent AVIF/WebP where supported.

---

## Homepage deep dive

### LCP candidate (mobile)

- Mobile layout puts the hero media **first** (`order-first lg:order-none`).
- Element: `next/image` → `/images/home-hero.webp` with `priority`, `fetchPriority="high"`, `fill`, container `h-[240px]` (sm 320 / lg 500) — **height reserved** (CLS-friendly).
- Preload present for home-hero srcset + Inter font + Material Symbols subset.
- Asset sizes (edge):
  - Raw WebP: **65,142 B**
  - `w=640` next/image: **~14KB** WebP
  - `w=750`: **~28KB** JPEG
- Document HTML: **~174KB** (large for a marketing page; still fast TTFB due to CDN/prerender).

**Verdict:** LCP setup is generally strong; main drag is dual preload (logo + hero) and JS weight after paint.

### Fonts

| Font | Delivery | Size | Notes |
|------|----------|------|-------|
| Inter (`next/font/google`) | Self-hosted `/_next/static/media/*.woff2`, preload, `display: swap` | **~48KB** | Variable `--font-inter` |
| Material Symbols Outlined | Local subset `/fonts/material-symbols-subset.woff2`, preload, `font-display: swap` | **~8.5KB** | Good subsetting; still blocks icon glyph paint until loaded |

No render-blocking Google Fonts CSS CDN observed. Swap can cause brief FOUT/icon swap → minor CLS risk on icon-heavy hero pills.

### gtag / consent gating

Visible and correctly gated for performance:

- Inline `AnalyticsHead`: `gtag("consent","default",{ analytics_storage:"denied", … wait_for_update:500 })`.
- Storage key: `724tesisatci-analytics-consent`.
- **No** `googletagmanager.com` / `gtag/js` in initial HTML.
- GA scripts load only after grant (`ConsentGatedGaScripts`, `strategy="lazyOnload"` + dynamic preconnect).
- Cookie dialog is client-rendered; screenshot confirms it on first visit (pending consent).

**Performance impact of GA when denied/pending:** near-zero third-party.  
**UX impact:** banner + sticky `MobileNav` stack obscure lower viewport.

### CLS risks

| Risk | Severity | Mitigation status |
|------|----------|-------------------|
| Hero `fill` image | Low | Parent fixed heights |
| Logo `w-auto` | Low | width/height attrs present |
| Font/icon swap | Low–Med | `display: swap` + subset |
| Cookie banner | Low CLS / High UX | `fixed` overlay — no flow shift, but covers content |
| Accordion `max-height` | Low | Below fold |
| Sticky header + bottom nav | Low | Reserved chrome |

### Mobile visual notes

- Hero image dominant above H1 — correct LCP priority for image SEO.
- Overlay trust chips clipped on the right at 390px.
- Consent banner dominates lower half; primary phone/WhatsApp bar still visible underneath.
- Dot-grid `.hero-bg` is CSS-only (cheap).

---

## Local landing: `/hizmet-bolgeleri/kagithane`

### LCP candidate (mobile)

- First viewport is **text-led** (badge + H1 + copy). Screenshot shows **no hero image** above the fold → LCP likely **H1 text** (favorable).
- Side/below image: `LocationHeroImage` → `/images/hizmet-bolgeleri-hero.webp` with **`priority={false}`** → SSR `loading="lazy"`, no high fetch priority.
- Container `h-[360px]` reserves space when the image section enters view.
- Raw hero **~215KB**; optimized `w=640` ~36KB JPEG, `w=1080` ~92KB JPEG.

**Verdict:** Mobile LCP OK today because of text-first layout; still fix lazy/priority for desktop LCP and scroll-into-view quality.

### Same stack as homepage

- Consent default denied; no GTM in HTML.
- Same Inter + Material Symbols preloads.
- Same fixed cookie banner + bottom nav pattern (covers CTAs).
- HTML **~191KB**; TTFB **~47ms**.

---

## Network / platform positives

- Cloudflare CDN, HSTS, solid security headers.
- `x-nextjs-cache: HIT`, prerender, `Cache-Control: max-age=7200`.
- HTML TTFB **&lt;50ms** (excellent).
- Static images `max-age=2592000`.
- Consent Mode v2-style defaults before any GA load.
- Homepage hero correctly marked high priority with explicit sizes.

---

## Prioritized recommendations

| # | Action | Expected impact | Effort |
|---|--------|-----------------|--------|
| 1 | Reduce client JS (audit large chunks `1255-*`, `4bd1b696-*`; defer non-critical client components) | **INP / TBT** | Med–High |
| 2 | Set `priority` (or `fetchPriority="high"`) on district/neighborhood `LocationHeroImage` when above-fold on `lg+`; keep lazy only when truly below-fold | **LCP** on local/desktop | Low |
| 3 | Drop `priority` on header logo **or** stop preloading it; keep only LCP hero as early image | **LCP** homepage | Low |
| 4 | Reserve / redesign mobile hero overlay cards (stack under image or hide on `sm`) so chips don’t clip | Visual mobile SEO | Low |
| 5 | SSR a compact consent placeholder or delay banner until idle without covering primary CTAs; keep GA gated | UX + perceived CLS | Low–Med |
| 6 | Ensure next/image negotiates WebP/AVIF (check `formats` / Accept); recompress `hizmet-bolgeleri-hero.webp` (~215KB raw) | LCP bytes | Low |
| 7 | Trim HTML payload (inline RSC/data) if feasible — 174–191KB HTML is heavy | Parse / FCP | Med |

---

## Asset appendix (measured 2026-07-23)

| Resource | Bytes | TTFB |
|----------|------:|-----:|
| HTML home | ~174,021 | ~0.043s |
| HTML kagithane | ~191,020 | ~0.047s |
| CSS `32bb0450….css` | 45,181 | ~0.045s |
| Inter woff2 | 48,432 | ~0.030s |
| Material Symbols subset | 8,564 | ~0.038s |
| home-hero raw webp | 65,142 | ~0.048s |
| home-hero `w=640` | 14,260 | ~0.044s |
| hizmet-bolgeleri-hero raw | 214,664 | ~0.042s |
| JS top chunk | 173,247 | ~0.070s |

---

## Method limits

- No PSI Lighthouse numeric scores or CrUX p75.
- Screenshots via Chrome headless (not full DevTools performance trace).
- JPEG vs WebP from curl Accept may differ from real Chrome negotiation.

**Next step for hard numbers:** run PageSpeed Insights (mobile) on both URLs once an API key is available; compare field CrUX if the origin has enough traffic.
