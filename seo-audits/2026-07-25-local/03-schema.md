# 03 — Schema (2026-07-25 local)

**Site:** http://localhost:3000  
**Prior production post-health (2026-07-24):** **90 / 100**  
**Score:** **90 / 100** (parity with prod; Δ 0)  
**sameAs status:** **PASS** — `https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8`

**Evidence base:** Live localhost JSON-LD via `signals.json` + HTML snapshots; schema builders in `lib/services/schemaService.ts` + `data/mock/siteSettings.ts`. Format: JSON-LD only (no Microdata/RDFa).

---

## Detection (sampled localhost pages)

| Page | JSON-LD types |
|------|----------------|
| `/` | Organization, Plumber, WebSite, FAQPage |
| `/kagithane-su-kacagi-tespiti` | Service, BreadcrumbList, FAQPage |
| `/kagithane-tikaniklik-acma` | Service, BreadcrumbList, FAQPage |
| `/kagithane-kombi-servisi` | Service, BreadcrumbList, FAQPage |
| `/hizmet-bolgeleri/kagithane` | Service, BreadcrumbList, FAQPage |
| `/hizmetler` | BreadcrumbList, ItemList |
| `/iletisim` | ContactPage, BreadcrumbList |
| `/hakkimizda` | Organization, BreadcrumbList, AboutPage |
| `/blog/su-kacagi-belirtileri` | BlogPosting, BreadcrumbList, FAQPage |

---

## Fix / entity verification checklist

| Item | Expected | Result |
|------|----------|--------|
| Organization + Plumber present | Home | **PASS** (`signals.json` schema_types) |
| Shared `@id` entity | `{siteUrl}/#business` | **PASS** (code: `buildBusinessId`) — resolves to `http://localhost:3000/#business` when env unset |
| PostalAddress NAP | Emniyet Evleri, Semerkant Sk. 14/A · Kağıthane · İstanbul · 34415 · TR | **PASS** (`siteSettings`) |
| Geo | `41.0843817` / `29.0005683` | **PASS** — Org + Plumber (`GeoCoordinates` from settings) |
| Telephone E.164 | `+905323468769` | **PASS** (schema normalizes spaces) |
| GBP `sameAs` | `https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8` | **PASS** — home (Org + Plumber → duplicate emission of same URL); hakkımızda Org |
| Plumber hours 7/24 | Mo–Su 00:00–23:59 + OpeningHoursSpecification | **PASS** (builder) |
| Service.provider | `@id` → `/#business` | **PASS** (landing pattern) |
| BreadcrumbList absolute items | Present on landings / hub / hizmetler / iletisim | **PASS** (types present; hosts = localhost) |
| FAQPage | Home 10 + landings 4 + hub 8 + blog 3 | **Present** — see Info flag |
| Deprecated types | None (HowTo / SpecialAnnouncement / etc.) | **PASS** |

---

## Validation notes (Google / Schema.org)

| Block | Status | Notes |
|-------|--------|-------|
| Organization | Pass | `@context` https, NAP + geo + phone + logo + sameAs |
| Plumber | Pass | LocalBusiness subtype; hours; same `@id` as Org (entity merge) |
| WebSite | Pass | Homepage |
| Service (landings / hub) | Pass | Canonical `url`, provider link, areaServed, FAQ sibling |
| BreadcrumbList | Pass | Absolute `item` URLs (localhost host in this env) |
| ItemList (`/hizmetler`) | Pass | Service catalog list |
| ContactPage | Pass | `mainEntity` → `/#business` |
| AboutPage + Organization | Pass | Hakkımızda; GBP sameAs |
| BlogPosting | Pass | Blog sample |
| FAQPage | Info | Valid markup; commercial site — Google FAQ rich results restricted (gov/health only since Aug 2023). Keep for AI/LLM citation |

---

## GBP / geo / Plumber detail

```text
sameAs: https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8
geo.latitude:  41.0843817
geo.longitude: 29.0005683
@type: Organization + Plumber (shared @id)
```

Source: `siteSettings.googleBusinessProfileUrl` → `buildSameAs()`; lat/lng → `schema.geo` on both Organization and Plumber builders.

Live `signals.json` confirms:
- Homepage `sameAs`: two entries of the Maps short link (Org block + Plumber block)
- Hakkımızda `sameAs`: one Maps short link
- Landings do **not** inline `sameAs` (OK via `provider.@id`)

---

## Localhost caveat (not a schema logic fail)

| Field | Local behavior | Prod expectation |
|-------|----------------|------------------|
| `url`, logo, `@id`, breadcrumb `item` | `http://localhost:3000/...` when `NEXT_PUBLIC_SITE_URL` unset | `https://724tesisatci.com/...` |
| GBP `sameAs` | Production Maps URL (correct) | Same |
| Geo / NAP / phone | Production values | Same |

Score treats entity graph quality (types, NAP, geo, sameAs, Plumber) as **90**, matching prod. Absolute localhost hosts are an **env/deploy** issue tracked under technical SEO, not a −score on schema structure.

---

## Issues

| Priority | Issue |
|----------|-------|
| Info | FAQPage on commercial pages — limited Google rich-result eligibility; retain for GEO/AI |
| Low | Org + Plumber both emit identical `sameAs` — expected with dual blocks / shared `@id` |
| Low | Landing Service does not inline NAP/`sameAs` (OK via provider `@id`) |
| Deploy | Without `NEXT_PUBLIC_SITE_URL`, entity `@id`/URLs are localhost (fix before prod crawl) |
| Opportunity | No AggregateRating / Review nodes (needs verifiable review data) |

---

## Score rationale

| Delta | Reason |
|-------|--------|
| Prior prod | **90** — solid local graph + GBP `sameAs` |
| Local recheck | Organization, Plumber, geo, GBP sameAs, Service/FAQ/Breadcrumb graph confirmed on localhost snapshots |
| Held | FAQ Info (not Critical), no review markup, dual Org/Plumber sameAs |
| **Now** | **90** (parity) |

---

## Residual (optional)

1. Prefer single `@graph` multi-type node if dual Org/Plumber ever confuses a validator (keep current if Google merges on `@id`).
2. Set `NEXT_PUBLIC_SITE_URL=https://724tesisatci.com` for any pre-prod schema screenshot / Rich Results test.
3. Do **not** add new FAQPage solely for Google rich results on this commercial site.
4. AggregateRating only with real, policy-compliant review sources.
