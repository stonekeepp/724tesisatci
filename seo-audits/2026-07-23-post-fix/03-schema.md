# 03 — Schema Markup (post-fix)

**Date:** 2026-07-23  
**Method:** JSON-LD extraction from live HTML (`signals.json`)

## Score: **82 / 100** (prior 69)

### Fix verification
| Fix | Result | Evidence |
|-----|--------|----------|
| Area `Service.url` = page (H1) | **PASS** | Kağıthane → `…/hizmet-bolgeleri/kagithane`; Çeliktepe → `…/kagithane/celiktepe` |
| Org `@id` = `/#business` (H2) | **PASS** | Organization + Plumber share `@id` |
| Phone normalized | **PASS** | `+905323468769` (no spaces) |
| `geo` lat/lng | **PASS** | `41.0843817`, `29.0005683` on Org + Plumber |
| `/hizmetler` ItemList + Breadcrumb (H4) | **PASS** | Both types present |
| GBP `sameAs` | **FAIL** | Not present (URL never provided) |

### Present types (sampled)
- Home: Organization, Plumber, WebSite, FAQPage  
- `/hizmetler`: BreadcrumbList, ItemList  
- Kağıthane: Service, BreadcrumbList, FAQPage  
- Landing: Service (+ FAQ if configured)

### Residual
1. Add GBP URL to `sameAs` when available  
2. Optional: emit thin Plumber stub on area pages referencing `/#business` (orphaned provider `@id` on some templates)  
3. Consider `@type: ["Organization","LocalBusiness"]` merge if Rich Results warns on duplicate `@id`  
