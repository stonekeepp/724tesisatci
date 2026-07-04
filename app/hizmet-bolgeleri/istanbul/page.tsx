import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getLocationBySlug } from "@/lib/services/locationService";
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

export async function generateMetadata() {
  const location = await getLocationBySlug("istanbul");
  if (!location) return {};
  return buildMetadata(seoFromEntity(location));
}

export default async function IstanbulPage() {
  const location = await getLocationBySlug("istanbul");
  if (!location) notFound();

  const allServices = await getAllServices();
  const relatedServices = allServices.filter((s) =>
    location.relatedServices.includes(s.slug)
  );
  const settings = await getSiteSettings();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
    { label: location.title, href: location.canonicalPath },
  ];

  const schemas = [
    buildLocalBusinessSchema(settings, "İstanbul"),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <SiteLayout activePath="/hizmet-bolgeleri">
      <JsonLdScript data={schemas} />
      <Breadcrumb items={breadcrumbs} />
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">
            {location.title} Tesisatçı
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-8">
            {location.description}
          </p>
          {location.stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {location.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface-container-low p-6 rounded-xl border border-outline-variant text-center"
                >
                  <p className="font-headline-md text-headline-md text-secondary font-bold">
                    {stat.value}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={getPhoneHref(settings.phone)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-lg font-label-md"
            >
              <span className="material-symbols-outlined">call</span>
              Hemen Ara
            </a>
            <a
              href={getWhatsAppHref(settings.whatsapp, settings.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary border border-outline-variant rounded-lg font-label-md"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </a>
          </div>
          <Link
            href="/hizmet-bolgeleri/kagithane"
            className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
          >
            Kağıthane Merkez Operasyon →
          </Link>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
              {location.title} Hizmetlerimiz
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
