import Link from "next/link";
import type { Location, Neighborhood, Service } from "@/types";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LocationHeroImage } from "@/components/ui/LocationHeroImage";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

interface NeighborhoodDetailTemplateProps {
  neighborhood: Neighborhood;
  district: Location;
  allServices: Service[];
  siblingNeighborhoods: Neighborhood[];
}

export function NeighborhoodDetailTemplate({
  neighborhood,
  district,
  allServices,
  siblingNeighborhoods,
}: NeighborhoodDetailTemplateProps) {
  return (
    <>
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link
              href={district.canonicalPath}
              className="inline-flex items-center gap-1 text-secondary font-label-md text-sm mb-4 hover:text-on-secondary-container transition-colors"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                arrow_back
              </span>
              {district.title} İlçesi
            </Link>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 font-bold leading-tight">
              {neighborhood.title} Tesisatçı
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              {neighborhood.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: "schedule", label: "15–30 Dk Varış" },
                { icon: "home_pin", label: "Merkez Operasyon Yakını" },
                { icon: "verified", label: "Garantili İşçilik" },
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
            </div>
          </div>
          <div className="relative h-[360px] lg:h-[440px] rounded-2xl overflow-hidden soft-shadow border border-outline-variant">
            <LocationHeroImage
              title={neighborhood.title}
              subtitle={`${district.title} · Mahalle`}
              slug={neighborhood.slug}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-bright px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-3 font-bold">
              {neighborhood.title} Hizmetlerimiz
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {neighborhood.title} mahallesinde sunduğumuz tüm profesyonel tesisat hizmetleri.
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

      {neighborhood.faq.length > 0 && (
        <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary-container/30 text-secondary font-label-md text-label-md mb-4">
                Bilgi Bankası
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-3 font-bold">
                {neighborhood.title} — Sık Sorulan Sorular
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {neighborhood.title} mahallesinde en çok merak edilen {neighborhood.faq.length} sorunun yanıtı.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={neighborhood.faq} variant="premium" />
            </div>
          </div>
        </section>
      )}

      {siblingNeighborhoods.length > 0 && (
        <section className="py-section-padding bg-surface-bright px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 text-center font-bold">
              Diğer {district.title} Mahalleleri
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {siblingNeighborhoods
                .filter((n) => n.slug !== neighborhood.slug)
                .map((n) => (
                  <Link
                    key={n.slug}
                    href={n.canonicalPath}
                    className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant text-sm font-label-md hover:bg-secondary-container hover:text-secondary transition-colors border border-outline-variant/50"
                  >
                    {n.title}
                  </Link>
                ))}
              <Link
                href="/hizmet-bolgeleri/kagithane-mahalleleri"
                className="px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-sm font-label-md hover:bg-secondary transition-colors"
              >
                Tüm Mahalleler →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-section-padding bg-primary-container text-on-primary px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4 font-bold">
            {neighborhood.title} Acil Tesisat Desteği
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-8 max-w-2xl mx-auto">
            {neighborhood.title} mahallesinde 7/24 acil tesisat ekibimiz ortalama 15–30 dakika içinde adresinize ulaşır.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/hizmetler"
              className="text-on-primary-container hover:text-secondary-container font-label-md transition-colors"
            >
              Tüm Hizmetler →
            </Link>
            <Link
              href={district.canonicalPath}
              className="text-on-primary-container hover:text-secondary-container font-label-md transition-colors"
            >
              {district.title} İlçe Sayfası →
            </Link>
            <Link
              href="/sss"
              className="text-on-primary-container hover:text-secondary-container font-label-md transition-colors"
            >
              SSS →
            </Link>
          </div>
          <a
            href={getPhoneHref(siteSettings.phone)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            Hemen Ara
          </a>
        </div>
      </section>
    </>
  );
}
