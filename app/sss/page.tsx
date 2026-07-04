import { SiteLayout } from "@/components/layout/SiteLayout";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { SSSPageClient } from "@/components/pages/SSSPageClient";
import { getAllFaqs } from "@/lib/services/faqService";
import { buildMetadata } from "@/lib/services/seoService";
import { buildFAQSchema } from "@/lib/services/schemaService";
import { staticPageSeo } from "@/data/mock/seo";

export const metadata = buildMetadata(staticPageSeo.sss);

export default async function SSSPage() {
  const faqs = await getAllFaqs();
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <JsonLdScript data={faqSchema} />
      <SSSPageClient faqs={faqs} />
    </>
  );
}
