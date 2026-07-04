import { cache } from "@/lib/cache/redisCache";
import { getBlogRepository } from "@/lib/repositories";

export async function getAllBlogPosts() {
  return getBlogRepository().findAll();
}

export async function getPublishedBlogPosts() {
  return cache.wrap("blog:published", () => getBlogRepository().findPublished());
}

export async function getBlogPostBySlug(slug: string) {
  return getBlogRepository().findBySlug(slug);
}

export async function getBlogPostById(id: string) {
  return getBlogRepository().findById(id);
}
