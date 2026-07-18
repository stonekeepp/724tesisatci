import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { NeighborhoodDetailTemplate } from "@/components/pages/NeighborhoodDetailTemplate";
import { getLocationBySlug } from "@/lib/services/locationService";
import {
  getAllNeighborhoods,
  getNeighborhoodBySlug,
  getNeighborhoodsByDistrict,
} from "@/lib/services/neighborhoodService";
import { getAllServices } from "@/lib/services/serviceService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata, seoFromEntity } from "@/lib/services/seoService";
import {
  buildAreaServiceSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/services/schemaService";

interface Props {
  params: Promise<{ district: string; neighborhood: string }>;
}

export async function generateStaticParams() {
  const neighborhoods = await getAllNeighborhoods();
  return neighborhoods.map((n) => ({
    district: n.districtSlug,
    neighborhood: n.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { neighborhood: slug } = await params;
  const neighborhood = await getNeighborhoodBySlug(slug);
  if (!neighborhood) return {};
  return buildMetadata(seoFromEntity(neighborhood));
}

export default async function NeighborhoodPage({ params }: Props) {
  const { district: districtSlug, neighborhood: neighborhoodSlug } =
    await params;

  const neighborhood = await getNeighborhoodBySlug(neighborhoodSlug);
  if (!neighborhood || neighborhood.districtSlug !== districtSlug) {
    notFound();
  }

  const district = await getLocationBySlug(districtSlug);
  if (!district) notFound();

  const allServices = await getAllServices();
  const siblingNeighborhoods = await getNeighborhoodsByDistrict(districtSlug);
  const settings = await getSiteSettings();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
    { label: district.title, href: district.canonicalPath },
    { label: neighborhood.title, href: neighborhood.canonicalPath },
  ];

  const areaLabel = `${neighborhood.title}, ${district.title}, İstanbul`;
  const isIndexable = neighborhood.indexable !== false;

  const schemas = [
    buildAreaServiceSchema(
      settings,
      areaLabel,
      neighborhood.shortDescription
    ),
    buildBreadcrumbSchema(breadcrumbs),
    isIndexable ? buildFAQSchema(neighborhood.faq) : null,
  ].filter(Boolean);

  return (
    <SiteLayout activePath="/hizmet-bolgeleri">
      <JsonLdScript data={schemas} />
      <Breadcrumb items={breadcrumbs} />
      <NeighborhoodDetailTemplate
        neighborhood={neighborhood}
        district={district}
        allServices={allServices}
        siblingNeighborhoods={siblingNeighborhoods}
      />
    </SiteLayout>
  );
}
