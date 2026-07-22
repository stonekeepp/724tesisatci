# ACTION PLAN — 724tesisatci.com

**Date:** 2026-07-23  
**Overall health:** 73/100 · **Local pack readiness:** 46/100  
**Principle:** Fix trust + entity consistency before more programmatic pages.

---

## Critical (do now)

| # | Action | Why | Effort | Falsifiable if |
|---|--------|-----|--------|----------------|
| C1 | Connect / publish GBP; add `sameAs` + Place signals on site | Local pack depends on GBP | M | Map Pack impressions / GBP insights |
| C2 | Soften or evidence hard claims (`%100`, `15+`, `10.000+`, sertifika) | E-E-A-T / trust risk | S | Manual QA + reduced bounce on money pages |
| C3 | Retarget vanity 308s away from `noindex` districts → Kağıthane indexable URLs | Redirect equity wasted | S | GSC “Page with redirect” / crawl stats |

---

## High (≤ 1 week)

| # | Action | Why | Effort | Falsifiable if |
|---|--------|-----|--------|----------------|
| H1 | Fix `buildAreaServiceSchema` `Service.url` → page canonical | Rich Results / entity clarity | S | Rich Results test |
| H2 | Unify Organization + Plumber `@id`; normalize phone; add `geo` when lat/lng known | Schema graph integrity | M | Rich Results / Knowledge panel |
| H3 | Clarify işçilik vs malzeme garantisi in FAQ/copy | Content mismatch | S | FAQ CTR / support tickets |
| H4 | Add ItemList + BreadcrumbList on `/hizmetler` | Hub schema gap | S | Rich Results |
| H5 | Freeze new district/mahalle URLs; uniqueness QA on existing 30 location-class pages | Doorway / thin risk | S | Manual uniqueness checklist |
| H6 | Disambiguate blog vs `/kagithane-*` (canonical intent: landing = money, blog = info) | Cannibalization | M | GSC query→page mapping |

---

## Medium (≤ 1 month)

| # | Action | Why | Effort |
|---|--------|-----|--------|
| M1 | Dynamic sitemap `lastmod` per real content updates | Crawl freshness | S |
| M2 | IndexNow key + ping on publish | Bing/Yandex discovery | S |
| M3 | CSP header (start report-only) | Security SEO hygiene | M |
| M4 | 2–3 first-hand Kağıthane job notes on top landings | E-E-A-T | M |
| M5 | Expand 2–3 core blogs to depth; lengthen FAQ answers (~134–167 words) for AI citation | Content + GEO | M |
| M6 | Drop logo `priority`/preload; keep only home-hero as early image | Perf LCP | S |
| M7 | Enable `priority` on `LocationHeroImage` when above-fold (lg+) | Local LCP | S |
| M8 | Audit/defer large client JS chunks (~700KB+) for INP | Perf INP | M |
| M9 | Cookie banner: avoid covering hero CTAs / bottom nav on first paint | Mobile UX/SXO | S |
| M10 | NAP audit: align site phone with map listings (Yandex mismatch flagged) | Citations | M |
| M11 | Complete `llms.txt` with Kağıthane landings | GEO | S |

---

## Low (backlog)

| # | Action |
|---|--------|
| L1 | Moz / Bing / DataForSEO credentials for real backlink score |
| L2 | Video / multi-modal assets for GEO |
| L3 | Person/author pages for blog |
| L4 | Tier-1 TR citations (local directories) |
| L5 | Review widget once GBP reviews exist |
| L6 | CrUX/PSI API for field CWV (replace lab estimates) |

---

## Dependency order

```
C2 claims ──┐
C3 redirects ┼─→ H1/H2 schema ─→ H4 hub schema
C1 GBP ──────┴─→ M10 NAP / L5 reviews
H5 freeze URLs ─→ M4/M5 deepen content (not more URLs)
H6 cannibalization ─→ M5 blog strategy
M6/M7 LCP ─→ M8 INP (after LCP wins land)
```

---

## Do not do yet

- Indexing more İstanbul districts without unique content  
- Aggressive link schemes / PBN  
- Treating Common Crawl “below threshold” as proof of zero backlinks  

---

## Next optional step

Generate PDF via cursor-seo `scripts/google_report.py --type full` when Google report deps are installed (`setup --with-pdf`).
