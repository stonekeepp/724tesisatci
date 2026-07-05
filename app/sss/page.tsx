import { SiteLayout } from "@/components/layout/SiteLayout";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { SSSPageClient } from "@/components/pages/SSSPageClient";
import { getAllFaqs } from "@/lib/services/faqService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata, getSiteUrl } from "@/lib/services/seoService";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/services/schemaService";
import { staticPageSeo } from "@/data/mock/seo";

export const metadata = buildMetadata(staticPageSeo.sss);

export default async function SSSPage() {
  const faqs = await getAllFaqs();
  const settings = await getSiteSettings();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Sık Sorulan Sorular", href: "/sss" },
  ];

  const faqSchema = buildFAQSchema(faqs);

  const schemas = [
    buildBreadcrumbSchema(breadcrumbs),
    faqSchema,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: staticPageSeo.sss.title,
      description: staticPageSeo.sss.description,
      url: `${getSiteUrl()}/sss`,
      isPartOf: {
        "@type": "WebSite",
        name: settings.siteName,
      },
    },
  ].filter(Boolean);

  return (
    <>
      <JsonLdScript data={schemas} />
      <SSSPageClient faqs={faqs} />
    </>
  );
}
