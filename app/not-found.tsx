import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-container-max mx-auto">
          <h1 className="font-display-lg text-headline-lg text-primary mb-4">
            404 — Sayfa Bulunamadı
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-lg font-label-md"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
