/** Sayfa görsel URL'leri */

export const pageImages = {
  hizmetlerHero: "/images/hizmetler-hero.webp",
  hizmetBolgeleriHero: "/images/hizmet-bolgeleri-hero.webp",
  hakkimizdaHero: "/images/hakkimizda-hero.webp",
  hakkimizdaLeakDevice: "/images/hakkimizda-leak-device.webp",
  hakkimizdaServiceMap: "/images/hakkimizda-service-map.webp",
  hakkimizdaTeam: "/images/hakkimizda-team.webp",
  iletisimMap: "/images/iletisim-kagithane-merkez-map.webp",
  sssCta: "/images/sss-cta.webp",
} as const;

export const serviceHeroImages: Record<
  string,
  { src: string; alt: string; variant?: "default" | "dark"; imageClassName?: string }
> = {
  "su-tesisati": {
    src: "/images/su-tesisati-hero.webp",
    alt: "Profesyonel su tesisatı kurulumu",
  },
  "kombi-servisi-ve-tesisati": {
    src: "/images/kombi-servisi-hero.webp",
    alt: "Kombi servisi ve tesisat kurulumu",
  },
  "kalorifer-tesisati": {
    src: "/images/kalorifer-tesisati-hero.webp",
    alt: "Kalorifer tesisatı kurulumu — radyatör boru bağlantısı",
    imageClassName: "object-cover object-center",
  },
  "su-kacagi-tespit-ve-onarim": {
    src: "/images/su-kacagi-tespit-hero.webp",
    alt: "Termal kamera ile su kaçağı tespiti",
  },
  "tikaniklik-acma": {
    src: "/images/tikaniklik-acma-hero.webp",
    alt: "Robotik tıkanıklık açma hizmeti",
  },
  "petek-temizleme": {
    src: "/images/petek-temizleme-hero.webp",
    alt: "Petek temizleme uygulaması",
  },
  "kamerali-tesisat-goruntuleme-ve-onarim": {
    src: "/images/kamerali-tesisat-hero.webp",
    alt: "Kameralı tesisat görüntüleme",
  },
  "pimas-tesisati": {
    src: "/images/pimas-tesisati-hero.webp",
    alt: "Pimaş tesisatı kurulumu — PVC gider borusu montajı",
    imageClassName: "object-cover object-center",
  },
  "dogalgaz-tesisati": {
    src: "/images/dogalgaz-tesisati-hero.webp",
    alt: "Doğalgaz tesisatı kurulumu",
  },
  "pimas-yikama": {
    src: "/images/pimas-yikama-hero.webp",
    alt: "Pimaş yıkama robotik kamera sistemi",
  },
  "gomme-rezervuar-tamiri": {
    src: "/images/gomme-rezervuar-hero.webp",
    alt: "Gömme rezervuar tamiri — duvar içi rezervuar mekanizma onarımı",
  },
  "batarya-musluk-montaj": {
    src: "/images/batarya-musluk-hero.webp",
    alt: "Batarya ve musluk montaj — mutfak ve banyo armatür kurulumu",
  },
};

export const blogImages: Record<string, string> = {
  "su-kacagi-belirtileri": "/images/blog-su-kacagi-belirtileri.webp",
  "kombi-basinci-neden-duser": "/images/blog-kombi-basinci.webp",
  "lavabo-tikanikligi-nasil-acilir": "/images/blog-lavabo-tikanikligi.webp",
  "periyodik-tesisat-bakimi": "/images/blog-periyodik-bakim.webp",
  "kagithane-su-kacagi-tespiti": "/images/su-kacagi-tespit-hero.webp",
  "kagithane-tikaniklik-acma": "/images/tikaniklik-acma-hero.webp",
  "kagithane-kombi-petek-sorunlari": "/images/kombi-servisi-hero.webp",
  "celiktepe-merkez-operasyon-mahalle-servisi": "/images/iletisim-kagithane-merkez-map.webp",
};
