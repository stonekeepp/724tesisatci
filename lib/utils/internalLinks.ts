import { services } from "@/data/mock/services";
import { blogPosts } from "@/data/mock/blogPosts";

const STATIC_LABELS: Record<string, string> = {
  "/": "Kağıthane tesisatçı",
  "/hizmetler": "Tüm Hizmetler",
  "/hizmet-bolgeleri": "Hizmet Bölgeleri",
  "/hizmet-bolgeleri/istanbul": "İstanbul Geneli Tesisat",
  "/hizmet-bolgeleri/kagithane": "Kağıthane Tesisat Hizmet Bölgeleri",
  "/hizmet-bolgeleri/kagithane-mahalleleri": "Kağıthane Mahalleleri",
  "/blog": "Tesisat Blog",
  "/sss": "Sık Sorulan Sorular",
  "/hakkimizda": "Hakkımızda",
  "/iletisim": "İletişim",
  "/gizlilik-politikasi": "Gizlilik Politikası",
  "/cerez-politikasi": "Çerez Politikası",
};

for (const service of services) {
  STATIC_LABELS[service.canonicalPath] = service.title;
}

for (const post of blogPosts.filter((p) => p.status === "published")) {
  STATIC_LABELS[post.canonicalPath] = post.title;
}

export function getInternalLinkLabel(path: string): string {
  if (STATIC_LABELS[path]) return STATIC_LABELS[path];

  const districtMatch = path.match(/^\/hizmet-bolgeleri\/([^/]+)$/);
  if (districtMatch) {
    return districtMatch[1]
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  return path;
}

export const primaryHubLinks = [
  { href: "/", label: "Kağıthane tesisatçı" },
  { href: "/hizmetler", label: "Tüm Hizmetler" },
  { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri" },
  { href: "/hizmet-bolgeleri/kagithane", label: "Kağıthane Tesisat Hizmet Bölgeleri" },
  { href: "/blog", label: "Tesisat Blog" },
  { href: "/sss", label: "Sık Sorulan Sorular" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const popularServiceLinks = [
  { href: "/hizmetler/su-kacagi-tespit-ve-onarim", label: "Su Kaçağı Tespiti" },
  { href: "/hizmetler/tikaniklik-acma", label: "Tıkanıklık Açma" },
  { href: "/hizmetler/petek-temizleme", label: "Petek Temizleme" },
  { href: "/hizmetler/kombi-servisi-ve-tesisati", label: "Kombi Servisi" },
  { href: "/hizmetler/pimas-yikama", label: "Pimaş Yıkama" },
] as const;
