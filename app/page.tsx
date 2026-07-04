import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata } from "@/lib/services/seoService";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/services/schemaService";
import { defaultSeo } from "@/data/mock/seo";
import { getPhoneHref, getWhatsAppHref } from "@/data/mock/siteSettings";
import { pageImages } from "@/data/mock/images";

export const metadata = buildMetadata(defaultSeo);

const problemTiles = [
  { icon: "water_drop", label: "Alt kata su mu akıyor?", href: "/hizmetler/su-kacagi-tespit-ve-onarim" },
  { icon: "speed", label: "Kombi basıncı sürekli düşüyor mu?", href: "/hizmetler/kombi-servisi-ve-tesisati" },
  { icon: "plumbing", label: "Lavabo ya da tuvalet geri mi basıyor?", href: "/hizmetler/tikaniklik-acma" },
  { icon: "hvac", label: "Petekler yeterince ısınmıyor mu?", href: "/hizmetler/petek-temizleme" },
  { icon: "air", label: "Banyoda kötü koku mu var?", href: "/hizmetler/pimas-yikama" },
  { icon: "water_damage", label: "Pimaş hattı sık sık tıkanıyor mu?", href: "/hizmetler/pimas-yikama" },
] as const;

const homeServices = [
  {
    icon: "water_drop",
    title: "Su Kaçağı Tespiti",
    description: "Termal kamera ve akustik dinleme cihazları ile kırmadan, noktasal su kaçağı bulma.",
    href: "/hizmetler/su-kacagi-tespit-ve-onarim",
  },
  {
    icon: "plumbing",
    title: "Tıkanıklık Açma",
    description: "Robot cihazlarla tuvalet, lavabo ve pimaş tıkanıklıklarını etrafı kirletmeden açıyoruz.",
    href: "/hizmetler/tikaniklik-acma",
  },
  {
    icon: "hvac",
    title: "Petek Temizleme",
    description: "Özel makine ve kimyasallarla kalorifer peteklerinizi temizleyip ısınma verimini artırıyoruz.",
    href: "/hizmetler/petek-temizleme",
  },
  {
    icon: "water_damage",
    title: "Pimaş Yıkama",
    description: "Yüksek basınçlı makinelerle gider borularındaki yağ ve kirleri tamamen temizliyoruz.",
    href: "/hizmetler/pimas-yikama",
  },
  {
    icon: "construction",
    title: "Su Tesisatı",
    description: "Sıfırdan su tesisatı çekimi, yenileme ve tüm musluk/batarya montaj işlemleri.",
    href: "/hizmetler/su-tesisati",
  },
  {
    icon: "heat_pump",
    title: "Kombi ve Kalorifer Tesisatı",
    description: "Kombi montajı, kalorifer tesisatı çekimi ve sistem bakımları.",
    href: "/hizmetler/kombi-servisi-ve-tesisati",
  },
  {
    icon: "local_fire_department",
    title: "Doğalgaz Tesisatı",
    description: "Güvenli ve sertifikalı doğalgaz tesisat kurulumu ve tadilat işlemleri.",
    href: "/hizmetler/dogalgaz-tesisati",
  },
  {
    icon: "videocam",
    title: "Kameralı Tesisat Görüntüleme",
    description: "Boru içlerini kamerayla inceleyerek tıkanıklık veya kırık noktalarını tespit.",
    href: "/hizmetler/kamerali-tesisat-goruntuleme-ve-onarim",
  },
] as const;

const valueProps = [
  {
    icon: "location_on",
    title: "İstanbul Geneli Servis",
    description:
      "İstanbul'un her iki yakasında, tüm ilçelere yayılmış geniş mobil ekiplerimizle en geç 30 dakika içinde kapınızdayız.",
  },
  {
    icon: "radar",
    title: "Cihazlı ve Noktasal Tespit",
    description:
      "En son teknoloji termal kameralar ve akustik dinleme cihazları ile kırmadan dökmeden noktasal tespit yapıyoruz.",
  },
  {
    icon: "handyman",
    title: "Gereksiz Kırımı Önleme",
    description:
      "Sadece arızalı bölgeye müdahale ederek evinizi şantiye alanına çevirmeden, maliyetlerinizi minimize eden çözümler sunuyoruz.",
  },
  {
    icon: "verified",
    title: "Şeffaf ve Garantili Hizmet",
    description:
      "Yapılan tüm işlemler ve kullanılan parçalar için resmi servis formu düzenleyerek hizmetimizi garanti altına alıyoruz.",
  },
] as const;

const processSteps = [
  {
    step: "1",
    title: "Talep Kaydı",
    description: "Çağrı merkezimiz arıza detaylarını alarak size en yakın uzman ekibi anında sisteme tanımlar.",
    active: false,
  },
  {
    step: "2",
    title: "Hızlı Yönlendirme",
    description: "GPS takip sistemimiz sayesinde bölgenizdeki en uygun ekip 30 dakika içinde adresinize ulaşır.",
    active: false,
  },
  {
    step: "3",
    title: "Teknolojik Analiz",
    description: "Uzmanlarımız termal ve akustik cihazlarla arızanın kaynağını kırmadan, kesin olarak belirler.",
    active: false,
  },
  {
    step: "4",
    title: "Profesyonel Onarım",
    description: "Onayınızla birlikte, en temiz yöntemlerle kalıcı tamirat veya temizlik işlemi gerçekleştirilir.",
    active: false,
  },
  {
    step: "5",
    title: "Kalite Kontrol",
    description: "İşlem sonrası sistem test edilir, alan temizlenir ve garanti belgeniz teslim edilerek süreç tamamlanır.",
    active: true,
  },
] as const;

const heroOverlayCards = [
  { icon: "timer", label: "7/24 Acil Destek" },
  { icon: "radar", label: "Cihazlı Tespit" },
  { icon: "location_on", label: "İstanbul Geneli Servis" },
  { icon: "cleaning_services", label: "Temiz İşçilik" },
] as const;

export default async function HomePage() {
  const settings = await getSiteSettings();

  const schemas = [
    buildOrganizationSchema(settings),
    buildLocalBusinessSchema(settings, "İstanbul"),
    buildWebSiteSchema(settings),
  ];

  return (
    <SiteLayout activePath="/">
      <JsonLdScript data={schemas} />

      {/* Hero Section — Ana sayfa/code.html */}
      <section className="hero-bg relative pt-12 pb-24 md:pt-24 md:pb-32 px-margin-mobile md:px-margin-desktop border-b border-outline-variant bg-opacity-50">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="flex flex-col gap-stack-lg z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md rounded-full w-max">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>İstanbul Geneli Hizmet</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary md:font-display-lg text-headline-lg-mobile font-bold tracking-tight md:text-display-lg leading-tight tracking-tighter">
              İstanbul Geneli 7/24 Profesyonel Tesisatçı Hizmeti
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Su kaçağı tespiti, tıkanıklık açma, petek temizleme, pimaş yıkama, kombi, kalorifer ve doğalgaz tesisatı işlemlerinde İstanbul genelinde cihazlı, temiz ve hızlı çözümler sunuyoruz.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/80 italic">
              Kağıthane merkezli ekiplerle İstanbul&apos;un birçok bölgesine hızlı servis yönlendirmesi.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getPhoneHref(settings.phone)}
                className="px-8 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors shadow-lg flex items-center gap-2 rounded-xl px-10"
              >
                <span className="material-symbols-outlined">call</span>
                Hemen Ara
              </a>
              <a
                href={getWhatsAppHref(settings.whatsapp, settings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-label-md text-label-md rounded-lg hover:bg-[#128C7E] transition-colors shadow-lg flex items-center gap-2 rounded-xl px-10"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp&apos;tan Yaz
              </a>
              <Link
                href="/hizmetler"
                className="px-8 py-4 bg-surface-container text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-high transition-colors flex items-center gap-2 rounded-xl px-10"
              >
                Hizmetleri İncele
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 border-t border-outline-variant/30 mt-4">
              {[
                { icon: "timer", label: "7/24 Acil Destek" },
                { icon: "radar", label: "Cihazlı Tespit" },
                { icon: "handyman", label: "Kırmadan Çözüm" },
                { icon: "cleaning_services", label: "Temiz İşçilik" },
                { icon: "flash_on", label: "Hızlı Servis" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-on-surface-variant group hover:text-secondary transition-colors cursor-default"
                >
                  <span className="material-symbols-outlined text-secondary">{badge.icon}</span>
                  <span className="font-label-md text-label-md">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block h-[500px] w-full rounded-2xl overflow-hidden soft-shadow">
            <div
              className="bg-cover bg-center w-full h-full absolute inset-0"
              style={{ backgroundImage: `url('${pageImages.homeHero}')` }}
            />
            <div className="absolute bottom-8 right-8 flex flex-col gap-4 z-10">
              {heroOverlayCards.map((card) => (
                <div
                  key={card.label}
                  className="glass-card p-3 rounded-xl flex items-center gap-3 bg-white/70 backdrop-blur-md border-white/20 shadow-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-sm">{card.icon}</span>
                  </div>
                  <span className="font-label-md text-label-md text-primary">{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Selector */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary font-bold mb-8 text-center">
            Hangi tesisat sorununu yaşıyorsunuz?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {problemTiles.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/50 text-center hover:border-secondary transition-colors cursor-pointer soft-shadow"
              >
                <span className="material-symbols-outlined text-secondary mb-2 block">{tile.icon}</span>
                <span className="font-label-md text-sm text-on-surface">{tile.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Services Section */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg text-headline-lg-mobile text-primary font-bold mb-4">
              İstanbul&apos;da Profesyonel Tesisat Çözümleri
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Ev, iş yeri, apartman ve ticari alanlarda oluşan tesisat sorunları için cihazlı tespit, temiz işçilik ve hızlı servis yaklaşımıyla çözüm sunuyoruz.
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
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-3">{service.title}</h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-4 flex-grow">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 font-label-md text-sm text-secondary group-hover:text-primary transition-colors mt-auto">
                  Detaylı Bilgi{" "}
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg md:font-headline-lg text-headline-lg-mobile text-primary font-bold mb-12 text-center">
            Neden 724 Tesisatçı?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 soft-shadow flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 text-secondary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <h4 className="font-bold text-primary">{item.title}</h4>
                </div>
                <p className="text-sm text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg md:font-headline-lg text-headline-lg-mobile text-primary font-bold mb-12 text-center">
            Servis Sürecimiz Nasıl İlerler?
          </h2>
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
                <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-on-surface-variant">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer CTA — Ana sayfa/code.html */}
      <section className="bg-primary-container py-20 px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-container-max mx-auto">
          <h2 className="text-display-lg text-white font-bold mb-6">
            Tesisat Sorunlarınıza Profesyonel Çözüm
          </h2>
          <p className="text-body-lg text-white/80 mb-10 max-w-2xl mx-auto">
            İstanbul&apos;un her noktasına 30 dakikada servis imkanı. Kırmadan, dökmeden cihazlı tespit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={getPhoneHref(settings.phone)}
              className="px-10 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined">call</span>
              Hemen Ara
            </a>
            <a
              href={getWhatsAppHref(settings.whatsapp, settings.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-surface-variant transition-all shadow-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Destek
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
