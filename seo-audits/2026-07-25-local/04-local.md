# 04 — Local SEO / Local Pack Readiness (2026-07-25 local)

**URL audited:** http://localhost:3000/  
**Production entity (reference):** https://724tesisatci.com/  
**Date:** 2026-07-25 (localhost recheck)  
**Business:** 724 Tesisatçı — Kağıthane-focused plumbing / tesisat  

> **Not part of the weighted site health score.** This score estimates Map Pack / local organic **on-site readiness** only. Live Map Pack positions, GBP Insights, review velocity, and off-site citations cannot be proven from localhost.

---

## Local pack readiness: **58 / 100** (parity with prod post-health 58)

| Dimension | Weight | Score | Weighted |
|-----------|--------|------:|---------:|
| GBP Signals (on-site) | 25% | 70 | 17.5 |
| Reviews & Reputation | 20% | 12 | 2.4 |
| Local On-Page SEO | 20% | 90 | 18.0 |
| NAP Consistency & Citations | 15% | 55 | 8.3 |
| Local Schema Markup | 10% | 95 | 9.5 |
| Local Link & Authority | 10% | 20 | 2.0 |
| **Total** | **100%** | | **~58** |

**Delta vs prior production post-health (58):** **0** — localhost HTML/schema matches committed local signals (NAP, `Plumber`, Maps `sameAs`, Kağıthane hub/landings, maps embed on `/iletisim`). Ceiling still off-site (reviews, citations, verified GBP pack).

---

## Business type & vertical

| Field | Detection |
|-------|-----------|
| **Business type** | **Hybrid SAB** — visible street address (Emniyet Evleri) + “Kağıthane merkezli / 39 ilçe / mobil ekip” service-area language |
| **Industry vertical** | **Home services — plumbing** (`Plumber` schema; 7/24 acil, cihazlı tespit, yazılı teklif) |
| **Primary market** | Kağıthane (19 mahalle hub + dedicated landings); İstanbul geneli as secondary |

SAB note: Local pack proximity still hinges on the **verified GBP service-area / pin**. Website copy alone does not move the pack. Localhost cannot validate Place ID resolution or pack rank.

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
| `llms.txt` | 724 Tesisatçı | Full NAP + coords | +90 532 346 87 69 | 41.0843817, 29.0005683 | **PASS** (prod URLs in body) |
| JSON-LD Organization (home) | 724 Tesisatçı | PostalAddress (street + locality + 34415 + TR) | `+905323468769` | geo + sameAs Maps short | **PASS** |
| JSON-LD Plumber (home) | 724 Tesisatçı | Same PostalAddress | `+905323468769` | geo + sameAs + `areaServed: Kağıthane, İstanbul` + hours | **PASS** |
| Hakkımızda Organization | 724 Tesisatçı | Same | E.164 | sameAs Maps short | **PASS** |

**Phone format note:** Visible/display uses spaced `+90 532 346 87 69`; schema uses E.164 `+905323468769` — correct pattern, not a conflict.

**Localhost caveat:** Schema `url` / canonicals resolve to `http://localhost:3000` when site URL env is unset. Entity NAP + Maps `sameAs` remain production-correct. Treat as env config for deploy, not a NAP conflict.

**Discrepancies:** None material between HTML, schema, and llms.txt NAP fields.

---

## GBP optimization checklist (on-site only)

| Item | Status |
|------|--------|
| Primary category (Plumber / tesisatçı) | Likely OK from site/`Plumber` type — **confirm in GBP UI** (not verifiable on localhost) |
| GBP / Maps short URL on site | **PASS** — `sameAs` on home Organization + Plumber; hakkımızda Organization |
| Street address visible | **PASS** — `/iletisim` Merkez Şube + footer |
| Maps embed | **PASS** — `/iletisim` (`output=embed`) |
| Directions CTA | **PASS** — Yol Tarifi Al on `/iletisim` |
| Geo coords (5+ decimals) | **PASS** — 41.0843817 / 29.0005683 |
| Hours 7/24 | **PASS** — visible + Plumber `openingHoursSpecification` Mo–Su |
| Service-area language (Kağıthane focus) | **PASS** — home, hub, landings |
| Review widget / star count on site | **FAIL** — none; no `aggregateRating` |
| GBP posts / Q&A / photo evidence on site | Not observable |
| Verified badge / Place ID / Map Pack | **Not verifiable** from localhost |

DataForSEO / GBP live pull: **unavailable** this run (MCP server error).

---

## Reviews & reputation

| Signal | Result |
|--------|--------|
| `aggregateRating` / `reviewCount` in schema | **Absent** (correct — do not invent) |
| On-page review carousel / stars | **Absent** |
| Review velocity (18-day rule) | **Unknown** — needs live GBP |
| Owner response rate | **Unknown** |

Map Pack remains review-capped until a steady Google review flow exists on the production profile.

---

## Local schema validation

| Check | Result |
|-------|--------|
| Industry subtype | **`Plumber`** (correct vs generic LocalBusiness) |
| Required: name, address | **PASS** |
| Recommended: telephone, url, geo, openingHoursSpecification | **PASS** on Plumber |
| `areaServed` | **PASS** — `Kağıthane, İstanbul` on Plumber; AdministrativeArea on landings/hub Service |
| `sameAs` GBP short link | **PASS** |
| Landing pages | Service + FAQPage + Breadcrumb — OK |
| Duplicate Organization/Plumber sameAs | Both emit Maps short link — intentional entity graph; low risk |

Companion schema detail: [03-schema.md](03-schema.md) (90/100).

---

## Location / service-area page quality

| Asset | Quality notes |
|-------|----------------|
| `/hizmet-bolgeleri/kagithane` | Unique hub (~1884w): mahalle blocks, service grid, FAQ, **Saha notu** |
| Kağıthane landings (su kaçağı, tıkanıklık, kombi) | Dedicated URLs + neighborhood scenarios + job notes; not thin doorway swaps |
| `/hizmetler` + city service pages | Service inventory + ItemList schema |
| Internal linking | Home → Kağıthane hub/landings; hub → mahalle + services |

Doorway risk: **Low** for Kağıthane cluster. Broader İstanbul district pages remain secondary.

---

## Citation presence (Tier 1)

| Directory / pattern | Status |
|---------------------|--------|
| Google Business / Maps short link | **On-site linked** |
| Yelp / BBB / TR local dirs | **Not audited** from localhost |
| NAP consistency off-site | **Unknown** — High priority manual pass on production |

---

## Top prioritized actions

| Priority | Action |
|----------|--------|
| **Critical** | Confirm production GBP published/verified; primary category = tesisatçı/plumber; service area = Kağıthane (+ intentional districts only) |
| **Critical** | Review acquisition: steady velocity (&lt;18 days between reviews); respond to all |
| **High** | Citation NAP audit off-site: same Name / Semerkant 14/A / +90 532 346 87 69 |
| **High** | Optional: surface Google rating widget on `/iletisim` once real reviews exist (never invent schema ratings) |
| **Medium** | Click-test Maps short link → correct Place on production |
| **Medium** | Ensure deploy `NEXT_PUBLIC_SITE_URL` (or equivalent) so schema `url`/canonicals are `https://724tesisatci.com` |
| **Low** | Homepage map deep-link near CTA (contact-only embed remains acceptable for SAB) |
| **Low** | Local PR / chamber / mahalle mentions for authority |

---

## Limitations

- **Localhost cannot prove Map Pack** — no live Local Pack SERP, no GBP Insights.
- DataForSEO MCP unavailable this run.
- Citation inventory and toxic directories not crawled.
- Proximity (~55% of ranking variance) is outside website control.
- Score reflects **on-site pack readiness only**, held at **58** to match production post-health parity.

**Companions:** GEO → [05-geo.md](05-geo.md) · SXO → [08-sxo.md](08-sxo.md)
