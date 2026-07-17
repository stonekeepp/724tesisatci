import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ServiceDetailTemplate } from "@/components/pages/ServiceDetailTemplate";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getAllServices, getServiceBySlug } from "@/lib/services/serviceService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata, seoFromEntity } from "@/lib/services/seoService";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "@/lib/services/schemaService";
import { getAllServiceSlugs } from "@/data/mock/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata(seoFromEntity(service));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const allServices = await getAllServices();
  const relatedServiceItems = allServices.filter((s) =>
    service.relatedServices.includes(s.slug)
  );
  const settings = await getSiteSettings();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: service.title, href: service.canonicalPath },
  ];

  const schemas = [
    buildLocalBusinessSchema(settings, "İstanbul"),
    buildServiceSchema(service, settings),
    buildBreadcrumbSchema(breadcrumbs),
    buildFAQSchema(service.faq),
  ].filter(Boolean);

  return (
    <SiteLayout activePath="/hizmetler">
      <JsonLdScript data={schemas} />
      <ServiceDetailTemplate
        service={service}
        relatedServiceItems={relatedServiceItems}
        breadcrumbs={breadcrumbs}
      />
    </SiteLayout>
  );
}
