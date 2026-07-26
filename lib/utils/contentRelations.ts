import { contentClusters, getContentClusterById } from "@/data/mock/contentClusters";
import {
  getBlogPostBySlug,
  getPublishedBlogPostBySlug,
  blogPosts,
} from "@/data/mock/blogPosts";
import { services } from "@/data/mock/services";
import type { BlogPost, ContentCluster, Service } from "@/types";
import type { ContentClusterDefinition } from "@/data/mock/contentClusters";
import { isPublishedContent } from "@/lib/utils/publication";

export type InternalReferenceWarning = {
  sourceSlug: string;
  field: string;
  targetSlug: string;
  message: string;
};

function relatedServiceSlugList(post: BlogPost): string[] {
  const fromLegacy = post.relatedServices ?? [];
  const fromNew = post.relatedServiceSlugs ?? [];
  return [...new Set([...fromLegacy, ...fromNew])];
}

/** Cluster definition for a post, if assigned. */
export function getClusterForPost(
  post: BlogPost
): ContentClusterDefinition | undefined {
  if (!post.cluster) return undefined;
  return getContentClusterById(post.cluster);
}

/**
 * Related articles for public UI — only published targets, unique, existing slugs.
 * Draft/archived relatedArticleSlugs are omitted (no broken public links).
 */
export function getPublishedRelatedArticles(post: BlogPost): BlogPost[] {
  const slugs = post.relatedArticleSlugs ?? [];
  const seen = new Set<string>();
  const result: BlogPost[] = [];

  for (const slug of slugs) {
    if (seen.has(slug) || slug === post.slug) continue;
    seen.add(slug);
    const related = getPublishedBlogPostBySlug(slug);
    if (related) result.push(related);
  }

  return result;
}

/** Related services that exist in the catalog (legacy + relatedServiceSlugs). */
export function getRelatedServicesForPost(post: BlogPost): Service[] {
  const slugs = relatedServiceSlugList(post);
  const seen = new Set<string>();
  const result: Service[] = [];

  for (const slug of slugs) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    const service = services.find((s) => s.slug === slug);
    if (service) result.push(service);
  }

  return result;
}

/** Whether a published post links (in data) to a non-published article slug. */
export function publishedPostLinksToDraftArticle(post: BlogPost): string[] {
  if (!isPublishedContent(post)) return [];
  const bad: string[] = [];
  for (const slug of post.relatedArticleSlugs ?? []) {
    const target = getBlogPostBySlug(slug);
    if (target && !isPublishedContent(target)) {
      bad.push(slug);
    }
  }
  return bad;
}

export function validateInternalReferences(): InternalReferenceWarning[] {
  const warnings: InternalReferenceWarning[] = [];
  const serviceSlugSet = new Set(services.map((s) => s.slug));
  const articleSlugSet = new Set(blogPosts.map((p) => p.slug));
  const clusterArticleOwner = new Map<string, ContentCluster>();

  for (const cluster of contentClusters) {
    for (const slug of cluster.articleSlugs) {
      const prev = clusterArticleOwner.get(slug);
      if (prev && prev !== cluster.id) {
        warnings.push({
          sourceSlug: slug,
          field: "contentClusters.articleSlugs",
          targetSlug: cluster.id,
          message: `article belongs to multiple clusters: ${prev} and ${cluster.id}`,
        });
      } else {
        clusterArticleOwner.set(slug, cluster.id);
      }
      if (!articleSlugSet.has(slug)) {
        warnings.push({
          sourceSlug: cluster.id,
          field: "articleSlugs",
          targetSlug: slug,
          message: "cluster article slug missing from blogPosts",
        });
      }
    }
    for (const slug of cluster.primaryServiceSlugs) {
      if (!serviceSlugSet.has(slug)) {
        warnings.push({
          sourceSlug: cluster.id,
          field: "primaryServiceSlugs",
          targetSlug: slug,
          message: "cluster service slug missing from services",
        });
      }
    }
  }

  for (const post of blogPosts) {
    for (const slug of relatedServiceSlugList(post)) {
      if (!serviceSlugSet.has(slug)) {
        warnings.push({
          sourceSlug: post.slug,
          field: "relatedServices",
          targetSlug: slug,
          message: "unknown service slug",
        });
      }
    }
    for (const slug of post.relatedArticleSlugs ?? []) {
      if (!articleSlugSet.has(slug)) {
        warnings.push({
          sourceSlug: post.slug,
          field: "relatedArticleSlugs",
          targetSlug: slug,
          message: "unknown article slug",
        });
      }
    }
    if (isPublishedContent(post)) {
      for (const draftSlug of publishedPostLinksToDraftArticle(post)) {
        warnings.push({
          sourceSlug: post.slug,
          field: "relatedArticleSlugs",
          targetSlug: draftSlug,
          message:
            "published post references draft article (public UI must filter)",
        });
      }
    }
  }

  return warnings;
}
