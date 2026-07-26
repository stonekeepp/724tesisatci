import {
  getDistrictMetaBySlug,
  istanbulDistricts,
  type IstanbulDistrictMeta,
} from "../../data/mock/istanbulDistricts";
import { getDistrictLocations } from "../../data/mock/locations";
import { localServiceLandingPages } from "../../data/mock/localServiceLandingPages";
import { services } from "../../data/mock/services";
import {
  getPublishedBlogPostBySlug,
  getPublishedBlogPosts,
} from "../../data/mock/blogPosts";
import type { BlogPost, Location, RegionGroup, Service } from "../../types";
import { isPublishedContent } from "./publication";

const MAX_NEARBY_DISPLAY = 6;
const MAX_REGION_EXTRA = 4;
const MAX_TOTAL_DISTRICT_LINKS = 8;

export type LocationRelationWarning = {
  sourceSlug: string;
  field: string;
  targetSlug?: string;
  message: string;
};

export function getNearbyDistricts(
  districtSlug: string,
  limit = MAX_NEARBY_DISPLAY
): Location[] {
  const meta = getDistrictMetaBySlug(districtSlug);
  if (!meta) return [];
  const seen = new Set<string>();
  const result: Location[] = [];
  for (const slug of meta.nearbyDistrictSlugs) {
    if (slug === districtSlug || seen.has(slug)) continue;
    seen.add(slug);
    const loc = getDistrictLocations().find((d) => d.slug === slug);
    if (loc) result.push(loc);
    if (result.length >= limit) break;
  }
  return result;
}

export function getDistrictsByRegion(regionGroup: RegionGroup): Location[] {
  const slugs = new Set(
    istanbulDistricts
      .filter((d) => d.regionGroup === regionGroup)
      .map((d) => d.slug)
  );
  return getDistrictLocations().filter((d) => slugs.has(d.slug));
}

/**
 * Nearby (up to 6) + same-region extras (up to 4), capped at 8 total.
 * Excludes self and duplicates. Empty nearby → empty (no 39-district fallback).
 */
export function getRelatedDistrictsForDisplay(
  districtSlug: string
): Location[] {
  const meta = getDistrictMetaBySlug(districtSlug);
  if (!meta) return [];

  const nearby = getNearbyDistricts(districtSlug, MAX_NEARBY_DISPLAY);
  const seen = new Set(nearby.map((d) => d.slug));
  seen.add(districtSlug);

  const regionExtras: Location[] = [];
  for (const loc of getDistrictsByRegion(meta.regionGroup)) {
    if (seen.has(loc.slug)) continue;
    seen.add(loc.slug);
    regionExtras.push(loc);
    if (regionExtras.length >= MAX_REGION_EXTRA) break;
  }

  return [...nearby, ...regionExtras].slice(0, MAX_TOTAL_DISTRICT_LINKS);
}

export function getRelatedLocalLandingsForService(serviceSlug: string) {
  const fromField = services.find((s) => s.slug === serviceSlug);
  const preferred = fromField?.relatedLocalLandingSlugs ?? [];
  const seen = new Set<string>();
  const result = [];

  for (const slug of preferred) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    const landing = localServiceLandingPages.find((l) => l.slug === slug);
    if (landing) result.push(landing);
  }

  for (const landing of localServiceLandingPages) {
    if (landing.serviceSlug !== serviceSlug || seen.has(landing.slug)) continue;
    seen.add(landing.slug);
    result.push(landing);
  }

  return result;
}

export function getRelatedServicesForDistrict(
  districtSlug: string
): Service[] {
  const loc = getDistrictLocations().find((d) => d.slug === districtSlug);
  if (!loc) return [];
  const seen = new Set<string>();
  const result: Service[] = [];
  for (const slug of loc.relatedServices) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    const service = services.find((s) => s.slug === slug);
    if (service) result.push(service);
  }
  return result;
}

export function getPublishedGuidesForService(
  serviceSlug: string
): BlogPost[] {
  const service = services.find((s) => s.slug === serviceSlug);
  const guideSlugs = service?.relatedGuideSlugs ?? [];
  const seen = new Set<string>();
  const result: BlogPost[] = [];

  for (const slug of guideSlugs) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    const post = getPublishedBlogPostBySlug(slug);
    if (post) result.push(post);
  }

  if (result.length === 0) {
    for (const post of getPublishedBlogPosts()) {
      const slugs = [
        ...post.relatedServices,
        ...(post.relatedServiceSlugs ?? []),
      ];
      if (!slugs.includes(serviceSlug) || seen.has(post.slug)) continue;
      seen.add(post.slug);
      result.push(post);
    }
  }

  return result;
}

export function getPublishedGuidesForLocalLanding(
  localLandingSlug: string
): BlogPost[] {
  const landing = localServiceLandingPages.find(
    (l) => l.slug === localLandingSlug
  );
  if (!landing) return [];
  return getPublishedGuidesForService(landing.serviceSlug);
}

export function validateLocationRelations(): LocationRelationWarning[] {
  const warnings: LocationRelationWarning[] = [];
  const slugSet = new Set(istanbulDistricts.map((d) => d.slug));

  for (const d of istanbulDistricts) {
    if (!d.regionGroup) {
      warnings.push({
        sourceSlug: d.slug,
        field: "regionGroup",
        message: "missing regionGroup",
      });
    }

    if (!d.nearbyDistrictSlugs?.length) {
      warnings.push({
        sourceSlug: d.slug,
        field: "nearbyDistrictSlugs",
        message: "missing nearby list",
      });
    }

    const seenNearby = new Set<string>();
    for (const nearby of d.nearbyDistrictSlugs ?? []) {
      if (nearby === d.slug) {
        warnings.push({
          sourceSlug: d.slug,
          field: "nearbyDistrictSlugs",
          targetSlug: nearby,
          message: "self in nearby list",
        });
      }
      if (seenNearby.has(nearby)) {
        warnings.push({
          sourceSlug: d.slug,
          field: "nearbyDistrictSlugs",
          targetSlug: nearby,
          message: "duplicate nearby slug",
        });
      }
      seenNearby.add(nearby);
      if (!slugSet.has(nearby)) {
        warnings.push({
          sourceSlug: d.slug,
          field: "nearbyDistrictSlugs",
          targetSlug: nearby,
          message: "invalid nearby slug",
        });
      } else {
        const other = getDistrictMetaBySlug(nearby);
        if (other && !other.nearbyDistrictSlugs.includes(d.slug)) {
          warnings.push({
            sourceSlug: d.slug,
            field: "nearbyDistrictSlugs",
            targetSlug: nearby,
            message: "asymmetric nearby relation",
          });
        }
      }
    }
  }

  for (const service of services) {
    for (const slug of service.relatedLocalLandingSlugs ?? []) {
      if (!localServiceLandingPages.some((l) => l.slug === slug)) {
        warnings.push({
          sourceSlug: service.slug,
          field: "relatedLocalLandingSlugs",
          targetSlug: slug,
          message: "invalid local landing slug",
        });
      }
    }
  }

  return warnings;
}

export function getDistrictMetaOrThrow(
  slug: string
): IstanbulDistrictMeta | undefined {
  return getDistrictMetaBySlug(slug);
}

export const LOCATION_LINK_LIMITS = {
  MAX_NEARBY_DISPLAY,
  MAX_REGION_EXTRA,
  MAX_TOTAL_DISTRICT_LINKS,
} as const;

export { isPublishedContent };
