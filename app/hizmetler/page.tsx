import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getAllServices } from "@/lib/services/serviceService";
import { buildMetadata } from "@/lib/services/seoService";
import { staticPageSeo } from "@/data/mock/seo";
import { pageImages } from "@/data/mock/images";
import { StitchImage } from "@/components/ui/StitchImage";

export const metadata = buildMetadata(staticPageSeo.hizmetler);

export default async function HizmetlerPage() {
  const services = await getAllServices();

  return (
    <SiteLayout activePath="/hizmetler">
      <section className="relative pt-20 pb-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <StitchImage
            src={pageImages.hizmetlerHeroBg}
            alt="Profesyonel tesisat hizmetleri"
            fill
            className="opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 to-surface-container-lowest" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-6">
            Uzman Çözümler
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 max-w-4xl mx-auto">
            İstanbul Profesyonel Tesisat Hizmetleri
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Kırmadan dökmeden, son teknoloji cihazlarla tespit ve onarım. Evinizin veya iş yerinizin tesisat sorunlarını kalıcı, garantili ve temiz bir şekilde çözüyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-on-secondary rounded-lg font-label-md hover:bg-on-secondary-container transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">plumbing</span>
              Hizmet Talep Et
            </Link>
            <Link
              href="/hizmet-bolgeleri"
              className="w-full sm:w-auto px-8 py-4 bg-surface text-primary border border-outline-variant rounded-lg font-label-md hover:bg-surface-variant transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">explore</span>
              Hizmet Bölgelerimiz
            </Link>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-bright">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 md:text-center">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
              Kapsamlı Tesisat Çözümleri
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Her türlü tesisat ihtiyacınız için özel ekipmanlar ve uzman kadromuzla yanınızdayız.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className={`bg-surface-container-lowest rounded-xl p-8 border border-outline-variant soft-shadow service-card-hover transition-all duration-300 flex flex-col justify-between ${service.featured ? "lg:col-span-2" : ""}`}
              >
                <div>
                  <div className="w-14 h-14 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
                    <span
                      className="material-symbols-outlined text-secondary text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    {service.shortDescription}
                  </p>
                </div>
                <Link
                  href={service.canonicalPath}
                  className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md hover:text-on-secondary-container"
                >
                  Detaylı İncele{" "}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
