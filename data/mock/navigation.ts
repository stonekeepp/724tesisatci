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
    { label: "SSS", href: "/sss" },
    { label: "İletişim", href: "/iletisim" },
  ],
  footer: {
    services: services.map((service) => ({
      label: service.title,
      href: service.canonicalPath,
    })),
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
