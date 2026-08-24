# Haftalık GBP / yorum / NAP checklist

**Amaç:** Organik sayfa sayısından bağımsız olarak Map Pack + brand tıklama + CTR’yi taşımak.  
**Ölçüm:** Kaç sayfa eklendi değil; Map Pack tıklama, brand sorgu tıklama, ana sayfa CTR.

Kaynak çerçeve: `seo-audits/2026-07-25-keyword-comp/ACTION-RANKING.md` Faz 4.

---

## Her hafta (30–45 dk)

### Google Business Profile

- [ ] Gerçek iş sonrası en az 1–3 müşteriden doğal yorum iste (Kağıthane / mahalle geçmesi yeterli; şablon/script yok)
- [ ] En az 2–5 saha fotoğrafı yükle (kaçak, tıkanıklık, petek, hat — yüz/kişisel veri yok)
- [ ] Q&A kontrol: fiyat nasıl öğrenilir, 7/24, hangi mahalleler (soft claim; sabit dakika / % iddiası yok)
- [ ] NAP = sitedeki telefon ve adres ile birebir
- [ ] Profil “açık / doğrulanmış”; `maps.app.goo.gl` sameAs sitede kalsın

### Citation / NAP

- [ ] Yandex / Bing Places / sektör dizinleri — aynı işletme adı + telefon
- [ ] Eski ilanlarda farklı numara varsa düzelt veya kaldır
- [ ] Şube ağı iddiası yok; tek tutarlı varlık

### Yorum dili

- [ ] Müşteriye “lütfen Kağıthane yazın” baskısı yok; doğal mahalle geçişi yeterli
- [ ] Spam / aynı cümle tekrar yorum yok

---

## Her ay (ek)

- [ ] Rakip Map Pack drift: yorum sayısı, fotoğraf, title (Özyurt vb.)
- [ ] GSC: ana sayfa impression/CTR; hub’ın head seed’de yarışmaması
- [ ] “Keşfedildi – dizine eklenmedi” trendi (hijyen sonrası düşüş beklenir)

---

## Deploy sonrası (kod hijyeni ile birlikte, bir kez)

1. Prod `NEXT_PUBLIC_SITE_URL=https://724tesisatci.com`
2. Cloudflare cache purge (HTML + sitemap)
3. Sitemap ping / IndexNow
4. GSC’de `/kagithane-tesisatci` ve `/kagithane-tesisat` 301 → `/` doğrula

---

## Başarı ölçütü (4–8 hafta)

| Metrik | Hedef yön |
|--------|-----------|
| Map Pack tıklama | ↑ (yorum/foto hızı ile) |
| Brand + “kağıthane tesisatçı” tıklama (`/`) | ↑ |
| Ana sayfa CTR | ↑ / stabilize |
| Keşfedildi kuyruğu | ↓ veya “Tarandı”ya kayma |
| Yeni ince URL dalgası | Yok (bilinçli) |
