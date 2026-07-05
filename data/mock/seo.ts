import type { SEOData } from "@/types";

export const defaultSeo: SEOData = {
  title: "İstanbul Geneli 7/24 Tesisatçı | Su Kaçağı, Tıkanıklık, Kombi — 724 Tesisatçı",
  description:
    "İstanbul genelinde 7/24 profesyonel tesisat hizmeti. Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, pimaş yıkama ve doğalgaz tesisatı. Cihazlı tespit, yazılı teklif, garantili işçilik, aynı gün servis.",
  canonicalPath: "/",
};

export const staticPageSeo: Record<string, SEOData> = {
  hizmetler: {
    title: "İstanbul Tesisat Hizmetleri | Su Kaçağı, Tıkanıklık, Kombi — 724 Tesisatçı",
    description:
      "İstanbul genelinde 10 uzmanlık alanında premium tesisat hizmeti: su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, pimaş yıkama ve doğalgaz tesisatı. Cihazlı tespit, yazılı teklif, garantili işçilik, 7/24 acil servis.",
    canonicalPath: "/hizmetler",
  },
  "hizmet-bolgeleri": {
    title: "İstanbul İlçe Listesi | 39 İlçede 7/24 Tesisat — 724 Tesisatçı",
    description:
      "İstanbul'un 39 ilçesinde 7/24 tesisat hizmeti. Kağıthane merkez operasyon, 19 mahalle, Avrupa ve Anadolu Yakası'na hızlı mobil ekip yönlendirmesi.",
    canonicalPath: "/hizmet-bolgeleri",
  },
  blog: {
    title: "Tesisat Blog | 724 Tesisatçı Uzman Yazıları",
    description:
      "Su kaçağı, tıkanıklık, kombi bakımı ve tesisat konularında uzman rehberler ve pratik bilgiler.",
    canonicalPath: "/blog",
  },
  sss: {
    title: "SSS | İstanbul Tesisat — Su Kaçağı, Tıkanıklık, Kombi | 724 Tesisatçı",
    description:
      "724 Tesisatçı sık sorulan sorular: su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, fiyatlandırma, garanti, acil müdahale ve İstanbul geneli 7/24 servis hakkında kapsamlı yanıtlar.",
    canonicalPath: "/sss",
  },
  hakkimizda: {
    title: "Hakkımızda | 724 Tesisatçı — İstanbul Tesisat Uzmanları",
    description:
      "724 Tesisatçı: Kağıthane merkezli, İstanbul genelinde 7/24 profesyonel tesisat hizmeti. Termal kamera ile kırmadan tespit, yazılı teklif, garantili işçilik ve 15+ yıl tecrübe.",
    canonicalPath: "/hakkimizda",
  },
  iletisim: {
    title: "İletişim | 724 Tesisatçı Servis Talebi",
    description:
      "724 Tesisatçı ile iletişime geçin. Servis talebi oluşturun veya hemen arayın. 7/24 acil tesisat desteği.",
    canonicalPath: "/iletisim",
  },
  "gizlilik-politikasi": {
    title: "Gizlilik Politikası | 724 Tesisatçı",
    description:
      "724 Tesisatçı gizlilik politikası ve KVKK aydınlatma metni. Kişisel verilerinizin korunması hakkında bilgi.",
    canonicalPath: "/gizlilik-politikasi",
  },
  "cerez-politikasi": {
    title: "Çerez Politikası | 724 Tesisatçı",
    description:
      "724 Tesisatçı web sitesi çerez kullanım politikası ve tercihleriniz hakkında bilgilendirme.",
    canonicalPath: "/cerez-politikasi",
  },
};
