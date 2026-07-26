import { cache } from "@/lib/cache/redisCache";
import { getBlogRepository } from "@/lib/repositories";
import { isPublishedContent } from "@/lib/utils/publication";

export async function getAllBlogPosts() {
  return getBlogRepository().findAll();
}

export async function getPublishedBlogPosts() {
  return cache.wrap("blog:published", () => getBlogRepository().findPublished());
}

export async function getBlogPostBySlug(slug: string) {
  return getBlogRepository().findBySlug(slug);
}

/** Returns published post only; draft/archived → null. */
export async function getPublishedBlogPostBySlug(slug: string) {
  const post = await getBlogPostBySlug(slug);
  if (!post || !isPublishedContent(post)) return null;
  return post;
}

export async function getBlogPostById(id: string) {
  return getBlogRepository().findById(id);
}
