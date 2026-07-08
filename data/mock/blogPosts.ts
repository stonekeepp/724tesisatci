import type { BlogPost } from "@/types";
import { blogImages } from "@/data/mock/images";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Su Kaçağı Belirtileri Nelerdir? Gizli Tehlikeyi Nasıl Fark Edersiniz?",
    slug: "su-kacagi-belirtileri",
    excerpt:
      "Su kaçağı belirtilerini erken fark etmek büyük hasarları önler. Duvar nemlenmesi, yüksek su faturası ve sayaç dönmesi gibi işaretleri öğrenin.",
    content: `
## Su Kaçağı Nedir ve Neden Tehlikelidir?

Su kaçağı, bina tesisatındaki boru, vana veya bağlantı noktalarından suyun kontrolsüz şekilde sızmasıdır. Gizli kaçaklar özellikle tehlikelidir çünkü uzun süre fark edilmeden duvar, tavan ve zemin hasarına yol açabilir.

## En Sık Görülen Su Kaçağı Belirtileri

### 1. Anormal Su Faturası Artışı
Tüm alışkanlıklarınız aynı kalmasına rağmen su faturanız belirgin şekilde arttıysa, tesisatınızda gizli bir kaçak olabilir. Özellikle kış aylarında bu durum daha sık görülür.

### 2. Duvarlarda Nem ve Küf
Duvar kağıdında kabarma, boyada dökülme veya köşelerde küf oluşumu nem birikiminin en belirgin işaretlerindendir. Özellikle banyo ve mutfak duvarlarına dikkat edin.

### 3. Sayaç Kontrolü
Tüm muslukları kapattıktan sonra su sayacınız hâlâ dönüyorsa, tesisatınızda aktif bir kaçak var demektir. Bu basit test evde hemen uygulanabilir.

### 4. Zemin Isınması
Yerden ısıtma sistemlerinde kaçak olduğunda zemin belirli noktalarda anormal şekilde ısınır. Termal kamera ile bu noktalar kolayca tespit edilir.

### 5. Gizli Sesler
Sessiz bir ortamda duvar içinden gelen hafif su sesi veya tıslama kaçak belirtisi olabilir.

## Ne Zaman Profesyonel Destek Almalısınız?

Yukarıdaki belirtilerden birini veya birkaçını fark ettiğinizde vakit kaybetmeden profesyonel su kaçağı tespit hizmeti almanızı öneririz. Termal kamera ve akustik dinleme cihazları ile kaçak noktası kırmadan tespit edilebilir.

## 724 Tesisatçı ile Su Kaçağı Tespiti

724 Tesisatçı olarak İstanbul genelinde termal kamera, akustik dinleme ve nem ölçer cihazlarımız ile kırmadan noktasal su kaçağı tespiti yapıyoruz. Gereksiz kazı ve tadilat masraflarından kaçının.

Hemen arayın veya WhatsApp üzerinden ulaşın — 7/24 hizmetinizdeyiz.
    `.trim(),
    category: "Su Kaçağı",
    publishedAt: "2025-06-15T10:00:00.000Z",
    updatedAt: "2025-06-15T10:00:00.000Z",
    readingTime: 6,
    seoTitle: "Su Kaçağı Belirtileri Nelerdir? | 724 Tesisatçı Blog",
    seoDescription:
      "Su kaçağı belirtilerini öğrenin. Yüksek su faturası, duvar nemlenmesi, sayaç dönmesi ve daha fazlası. Gizli kaçağı erken fark edin.",
    canonicalPath: "/blog/su-kacagi-belirtileri",
    relatedServices: ["su-kacagi-tespit-ve-onarim", "kamerali-tesisat-goruntuleme-ve-onarim"],
    faq: [
      {
        question: "Su kaçağı kendim tespit edebilir miyim?",
        answer: "Basit sayaç kontrolü evde yapılabilir ancak gizli kaçaklar için profesyonel cihazlar gereklidir.",
        category: "su-kacagi",
      },
    ],
    status: "published",
    image: blogImages["su-kacagi-belirtileri"],
  },
  {
    id: "2",
    title: "Kombi Basıncı Neden Düşer? Evde Yapılabilecek Hızlı Çözümler",
    slug: "kombi-basinci-neden-duser",
    excerpt:
      "Kış aylarında sıkça karşılaşılan kombi su basıncı düşmesi probleminin temel nedenleri ve pratik çözümleri.",
    content: "Kombi basıncı düşmesi hakkında detaylı rehber yakında eklenecek.",
    category: "Kombi & Petek Bakımı",
    publishedAt: "2025-05-20T10:00:00.000Z",
    updatedAt: "2025-05-20T10:00:00.000Z",
    readingTime: 5,
    seoTitle: "Kombi Basıncı Neden Düşer? | 724 Tesisatçı Blog",
    seoDescription: "Kombi su basıncı düşmesi nedenleri ve evde yapılabilecek hızlı çözümler. Uzman rehber.",
    canonicalPath: "/blog/kombi-basinci-neden-duser",
    relatedServices: ["kombi-servisi-ve-tesisati", "petek-temizleme"],
    faq: [],
    status: "draft",
    image: blogImages["kombi-basinci-neden-duser"],
  },
  {
    id: "3",
    title: "Lavabo Tıkanıklığı Nasıl Açılır? Kameralı Sistemlerin Avantajları",
    slug: "lavabo-tikanikligi-nasil-acilir",
    excerpt:
      "Lavabo tıkanıklığının nedenleri, evde denenebilecek yöntemler ve kalıcı çözüm için kameralı sistem avantajları.",
    content: "Lavabo tıkanıklığı rehberi yakında eklenecek.",
    category: "Tıkanıklık Açma",
    publishedAt: "2025-04-10T10:00:00.000Z",
    updatedAt: "2025-04-10T10:00:00.000Z",
    readingTime: 4,
    seoTitle: "Lavabo Tıkanıklığı Nasıl Açılır? | 724 Tesisatçı Blog",
    seoDescription: "Lavabo tıkanıklığı açma yöntemleri ve kameralı sistemlerin avantajları. Uzman tavsiyeleri.",
    canonicalPath: "/blog/lavabo-tikanikligi-nasil-acilir",
    relatedServices: ["tikaniklik-acma", "kamerali-tesisat-goruntuleme-ve-onarim"],
    faq: [],
    status: "draft",
    image: blogImages["lavabo-tikanikligi-nasil-acilir"],
  },
  {
    id: "4",
    title: "Periyodik Tesisat Bakımının Önemi ve Maliyetlere Etkisi",
    slug: "periyodik-tesisat-bakimi",
    excerpt:
      "Evinizin su tesisatı sistemlerinin düzenli kontrolünün uzun vadede ani arızaları nasıl engellediği hakkında ipuçları.",
    content: "Periyodik tesisat bakımı rehberi yakında eklenecek.",
    category: "Genel Bakım",
    publishedAt: "2025-03-01T10:00:00.000Z",
    updatedAt: "2025-03-01T10:00:00.000Z",
    readingTime: 5,
    seoTitle: "Periyodik Tesisat Bakımı | 724 Tesisatçı Blog",
    seoDescription: "Periyodik tesisat bakımının önemi ve maliyetlere etkisi. Uzun vadeli tasarruf ipuçları.",
    canonicalPath: "/blog/periyodik-tesisat-bakimi",
    relatedServices: ["su-tesisati", "pimas-yikama"],
    faq: [],
    status: "draft",
    image: blogImages["periyodik-tesisat-bakimi"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPublishedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.status === "published");
}
