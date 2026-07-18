import Link from "next/link";
import Image from "next/image";
import type { AdLandingPage } from "@/data/mock/adLandingPages";
import { acilTesisatciFaqs } from "@/data/mock/adLandingPages";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { homeTrustPills } from "@/data/mock/homeContent";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

const emergencyServiceTiles = [
  {
    icon: "water_drop",
    label: "Su kaçağı mı var?",
    href: "/su-kacagi-tespiti",
  },
  {
    icon: "plumbing",
    label: "Lavabo/tuvalet tıkandı mı?",
    href: "/tikaniklik-acma",
  },
  {
    icon: "water_damage",
    label: "Pimaş hattı tıkandı mı?",
    href: "/pimas-acma",
  },
  {
    icon: "hvac",
    label: "Kombi arızası mı?",
    href: "/hizmetler/kombi-servisi-ve-tesisati",
  },
] as const;

const heroOverlayCards = [
  { icon: "timer", label: "7/24 Acil Destek" },
  { icon: "radar", label: "Cihazlı Tespit" },
  { icon: "location_on", label: "İstanbul Geneli Servis" },
  { icon: "cleaning_services", label: "Temiz İşçilik" },
] as const;

interface AcilTesisatciLandingTemplateProps {
  landing: AdLandingPage;
  breadcrumbs: { label: string; href: string }[];
}

export function AcilTesisatciLandingTemplate({
  landing,
  breadcrumbs,
}: AcilTesisatciLandingTemplateProps) {
  return (
    <>
      <Breadcrumb items={breadcrumbs} />
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
                <span>{landing.heroTitle}</span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary text-on-secondary font-extrabold shadow-md ring-2 ring-secondary/25 whitespace-nowrap shrink-0">
                  <span className="material-symbols-outlined text-[20px] leading-none" aria-hidden="true">
                    schedule
                  </span>
                  7/24
                </span>
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              {landing.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="px-8 py-4 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg hover:bg-on-secondary-container transition-colors shadow-lg flex items-center gap-2 rounded-xl px-10"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                Hemen Ara
              </a>
              <a
                href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#075E54] text-white font-label-md text-label-md rounded-lg hover:bg-[#054A42] transition-colors shadow-lg flex items-center gap-2 rounded-xl px-10"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block h-[500px] w-full rounded-2xl overflow-hidden soft-shadow border border-outline-variant/30">
            <Image
              src="/images/home-hero.webp"
              alt="İstanbul'da acil tesisat arızasına müdahale eden profesyonel ekip"
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

      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-secondary-container border border-white/20 font-label-md text-label-md mb-4">
              Acil Yönlendirme
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary font-bold mb-4">
              Hangi acil tesisat sorununu yaşıyorsunuz?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
              Sorununuzu seçin; ilgili acil servis sayfasına yönlendirilir, 7/24 ekip yönlendirmesi için hemen arayabilirsiniz.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergencyServiceTiles.map((tile) => (
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
                <span className="font-label-md text-label-md text-on-primary leading-tight">
                  {tile.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-container/30 text-secondary font-label-md text-label-md mb-4">
              Bilgi Bankası
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 font-bold">
              Acil Tesisat Hakkında Sık Sorulan Sorular
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Acil tesisat servisi, varış süresi, fiyatlandırma ve 7/24 müdahale konularında en çok merak edilen sorular.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={acilTesisatciFaqs} variant="premium" />
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-primary-container text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg md:text-[40px] font-bold text-on-primary mb-4">
            Acil Tesisat Desteği Mi Gerekiyor?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-8 max-w-2xl mx-auto">
            İstanbul genelinde 7/24 acil tesisat ekibimiz trafik ve ekip uygunluğuna göre adresinize yönlendirilir. Cihazlı tespit ve yazılı teklif ile hizmet veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getPhoneHref(siteSettings.phone)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-lg font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined">call</span>
              Hemen Ara
            </a>
            <a
              href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary rounded-lg font-label-md hover:bg-surface-variant transition-colors"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
