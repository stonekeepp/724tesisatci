import type { ContentCluster } from "@/types";

export type ContentClusterDefinition = {
  id: ContentCluster;
  name: string;
  description: string;
  primaryServiceSlugs: string[];
  localLandingSlugs: string[];
  articleSlugs: string[];
};

/**
 * Topical authority clusters A/B/C.
 * articleSlugs includes published guides + PR-2 drafts (drafts stay non-public via publication filters).
 */
export const contentClusters: ContentClusterDefinition[] = [
  {
    id: "su-kacagi",
    name: "Su kaçağı",
    description:
      "Kırmadan cihazlı su kaçağı tespiti, belirtiler, onarım ve Kağıthane yerel rehberler.",
    primaryServiceSlugs: ["su-kacagi-tespit-ve-onarim"],
    localLandingSlugs: ["kagithane-su-kacagi-tespiti"],
    articleSlugs: [
      "su-kacagi-belirtileri",
      "kagithane-su-kacagi-tespiti",
      "musluklar-kapaliyken-su-sayaci-neden-doner",
      "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
      "duvar-nemi-su-kacagi-mi-yogusma-mi",
      "musluk-neden-damlar",
      "rezervuar-neden-su-akiyor",
      "evde-su-basinci-neden-dusuk",
      "gizli-su-kacagi-nasil-tespit-edilir",
    ],
  },
  {
    id: "tikaniklik",
    name: "Tıkanıklık ve pimaş",
    description:
      "Robot/spiral tıkanıklık açma, pimaş yıkama, kameralı gider görüntüleme ve yerel rehberler.",
    primaryServiceSlugs: [
      "tikaniklik-acma",
      "pimas-yikama",
      "kamerali-tesisat-goruntuleme-ve-onarim",
    ],
    localLandingSlugs: [
      "kagithane-tikaniklik-acma",
      "kagithane-pimas-acma",
      "kagithane-kamerali-tesisat-goruntuleme",
    ],
    articleSlugs: [
      "lavabo-tikanikligi-nasil-acilir",
      "kagithane-tikaniklik-acma",
      "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
      "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
      "birden-fazla-gider-ayni-anda-neden-yavaslar",
      "tuvalet-tikanikligi-neden-olur",
    ],
  },
  {
    id: "isitma",
    name: "Kombi, petek ve kalorifer",
    description:
      "Kombi basıncı, petek temizleme, kalorifer hattı ve Kağıthane ısıtma rehberleri.",
    primaryServiceSlugs: [
      "kombi-servisi-ve-tesisati",
      "petek-temizleme",
      "kalorifer-tesisati",
    ],
    localLandingSlugs: [
      "kagithane-kombi-servisi",
      "kagithane-petek-temizleme",
      "kagithane-kalorifer-tesisati",
    ],
    articleSlugs: [
      "kombi-basinci-neden-duser",
      "kagithane-kombi-petek-sorunlari",
      "kombi-basinci-neden-surekli-duser",
      "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
      "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
      "kalorifer-kacagi-nasil-anlasilir",
      "petek-hic-isinmiyor-ne-yapmali",
    ],
  },
];

export function getContentClusterById(
  id: ContentCluster
): ContentClusterDefinition | undefined {
  return contentClusters.find((c) => c.id === id);
}

/** Published article slugs only for a cluster (public navigation helper). */
export function getPublishedArticleSlugsForCluster(
  id: ContentCluster,
  isPublishedSlug: (slug: string) => boolean
): string[] {
  const cluster = getContentClusterById(id);
  if (!cluster) return [];
  return cluster.articleSlugs.filter(isPublishedSlug);
}
