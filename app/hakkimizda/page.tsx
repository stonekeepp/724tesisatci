import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildMetadata, getSiteUrl } from "@/lib/services/seoService";
import { getSiteSettings } from "@/lib/services/settingsService";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
} from "@/lib/services/schemaService";
import { staticPageSeo } from "@/data/mock/seo";
import { pageImages } from "@/data/mock/images";
import { StitchImage } from "@/components/ui/StitchImage";
import {
  getPhoneHref,
  getWhatsAppHref,
} from "@/data/mock/siteSettings";

export const metadata = buildMetadata(staticPageSeo.hakkimizda);

const coreValues = [
  {
    icon: "speed",
    title: "Hız ve Zamanlama",
    description:
      "İstanbul genelinde randevu saatlerine tam riayet eder; su kaçağı, tıkanıklık ve kombi arızalarına en kısa sürede kalıcı müdahalede bulunuruz. Acil çağrılarda ortalama 30–45 dakika varış hedefliyoruz.",
  },
  {
    icon: "policy",
    title: "Şeffaf Fiyatlandırma",
    description:
      "Keşif ve cihazla tespit sonrası net, yazılı fiyat teklifi sunarız. Gizli maliyet veya sürpriz fatura uygulamıyoruz; onayınız olmadan işleme başlanmaz.",
  },
  {
    icon: "engineering",
    title: "Cihazlı Uzmanlık",
    description:
      "Termal kamera, akustik dinleme ve robotik cihazlarla kırmadan noktasal tespit yapıyor; gereksiz kırım maliyetini minimuma indiriyoruz.",
    filled: true,
  },
] as const;

const expertiseItems = [
  {
    label: "Termal Kamera ile Su Kaçağı Tespiti",
    href: "/hizmetler/su-kacagi-tespit-ve-onarim",
  },
  {
    label: "Akustik Dinleme Cihazları",
    href: "/hizmetler/su-kacagi-tespit-ve-onarim",
  },
  {
    label: "Robotik Tıkanıklık Açma",
    href: "/hizmetler/tikaniklik-acma",
  },
] as const;

export default async function HakkimizdaPage() {
  const settings = await getSiteSettings();
  const siteUrl = getSiteUrl();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
  ];

  const schemas = [
    buildOrganizationSchema(settings),
    buildLocalBusinessSchema(settings, "İstanbul"),
    buildBreadcrumbSchema(breadcrumbs),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "724 Tesisatçı Hakkımızda",
      description: staticPageSeo.hakkimizda.description,
      url: `${siteUrl}/hakkimizda`,
      mainEntity: {
        "@type": "Organization",
        name: settings.siteName,
        description:
          "İstanbul genelinde 7/24 profesyonel tesisat hizmeti sunan Kağıthane merkezli tesisat firması.",
      },
    },
  ];

  return (
    <SiteLayout activePath="/hakkimizda">
      <JsonLdScript data={schemas} />

      <section className="pt-16 md:pt-section-padding pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 flex flex-col gap-stack-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high w-fit">
              <span
                className="material-symbols-outlined fill text-[16px] text-secondary"
                aria-hidden="true"
              >
                verified_user
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant">
                Güvenilir Kurumsal Yapı
              </span>
            </div>
            <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background">
              Sıhhi Tesisatta <br />
              <span className="text-secondary">Yeni Nesil Uzmanlık.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              724 Tesisatçı olarak Kağıthane merkezli operasyonumuzla İstanbul&apos;un 39 ilçesinde 7/24 profesyonel tesisat hizmeti sunuyoruz. Termal kamera, akustik dinleme ve robotik cihazlarla kırmadan tespit; yazılı teklif ve garantili işçilik ile şeffaf, kalıcı çözümler üretiyoruz.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex flex-col border-l-2 border-outline-variant pl-4">
                <span className="font-headline-md text-headline-md text-primary">15+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Yıllık Tecrübe</span>
              </div>
              <div className="flex flex-col border-l-2 border-outline-variant pl-4">
                <span className="font-headline-md text-headline-md text-primary">10.000+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Mutlu Müşteri</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={getPhoneHref(settings.phone)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                Hemen Ara
              </a>
              <a
                href={getWhatsAppHref(settings.whatsapp, settings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#075E54] text-white rounded-xl font-label-md hover:bg-[#054A42] transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                WhatsApp
              </a>
              <Link
                href="/hizmetler"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-primary border border-outline-variant rounded-xl font-label-md hover:bg-surface-variant transition-colors"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 relative mt-12 md:mt-0">
            <div className="absolute inset-0 bg-secondary opacity-5 rounded-2xl transform translate-x-4 translate-y-4" />
            <StitchImage
              src={pageImages.hakkimizdaHero}
              alt="724 Tesisatçı profesyonel tesisat ekibi — İstanbul geneli 7/24 su tesisatı ve kaçak tespiti hizmeti"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative w-full h-[400px] md:h-[500px] object-cover rounded-2xl soft-shadow border border-outline-variant z-10"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-padding px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-stack-sm mb-8">
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              Temel Değerlerimiz
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              İstanbul genelinde sunduğumuz tesisat hizmetlerinde kaliteyi belirleyen, her projede taviz vermediğimiz standartlarımız.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 soft-shadow flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                  <span
                    className={`material-symbols-outlined text-[28px] ${
                      "filled" in item && item.filled ? "fill" : ""
                    }`}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <StitchImage
              src={pageImages.hakkimizdaLeakDevice}
              alt="Termal kamera ve akustik dinleme cihazı ile İstanbul geneli kırmadan su kaçağı tespiti"
              className="w-full h-auto rounded-2xl soft-shadow border border-outline-variant"
            />
          </div>
          <div className="flex flex-col gap-stack-md order-1 md:order-2">
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              Neden 724 Tesisatçı?
            </h2>
            <h3 className="font-headline-md text-headline-md text-secondary">
              Kırmadan, Dökmeden, Temiz İşçilik.
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 leading-relaxed">
              Geleneksel tahmine dayalı tesisatçılığın aksine arızayı gözle değil, teknoloji ile tespit ediyoruz. Su kaçağı, tıkanıklık ve kombi arızalarında yalnızca sorunlu bölgeye müdahale ederek onarım süresini ve maliyetleri önemli ölçüde düşürüyoruz.
            </p>
            <ul className="flex flex-col gap-3 mt-4">
              {expertiseItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 group hover:text-secondary transition-colors"
                  >
                    <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-background group-hover:text-secondary transition-colors">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest border-y border-outline-variant py-section-padding px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex flex-col gap-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-on-background">
                İstanbul Geneli Servis Ağı
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Kağıthane merkez operasyonumuzdan Avrupa ve Anadolu Yakası&apos;na yönlendirilen mobil ekiplerimizle acil tesisat çağrılarınıza ortalama 30–45 dakikada yanıt veriyoruz.{" "}
                <Link
                  href="/hizmet-bolgeleri"
                  className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
                >
                  Hizmet bölgelerimizi inceleyin →
                </Link>
              </p>
              <div className="bg-surface rounded-lg p-4 border border-outline-variant mt-4 flex items-center gap-4">
                <span
                  className="material-symbols-outlined fill text-secondary text-[32px]"
                  aria-hidden="true"
                >
                  location_on
                </span>
                <div>
                  <p className="font-label-md text-label-md text-on-background font-bold">
                    Ortalama Varış Süresi
                  </p>
                  <p className="font-headline-md text-headline-md text-secondary">30 - 45 Dk</p>
                </div>
              </div>
              <Link
                href="/hizmet-bolgeleri/kagithane"
                className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
              >
                Kağıthane merkez operasyon →
              </Link>
            </div>
            <div className="md:w-2/3 w-full h-[400px] rounded-2xl overflow-hidden border border-outline-variant relative soft-shadow bg-surface-container-lowest">
              <StitchImage
                src={pageImages.hakkimizdaServiceMap}
                alt="724 Tesisatçı İstanbul geneli tesisat servis ağı haritası — hizmet bölgeleri ve aktif servis araçları"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center">
        <h2 className="font-display-lg text-display-lg text-on-background mb-4">
          Profesyonel Çözüm Ortağınız.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          Sorunsuz bir altyapı, huzurlu bir yaşam alanının temelidir. İstanbul genelinde su kaçağı tespiti, tıkanıklık açma, petek temizleme ve kombi servisi için güvenilir ekibimiz 7/24 hazır.
        </p>
        <div className="w-full max-w-4xl h-[300px] md:h-[450px] relative rounded-3xl overflow-hidden soft-shadow mb-12">
          <StitchImage
            src={pageImages.hakkimizdaTeam}
            alt="724 Tesisatçı sertifikalı tesisat ekibi — İstanbul profesyonel su tesisatı ve acil servis"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent flex items-end justify-center pb-8">
            <p className="font-headline-md text-headline-md text-white">
              Alanında Uzman, Sertifikalı Personel
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Link
            href="/iletisim"
            className="bg-primary-container text-on-primary font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-secondary transition-colors soft-shadow flex items-center gap-2"
          >
            <span className="material-symbols-outlined" aria-hidden="true">mail</span>
            Servis Talebi Oluştur
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary border border-outline-variant rounded-xl font-label-md hover:bg-surface-variant transition-colors"
          >
            Tesisat Blog
          </Link>
          <Link
            href="/sss"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary border border-outline-variant rounded-xl font-label-md hover:bg-surface-variant transition-colors"
          >
            Sık Sorulan Sorular
          </Link>
          <a
            href={getPhoneHref(settings.phone)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            Hemen Ara
          </a>
          <a
            href={getWhatsAppHref(settings.whatsapp, settings.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#075E54] text-white rounded-xl font-label-md hover:bg-[#054A42] transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined" aria-hidden="true">chat</span>
            WhatsApp
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
