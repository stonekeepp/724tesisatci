import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ServiceDetailTemplate } from "@/components/pages/ServiceDetailTemplate";
import { AcilTesisatciLandingTemplate } from "@/components/pages/AcilTesisatciLandingTemplate";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getAllServices, getServiceBySlug } from "@/lib/services/serviceService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata } from "@/lib/services/seoService";
import {
  getAdLandingBySlug,
  getAllAdLandingSlugs,
  getAdLandingSeo,
  mergeServiceWithAdOverrides,
} from "@/lib/services/adLandingService";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "@/lib/services/schemaService";
import { acilTesisatciFaqs } from "@/data/mock/adLandingPages";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAdLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const landing = getAdLandingBySlug(slug);
  if (!landing) return {};
  return buildMetadata(getAdLandingSeo(landing));
}

export default async function AdLandingPage({ params }: Props) {
  const { slug } = await params;
  const landing = getAdLandingBySlug(slug);
  if (!landing) notFound();

  const settings = await getSiteSettings();
  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: landing.breadcrumbLabel, href: `/${landing.slug}` },
  ];

  if (landing.slug === "acil-tesisatci") {
    const schemas = [
      buildLocalBusinessSchema(settings, "İstanbul"),
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(acilTesisatciFaqs),
    ].filter(Boolean);

    return (
      <SiteLayout activePath="/">
        <JsonLdScript data={schemas} />
        <AcilTesisatciLandingTemplate landing={landing} breadcrumbs={breadcrumbs} />
      </SiteLayout>
    );
  }

  if (!landing.serviceSlug) notFound();

  const service = await getServiceBySlug(landing.serviceSlug);
  if (!service) notFound();

  const displayService = mergeServiceWithAdOverrides(service, landing);
  const allServices = await getAllServices();
  const relatedServiceItems = allServices.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  const schemas = [
    buildServiceSchema(displayService, settings),
    buildBreadcrumbSchema(breadcrumbs),
    buildFAQSchema(displayService.faq),
  ].filter(Boolean);

  return (
    <SiteLayout activePath="/hizmetler">
      <JsonLdScript data={schemas} />
      <ServiceDetailTemplate
        service={displayService}
        relatedServiceItems={relatedServiceItems}
        breadcrumbs={breadcrumbs}
        displayOverrides={{
          heroTitle: landing.heroTitle,
          heroDescription: landing.heroDescription,
          displayTitle: landing.displayTitle ?? landing.heroTitle,
        }}
      />
    </SiteLayout>
  );
}
