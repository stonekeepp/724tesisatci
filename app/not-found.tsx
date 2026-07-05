import Link from "next/link";
import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContextualLinks } from "@/components/ui/ContextualLinks";
import { primaryHubLinks } from "@/lib/utils/internalLinks";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | 724 Tesisatçı",
  description: "Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya hizmetlerimizi inceleyin.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-container-max mx-auto">
          <h1 className="font-display-lg text-headline-lg text-primary mb-4">
            404 — Sayfa Bulunamadı
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-lg font-label-md mb-12"
          >
            Ana Sayfaya Dön
          </Link>
          <ContextualLinks title="Popüler sayfalar" links={primaryHubLinks} />
        </div>
      </section>
    </SiteLayout>
  );
}
