# 04 — Local SEO (2026-07-24 post-health)

**URL:** https://724tesisatci.com/  
**Date:** 2026-07-24 (post-health recheck)  
**Business:** 724 Tesisatçı — Kağıthane-focused plumbing / tesisat  

---

## Local pack readiness: **58 / 100** (prior 52)

> **Not part of the weighted site health score.** This score estimates Map Pack / local organic readiness from on-page + schema signals. Off-site GBP health, review velocity, and citations still dominate ranking and were only partially observable.

| Dimension | Weight | Score | Weighted |
|-----------|--------|------:|---------:|
| GBP Signals | 25% | 70 | 17.5 |
| Reviews & Reputation | 20% | 12 | 2.4 |
| Local On-Page SEO | 20% | 90 | 18.0 |
| NAP Consistency & Citations | 15% | 55 | 8.3 |
| Local Schema Markup | 10% | 95 | 9.5 |
| Local Link & Authority | 10% | 20 | 2.0 |
| **Total** | **100%** | | **~58** |

**Delta vs prior 52:** +6 — primarily from live GBP Maps short link in `sameAs` (`https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8`) on homepage Organization + Plumber (and Hakkımızda Organization). Reviews/citations unchanged → Map Pack ceiling still off-site.

---

## Business type & vertical

| Field | Detection |
|-------|-----------|
| **Business type** | **Hybrid SAB** — visible street address (Emniyet Evleri) + “Kağıthane merkezli / 39 ilçe / mobil ekip” service-area language |
| **Industry vertical** | **Home services — plumbing** (`Plumber` schema; 7/24 acil, cihazlı tespit, yazılı teklif) |
| **Primary market** | Kağıthane (19 mahalle hub + dedicated landings); İstanbul geneli as secondary |

SAB note: Local pack proximity still hinges on the **verified GBP service-area / pin**. Website copy alone does not move the pack.

---

## NAP consistency audit

**Canonical NAP (target)**

| Field | Value |
|-------|--------|
| Name | 724 Tesisatçı |
| Address | Emniyet Evleri, Semerkant Sk. 14/A, 34415 Kağıthane/İstanbul |
| Phone | +90 532 346 87 69 |
| Geo | 41.0843817, 29.0005683 |
| GBP / Maps | https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8 |

| Source | Name | Address | Phone | Geo / GBP | Match |
|--------|------|---------|-------|-----------|-------|
| Visible `/iletisim` | 724 Tesisatçı | Emniyet Evleri, Semerkant Sk. 14/A, 34415… | +90 532 346 87 69 | Maps embed + Yol Tarifi | **PASS** |
| Visible footer / CTAs (sitewide) | 724 Tesisatçı | Semerkant / Emniyet Evleri present | +90 532 346 87 69 | — | **PASS** |
| `llms.txt` | 724 Tesisatçı | Full NAP + coords | +90 532 346 87 69 | 41.0843817, 29.0005683 | **PASS** |
| JSON-LD Organization | 724 Tesisatçı | PostalAddress (street + locality + 34415 + TR) | `+905323468769` | geo + sameAs Maps short | **PASS** |
| JSON-LD Plumber | 724 Tesisatçı | Same PostalAddress | `+905323468769` | geo + sameAs + `areaServed: Kağıthane, İstanbul` | **PASS** |
| `siteSettings` (source) | 724 Tesisatçı | Same street/locality/postal | +90 532 346 87 69 | lat/lng + `googleBusinessProfileUrl` | **PASS** |

**Phone format note:** Visible/display uses spaced `+90 532 346 87 69`; schema uses E.164 `+905323468769` — correct pattern, not a conflict.

**Discrepancies:** None material between HTML, schema, llms.txt, and settings.

---

## GBP optimization checklist

| Item | Status |
|------|--------|
| Primary category (Plumber / tesisatçı) | Likely OK from site/`Plumber` type — **confirm in GBP UI** |
| GBP / Maps short URL on site | **PASS** — `sameAs` live |
| Street address visible | **PASS** — `/iletisim` Merkez Şube + footer |
| Maps embed | **PASS** — `/iletisim` (`output=embed`) |
| Directions CTA | **PASS** — Yol Tarifi Al |
| Geo coords (5+ decimals) | **PASS** — 41.0843817 / 29.0005683 |
| Hours 7/24 | **PASS** — visible + `openingHoursSpecification` Mo–Su 00:00–23:59 |
| Service-area language (Kağıthane focus) | **PASS** — home, hub, landings |
| Review widget / star count on site | **FAIL** — none |
| GBP posts / Q&A / photo evidence on site | Not observable |
| Verified badge / Place ID | Not verifiable without GBP API |

DataForSEO / GBP live pull: **unavailable** this run (MCP server error).

---

## Reviews & reputation

| Signal | Result |
|--------|--------|
| `aggregateRating` / `reviewCount` in schema | **Absent** |
| On-page review carousel / stars | **Absent** |
| Review velocity (18-day rule) | **Unknown** — needs GBP |
| Owner response rate | **Unknown** |

Map Pack remains review-capped until a steady Google review flow exists.

---

## Local schema validation

| Check | Result |
|-------|--------|
| Industry subtype | **`Plumber`** (correct vs generic LocalBusiness) |
| Required: name, address | **PASS** |
| Recommended: telephone, url, geo, openingHoursSpecification | **PASS** |
| `areaServed` | **PASS** — `Kağıthane, İstanbul` on Plumber |
| `sameAs` GBP short link | **PASS** (homepage + hakkımızda) |
| Duplicate `@id` Organization/Plumber | Same `#business` id — intentional entity merge; low risk |
| Landing pages | Service + FAQPage + Breadcrumb (no repeated Plumber stub) — OK if linked to `#business` |

---

## Location / service-area page quality

| Asset | Quality notes |
|-------|----------------|
| `/hizmet-bolgeleri/kagithane` | Unique hub: 19 mahalle blocks, service grid, FAQ, **Saha notu** Experience line |
| Kağıthane landings (su kaçağı, tıkanıklık, kombi, …) | Dedicated URLs + neighborhood scenarios; not thin doorway swaps |
| `/hizmetler` + city service pages | Service inventory + ItemList schema |
| Internal linking | Home → Kağıthane hub/landings; hub → mahalle + services |

Doorway risk: **Low** for Kağıthane cluster (unique copy + job notes). Broader İstanbul district pages remain secondary.

---

## Citation presence (Tier 1)

| Directory / pattern | Status |
|---------------------|--------|
| Google Business / Maps short link | **On-site linked** |
| Yelp / BBB / TR local dirs (Nerede, Hotfrog, etc.) | **Not audited live** this run |
| NAP consistency off-site | **Unknown** — treat as High priority manual pass |

---

## Top prioritized actions

| Priority | Action |
|----------|--------|
| **Critical** | Confirm GBP is published/verified; primary category = tesisatçı/plumber; service area = Kağıthane (+ intentional districts only) |
| **Critical** | Review acquisition: aim for steady velocity (&lt;18 days between reviews); respond to all |
| **High** | Citation NAP audit: same Name / Semerkant 14/A / +90 532 346 87 69 everywhere |
| **High** | Optional: surface Google rating widget or review count on `/iletisim` once reviews exist (do not invent schema ratings) |
| **Medium** | Ensure Maps short link resolves to the correct Place (manual click-test) |
| **Medium** | Deduplicate any future `sameAs` array builders if Organization + Plumber both emit identical lists into a merged graph |
| **Low** | Add map embed or GBP deep-link near homepage CTA (contact-only map is acceptable for SAB) |
| **Low** | Local PR / chamber / mahalle site mentions for authority |

---

## Limitations

- No live Local Pack SERP positions (DataForSEO MCP unavailable).
- No GBP Insights (views, calls, direction requests, photo count).
- Citation inventory and toxic/spam directories not crawled.
- Proximity (~55% of ranking variance) is outside website control.

**Companion:** GEO / AI readiness → [05-geo.md](05-geo.md).
