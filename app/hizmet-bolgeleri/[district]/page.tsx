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
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildLocalBusinessSchema,
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
  const allDistricts = getDistrictLocations();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
    { label: location.title, href: location.canonicalPath },
  ];

  const areaLabel =
    location.slug === "istanbul"
      ? "İstanbul"
      : `${location.title}, İstanbul`;

  const schemas = [
    buildLocalBusinessSchema(settings, areaLabel),
    buildBreadcrumbSchema(breadcrumbs),
    location.faq.length > 0 ? buildFAQSchema(location.faq) : null,
  ].filter(Boolean);

  return (
    <SiteLayout activePath="/hizmet-bolgeleri">
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
