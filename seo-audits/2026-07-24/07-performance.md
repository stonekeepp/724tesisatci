# 07 — Performance lab (2026-07-24)

## Combined: **75 / 100** (prior 74)

### Fix verification
| Item | Result |
|------|--------|
| Logo `loading="lazy"` (no logo preload race) | **PASS** |
| Home-hero early image | **PASS** |
| Cookie ARIA `role="region"` (client; not SSR) | **Code PASS** — banner hydrates client-side |

### Residual
JS/INP (~script-heavy home); field CrUX/PSI; deep chunk reduction still backlog.  
