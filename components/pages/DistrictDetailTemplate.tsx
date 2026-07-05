import Link from "next/link";
import type { Location, Neighborhood, Service } from "@/types";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LocationHeroImage } from "@/components/ui/LocationHeroImage";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

interface DistrictDetailTemplateProps {
  location: Location;
  allServices: Service[];
  neighborhoods?: Neighborhood[];
  otherDistricts?: Location[];
}

export function DistrictDetailTemplate({
  location,
  allServices,
  neighborhoods = [],
  otherDistricts = [],
}: DistrictDetailTemplateProps) {
  const isCity = location.slug === "istanbul";
  const isHQ = location.isHeadquarters;
  const heroTitle = isCity
    ? "İstanbul Tesisatçı"
    : `${location.title} Tesisatçı`;
  const heroSubtitle = isHQ
    ? "Merkez Operasyon · 19 Mahalle"
    : "7/24 Profesyonel Tesisat";

  return (
    <>
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {isHQ && (
              <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-4">
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  home_pin
                </span>
                Merkez Operasyon
              </span>
            )}
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 font-bold leading-tight">
              {heroTitle}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              {location.description}
            </p>
            {location.stats && location.stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {location.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-surface-container-low p-4 rounded-xl border border-outline-variant text-center"
                  >
                    <p className="font-headline-md text-headline-md text-secondary font-bold">
                      {stat.value}
                    </p>
                    <p className="font-body-md text-xs text-on-surface-variant mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: "verified", label: "Garantili İşçilik" },
                { icon: "schedule", label: "7/24 Acil Servis" },
                { icon: "radar", label: "Cihazlı Tespit" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 text-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full"
                >
                  <span className="material-symbols-outlined text-secondary text-lg" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                Hemen Ara
              </a>
              <a
                href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-label-md hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                WhatsApp
              </a>
              {isHQ && (
                <Link
                  href="/hizmet-bolgeleri/kagithane-mahalleleri"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary border border-outline-variant rounded-xl font-label-md hover:bg-surface-variant transition-colors"
                >
                  Mahalleleri Gör
                </Link>
              )}
            </div>
          </div>
          <div className="relative h-[360px] lg:h-[480px] rounded-2xl overflow-hidden soft-shadow border border-outline-variant">
            <LocationHeroImage
              title={location.title}
              subtitle={heroSubtitle}
              slug={location.slug}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {neighborhoods.length > 0 && (
        <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-3 font-bold">
                {location.title} Mahalleleri
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {location.title} ilçesinin {neighborhoods.length} mahallesine özel 7/24 tesisat hizmeti.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {neighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={n.canonicalPath}
                  className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover-lift group"
                >
                  <div className="flex items-center gap-2 mb-2 text-secondary">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      location_on
                    </span>
                    <h3 className="font-headline-md text-base text-on-surface font-semibold group-hover:text-secondary transition-colors">
                      {n.title}
                    </h3>
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant line-clamp-2">
                    {n.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/hizmet-bolgeleri/kagithane-mahalleleri"
                className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
              >
                Tüm Kağıthane Mahalleleri →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-section-padding bg-surface-bright px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-3 font-bold">
              {location.title} Hizmetlerimiz
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {location.title} ilçesinde sunduğumuz tüm profesyonel tesisat hizmetleri.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {allServices.map((service) => (
              <Link
                key={service.slug}
                href={service.canonicalPath}
                className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant soft-shadow service-card-hover transition-all group flex flex-col"
              >
                <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                  <span
                    className="material-symbols-outlined text-secondary text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-sm text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant line-clamp-3 flex-1">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {location.faq.length > 0 && (
        <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary-container/30 text-secondary font-label-md text-label-md mb-4">
                Bilgi Bankası
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-3 font-bold">
                {location.title} Tesisatçı — Sık Sorulan Sorular
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {location.title} bölgesinde en çok merak edilen {location.faq.length} sorunun yanıtı.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={location.faq} variant="premium" />
            </div>
            <p className="text-center mt-8 font-body-md text-body-md text-on-surface-variant">
              <Link href="/hizmetler" className="text-secondary font-label-md hover:text-primary transition-colors">
                Tüm hizmetlerimiz
              </Link>
              {" · "}
              <Link href="/sss" className="text-secondary font-label-md hover:text-primary transition-colors">
                SSS
              </Link>
              {" · "}
              <Link href="/blog" className="text-secondary font-label-md hover:text-primary transition-colors">
                Blog
              </Link>
            </p>
          </div>
        </section>
      )}

      {!isCity && otherDistricts.length > 0 && (
        <section className="py-section-padding bg-surface-bright px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 text-center font-bold">
              Diğer İstanbul İlçeleri
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {otherDistricts.map((d) => (
                <Link
                  key={d.slug}
                  href={d.canonicalPath}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant text-sm font-label-md hover:bg-secondary-container hover:text-secondary transition-colors border border-outline-variant/50"
                >
                  {d.title}
                </Link>
              ))}
              <Link
                href="/hizmet-bolgeleri"
                className="px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-sm font-label-md hover:bg-secondary transition-colors"
              >
                Tüm İlçeler →
              </Link>
            </div>
          </div>
        </section>
      )}

      {isCity && (
        <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center font-bold">
              İstanbul İlçeleri
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {otherDistricts.map((d) => (
                <Link
                  key={d.slug}
                  href={d.canonicalPath}
                  className={`p-4 rounded-xl border text-center hover-lift transition-all ${
                    d.isHeadquarters
                      ? "bg-primary-container text-on-primary border-secondary/30"
                      : "bg-surface-container-lowest border-outline-variant hover:border-secondary/30"
                  }`}
                >
                  <span className="font-label-md text-sm font-semibold block">
                    {d.title}
                  </span>
                  {d.isHeadquarters && (
                    <span className="text-xs text-secondary-container mt-1 block">
                      Merkez
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-section-padding bg-primary-container text-on-primary px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4 font-bold">
            {location.title} Acil Tesisat Desteği
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-8 max-w-2xl mx-auto">
            {location.title} bölgesinde 7/24 acil tesisat ekibimiz su kaçağı, tıkanıklık ve kombi arızalarında hızlı müdahale sağlar.
          </p>
          <a
            href={getPhoneHref(siteSettings.phone)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            Hemen Ara — {siteSettings.phone}
          </a>
        </div>
      </section>
    </>
  );
}
