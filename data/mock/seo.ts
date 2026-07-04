import type { SEOData } from "@/types";

export const defaultSeo: SEOData = {
  title: "İstanbul Geneli 7/24 Tesisatçı Hizmeti | 724 Tesisatçı",
  description:
    "İstanbul genelinde 7/24 profesyonel tesisatçı hizmeti. Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve daha fazlası. Kırmadan, cihazla tespit.",
  canonicalPath: "/",
};

export const staticPageSeo: Record<string, SEOData> = {
  hizmetler: {
    title: "Tesisat Hizmetlerimiz | 724 Tesisatçı - İstanbul",
    description:
      "İstanbul'da su kaçağı, tıkanıklık, petek temizleme, kombi servisi ve tüm tesisat hizmetleri. Profesyonel ekip, garantili işçilik.",
    canonicalPath: "/hizmetler",
  },
  "hizmet-bolgeleri": {
    title: "İstanbul Tesisatçı Hizmet Bölgeleri | 724 Tesisatçı",
    description:
      "İstanbul'un tüm ilçelerine 7/24 tesisat hizmeti. Kağıthane merkezli, Avrupa ve Anadolu Yakası'na hızlı müdahale.",
    canonicalPath: "/hizmet-bolgeleri",
  },
  blog: {
    title: "Tesisat Blog | 724 Tesisatçı Uzman Yazıları",
    description:
      "Su kaçağı, tıkanıklık, kombi bakımı ve tesisat konularında uzman rehberler ve pratik bilgiler.",
    canonicalPath: "/blog",
  },
  sss: {
    title: "Sıkça Sorulan Sorular | 724 Tesisatçı",
    description:
      "Tesisat hizmetleri, fiyatlandırma, su kaçağı ve tıkanıklık hakkında sık sorulan sorular ve cevapları.",
    canonicalPath: "/sss",
  },
  hakkimizda: {
    title: "Hakkımızda | 724 Tesisatçı - Profesyonel Servis",
    description:
      "724 Tesisatçı olarak İstanbul genelinde 7/24 profesyonel tesisat hizmeti sunuyoruz. Deneyimli ekip, garantili işçilik.",
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
