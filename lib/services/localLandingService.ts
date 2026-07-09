import { localServiceLandingPages } from "@/data/mock/localServiceLandingPages";
import type { LocalServiceLanding, SEOData } from "@/types";

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
