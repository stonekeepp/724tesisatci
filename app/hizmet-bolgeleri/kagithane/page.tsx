import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getLocationBySlug } from "@/lib/services/locationService";
import { getNeighborhoodsByDistrict } from "@/lib/services/neighborhoodService";
import { getAllServices } from "@/lib/services/serviceService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata, seoFromEntity } from "@/lib/services/seoService";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
} from "@/lib/services/schemaService";
import {
  getPhoneHref,
  getWhatsAppHref,
} from "@/data/mock/siteSettings";
import { pageImages } from "@/data/mock/images";
import { StitchImage } from "@/components/ui/StitchImage";

export async function generateMetadata() {
  const location = await getLocationBySlug("kagithane");
  if (!location) return {};
  return buildMetadata(seoFromEntity(location));
}

export default async function KagithanePage() {
  const location = await getLocationBySlug("kagithane");
  if (!location) notFound();

  const neighborhoods = await getNeighborhoodsByDistrict("kagithane");
  const allServices = await getAllServices();
  const relatedServices = allServices.filter((s) =>
    location.relatedServices.includes(s.slug)
  );
  const settings = await getSiteSettings();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
    { label: "Kağıthane", href: "/hizmet-bolgeleri/kagithane" },
  ];

  const schemas = [
    buildLocalBusinessSchema(settings, "Kağıthane, İstanbul"),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <SiteLayout activePath="/hizmet-bolgeleri">
      <JsonLdScript data={schemas} />
      <Breadcrumb items={breadcrumbs} />
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">
              Kağıthane Tesisatçı
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              {location.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">verified</span>
                Garantili Hizmet
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">schedule</span>
                30 Dk&apos;da Kapınızda
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">handyman</span>
                Kırmadan Çözüm
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={getPhoneHref(settings.phone)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-lg font-label-md"
              >
                <span className="material-symbols-outlined">call</span>
                Hemen Ara
              </a>
              <Link
                href="/hizmet-bolgeleri/kagithane-mahalleleri"
                className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary border border-outline-variant rounded-lg font-label-md"
              >
                Mahalleleri Gör
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden soft-shadow bg-surface-container-low">
            <StitchImage src={pageImages.kagithaneHero} alt="Kağıthane tesisat hizmeti" fill />
            {location.stats?.[0] && (
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="font-label-md text-label-md text-on-surface">
                    {location.stats[0].label}
                  </p>
                  <p className="font-headline-md text-headline-md text-secondary font-bold">
                    {location.stats[0].value}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-stack-lg max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-stack-sm">
              Kağıthane Mahallelerine Özel Hizmet
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Kağıthane&apos;nin her noktasına hızlı erişim sağlıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={n.canonicalPath}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant hover-lift flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 text-secondary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      location_on
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                      {n.title}
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    {n.shortDescription}
                  </p>
                </div>
                <span className="inline-flex items-center text-secondary font-label-md text-label-md">
                  Detaylı İncele{" "}
                  <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-section-padding bg-surface-bright px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center">
              Kağıthane Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.canonicalPath}
                  className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant soft-shadow service-card-hover transition-all"
                >
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {service.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
