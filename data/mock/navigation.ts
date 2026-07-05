import type { Navigation } from "@/types";
import { services } from "./services";
import { getDistrictLocations } from "./locations";

const districtNavItems = getDistrictLocations().map((d) => ({
  label: d.isHeadquarters ? `${d.title} (Merkez)` : d.title,
  href: d.canonicalPath,
}));

export const navigation: Navigation = {
  header: [
    {
      label: "Hizmetlerimiz",
      href: "/hizmetler",
      children: services.map((service) => ({
        label: service.title,
        href: service.canonicalPath,
      })),
    },
    {
      label: "Hizmet Bölgeleri",
      href: "/hizmet-bolgeleri",
      children: [
        { label: "İstanbul Geneli", href: "/hizmet-bolgeleri/istanbul" },
        ...districtNavItems,
        {
          label: "Kağıthane Mahalleleri",
          href: "/hizmet-bolgeleri/kagithane-mahalleleri",
        },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
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
