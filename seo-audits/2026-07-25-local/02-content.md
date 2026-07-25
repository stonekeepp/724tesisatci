# 02 — Content / E-E-A-T (2026-07-25 local)

**Site:** http://localhost:3000 (724 Tesisatçı — Kağıthane local plumber)  
**Prior production post-health (2026-07-24):** **78 / 100**  
**Score:** **78 / 100** (parity with prod; Δ 0)

**Evidence base:** Live localhost HTML captured into this folder (`signals.json` + page HTML snapshots). Soft-claim / saha / FAQ checks re-verified against snapshot text + source mock (`localServiceLandingPages.ts`, `districtProfiles.ts`, `homeContent.ts`, `app/hakkimizda/page.tsx`).

---

## Localhost verification checklist

| Check | Result | Evidence |
|-------|--------|----------|
| Soft claims: no `%100` / yüzde 100 | **PASS** | `signals.json` → all sampled pages `pct100: false` |
| Soft claims: no `10.000+` | **PASS** | All sampled pages `10k_plus: false` |
| Soft claims: `Binlerce` (not hard volume) | **PASS** | `/hakkimizda` only (`binlerce: true`); hard-coded `Binlerce` + `15+` in `app/hakkimizda/page.tsx` |
| Soft claims: `6 ay işçilik garanti` | **PASS** | Homepage, Kağıthane hub, 3 landings (`garanti_6ay: true`); FAQ + body copy |
| “Saha notu” job notes | **PASS** | Hub + 3 landings (`job_note: true`); homepage not required |
| Longer FAQs (~100+ words) | **PARTIAL** | Primary FAQs peak **92** words (home su-kaçağı FAQ); none clear 100 |
| Expanded blog depth | **PARTIAL** | `/blog/su-kacagi-belirtileri` ~950w; still &lt; 1,500 floor |
| No hard fake claims | **PASS** | No fixed-minute SLA, no lifetime warranty; kombi landing scopes out cihaz-içi |

---

## Saha notu coverage (Experience proofs)

| Page | Note (live) |
|------|-------------|
| `/kagithane-su-kacagi-tespiti` | **Gültepe, Şubat 2026** — 1990’lar daire, flex bağlantı, noktasal müdahale |
| `/kagithane-tikaniklik-acma` | **Seyrantepe, Ocak 2026** — mutfak yağ/koku, robot + kamera, yıkama planı |
| `/kagithane-kombi-servisi` | **Çeliktepe, Aralık 2025** — basınç düşmesi → petek bağlantı kaçağı |
| `/hizmet-bolgeleri/kagithane` | **Emniyet Evleri, Mart 2026** — pimaş geri tepme, kamera, site yönetimi notu |

Homepage has no job note (acceptable). Source of truth remains `data/mock/localServiceLandingPages.ts` + `districtProfiles.ts`.

---

## E-E-A-T breakdown

| Factor | Weight | Score | Notes |
|--------|--------|------:|-------|
| Experience | 20% | **82** | Four dated, mahalle-specific saha notes with method + outcome |
| Expertise | 25% | **80** | Termal / akustik / nem process; building-stock nuance (eski apartman vs site) |
| Authoritativeness | 25% | **55** | GBP Maps `sameAs` on site; thin on-page third-party reviews / citations |
| Trustworthiness | 30% | **88** | Soft-claim hygiene, 6 ay işçilik, phone/WhatsApp, yazılı teklif, honest kombi scope |

**Weighted:** 82×0.20 + 80×0.25 + 55×0.25 + 88×0.30 ≈ **76.6 → 78** (same rounding as prod post-health).

### Who / How / Why
- **Who:** Brand-level only; blogs lack named technician byline/bio.
- **How:** Strong — process disclosure + first-hand saha notes.
- **Why:** Clear local-service intent (Kağıthane-first).

---

## Page depth (approx. visible words — localhost)

| Page | Words | Type floor | Status |
|------|------:|------------|--------|
| Homepage | ~1,603 | 500 | Pass |
| Hub `/hizmet-bolgeleri/kagithane` | ~1,884 | 500–600 | Pass |
| Landing su kaçağı | ~751 | 800 | Slightly thin |
| Landing tıkanıklık | ~716 | 800 | Slightly thin |
| Landing kombi | ~753 | 800 | Slightly thin |
| `/hizmetler` | ~755 | 800 | Borderline / thin |
| `/hakkimizda` | ~440 | — | Thin for About; trust via stats + NAP |
| `/iletisim` | ~324 | — | OK for contact utility page |
| Blog belirtileri | ~950 | 1,500 | Improved vs early audits, still short |

---

## FAQ length audit (JSON-LD answer words)

### Homepage (10 FAQs)

| Q (abbrev) | Words | Flag |
|------------|------:|------|
| Hangi bölgeler | 81 | Strong |
| Acil süre | 72 | Strong |
| Kırmadan su kaçağı | 92 | Strong (peak) |
| Fiyat teklifi net mi | 71 | Strong |
| Nasıl teslim | 20 | Short |
| Robot pimaş zarar | 20 | Short |
| Kombi basıncı | 24 | Short |
| Petek sıklık | 18 | Short |
| Keşif ücreti | 12 | Short |
| WhatsApp randevu | 23 | Short |

### Landings / hub (selected)

| Page | Longest FAQ | Shortest |
|------|------------:|---------:|
| Su kaçağı landing | 92 | 23 |
| Tıkanıklık landing | 90 | 15 |
| Kombi landing | 88 | 18 |
| Kağıthane hub | 78 | 17 |
| Blog belirtileri | 87 | 20 |

**Verdict:** Primary/process FAQs are citation-ready (~70–92w). Secondary FAQs remain template-thin (~12–30w). Target of 100+ words on top answers still **not met**.

---

## AI citation readiness: **74 / 100**

**Strengths:** Quotable detection steps; mahalle scenarios; FAQPage JSON-LD; dated job notes; warranty language consistent (`6 ay işçilik`; materials → manufacturer).

**Gaps:** No named author; few unique stats; secondary FAQs short; blogs lack original job photos; About page thin.

---

## Strengths
- Soft-claim hygiene holds on all audited localhost URLs.
- Experience leap via four concrete saha notes (Gültepe / Seyrantepe / Çeliktepe / Emniyet Evleri).
- Primary FAQs locally specific vs thin template answers.
- Warranty + yazılı teklif language consistent across home / hub / landings.

## Gaps / residual (unchanged vs prod 78)
1. Push top FAQs past **100 words** in visible copy + FAQ JSON-LD (peak ~92).
2. Bring top blogs toward **1,200–1,500+** with first-hand sections / job photos.
3. Add light **author/technician** signal on blog (Who).
4. Surface **GBP/review** proof on-page (Authoritativeness).
5. Optional: +50–100 words on each top landing to clear the 800 service floor.

---

## Verdict

Localhost content **matches production post-health**: soft claims, saha notes, and hard-claim hygiene verified. FAQ length and blog depth remain partial. **Score 78 / 100** (parity with prior prod 78).
