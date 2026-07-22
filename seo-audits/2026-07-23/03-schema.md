# 03 — Schema Markup Audit

**Site:** https://724tesisatci.com  
**Date:** 2026-07-23  
**Business type:** Local plumbing (`Plumber` / LocalBusiness)  
**Evidence:** `homepage.html` + live fetches (`jsonld-*.json`)

## Score: **69 / 100**

Solid SSR JSON-LD coverage across homepage, services, local landings, and district/neighborhood pages. Deducted for wrong `Service.url` on area pages, incomplete LocalBusiness signals (`geo`, `sameAs`), and orphaned `provider` `@id` references off-homepage.

---

## Pages audited

| Page | URL | JSON-LD types found |
|------|-----|---------------------|
| Homepage | `/` | `Organization`, `Plumber`, `WebSite`, `FAQPage` |
| Service | `/hizmetler/su-tesisati` | `Service`, `BreadcrumbList`, `FAQPage` |
| Local landing | `/kagithane-su-kacagi-tespiti` | `Service` (+ OfferCatalog), `BreadcrumbList`, `FAQPage` |
| District | `/hizmet-bolgeleri/kagithane` | `Service`, `BreadcrumbList`, `FAQPage` |
| Neighborhood | `/hizmet-bolgeleri/kagithane/caglayan` | `Service`, `BreadcrumbList`, `FAQPage` |

**Format:** JSON-LD only (SSR via `JsonLdScript`). No Microdata/RDFa detected.  
**@context:** `https://schema.org` on all blocks — pass.

---

## Validation by type

### Organization (homepage) — PASS with gaps

| Check | Result |
|-------|--------|
| Required: name, url | ✅ |
| logo, image, telephone, email, address | ✅ Absolute URLs |
| addressCountry TR + PostalAddress | ✅ |
| `@id` | ❌ Missing — not linked to `Plumber` |
| `sameAs` / GBP | ❌ Missing (`googleBusinessProfileUrl` unset) |
| telephone format | ⚠️ Spaces retained (`+90 532…`) vs Plumber normalized |

### Plumber / LocalBusiness (homepage) — PASS with critical gaps

| Check | Result |
|-------|--------|
| `@type: Plumber` (LocalBusiness subtype) | ✅ Correct for plumbing |
| `@id: …/#business` | ✅ |
| NAP (name, address, telephone) | ✅ |
| `openingHours` + `OpeningHoursSpecification` 24/7 | ✅ |
| `contactPoint` + `areaServed` | ✅ |
| `geo` (latitude/longitude) | ❌ **Critical gap** — unset in settings |
| `sameAs` | ❌ **Critical gap** |
| `priceRange` | ❌ Missing opportunity |
| `image` | ⚠️ Logo only (prefer real service/storefront photos) |
| `AggregateRating` / `Review` | ❌ Not present (only if verifiable reviews exist) |

### WebSite (homepage) — PASS (minimal)

- name + url ✅  
- No `potentialAction` / SearchAction (optional; site may lack site search)  
- No `publisher` link to Organization `@id`

### FAQPage — VALID markup; Google rich-result restricted

Present on homepage, service, local landing, district, neighborhood. Structure (`Question` / `acceptedAnswer`) is correct.

**Google policy (Aug 2023):** FAQ rich results limited to government/healthcare. On this commercial site:

- Priority: **Info** (not Critical)  
- Still useful for AI/LLM citation / GEO  
- Do **not** add FAQ solely for Google rich results

### Service — MIXED

| Page | Status | Notes |
|------|--------|-------|
| Service detail | Pass (basic) | name, description, url (canonical), provider `@id`, areaServed string |
| Local landing | Stronger | `serviceType`, `AdministrativeArea`, `hasOfferCatalog` |
| District / neighborhood | **Fail URL** | `url` = `https://724tesisatci.com` (homepage), not page canonical |

**District example (error):**

```json
{
  "@type": "Service",
  "name": "Kağıthane, İstanbul Tesisatçı Hizmeti",
  "url": "https://724tesisatci.com"
}
```

Expected: `https://724tesisatci.com/hizmet-bolgeleri/kagithane`  
Same bug on neighborhood (`…/caglayan`) — root cause: `buildAreaServiceSchema()` always sets `url: siteUrl`.

**Other Service issues:**

- `provider: { "@id": "…/#business" }` with no in-page `Plumber` entity → orphaned reference off homepage  
- Generic service `areaServed: "İstanbul"` is a string; prefer `Place` / `AdministrativeArea`  
- OfferCatalog `Offer` items lack `price`/`priceCurrency` and map editorial sections (not true commercial offers) — weak semantics  
- No `serviceType` on `/hizmetler/*` pages

### BreadcrumbList — PASS

- Absolute item URLs ✅  
- Correct position sequence ✅  
- Service, landing, district, neighborhood all valid  
- Homepage: no breadcrumbs (acceptable)

---

## Critical schema gaps

1. **Area `Service.url` wrong** — district & neighborhood schema points to homepage instead of canonical URL (`buildAreaServiceSchema`).  
2. **Missing `geo` on `Plumber`** — latitude/longitude unset; hurts local entity confidence.  
3. **Missing `sameAs` / GBP URL** — no Google Business Profile or social entity links.  
4. **Orphaned `provider` `@id`** — Service/ContactPage reference `#business` but `Plumber` graph only on `/`.  
5. **Organization ≠ Plumber graph** — duplicate NAP entities without shared `@id` / `@graph` merge.

---

## Priority matrix

| Issue | Severity | Google rich-result impact |
|-------|----------|---------------------------|
| District/neighborhood `Service.url` = homepage | **Critical** | Entity–page mismatch |
| Missing `geo` on Plumber | **Critical** | LocalBusiness completeness |
| Missing `sameAs` / GBP | **High** | Knowledge/local entity linking |
| Orphaned `#business` `@id` off-home | **High** | Graph consistency |
| Org vs Plumber telephone inconsistency | Medium | NAP hygiene |
| FAQPage on commercial site | Info | No FAQ rich results |
| Offer without price in OfferCatalog | Medium | Weak Offer semantics |
| No AggregateRating | Opportunity | Only if real reviews exist |
| No `priceRange` on Plumber | Opportunity | Recommended LocalBusiness |
| Homepage missing BreadcrumbList | Low | Optional |

---

## Missing opportunities (recommended)

1. Embed or `@graph`-include `Plumber` on every Service/area page (or full provider object).  
2. Unify Organization + Plumber under one `@id` (`/#business`) with `@type: ["Organization","Plumber"]` or linked nodes.  
3. Fill `latitude`, `longitude`, `googleBusinessProfileUrl`, `sameAs` in site settings.  
4. Fix `buildAreaServiceSchema` to accept/set page canonical URL.  
5. Add `serviceType` + typed `areaServed` on `/hizmetler/*`.  
6. Add `priceRange` (e.g. `₺₺`) if accurate.  
7. Add `AggregateRating` only with real, policy-compliant review data.  
8. Prefer real business photos for `image` (not only logo).  
9. Optional: `WebPage` + `mainEntity` linking on service/local pages.

---

## Generated JSON-LD fixes (implement)

### A. Fix area Service URL + include provider entity

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kağıthane, İstanbul Tesisatçı Hizmeti",
  "description": "Kağıthane tesisat hizmet bölgeleri — 19 mahalle, bina tipi ve servis yönlendirme hub’ı.",
  "url": "https://724tesisatci.com/hizmet-bolgeleri/kagithane",
  "provider": { "@id": "https://724tesisatci.com/#business" },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Kağıthane, İstanbul"
  }
}
```

### B. Complete Plumber (homepage + reusable node)

```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://724tesisatci.com/#business",
  "name": "724 Tesisatçı",
  "url": "https://724tesisatci.com",
  "telephone": "+905323468769",
  "image": "https://724tesisatci.com/logo.webp",
  "logo": "https://724tesisatci.com/logo.webp",
  "priceRange": "₺₺",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Emniyet Evleri, Semerkant Sk. 14/A",
    "addressLocality": "Kağıthane",
    "addressRegion": "İstanbul",
    "postalCode": "34415",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "REPLACE_WITH_REAL_LAT",
    "longitude": "REPLACE_WITH_REAL_LNG"
  },
  "sameAs": [
    "REPLACE_WITH_GBP_URL"
  ],
  "openingHours": "Mo-Su 00:00-23:59",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": "Kağıthane, İstanbul"
}
```

### C. Code touchpoints

- `lib/services/schemaService.ts` → `buildAreaServiceSchema` (canonical URL param)  
- `data/mock/siteSettings.ts` → `latitude`, `longitude`, `googleBusinessProfileUrl`, `sameAs`  
- Optionally emit `Plumber` (or `@graph`) from service/district/landing pages alongside `Service`

---

## Detection summary

| Signal | Status |
|--------|--------|
| SSR JSON-LD | ✅ Present in initial HTML |
| LocalBusiness subtype (`Plumber`) | ✅ Homepage |
| Organization | ✅ Homepage |
| Service | ✅ Service / landing / area |
| BreadcrumbList | ✅ Inner pages |
| FAQPage | ✅ Multiple templates (AI-useful; no Google FAQ rich result) |
| Microdata / RDFa | ❌ None |
| Deprecated types (HowTo, etc.) | ✅ None used |

---

## Verdict

Foundation is good for a local plumbing site (correct `Plumber` type, NAP, hours, breadcrumbs, service+FAQ patterns). Score held back by **wrong area-page Service URLs**, **missing geo/sameAs**, and **incomplete entity graph** off the homepage. Fix those three before chasing AggregateRating or richer Offer markup.
