# PR-5B.1 Production Deployment Report

## Git

| Alan | Değer |
|---|---|
| Branch | `main` |
| Commit | `53eca09806efd8f0f7d5ba4d2721c42c6946ff8f` (`53eca09`) |
| Remote | `https://github.com/stonekeepp/724tesisatci.git` |
| Push | başarılı (`5a1e8f0..53eca09` → `origin/main`) |
| Working tree | clean |

## Deployment

| Alan | Değer |
|---|---|
| Platform | Ubuntu sunucu + Docker Compose (`Dockerfile` / `docker-compose.yml`) — README “Production Deploy” |
| CDN/cache | Cloudflare (önceki prod audit’lerde `cf-cache-status`) |
| Git push sonrası otomatik deploy | **Yok** (GitHub Actions yok; push yalnızca repo’yu günceller) |
| Production commit SHA | Henüz doğrulanamadı — canlı sürüm `53eca09` içeriğini göstermiyor |
| Yerel / production SHA eşleşmesi | **Hayır** (canlıda yayınlanan pilot 404) |
| Gerekli sunucu adımı | `git pull` + `docker compose --env-file .env.docker up -d --build` + Cloudflare purge |

## Published içerik (canlı — deploy öncesi / henüz rebuild yok)

| Kontrol | Sonuç |
|---|---|
| Route `/blog/musluklar-kapaliyken-su-sayaci-neden-doner` | **404** |
| Blog listesi | 200; slug **yok** |
| Sitemap | 200; slug **yok** |
| API | **404** |
| Schema / canonical / reviewedBy | Doğrulanamadı (route 404) |

## Draft güvenliği (canlı)

| Metrik | Sonuç |
|---:|
| Draft route 200 | 0 |
| Draft API 200 | 0 |
| Draft sitemap hits | 0 |
| Draft blog list hits | 0 |

Not: Draft’ların 404 olması beklenen güvenlik; published’in de 404 olması deploy eksikliğidir.

## Public veri güvenliği (canlı)

Published API 404 olduğu için internal/credential sızıntısı ölçülemedi (hit=0, içerik yok).

## Claim kontrolü (canlı eski sürüm)

| Metrik | Sonuç |
|---|---|
| Risky claim hits | 3 |
| URL’ler | `/` (`yüzde yüz`, `kesin olarak`), `/hakkimizda` (`Sertifikalı Personel`) |

Analiz:

- `yüzde yüz` eşleşmesi büyük olasılıkla soft-claim reddi cümlesindeki “Abartılı **yüzde yüz** iddiası kullanılmaz” alt dizesidir (yanlış pozitif adayı).
- `kesin olarak` yerel `app/page.tsx` içinde hâlâ geçer: “kırmadan, **kesin olarak** belirlenir” — deploy sonrası da görünebilir; ayrı soft-claim PR gerekebilir.
- `Sertifikalı Personel` canlıda var; yerel PR-1 düzeltmesi deploy edilmediği için eski HTML/CDN kalmış olabilir.

## Test sonuçları (yerel pre-deploy)

| Komut | Sonuç |
|---|---|
| test | 86/86 |
| lint | başarılı |
| typecheck | başarılı |
| review:validate | OK (`VALID_APPROVAL_COUNT=3`) |
| seo:audit | OK (`PUBLISHED_PILOT_COUNT=1`, `CREDENTIAL_VERIFIED_EXPERT_COUNT=0`) |
| build | başarılı |
| production:verify | **başarısız** (published 404 — sunucu rebuild bekleniyor) |

## Yerel doğrulama (bu makine)

Production build yeniden alındı; `npx next start -p 3000` çalışıyor.

| Kontrol | Sonuç |
|---|---|
| Published route | 200 |
| Published API | 200 |
| Draft routes/API | 404 |
| Blog listesi published | var |
| Blog listesi draft | yok |
| Sitemap published | var |
| Sitemap draft (8 slug) | yok |
| Schema / canonical / Mücahit Korkmaz | var |
| API internal/credential | yok |

## Durum özeti

- Kod GitHub `main` üzerinde (`53eca09`).
- Canlı site henüz yeni commit’i yayınlamıyor (Docker rebuild yapılmadı).
- Yerel preview doğrulandı: http://localhost:3000
- PR-5B.1 **production doğrulaması tamamlanmadı** — sunucuda Docker rebuild + Cloudflare purge + `npm run production:verify` tekrarı gerekli.

## Sunucu deploy komutu (README)

```bash
cd /path/to/724tesisatci
git pull origin main
docker compose --env-file .env.docker up -d --build
```

Ardından Cloudflare cache purge ve:

```bash
npm run production:verify
```
