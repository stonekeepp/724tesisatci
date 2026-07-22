import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { DistrictDetailTemplate } from "@/components/pages/DistrictDetailTemplate";
import {
  getAllLocations,
  getLocationBySlug,
} from "@/lib/services/locationService";
import { getNeighborhoodsByDistrict } from "@/lib/services/neighborhoodService";
import { getAllServices } from "@/lib/services/serviceService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata, seoFromEntity } from "@/lib/services/seoService";
import {
  buildAreaServiceSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/services/schemaService";
import { getDistrictLocations } from "@/data/mock/locations";

interface Props {
  params: Promise<{ district: string }>;
}

export async function generateStaticParams() {
  const locations = await getAllLocations();
  return locations.map((l) => ({ district: l.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { district: slug } = await params;
  const location = await getLocationBySlug(slug);
  if (!location) return {};
  return buildMetadata(seoFromEntity(location));
}

export default async function DistrictPage({ params }: Props) {
  const { district: slug } = await params;
  const location = await getLocationBySlug(slug);
  if (!location) notFound();

  const allServices = await getAllServices();
  const neighborhoods =
    location.neighborhoods.length > 0
      ? await getNeighborhoodsByDistrict(slug)
      : [];
  const settings = await getSiteSettings();
  const allDistricts = getDistrictLocations().sort((a, b) => {
    const aIndex = a.indexable !== false ? 0 : 1;
    const bIndex = b.indexable !== false ? 0 : 1;
    if (aIndex !== bIndex) return aIndex - bIndex;
    return a.title.localeCompare(b.title, "tr");
  });

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
    { label: location.title, href: location.canonicalPath },
  ];

  const areaLabel =
    location.slug === "istanbul"
      ? "İstanbul"
      : `${location.title}, İstanbul`;

  const isIndexable = location.indexable !== false;

  const schemas = [
    isIndexable
      ? buildAreaServiceSchema(
          settings,
          areaLabel,
          location.shortDescription,
          location.canonicalPath
        )
      : null,
    buildBreadcrumbSchema(breadcrumbs),
    isIndexable && location.faq.length > 0
      ? buildFAQSchema(location.faq)
      : null,
  ].filter(Boolean);

  return (
    <SiteLayout
      activePath={
        location.slug === "kagithane"
          ? location.canonicalPath
          : "/hizmet-bolgeleri"
      }
    >
      <JsonLdScript data={schemas} />
      <Breadcrumb items={breadcrumbs} />
      <DistrictDetailTemplate
        location={location}
        allServices={allServices}
        neighborhoods={neighborhoods}
        otherDistricts={allDistricts}
      />
    </SiteLayout>
  );
}
