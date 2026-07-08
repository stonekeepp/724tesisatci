import type { AdLandingPage } from "@/data/mock/adLandingPages";
import {
  getAdLandingBySlug as getAdLandingBySlugFromMock,
  getAllAdLandingSlugs as getAllAdLandingSlugsFromMock,
} from "@/data/mock/adLandingPages";
import type { Service } from "@/types";

export function getAdLandingBySlug(slug: string): AdLandingPage | undefined {
  return getAdLandingBySlugFromMock(slug);
}

export function getAllAdLandingSlugs(): string[] {
  return getAllAdLandingSlugsFromMock();
}

export function mergeServiceWithAdOverrides(
  service: Service,
  landing: AdLandingPage
): Service {
  const displayTitle = landing.displayTitle ?? landing.heroTitle;

  return {
    ...service,
    title: displayTitle,
    heroTitle: landing.heroTitle,
    heroDescription: landing.heroDescription ?? service.heroDescription,
  };
}

export function getAdLandingSeo(landing: AdLandingPage) {
  return {
    title: landing.seoTitle,
    description: landing.seoDescription,
    canonicalPath: `/${landing.slug}`,
    noindex: landing.noindex,
  };
}
