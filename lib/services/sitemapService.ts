import { getAllServices } from "./serviceService";
import { getAllLocations } from "./locationService";
import { getAllNeighborhoods } from "./neighborhoodService";
import { getPublishedBlogPosts } from "./blogService";
import { getSiteUrl } from "./seoService";
import { staticPageSeo } from "@/data/mock/seo";

export async function generateSitemapEntries() {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticPages = [
    "/",
    ...Object.values(staticPageSeo).map((s) => s.canonicalPath),
    "/hizmet-bolgeleri/kagithane-mahalleleri",
  ];

  const services = await getAllServices();
  const locations = await getAllLocations();
  const neighborhoods = await getAllNeighborhoods();
  const blogPosts = await getPublishedBlogPosts();

  const entries = [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${siteUrl}${s.canonicalPath}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...locations.map((l) => ({
      url: `${siteUrl}${l.canonicalPath}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...neighborhoods.map((n) => ({
      url: `${siteUrl}${n.canonicalPath}`,
      lastModified: now,
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
