import { getAllServices } from "./serviceService";
import { getAllLocations } from "./locationService";
import { getAllNeighborhoods } from "./neighborhoodService";
import { getPublishedBlogPosts } from "./blogService";
import { getSiteUrl } from "./seoService";
import { getIndexableLocalLandingPages } from "./localLandingService";
import { staticPageSeo } from "@/data/mock/seo";

/** Büyük içerik sürümü — her büyük içerik güncellemesinde bu tarihi güncelleyin */
const CONTENT_LAST_UPDATED = new Date("2026-07-24");

export async function generateSitemapEntries() {
  const siteUrl = getSiteUrl();

  const staticPages = [
    "/",
    ...Object.values(staticPageSeo).map((s) => s.canonicalPath),
    "/hizmet-bolgeleri/kagithane-mahalleleri",
  ];

  const services = await getAllServices();
  const locations = await getAllLocations();
  const neighborhoods = await getAllNeighborhoods();
  const blogPosts = await getPublishedBlogPosts();
  const localLandingPages = getIndexableLocalLandingPages();

  const entries = [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${siteUrl}${s.canonicalPath}`,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...localLandingPages.map((page) => ({
      url: `${siteUrl}${page.canonicalPath}`,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...locations
      .filter((l) => l.indexable !== false)
      .map((l) => ({
        url: `${siteUrl}${l.canonicalPath}`,
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ...neighborhoods
      .filter((n) => n.indexable !== false)
      .map((n) => ({
        url: `${siteUrl}${n.canonicalPath}`,
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ...blogPosts.map((p) => ({
      url: `${siteUrl}${p.canonicalPath}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
