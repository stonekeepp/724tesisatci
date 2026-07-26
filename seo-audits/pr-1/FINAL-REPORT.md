# PR-1 Final Report — SEO altyapı ve güvenilirlik

**Date:** 2026-07-26  
**Scope:** Tip/veri modeli, cluster altyapısı, draft güvenliği, soft claim, sameAs, test/script iskeleti  
**Out of scope:** 9 cluster blog taslağı (PR-2), ilçe nearby/region (PR-3), tasarım değişiklikleri

## Özet

PR-1, topical authority çalışmasının altyapı katmanını tamamladı: yayın durumu ve cluster tipleri, boş ExpertProfile/LocalCase iskeleti, Türkçe bulunma hâli helper’ı, soft claim yumuşatmaları, schema `sameAs` tekilleştirme, draft filtreleri ve `test` / `typecheck` / `seo:audit` script’leri. Sahte uzman/vaka/yorum üretilmedi; 9 blog taslağı eklenmedi.

## Değiştirilen dosyalar

| Dosya | Değişiklik |
|---|---|
| [`types/index.ts`](../../types/index.ts) | `VerificationStatus`, `SearchIntent`, `ContentCluster`, `PublicationStatus`, `ExpertProfile`, `LocalCase`, `SiteSettings.verification`; `BlogPost` cluster/intent/related alanları |
| [`data/mock/siteSettings.ts`](../../data/mock/siteSettings.ts) | `verification` metadata (telefon verified; adres/koordinat/lisans vb. needs-verification) |
| [`data/mock/blogPosts.ts`](../../data/mock/blogPosts.ts) | `isPublishedContent` ile published helper’lar |
| [`data/mock/services.ts`](../../data/mock/services.ts) | Doğalgaz “lisanslı” / “garanti” soft claim yumuşatma |
| [`data/mock/seo.ts`](../../data/mock/seo.ts) | Hakkımızda “15+ yıl” soft claim yumuşatma |
| [`app/hakkimizda/page.tsx`](../../app/hakkimizda/page.tsx) | “sertifikalı” ifadeleri yumuşatıldı |
| [`app/blog/[slug]/page.tsx`](../../app/blog/[slug]/page.tsx) | Yalnızca published blog |
| [`app/api/blog/[slug]/route.ts`](../../app/api/blog/[slug]/route.ts) | Yalnızca published blog |
| [`lib/repositories/mockBlogRepository.ts`](../../lib/repositories/mockBlogRepository.ts) | `findPublished` → `isPublishedContent` |
| [`lib/services/blogService.ts`](../../lib/services/blogService.ts) | Published-only slug lookup |
| [`lib/services/schemaService.ts`](../../lib/services/schemaService.ts) | `normalizeSameAs` |
| [`lib/utils/internalLinks.ts`](../../lib/utils/internalLinks.ts) | Published blog listesi |
| [`components/pages/ServiceDetailTemplate.tsx`](../../components/pages/ServiceDetailTemplate.tsx) | Published blog yardımcıları |
| [`package.json`](../../package.json) | `test`, `typecheck`, `seo:audit` script’leri |

## Eklenen dosyalar

| Dosya | Amaç |
|---|---|
| `data/mock/contentClusters.ts` | su-kacagi / tikaniklik / isitma cluster tanımları |
| `data/mock/experts.ts` | Boş `expertProfiles` + `getVerifiedExpertById` |
| `data/mock/localCases.ts` | Boş `localCases` + `getPublishableLocalCases` |
| `lib/utils/publication.ts` | `isPublishedContent` (status yoksa published) |
| `lib/utils/sameAs.ts` | `normalizeSameAs` |
| `lib/utils/turkishSuffix.ts` | `getTurkishLocative` |
| `scripts/seo-audit-report.mjs` | SEO audit iskeleti → `seo-audits/generated/` |
| `tests/*.test.mjs` | publication, sameAs, turkishSuffix, contentClusters |
| `seo-audits/claim-audit.md` | Soft claim tarama raporu |
| `seo-audits/owner-verification-checklist.md` | Sahip doğrulama listesi |
| `seo-audits/pr-1/FINAL-REPORT.md` | Bu rapor |

## Eklenen tipler

* VerificationStatus
* ContentCluster
* SearchIntent
* PublicationStatus
* ExpertProfile
* LocalCase
* BlogPost genişletmeleri (`clusterId`, `intent`, related alanlar, opsiyonel `status`)
* SiteSettingsVerification / `SiteSettings.verification`

## Draft güvenliği

`status: "draft"` (veya published olmayan) içerikler şu yüzeylerden filtrelenir:

* `isPublishedContent` (`lib/utils/publication.ts`)
* `mockBlogRepository.findPublished`
* `blogService.getPublishedBlogPosts` / `getPublishedBlogPostBySlug`
* `app/blog/[slug]` sayfa + `generateStaticParams`
* `app/api/blog/[slug]`
* `internalLinks` blog kaynakları
* `ServiceDetailTemplate` related blog yardımcıları
* Sitemap published blog listesi (blogService üzerinden)

`status` alanı yoksa içerik **published** kabul edilir (geriye uyumluluk).

## Claim audit sonucu

Kaynak: [`seo-audits/claim-audit.md`](../claim-audit.md)

* Toplam yumuşatılan ifade satırı: **8** (services 5 + seo 1 + hakkimizda 2)
* Değiştirilen soft claim kümesi: lisanslı ekip, 15+ yıl, sertifikalı personel, “garanti altına alıyoruz”
* Değiştirilmeyen teknik / bağlamlı eşleşmeler: FAQ soft-claim reddi, site “yetkili onayı”, “6 ay işçilik garantisi”, CSS `%`
* Manuel doğrulama gereken: doğalgaz/kombi yetkileri, tecrübe yılı, adres/koordinat, sertifikalar

## Schema düzeltmeleri

* `schemaService.buildSameAs` → `normalizeSameAs([gbp, ...sameAs])` ile tekilleştirme + boş/geçersiz URL ayıklama
* Ham `sameAs` dizisinde GBP tekrarı audit’te uyarı olarak raporlanır; çıktı schema’da tekilleşir

## Test sonuçları

| Komut | Sonuç |
|---|---|
| `npm test` | başarılı (28/28) |
| `npm run lint` | başarılı |
| `npm run typecheck` | başarılı |
| `npm run seo:audit` | başarılı (30 sayfa, 9 global warning — doğrulama alanları) |
| `npm run build` | başarılı (`NEXT_PUBLIC_SITE_URL=https://724tesisatci.com` ile; prod gate mevcut davranış) |

Not: Yerel SWC native DLL uyarısı görünüyor; compile/lint/build tamamlandı.

## Mevcut fakat kapsam dışı problemler

* Owner doğrulaması tamamlanmamış NAP / lisans / tecrübe alanları
* ExpertProfile / LocalCase hâlâ boş (bilinçli; sahte veri yok)
* Cluster blog içerikleri yok (PR-2)
* İlçe nearby/region ve hizmet related guide zenginleştirmesi (PR-3)
* `seo:audit` hâlâ wordCount / internal link sayıları için iskelet (null alanlar)
* Money URL stratejisi: `/kagithane-tesisatci` açılmadı (`/` primary)

## PR-2 için hazır alanlar

* Content clusters (`contentClusters.ts`)
* Draft publication modeli (`PublicationStatus` + filtreler)
* Related article alanları (`BlogPost`)
* Related service alanları
* Technical review / expert alanları (verified expert bağlanınca)

## Manuel doğrulama gereken bilgiler

Owner checklist özeti:

* Yasal unvan, e-posta, açık adres, posta kodu, koordinatlar
* Çalışma saatleri / 7/24 operasyon teyidi
* Fiilen hizmet verilen ilçeler
* Doğalgaz / kombi / ustalık belgeleri
* Tecrübe yılı (doğrulanırsa metne geri alınabilir)
* Gerçek ekip isimleri + onaylı saha vakaları (PR-2/sonrası içerik için)
