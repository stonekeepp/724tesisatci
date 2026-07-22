# Local SEO Analysis — 724tesisatci.com

**URL:** https://724tesisatci.com/  
**Date:** 2026-07-23  
**Business:** 724 Tesisatçı (Kağıthane-focused plumbing / tesisat)

---

## Local SEO Score: **46 / 100**

| Dimension | Weight | Score | Weighted |
|-----------|--------|------:|---------:|
| GBP Signals | 25% | 38 | 9.5 |
| Reviews & Reputation | 20% | 12 | 2.4 |
| Local On-Page SEO | 20% | 85 | 17.0 |
| NAP Consistency & Citations | 15% | 50 | 7.5 |
| Local Schema Markup | 10% | 70 | 7.0 |
| Local Link & Authority | 10% | 12 | 1.2 |
| **Total** | **100%** | | **46** |

---

## Business type & vertical

| Field | Detection |
|-------|-----------|
| **Business type** | **Hybrid SAB** — visible street address + “Kağıthane merkezli / 39 ilçe / mobil ekip” service-area language |
| **Industry vertical** | **Home services — plumbing** (`Plumber`) |
| **Signals** | 7/24 acil, cihazlı tespit, yazılı teklif, `areaServed`, dedicated service + Kağıthane landing pages |

SAB note: Rankings still hinge on GBP verification address proximity; website service-area copy alone does not move the local pack.

---

## Dimension findings

### 1. GBP signals (38/100)

**Detected on site**
- Full NAP in footer sitewide + `/iletisim` “Merkez Şube”
- Google Maps **embed + directions** on `/iletisim` (`maps?q=…&output=embed`)
- Hours: 7/24 (`Mo-Su 00:00-23:59` in schema; “7 Gün 24 Saat” on contact)
- Service photos / hero imagery
- Schema subtype `Plumber` (category-aligned)

**Missing / not inferable**
- No `googleBusinessProfileUrl` / `sameAs` GBP link in code or HTML
- No Place ID, review widget, or GBP posts evidence on pages
- Homepage has **no** map embed (map only on contact)
- Live GBP category, photos, Q&A→FAQ migration, Verified badge: **not verifiable** without GBP API / Business Profile access

**Checklist**

| Item | Status |
|------|--------|
| Primary category fit (Plumber / tesisatçı) | Likely OK (site); confirm in GBP |
| Maps embed | Contact only |
| GBP URL in `sameAs` | Missing |
| Hours on site | Present (24/7) |
| Photos | Present on site |
| Review widget | Missing |
| Service-area language | Strong |

### 2. Reviews & reputation (12/100)

- No `aggregateRating` / `reviewCount` in JSON-LD
- No on-page star rating or review count
- No third-party review embeds (Google, Trustpilot, etc.)
- Velocity / owner response rate: **unknown** (needs GBP)

Below Sterling Sky’s ~10-review “magic threshold” cannot be confirmed from the site.

### 3. Local on-page SEO (85/100)

**Strengths**
- Title: `Kağıthane Tesisatçı | 7/24 Su Tesisatı, Tıkanıklık`
- H1: `Kağıthane Merkezli 7/24 Tesisatçı` (city + service)
- `tel:` click-to-call; WhatsApp CTAs
- **12** dedicated service pages (`/hizmetler/...`)
- **10** Kağıthane service landings (`/kagithane-su-kacagi-tespiti`, etc.) with neighborhood-specific copy
- Kağıthane hub + 19 neighborhood URLs under `/hizmet-bolgeleri/kagithane/...`
- Hub ↔ spoke internal links (homepage priority links, district ↔ landings)
- FAQ blocks on home, district, neighborhood, and landings

**Gaps**
- Secondary district pages (e.g. Beşiktaş) share a **FAQ/service-grid template**; city name swap passes the doorway “swap test” for large body sections — risk on non-Kağıthane URLs
- `districtProfiles` covers many but not all unique intro variants equally deeply vs Kağıthane hub

### 4. NAP consistency & citations (50/100)

#### NAP comparison

| Source | Name | Address | Phone |
|--------|------|---------|-------|
| Visible footer / contact | 724 Tesisatçı | Emniyet Evleri, Semerkant Sk. 14/A, 34415 Kağıthane/İstanbul | +90 532 346 87 69 |
| `llms.txt` | 724 Tesisatçı | Same | +90 532 346 87 69 |
| Organization JSON-LD | 724 Tesisatçı | Same PostalAddress | `+90 532 346 87 69` (spaced) |
| Plumber JSON-LD | 724 Tesisatçı | Same PostalAddress | `+905323468769` (compact) |
| Live GBP | — | **Not available** | **Not available** |

**Issue:** Display/NAP string is consistent; **schema telephone formatting differs** between Organization and Plumber (same number, different serialization).

#### Tier-1 / citation presence (site: / web search)

| Directory | Status |
|-----------|--------|
| Google Business Profile (on-page link) | Not linked |
| Yelp | Not found |
| BBB | N/A / not found (TR business) |
| Facebook / Instagram brand pages | Not found in search |
| Apple Business Connect / Bing Places | Not detectable from site — **claim recommended** |

TR home-services citations (Google, Facebook, Instagram, local listings) appear **thin or absent** from public search.

### 5. Local schema (70/100)

Homepage live JSON-LD (SSR): `Organization` + **`Plumber`** + `WebSite` + `FAQPage` (10 Qs).

| Property | Status |
|----------|--------|
| Correct subtype (`Plumber`) | Pass |
| `name`, `address` (PostalAddress) | Pass |
| `telephone`, `url`, `image`, `logo` | Pass |
| `openingHours` + `openingHoursSpecification` | Pass (24/7) |
| `areaServed` | Present as string `"Kağıthane, İstanbul"` (prefer Place / AdminArea + `sameAs`) |
| `geo` (5+ decimal) | **Missing** (`latitude`/`longitude` unset in settings) |
| `sameAs` (GBP, social) | **Missing** |
| `aggregateRating` | **Missing** |
| `priceRange` | **Missing** |

Landings/districts use `Service` + `BreadcrumbList` + `FAQPage` linked via `provider.@id` → `/#business` — good entity pattern.

### 6. Local link & authority (12/100)

No detectable chamber, press, “best of”, BBB, or community sponsorship signals on-site. Brand web mentions outside owned domain not found in spot checks.

---

## Location page quality

| Layer | Count (sitemap) | Quality note |
|-------|----------------:|--------------|
| Core hubs | Home, `/hizmet-bolgeleri`, `/hizmet-bolgeleri/kagithane` | Strong, unique |
| Service pages | 12 | Strong |
| Kağıthane landings | 10 indexable | Strong unique sections (e.g. Çeliktepe/Gültepe scenarios) |
| Neighborhoods | 19 | Short unique intros; FAQs largely templated |
| Other districts | Present in IA | **Doorway risk** — FAQ/service grid city-swappable |

Kağıthane cluster is the primary local organic asset; treat other districts as secondary and deepen selectively.

---

## Top 10 prioritized actions

| # | Priority | Action |
|---|----------|--------|
| 1 | **Critical** | Claim/verify GBP; set primary category to tesisatçı/plumber; align NAP with site exactly |
| 2 | **Critical** | Add GBP URL + lat/lng to site settings → `sameAs` + `geo` on `Plumber` |
| 3 | **Critical** | Unify schema `telephone` to one E.164 form (match visible NAP) |
| 4 | **High** | Review generation cadence (≤18-day gap); publish rating only when real (`aggregateRating`) |
| 5 | **High** | Claim **Bing Places** + **Apple Business Connect** (ChatGPT / Copilot / Maps surfaces) |
| 6 | **High** | Build TR citations (Facebook Business, Instagram, local directories) — AI visibility is citation-heavy |
| 7 | **Medium** | Enrich top secondary districts beyond name-swap FAQs; keep thin districts noindex or stub |
| 8 | **Medium** | Expand `areaServed` to named Places with Wikidata/`sameAs` for Kağıthane + priority mahalleler |
| 9 | **Medium** | Optional homepage map snippet or clear “Merkez: Emniyet Evleri” + link to `/iletisim` map |
| 10 | **Low** | Local PR / “best of” list placements for AI citation authority |

---

## Limitations

Could **not** assess without paid/live GBP tools: geo-grid ranks, local pack position, GBP Insights, review velocity/response rate, Domain Authority, full citation crawl, or DataForSEO `local_business_data` (MCP unavailable this run).

Proximity (~55% of local pack variance) is outside website control.

---

## AI search note (local-only)

ChatGPT does not read GBP directly; Bing Places + citations matter. Full GEO / citability / crawler analysis: see `05-geo.md`.
