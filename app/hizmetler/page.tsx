import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContextualLinks } from "@/components/ui/ContextualLinks";
import { getAllServices } from "@/lib/services/serviceService";
import { buildMetadata } from "@/lib/services/seoService";
import { staticPageSeo } from "@/data/mock/seo";
import { pageImages } from "@/data/mock/images";
import { StitchImage } from "@/components/ui/StitchImage";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";
import { primaryHubLinks } from "@/lib/utils/internalLinks";

export const metadata = buildMetadata(staticPageSeo.hizmetler);

const trustPoints = [
  { icon: "schedule", label: "7/24 Acil Servis" },
  { icon: "radar", label: "Cihazlı Tespit" },
  { icon: "verified", label: "Yazılı Servis Formu" },
  { icon: "receipt_long", label: "Yazılı Teklif" },
] as const;

const valueProps = [
  {
    icon: "precision_manufacturing",
    title: "Profesyonel Ekipman",
    description:
      "Termal kamera, akustik dinleme, robotik spiral ve HD kamera robotu ile kırmadan, noktasal müdahale.",
  },
  {
    icon: "handyman",
    title: "Minimum Müdahale",
    description:
      "Gereksiz kırım ve söküm yapmadan yalnızca arızalı bölgeye odaklanarak maliyetinizi kontrol altında tutuyoruz.",
  },
  {
    icon: "shield",
    title: "Şeffaf Süreç",
    description:
      "Keşif sonrası yazılı fiyat teklifi, resmi servis formu ve işlem sonrası test ile tam şeffaflık.",
  },
] as const;

export default async function HizmetlerPage() {
  const services = await getAllServices();
  const sorted = [...services].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <SiteLayout activePath="/hizmetler">
      {/* Hero */}
      <section className="hero-bg relative pt-16 md:pt-24 pb-20 md:pb-28 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="flex flex-col gap-stack-lg z-10">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-container text-secondary-container font-label-md text-label-md w-fit border border-white/10">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                workspace_premium
              </span>
              Premium Tesisat Hizmetleri
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary font-bold tracking-tight leading-tight">
              İstanbul Geneli Profesyonel Tesisat Çözümleri
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Su kaçağı tespitinden kombi servisine, gömme rezervuar tamiri ve batarya montajından pimaş yıkamaya kadar 12 uzmanlık alanında cihazlı tespit, kırmadan onarım ve yazılı teklif sunuyoruz. İşlem öncesi yazılı teklif; onayınız olmadan müdahaleye başlanmaz.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface-container/80 border border-outline-variant/50 text-center"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-secondary text-xl leading-none"
                      aria-hidden="true"
                    >
                      {point.icon}
                    </span>
                  </div>
                  <span className="font-label-md text-xs text-on-surface-variant leading-tight">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="w-full sm:w-auto px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                Hemen Ara
              </a>
              <a
                href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#075E54] text-white rounded-xl font-label-md hover:bg-[#054A42] transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                WhatsApp
              </a>
              <Link
                href="/iletisim"
                className="w-full sm:w-auto px-8 py-4 bg-surface text-primary border border-outline-variant rounded-xl font-label-md hover:bg-surface-variant transition-colors flex items-center justify-center gap-2"
              >
                Servis Talebi
              </Link>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-secondary/5 rounded-2xl transform translate-x-4 translate-y-4" />
            <StitchImage
              src={pageImages.hizmetlerHero}
              alt="İstanbul geneli profesyonel tesisat çözümleri — mobil servis ekibi"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative w-full h-[380px] md:h-[480px] object-cover object-[center_40%] rounded-2xl soft-shadow border border-outline-variant z-10"
            />
          </div>
        </div>
      </section>

      {/* Value props strip */}
      <section className="py-12 md:py-16 bg-primary-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-secondary-container text-2xl"
                    aria-hidden="true"
                  >
                    {prop.icon}
                  </span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-primary mb-2">
                    {prop.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-section-padding bg-surface-bright">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-14 md:text-center max-w-3xl md:mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-container/30 text-secondary font-label-md text-label-md mb-4">
              12 Uzmanlık Alanı
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 font-bold">
              Kapsamlı Tesisat Hizmetleri
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Her hizmetimizde termal kamera, akustik dinleme ve robotik cihazlar gibi profesyonel ekipmanlar kullanıyor; keşif sonrası yazılı teklif sunarak şeffaf süreç ve yazılı servis formu ile ilerliyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((service) => (
              <Link
                key={service.slug}
                href={service.canonicalPath}
                className={`group bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant soft-shadow hover-lift flex flex-col justify-between min-h-[280px] ${service.featured || service.wideCard ? "lg:col-span-2" : ""}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <span
                        className="material-symbols-outlined fill text-secondary text-3xl"
                        aria-hidden="true"
                      >
                        {service.icon}
                      </span>
                    </div>
                    {service.featured && (
                      <span className="py-1 px-2.5 rounded-full bg-primary-container text-secondary-container text-xs font-label-md">
                        Öne Çıkan
                      </span>
                    )}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed line-clamp-4">
                    {service.shortDescription}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md mt-6 group-hover:gap-3 transition-all">
                  Detaylı İncele
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 font-bold">
            Hangi Hizmete İhtiyacınız Var?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto leading-relaxed">
            Sorununuzu bilmiyorsanız endişelenmeyin — ekibimiz telefonda veya WhatsApp üzerinden yönlendirme yapar. İstanbul genelinde 7/24 acil servis; trafik ve ekip uygunluğuna göre yönlendirme yapılır.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getPhoneHref(siteSettings.phone)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined" aria-hidden="true">call</span>
              {siteSettings.phone}
            </a>
            <Link
              href="/sss"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary border border-outline-variant rounded-xl font-label-md hover:bg-surface-variant transition-colors"
            >
              Sık Sorulan Sorular
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
            <Link
              href="/hizmet-bolgeleri"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary border border-outline-variant rounded-xl font-label-md hover:bg-surface-variant transition-colors"
            >
              Hizmet Bölgeleri
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
          <ContextualLinks
            title="Keşfedin"
            links={primaryHubLinks}
            className="mt-12 pt-8 border-t border-outline-variant/40"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
