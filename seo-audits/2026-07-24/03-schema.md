# 03 — Schema (2026-07-24)

## Score: **83 / 100** (prior 82)

### Fix verification
| Item | Result |
|------|--------|
| Org `@id` `/#business` | **PASS** |
| Phone normalized `+905323468769` | **PASS** |
| Plumber `geo` | **PASS** |
| Area `Service.url` = page | **PASS** |
| `/hizmetler` ItemList + Breadcrumb | **PASS** |
| Landing FAQ includes 6 ay | **PASS** |
| GBP `sameAs` | **FAIL** (no URL) |

### Residual
Add GBP URL to `sameAs` when available; optional thin Plumber stub on area pages.  
