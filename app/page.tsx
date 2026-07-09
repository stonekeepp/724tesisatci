import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { ContextualLinks } from "@/components/ui/ContextualLinks";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata } from "@/lib/services/seoService";
import {
  buildFAQSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/services/schemaService";
import { defaultSeo } from "@/data/mock/seo";
import { services } from "@/data/mock/services";
import {
  homeFaqs,
  homeHeroBadges,
  homeTestimonials,
  homeTrustPills,
  homeValueProps,
} from "@/data/mock/homeContent";
import { getPhoneHref, getWhatsAppHref } from "@/data/mock/siteSettings";
import { primaryHubLinks } from "@/lib/utils/internalLinks";

const FAQAccordion = dynamic(
  () =>
    import("@/components/ui/FAQAccordion").then((mod) => ({
      default: mod.FAQAccordion,
    })),
  { ssr: true }
);

export const metadata = buildMetadata(defaultSeo);

const problemTiles = [
  { icon: "water_drop", label: "Alt kata su mu akıyor?", href: "/kagithane-su-kacagi-tespiti" },
  { icon: "speed", label: "Kombi basıncı sürekli düşüyor mu?", href: "/kagithane-kombi-servisi" },
  { icon: "plumbing", label: "Lavabo ya da tuvalet geri mi basıyor?", href: "/kagithane-tikaniklik-acma" },
  { icon: "hvac", label: "Petekler yeterince ısınmıyor mu?", href: "/kagithane-petek-temizleme" },
  { icon: "air", label: "Banyoda kötü koku mu var?", href: "/kagithane-kamerali-tesisat-goruntuleme" },
  { icon: "water_damage", label: "Pimaş hattı sık sık tıkanıyor mu?", href: "/kagithane-pimas-acma" },
] as const;

const kagithanePriorityLinks = [
  { href: "/hizmet-bolgeleri/kagithane", label: "Kağıthane tesisat hizmet bölgeleri" },
  { href: "/kagithane-su-kacagi-tespiti", label: "Kağıthane su kaçağı tespiti" },
  { href: "/kagithane-tikaniklik-acma", label: "Kağıthane tıkanıklık açma" },
  { href: "/kagithane-pimas-acma", label: "Kağıthane pimaş açma" },
  { href: "/kagithane-petek-temizleme", label: "Kağıthane petek temizleme" },
  { href: "/kagithane-kombi-servisi", label: "Kağıthane kombi tesisat kontrolü" },
  { href: "/kagithane-kamerali-tesisat-goruntuleme", label: "Kağıthane kameralı tesisat görüntüleme" },
] as const;

const homeServices = services.map((service) => ({
  icon: service.icon,
  title: service.title,
  description: service.shortDescription,
  href: service.canonicalPath,
}));

const processSteps = [
  {
    step: "1",
    title: "Talep Kaydı",
    description:
      "Telefon, WhatsApp veya online form ile arıza detayını iletin; en yakın uzman ekip anında yönlendirilir.",
    active: false,
  },
  {
    step: "2",
    title: "Hızlı Yönlendirme",
    description:
      "Çeliktepe merkez operasyonumuzdan Kağıthane içindeki en yakın mobil ekip acil talep için hızlıca yönlendirilir.",
    active: false,
  },
  {
    step: "3",
    title: "Teknolojik Analiz",
    description:
      "Termal kamera, akustik dinleme ve robotik cihazlarla arızanın kaynağı kırmadan, kesin olarak belirlenir.",
    active: false,
  },
  {
    step: "4",
    title: "Profesyonel Onarım",
    description:
      "Yazılı teklif onayınız sonrası kalıcı onarım veya temizlik işlemi temiz işçilik standardıyla uygulanır.",
    active: false,
  },
  {
    step: "5",
    title: "Kalite Kontrol",
    description:
      "Sistem test edilir, alan temizlenir; servis formu ve işçilik garantisi teslim edilerek süreç tamamlanır.",
    active: true,
  },
] as const;

const heroOverlayCards = [
  { icon: "timer", label: "7/24 Acil Destek" },
  { icon: "radar", label: "Cihazlı Tespit" },
  { icon: "location_on", label: "Kağıthane Merkez" },
  { icon: "cleaning_services", label: "Temiz İşçilik" },
] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} üzerinden 5 yıldız`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`material-symbols-outlined text-[20px] leading-none ${
            index < rating ? "text-secondary" : "text-outline-variant/50"
          }`}
          style={index < rating ? { fontVariationSettings: "'FILL' 1" } : undefined}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  );
}

export default async function HomePage() {
  const settings = await getSiteSettings();

  const faqSchema = buildFAQSchema(homeFaqs);

  const schemas = [
    buildOrganizationSchema(settings),
    buildLocalBusinessSchema(settings, "İstanbul"),
    buildWebSiteSchema(settings),
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <SiteLayout activePath="/">
      <JsonLdScript data={schemas} />

      {/* Hero Section */}
      <section className="hero-bg relative pt-12 pb-24 md:pt-24 md:pb-32 px-margin-mobile md:px-margin-desktop border-b border-outline-variant bg-opacity-50">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="flex flex-col gap-stack-lg z-10">
            <div className="flex flex-wrap gap-2">
              {homeTrustPills.map((pill) => (
                <div
                  key={pill.label}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md rounded-full"
                >
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {pill.icon}
                  </span>
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>
            <h1 className="font-display-lg text-display-lg text-primary md:font-display-lg text-headline-lg-mobile font-bold tracking-tight md:text-display-lg leading-tight tracking-tighter">
              <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span>Kağıthane Merkezli</span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary text-on-secondary font-extrabold shadow-md ring-2 ring-secondary/25 whitespace-nowrap shrink-0">
                  <span className="material-symbols-outlined text-[20px] leading-none" aria-hidden="true">
                    schedule
                  </span>
                  7/24
                </span>
              </span>{" "}
              Tesisatçı
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Kağıthane ve Çeliktepe merkezli ekiplerle su kaçağı tespiti, tıkanıklık açma, pimaş, petek ve kombi tesisatı sorunlarında 7/24 acil servis, cihazlı tespit ve telefon/WhatsApp ile hızlı yönlendirme.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/80 italic">
              İstanbul geneli hizmet ağımız ikincil destek olarak devam eder; öncelik{" "}
              <Link href="/hizmet-bolgeleri/kagithane" className="text-secondary hover:text-primary transition-colors">
                Kağıthane ilçe servisidir
              </Link>
              .{" "}
              <Link href="/hizmet-bolgeleri" className="text-secondary hover:text-primary transition-colors">
                İstanbul&apos;un 39 ilçesine
              </Link>{" "}
              planlı yönlendirme yapılır.{" "}
              <Link href="/hakkimizda" className="text-secondary hover:text-primary transition-colors">
                Ekibimiz hakkında
              </Link>
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/iletisim"
                className="px-8 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors shadow-lg flex items-center gap-2 rounded-xl px-10"
              >
                <span className="material-symbols-outlined" aria-hidden="true">edit_document</span>
                Hemen Randevu Al
              </Link>
              <a
                href={getPhoneHref(settings.phone)}
                className="px-8 py-4 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg hover:bg-on-secondary-container transition-colors shadow-lg flex items-center gap-2 rounded-xl px-10"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                Bizi Ara
              </a>
              <a
                href={getWhatsAppHref(settings.whatsapp, settings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#075E54] text-white font-label-md text-label-md rounded-lg hover:bg-[#054A42] transition-colors shadow-lg flex items-center gap-2 rounded-xl px-10"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-outline-variant/30 mt-4">
              {homeHeroBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface-container/70 border border-outline-variant/40 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <span
                      className="material-symbols-outlined text-secondary text-[22px] leading-none"
                      aria-hidden="true"
                    >
                      {badge.icon}
                    </span>
                  </div>
                  <span className="font-label-md text-xs text-on-surface-variant leading-tight">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block h-[500px] w-full rounded-2xl overflow-hidden soft-shadow border border-outline-variant/30">
            <Image
              src="/images/home-hero.webp"
              alt="İstanbul'da tesisat arızasına müdahale eden profesyonel ekip"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 right-8 flex flex-col gap-4 z-10">
              {heroOverlayCards.map((card) => (
                <div
                  key={card.label}
                  className="glass-card p-3 rounded-xl flex items-center gap-3 bg-white/85 backdrop-blur-md border-white/30 shadow-lg"
                >
                  <div className="w-9 h-9 rounded-full bg-[#131b2e] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm text-secondary-container" aria-hidden="true">
                      {card.icon}
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-[#131b2e] whitespace-nowrap">{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Selector */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-secondary-container border border-white/20 font-label-md text-label-md mb-4">
              Hızlı Yönlendirme
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary font-bold mb-4">
              Hangi tesisat sorununu yaşıyorsunuz?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
              Yaşadığınız sorunu seçin; ilgili hizmet sayfasına yönlendirilir, cihazlı tespit ve kalıcı çözüm seçeneklerini inceleyebilirsiniz.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {problemTiles.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                className="group flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/15 text-center hover:bg-white/15 hover:border-secondary-container transition-all duration-300 soft-shadow min-h-[140px] justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <span
                    className="material-symbols-outlined text-secondary-container text-[28px] leading-none"
                    aria-hidden="true"
                  >
                    {tile.icon}
                  </span>
                </div>
                <span className="font-label-md text-sm text-on-primary leading-snug block">
                  {tile.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <ContextualLinks
            title="Kağıthane öncelikli servis sayfaları"
            links={kagithanePriorityLinks}
          />
        </div>
      </section>

      {/* Hizmetlerimiz — tüm hizmetler */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg text-headline-lg-mobile text-primary font-bold mb-4">
              Hizmetlerimiz
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              İstanbul genelinde 12 uzmanlık alanında cihazlı tespit, yazılı teklif, garantili işçilik ve 7/24 acil servis ile profesyonel tesisat çözümleri sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {homeServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-surface rounded-xl p-6 border border-outline-variant/50 soft-shadow hover:shadow-lg transition-shadow group cursor-pointer flex flex-col h-full border-outline-variant/30 shadow-sm hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined" aria-hidden="true">{service.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-3">{service.title}</h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-4 flex-grow line-clamp-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 font-label-md text-sm text-secondary group-hover:text-primary transition-colors mt-auto">
                  Detaylı Bilgi{" "}
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chevron_right</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-xl font-label-md hover:bg-primary-container transition-colors shadow-md"
            >
              Tüm Hizmetleri İncele
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Neden 724 Tesisatçı? */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-secondary-container border border-white/20 font-label-md text-label-md mb-4">
              Güvenilir Hizmet
            </span>
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg text-headline-lg-mobile text-on-primary font-bold mb-4">
              Neden 724 Tesisatçı?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
              İstanbul genelinde cihazlı tespit, şeffaf fiyatlandırma ve garantili işçilik ile tesisat sorunlarınıza kalıcı, premium ve profesyonel çözüm sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeValueProps.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 soft-shadow flex flex-col gap-4 hover:bg-white/15 hover:border-secondary-container/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-2xl ${item.iconColor}`} aria-hidden="true">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-primary">{item.title}</h3>
                <p className="text-sm text-on-primary-container leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg md:font-headline-lg text-headline-lg-mobile text-primary font-bold mb-4 text-center">
            Servis Sürecimiz Nasıl İlerler?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Talep kaydından kalite kontrolüne kadar her adımda şeffaf iletişim, yazılı teklif ve garantili teslimat standardı uyguluyoruz.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-secondary/20 z-0" />
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center z-10 flex-1 px-4">
                <div
                  className={
                    step.active
                      ? "w-20 h-20 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-display-lg font-bold mb-6 shadow-xl relative"
                      : "w-20 h-20 rounded-full bg-white border-4 border-secondary text-secondary flex items-center justify-center font-display-lg font-bold mb-6 shadow-xl relative bg-white"
                  }
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşterilerimiz Ne Diyor? */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-4">
              Müşteri Deneyimi
            </span>
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg text-headline-lg-mobile text-primary font-bold mb-4">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              İstanbul genelinde hizmet verdiğimiz müşterilerimizin su kaçağı, tıkanıklık ve petek temizliği deneyimlerinden bazıları.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeTestimonials.map((review) => (
              <article
                key={review.name}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 soft-shadow flex flex-col gap-4"
              >
                <StarRating rating={review.rating} />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-outline-variant/40">
                  <p className="font-label-md text-label-md text-primary font-semibold">{review.name}</p>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    <Link href={review.districtHref} className="hover:text-secondary transition-colors">
                      {review.district}
                    </Link>
                    {" · "}
                    <Link href={review.serviceHref} className="hover:text-secondary transition-colors">
                      {review.service}
                    </Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col gap-stack-md">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md w-fit">
                Bilgi Bankası
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                Sık Sorulan Sorular
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Tesisat hizmetleri, fiyatlandırma, acil müdahale ve garanti koşulları hakkında en çok merak edilen soruların yanıtları.
              </p>
              <Link
                href="/sss"
                className="inline-flex items-center gap-2 text-secondary font-label-md hover:text-primary transition-colors w-fit"
              >
                Tüm soruları görüntüle
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion items={homeFaqs} variant="premium" />
            </div>
          </div>
          <ContextualLinks
            title="Site genelinde gezinin"
            links={primaryHubLinks}
            className="mt-12 pt-8 border-t border-outline-variant/40"
          />
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="bg-primary-container pt-16 pb-12 md:py-20 px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-container-max mx-auto">
          <h2 className="text-display-lg text-white font-bold mb-6">
            Kağıthane Tesisat Sorunlarınıza Profesyonel Çözüm
          </h2>
          <p className="text-body-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kağıthane, Çeliktepe ve çevre mahallelerde cihazlı tespit, açık bilgilendirme ve 7/24 acil tesisat desteği. İstanbul geneli yönlendirme ikincil hizmet ağı olarak devam eder.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={getPhoneHref(settings.phone)}
              className="px-10 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined" aria-hidden="true">call</span>
              Hemen Ara
            </a>
            <a
              href={getWhatsAppHref(settings.whatsapp, settings.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#075E54] text-white font-bold rounded-xl hover:bg-[#054A42] transition-all shadow-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined" aria-hidden="true">chat</span>
              WhatsApp
            </a>
            <Link
              href="/iletisim"
              className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-surface-variant transition-all shadow-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined" aria-hidden="true">edit_document</span>
              Servis Talebi
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
