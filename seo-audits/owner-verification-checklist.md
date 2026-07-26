# İşletme sahibi doğrulama kontrol listesi

**Proje:** 724tesisatci.com  
**Kaynak NAP:** `data/mock/siteSettings.ts`  
**Not:** Bilinmeyen alanlar uydurulmadı.

## İşletme bilgileri

| Bilgi | Mevcut değer | Durum | Kanıt/Kaynak | Yapılacak işlem |
|---|---|---|---|---|
| Kesin işletme adı | 724 Tesisatçı | verified (site) | siteSettings.businessName | Yasal unvan ile eşleştir |
| Yasal unvan | — | needs-verification | — | Sahipten iste |
| Aktif telefon | +90 532 346 87 69 | verified (site kullanımı) | siteSettings.phone | GBP ile çapraz kontrol |
| WhatsApp | +90 532 346 87 69 | verified (site) | siteSettings.whatsapp | Aynı numarayı teyit et |
| E-posta | info@724tesisatci.com | needs-verification | siteSettings.email | Gelen kutusu çalışıyor mu? |
| Kesin açık adres | Emniyet Evleri, Semerkant Sk. 14/A… | needs-verification | siteSettings.address | GBP / tapu / fatura ile doğrula |
| Posta kodu | 34415 | needs-verification | siteSettings.postalCode | Adres doğrulaması ile |
| Koordinatlar | 41.0843817, 29.0005683 | needs-verification | siteSettings lat/lng | Haritada pin doğrula |
| Çalışma saatleri | 7/24 / Mo-Su 00:00-23:59 | needs-verification | siteSettings | Gerçek operasyonu teyit et |

## Hizmet kapsamı

| Bilgi | Mevcut değer | Durum | Kanıt/Kaynak | Yapılacak işlem |
|---|---|---|---|---|
| Gerçek hizmet verilen ilçeler | Site 39 ilçe listeliyor | needs-verification | locationContent | Fiilen gidilen ilçeleri işaretle |
| Hizmet verilmeyen ilçeler | — | needs-verification | — | Listele |
| Gece hizmeti | 7/24 iddiası | needs-verification | copy | Operasyon teyidi |
| Acil servis kapsamı | Su kaçağı / tıkanıklık vb. | needs-verification | landings | Net sınırlar yaz |
| Ortalama varış süresi | Soft: trafik/ekip | needs-verification | — | Varsa kayıt paylaş |
| Garanti kapsamı | 6 ay işçilik (form) | needs-verification | FAQ/copy | Yazılı sözleşme örneği |
| Fiyatlandırma yöntemi | Keşif sonrası yazılı teklif | needs-verification | FAQ | Örnek form |

## Yetki ve belgeler

| Bilgi | Mevcut değer | Durum | Kanıt/Kaynak | Yapılacak işlem |
|---|---|---|---|---|
| Doğalgaz yetkileri | Metinden kaldırıldı (PR-1) | needs-verification | — | Belge yükle veya iddia yok |
| Kombi hizmet yetkileri | — | needs-verification | — | Belge |
| Ustalık belgeleri | — | needs-verification | — | Belge |
| Mesleki yeterlilik | — | needs-verification | — | Belge |
| Sertifikalar | UI’dan kaldırıldı (PR-1) | needs-verification | — | Belge |
| Belge doğrulama URL | — | not-applicable | — | — |

## Deneyim iddiaları

| Bilgi | Mevcut değer | Durum | Kanıt/Kaynak | Yapılacak işlem |
|---|---|---|---|---|
| Faaliyete başlama yılı | — | needs-verification | — | Yıl ver |
| Tecrübe yılı | “15+ yıl” kaldırıldı | needs-verification | — | Doğru yıl veya yok |
| Tamamlanan iş sayısı | — | needs-verification | — | — |
| Müşteri sayısı | — | not-applicable | — | Abartılı sayı kullanma |
| Ekip büyüklüğü | — | needs-verification | — | — |

## İçerik kanıtları

| Bilgi | Mevcut değer | Durum | Kanıt/Kaynak | Yapılacak işlem |
|---|---|---|---|---|
| Gerçek ekip isimleri | expertProfiles = [] | needs-verification | experts.ts | İsim + onay |
| Ekip fotoğrafları | Stok/hero görseller | needs-verification | public/images | Gerçek foto |
| Gerçek saha çalışmaları | localCases = [] | needs-verification | localCases.ts | Vaka + gizlilik |
| Öncesi/sonrası görseller | — | needs-verification | — | İzinli görseller |
| Müşteri izinleri | — | needs-verification | — | KVKK onayı |
| Gerçek yorum kaynakları | GBP | needs-verification | maps link | Yorum hızı |
