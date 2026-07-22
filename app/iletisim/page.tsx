import { buildMetadata } from "@/lib/services/seoService";
import {
  buildBreadcrumbSchema,
  buildContactPageSchema,
} from "@/lib/services/schemaService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { staticPageSeo } from "@/data/mock/seo";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { IletisimPageClient } from "@/components/pages/IletisimPageClient";

export const metadata = buildMetadata(staticPageSeo.iletisim);

export default async function IletisimPage() {
  const settings = await getSiteSettings();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "İletişim", href: "/iletisim" },
  ];

  const schemas = [
    buildContactPageSchema(settings),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLdScript data={schemas} />
      <IletisimPageClient />
    </>
  );
}
