# 07 — Performance lab (2026-07-25 local)

**URL:** http://localhost:3000  
**Combined score: 77 / 100** (prior prod post-health: 77)  
**Method:** HTML/source heuristics + code review only. **PSI / CrUX / PageSpeed not run** (localhost; no lab API).

## Environment signals

| Signal | Evidence |
|--------|----------|
| Next.js App Router | `X-Powered-By: Next.js` |
| Dev/local cache | `Cache-Control: no-store, must-revalidate` — no Cloudflare HIT (unlike prod) |
| Security headers (local) | HSTS, `X-Content-Type-Options`, CSP-Report-Only present on homepage |

## Fix verification (code + localhost HTML)

| Item | Result |
|------|--------|
| `HeaderNav` `next/dynamic` (`ssr: true`) | **PASS** — `components/layout/Header.tsx`; HTML streams slot **`S:1`** (`<nav class="hidden lg:flex…">`) via `$RC("B:1","S:1")` |
| `FooterNavSections` `next/dynamic` (`ssr: true`) | **PASS** — `components/layout/Footer.tsx`; HTML streams **`S:2`** (Kağıthane Hizmetleri accordion / footer columns) via `$RC("B:2","S:2")` |
| `HeaderMobileMenu` dynamic | **PASS** — deferred mobile chrome in `Header.tsx` |
| Logo `priority={false}` / `loading="lazy"` | **PASS** — `SiteLogo.tsx`; homepage `<img … logo.webp … loading="lazy">` |
| Home LCP hero early discoverability | **PASS** — `<link rel="preload" as="image" … home-hero.webp … fetchPriority="high">` |
| Polyfills | **PASS** — `polyfills.js` with `noModule` |
| Script budget (home) | **Info** — ~6 `<script src>` (webpack, main-app, layout, page, internals, polyfills); Material Symbols present; GTM not in raw SSR HTML |

## Heuristic CWV notes

| Metric | Heuristic read |
|--------|----------------|
| LCP | Favorable: hero preload + high fetch priority; logo deprioritized |
| CLS | Favorable: fixed header heights (`h-20` / `md:h-[5.5rem]`); sized logo dims |
| INP / TBT | Residual risk: multi-chunk home + Material Symbols; consent/GA path hydrates client-side |
| FCP | Local `no-store` — no CF edge HIT; prod still expected better TTFB on HIT |

## Limitations (this audit)

- No PageSpeed Insights / Lighthouse lab numbers.
- No CrUX field data on localhost.
- Chunk hashes differ from prod; dynamic-import **behavior** confirmed via streaming slots + source.

## Residual / backlog

1. Field CrUX / PSI against **https://724tesisatci.com** when quota available.
2. Further main-thread / chunk reduction beyond nav/footer split.
3. Cookie banner vs sticky call bar tap-target check on mobile (a11y `role="region"` remains code-side).

## Score rationale

Parity with prior prod **77**: HeaderNav + FooterNavSections code-splitting still present and visible in localhost HTML streaming; LCP hero preload + lazy logo unchanged. Cap stays mid-70s until field CWV + deeper JS work. No PSI bonus/penalty applied.
