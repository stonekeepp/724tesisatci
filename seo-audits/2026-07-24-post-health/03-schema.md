# 03 — Schema (2026-07-24 post-health)

**Score: 90 / 100** (prior 83)  
**sameAs status: PASS** — `https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8`

Source: live HTML snapshots (`homepage.html`, `landing-su-kacagi.html`, `hizmetler.html`, `iletisim.html`). Format: JSON-LD only (no Microdata/RDFa).

---

## Detection (sampled pages)

| Page | JSON-LD types |
|------|----------------|
| `/` | Organization, Plumber, WebSite, FAQPage |
| `/kagithane-su-kacagi-tespiti` | Service, BreadcrumbList, FAQPage |
| `/hizmetler` | BreadcrumbList, ItemList (12 services) |
| `/iletisim` | ContactPage (`mainEntity` → `/#business`), BreadcrumbList |

Also present elsewhere (signals): area pages Service+Breadcrumb+FAQ; `/hakkimizda` Organization+AboutPage; blog BlogPosting+Breadcrumb+FAQ.

---

## Fix verification checklist

| Item | Expected | Result |
|------|----------|--------|
| Organization / Plumber `@id` | `https://724tesisatci.com/#business` | **PASS** (shared entity id) |
| PostalAddress NAP | Emniyet Evleri, Semerkant Sk. 14/A · Kağıthane · İstanbul · 34415 · TR | **PASS** |
| Geo | `41.0843817` / `29.0005683` | **PASS** (Org + Plumber) |
| Telephone normalize | `+905323468769` | **PASS** (+ ContactPoint on Plumber) |
| Service.url canonical | `https://724tesisatci.com/kagithane-su-kacagi-tespiti` | **PASS** |
| Service.provider | `@id` → `/#business` | **PASS** |
| BreadcrumbList | Landing / hizmetler / iletisim absolute item URLs | **PASS** |
| FAQPage present | Homepage (10) + landing (4) | **Present** — see Info flag |
| `sameAs` GBP | `https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8` | **PASS** (was FAIL @ 83) |

---

## Validation notes (Google / Schema.org)

| Block | Status | Notes |
|-------|--------|-------|
| Organization | Pass | `@context` https, absolute URLs, NAP + geo + phone + logo + sameAs |
| Plumber | Pass | LocalBusiness subtype; hours 7/24; same `@id` as Org (entity merge) |
| WebSite | Pass | Present on homepage |
| Service (landing) | Pass | Canonical `url`, provider link, areaServed, OfferCatalog |
| BreadcrumbList | Pass | Absolute `item` URLs; landing includes area hub crumb |
| ItemList (`/hizmetler`) | Pass | 12 ListItems with absolute service URLs |
| ContactPage | Pass | Links `mainEntity` to `/#business` |
| FAQPage | Info | Valid markup; commercial site — Google FAQ rich results restricted (gov/health only since Aug 2023). Keep for AI/LLM citation, not SERP FAQ UI |

No deprecated types (HowTo / SpecialAnnouncement / etc.) detected.

---

## Issues

| Priority | Issue |
|----------|-------|
| Info | FAQPage on commercial pages — limited Google rich-result eligibility; retain for GEO/AI discoverability |
| Low | Org + Plumber both emit `sameAs` (same URL) — expected with shared `@id`; not a broken duplicate array |
| Low | Landing Service does not inline NAP/`sameAs` (OK via `provider.@id`) |
| Opportunity | No AggregateRating / Review nodes (would need verifiable review data) |

---

## Score rationale

| Delta | Reason |
|-------|--------|
| Prior | **83** — solid local graph; GBP `sameAs` missing |
| +7 | GBP Maps short link published on Organization + Plumber `sameAs` |
| Held | FAQ Info (not scored as Critical), no review markup, residual Low notes |
| **Now** | **90** |

---

## Residual (optional)

1. Deduplicate schema emission if crawlers ever mis-parse dual Org/Plumber blocks (prefer `@graph` single node with multi-type, or keep as-is).
2. Add thin Plumber/`@id` stub on high-traffic area pages only if entity linking audits require page-level NAP.
3. Do **not** add new FAQPage solely for Google rich results on this commercial site.
