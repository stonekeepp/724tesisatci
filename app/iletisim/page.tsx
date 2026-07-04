import { buildMetadata } from "@/lib/services/seoService";
import { staticPageSeo } from "@/data/mock/seo";
import { IletisimPageClient } from "@/components/pages/IletisimPageClient";

export const metadata = buildMetadata(staticPageSeo.iletisim);

export default function IletisimPage() {
  return <IletisimPageClient />;
}
