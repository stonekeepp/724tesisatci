# Soft claim audit — PR-1

**Date:** 2026-07-26

## Değiştirilen ifadeler

| Dosya | Eski ifade | Yeni ifade | Gerekçe |
|---|---|---|---|
| `data/mock/services.ts` (doğalgaz) | Lisanslı ekip… | Standartlara uygun uygulama… | Belge doğrulanmamış lisans iddiası |
| `data/mock/services.ts` aboutHighlights | Lisanslı ekip ile… | Standartlara uygun montaj… | Aynı |
| `data/mock/services.ts` heroDescription | Lisanslı ekip… | Standartlara uygun… | Aynı |
| `data/mock/services.ts` seoDescription | Lisanslı ekip… | Standartlara uygun uygulama… | Aynı |
| `data/mock/services.ts` longDescription | güvenliğinizi garanti altına alıyoruz | güvenliğinizi destekliyoruz | Hukuki garanti dili yumuşatıldı |
| `data/mock/seo.ts` hakkimizda | 15+ yıl tecrübe | saha deneyimine dayalı uygulama | Tecrübe yılı doğrulanmamış |
| `app/hakkimizda/page.tsx` alt | sertifikalı tesisat ekibi | tesisat ekibi | Sertifika doğrulanmamış |
| `app/hakkimizda/page.tsx` overlay | Alanında Uzman, Sertifikalı Personel | Alanında Deneyimli Ekip | Aynı |

## Değişiklik gerektirmeyenler

| Eşleşme | Neden |
|---|---|
| “Abartılı yüzde yüz iddiası kullanılmaz” (FAQ) | Soft-claim reddi; pazarlama vaadi değil |
| “yetkili onayı” (site yönetimi) | Apartman/site yetkilisi onayı; lisans iddiası değil |
| “6 ay işçilik garantisi” | Mevcut süreç vaadi; soft claim listesinde değil |
| CSS / teknik `%` değerleri | Pazarlama değil |

## Manuel doğrulama gereken

- Doğalgaz / kombi yetki belgeleri (owner checklist)
- Tecrübe yılı / ekip sertifikaları
- Adres ve koordinat doğrulaması
