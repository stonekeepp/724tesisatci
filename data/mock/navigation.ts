import type { Navigation } from "@/types";

export const navigation: Navigation = {
  header: [
    { label: "Hizmetlerimiz", href: "/hizmetler" },
    { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
    { label: "Blog", href: "/blog" },
    { label: "Hakkımızda", href: "/hakkimizda" },
  ],
  footer: {
    services: [
      { label: "Su Kaçağı Tespiti", href: "/hizmetler/su-kacagi-tespit-ve-onarim" },
      { label: "Tıkanıklık Açma", href: "/hizmetler/tikaniklik-acma" },
      { label: "Petek Temizleme", href: "/hizmetler/petek-temizleme" },
      { label: "Kombi Servisi", href: "/hizmetler/kombi-servisi-ve-tesisati" },
      { label: "Pimaş Yıkama", href: "/hizmetler/pimas-yikama" },
    ],
    company: [
      { label: "Hizmetlerimiz", href: "/hizmetler" },
      { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
      { label: "Blog", href: "/blog" },
      { label: "SSS", href: "/sss" },
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İletişim", href: "/iletisim" },
    ],
    legal: [
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
      { label: "Çerez Politikası", href: "/cerez-politikasi" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
};
