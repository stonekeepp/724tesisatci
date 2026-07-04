import Link from "next/link";
import type { Service } from "@/types";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HeroImagePanel } from "@/components/ui/StitchImage";
import { serviceHeroImages } from "@/data/mock/images";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

interface ServiceDetailTemplateProps {
  service: Service;
  relatedServiceItems: Service[];
  breadcrumbs: { label: string; href: string }[];
}

export function ServiceDetailTemplate({
  service,
  relatedServiceItems,
  breadcrumbs,
}: ServiceDetailTemplateProps) {
  const heroMeta = serviceHeroImages[service.slug];
  const isPimasYikama = service.slug === "pimas-yikama";

  if (isPimasYikama) {
    return (
      <>
        <Breadcrumb items={breadcrumbs} />
        <section className="hero-gradient text-on-primary py-section-padding relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-label-md text-label-md mb-stack-md backdrop-blur-sm">
                  Profesyonel Hizmet
                </span>
                <h1 className="font-display-lg text-display-lg md:text-5xl font-bold mb-stack-lg leading-tight">
                  {service.heroTitle}
                </h1>
                <p className="font-body-lg text-body-lg opacity-90 mb-stack-lg max-w-2xl">
                  {service.heroDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={getPhoneHref(siteSettings.phone)}
                    className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-md hover:bg-on-secondary-fixed-variant transition-all shadow-lg flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined">call</span>
                    Acil Servis Çağır
                  </a>
                  <Link
                    href="/iletisim"
                    className="bg-surface/10 text-on-primary px-8 py-4 rounded-xl font-label-md hover:bg-surface/20 transition-all backdrop-blur-sm border border-surface/20"
                  >
                    Fiyat Teklifi Al
                  </Link>
                </div>
              </div>
              {heroMeta && (
                <div className="relative rounded-3xl overflow-hidden soft-shadow aspect-[4/5] max-h-[520px] hidden lg:block">
                  <img
                    src={heroMeta.src}
                    alt={heroMeta.alt}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent flex items-end p-8">
                    <p className="text-on-primary font-headline-md text-headline-md">
                      Son Teknoloji Ekipmanlar
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <ServiceDetailBody
          service={service}
          relatedServiceItems={relatedServiceItems}
        />
      </>
    );
  }

  if (heroMeta?.variant === "dark") {
    return (
      <>
        <Breadcrumb items={breadcrumbs} />
        <section className="relative w-full bg-primary-container text-on-primary min-h-[614px] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
            <img
              src={heroMeta.src}
              alt={heroMeta.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent" />
          <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
            <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary-container rounded-full font-label-md text-label-md mb-4 border border-secondary/30">
              Profesyonel Bakım Hizmeti
            </span>
            <h1 className="font-display-lg text-display-lg text-on-primary mb-stack-md leading-tight max-w-2xl">
              {service.heroTitle}
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant mb-stack-lg max-w-xl">
              {service.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/iletisim"
                className="bg-secondary hover:bg-on-secondary-fixed-variant text-on-primary px-8 py-4 rounded-lg font-label-md transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                Hemen Randevu Al
              </Link>
              <a
                href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface/10 hover:bg-surface/20 text-on-primary border border-surface/30 px-8 py-4 rounded-lg font-label-md transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp&apos;tan Danış
              </a>
            </div>
          </div>
        </section>
        <ServiceDetailBody
          service={service}
          relatedServiceItems={relatedServiceItems}
        />
      </>
    );
  }

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="relative py-12 md:py-24 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md w-fit">
              <span className="material-symbols-outlined text-base">verified</span>
              Kırmadan Dökmeden Çözüm
            </span>
            <h1 className="font-display-lg text-display-lg md:text-display-lg text-primary leading-tight">
              {service.heroTitle}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              {service.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-md hover:bg-on-secondary-fixed transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                Acil Servis Çağır
              </a>
              <Link
                href="/iletisim"
                className="bg-surface text-on-surface border border-outline-variant px-8 py-4 rounded-xl font-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">info</span>
                Fiyat Bilgisi Al
              </Link>
            </div>
          </div>
          {heroMeta ? (
            <HeroImagePanel
              src={heroMeta.src}
              alt={heroMeta.alt}
              overlay={
                service.slug === "su-kacagi-tespit-ve-onarim" ? (
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-secondary-container">
                          precision_manufacturing
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">%100 Noktasal Tespit</h3>
                        <p className="text-sm text-on-surface-variant">
                          Gereksiz kırma işlemine son.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : undefined
              }
            />
          ) : null}
        </div>
      </section>
      <ServiceDetailBody
        service={service}
        relatedServiceItems={relatedServiceItems}
      />
    </>
  );
}

function ServiceDetailBody({
  service,
  relatedServiceItems,
}: {
  service: Service;
  relatedServiceItems: Service[];
}) {
  return (
    <>
      {service.symptoms.length > 0 && (
        <section className="py-section-padding bg-surface-bright">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
                Dikkat Edilmesi Gereken Belirtiler
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                {service.title} sorunları genellikle erken belirtiler verir.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.symptoms.map((symptom) => (
                <div
                  key={symptom.title}
                  className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant soft-shadow"
                >
                  <div className="w-14 h-14 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
                    <span
                      className="material-symbols-outlined text-secondary text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {symptom.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-semibold text-primary mb-3">
                    {symptom.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {symptom.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.processSteps.length > 0 && (
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-8 text-center">
              Nasıl Çalışıyoruz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant"
                >
                  <div className="w-10 h-10 bg-secondary text-on-secondary rounded-full flex items-center justify-center font-label-md mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faq.length > 0 && (
        <section className="py-section-padding bg-surface-bright">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop max-w-3xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center">
              Sık Sorulan Sorular
            </h2>
            <FAQAccordion items={service.faq} />
          </div>
        </section>
      )}

      {relatedServiceItems.length > 0 && (
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center">
              İlgili Hizmetler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServiceItems.map((related) => (
                <Link
                  key={related.slug}
                  href={related.canonicalPath}
                  className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant soft-shadow service-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      {related.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    {related.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {related.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/hizmet-bolgeleri/kagithane"
                className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
              >
                Kağıthane Hizmet Bölgesi →
              </Link>
              <Link
                href="/hizmet-bolgeleri/istanbul"
                className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
              >
                İstanbul Hizmet Bölgeleri →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-section-padding bg-primary-container text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg md:text-[40px] font-bold text-on-primary mb-4">
            Acil {service.title} Mi Gerekiyor?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-8 max-w-2xl mx-auto">
            7/24 acil servis ekibimiz bir telefon uzağınızda.
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
