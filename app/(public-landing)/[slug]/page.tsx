import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ServiceDetailTemplate } from "@/components/pages/ServiceDetailTemplate";
import { AcilTesisatciLandingTemplate } from "@/components/pages/AcilTesisatciLandingTemplate";
import { LocalServiceLandingTemplate } from "@/components/pages/LocalServiceLandingTemplate";
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
  getAllLocalLandingSlugs,
  getLocalLandingBySlug,
  getLocalLandingSeo,
  getRelatedLocalLandings,
} from "@/lib/services/localLandingService";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildLocalBusinessSchema,
  buildLocalLandingServiceSchema,
  buildServiceSchema,
} from "@/lib/services/schemaService";
import { acilTesisatciFaqs } from "@/data/mock/adLandingPages";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const localSlugs = getAllLocalLandingSlugs();
  const localSlugSet = new Set(localSlugs);
  const adSlugs = getAllAdLandingSlugs().filter((slug) => !localSlugSet.has(slug));

  return [...localSlugs, ...adSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const localLanding = getLocalLandingBySlug(slug);

  if (localLanding) {
    return buildMetadata(getLocalLandingSeo(localLanding));
  }

  const adLanding = getAdLandingBySlug(slug);
  if (!adLanding) return {};

  return buildMetadata(getAdLandingSeo(adLanding));
}

export default async function PublicLandingPage({ params }: Props) {
  const { slug } = await params;
  const localLanding = getLocalLandingBySlug(slug);

  if (localLanding) {
    const settings = await getSiteSettings();
    const service = await getServiceBySlug(localLanding.serviceSlug);
    if (!service) notFound();

    const relatedLocalLandings = getRelatedLocalLandings(localLanding);
    const breadcrumbs = [
      { label: "Ana Sayfa", href: "/" },
      { label: "Kağıthane Tesisat Hizmet Bölgeleri", href: "/hizmet-bolgeleri/kagithane" },
      { label: localLanding.h1, href: localLanding.canonicalPath },
    ];

    const schemas = [
      buildLocalBusinessSchema(settings, "Kağıthane, İstanbul"),
      buildLocalLandingServiceSchema(localLanding, service, settings),
      buildBreadcrumbSchema(breadcrumbs),
      buildFAQSchema(localLanding.faq),
    ].filter(Boolean);

    return (
      <SiteLayout activePath="/hizmet-bolgeleri/kagithane">
        <JsonLdScript data={schemas} />
        <LocalServiceLandingTemplate
          landing={localLanding}
          service={service}
          relatedLocalLandings={relatedLocalLandings}
          breadcrumbs={breadcrumbs}
        />
      </SiteLayout>
    );
  }

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
    buildLocalBusinessSchema(settings, "İstanbul"),
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
