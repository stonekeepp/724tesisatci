import { localServiceLandingPages } from "@/data/mock/localServiceLandingPages";
import { workmanshipWarrantyFaq } from "@/data/mock/serviceFaqs";
import type { FAQItem, LocalServiceLanding, SEOData } from "@/types";

export function getLocalLandingBySlug(
  slug: string
): LocalServiceLanding | undefined {
  return localServiceLandingPages.find((page) => page.slug === slug);
}

export function getLocalLandingByServiceSlug(
  serviceSlug: string
): LocalServiceLanding | undefined {
  return localServiceLandingPages.find(
    (page) => page.serviceSlug === serviceSlug && page.indexable !== false
  );
}

export function getAllLocalLandingSlugs(): string[] {
  return localServiceLandingPages.map((page) => page.slug);
}

export function getIndexableLocalLandingPages(): LocalServiceLanding[] {
  return localServiceLandingPages.filter((page) => page.indexable !== false);
}

export function getLocalLandingSeo(landing: LocalServiceLanding): SEOData {
  return {
    title: landing.title,
    description: landing.description,
    canonicalPath: landing.canonicalPath,
  };
}

export function getRelatedLocalLandings(
  landing: LocalServiceLanding
): LocalServiceLanding[] {
  return landing.relatedLocalSlugs
    .map((slug) => getLocalLandingBySlug(slug))
    .filter((page): page is LocalServiceLanding => Boolean(page));
}

/** Append shared 6-month workmanship warranty FAQ when missing. */
export function enrichLocalLandingFaq(faq: FAQItem[]): FAQItem[] {
  const hasWarranty = faq.some(
    (item) =>
      /garanti/i.test(item.question) ||
      item.question === workmanshipWarrantyFaq.question
  );
  if (hasWarranty) return faq;
  return [...faq, workmanshipWarrantyFaq];
}

export function withLocalLandingFaqs(
  landing: LocalServiceLanding
): LocalServiceLanding {
  return {
    ...landing,
    faq: enrichLocalLandingFaq(landing.faq),
  };
}
