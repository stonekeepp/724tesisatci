import fs from "fs/promises";
import path from "path";
import { blogPosts as seedPosts } from "@/data/mock/blogPosts";
import type { BlogPost, BlogFormInput } from "@/types";
import type { IBlogRepository } from "./interfaces";

const RUNTIME_PATH = path.join(process.cwd(), "data/runtime/blog.json");

async function loadRuntimePosts(): Promise<BlogPost[]> {
  try {
    const data = await fs.readFile(RUNTIME_PATH, "utf-8");
    return JSON.parse(data) as BlogPost[];
  } catch {
    return [];
  }
}

async function saveRuntimePosts(posts: BlogPost[]): Promise<void> {
  await fs.mkdir(path.dirname(RUNTIME_PATH), { recursive: true });
  await fs.writeFile(RUNTIME_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

function mergePosts(runtime: BlogPost[]): BlogPost[] {
  const runtimeIds = new Set(runtime.map((p) => p.id));
  const merged = [...seedPosts.filter((p) => !runtimeIds.has(p.id)), ...runtime];
  return merged.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export class MockBlogRepository implements IBlogRepository {
  private async getAllMerged(): Promise<BlogPost[]> {
    const runtime = await loadRuntimePosts();
    return mergePosts(runtime);
  }

  async findAll() {
    return this.getAllMerged();
  }

  async findPublished() {
    const all = await this.getAllMerged();
    return all.filter((p) => p.status === "published");
  }

  async findBySlug(slug: string) {
    const all = await this.getAllMerged();
    return all.find((p) => p.slug === slug) ?? null;
  }

  async findById(id: string) {
    const all = await this.getAllMerged();
    return all.find((p) => p.id === id) ?? null;
  }

  async create(data: BlogFormInput) {
    const runtime = await loadRuntimePosts();
    const now = new Date().toISOString();
    const post: BlogPost = {
      id: `runtime-${Date.now()}`,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      status: data.status,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      relatedServices: data.relatedServices,
      faq: [],
      publishedAt: data.publishedAt || now,
      updatedAt: now,
      readingTime: Math.max(1, Math.ceil(data.content.split(/\s+/).length / 200)),
      canonicalPath: `/blog/${data.slug}`,
    };
    runtime.push(post);
    await saveRuntimePosts(runtime);
    return post;
  }

  async update(id: string, data: Partial<BlogFormInput>) {
    const runtime = await loadRuntimePosts();
    const seedIndex = seedPosts.findIndex((p) => p.id === id);
    const runtimeIndex = runtime.findIndex((p) => p.id === id);

    if (runtimeIndex >= 0) {
      const existing = runtime[runtimeIndex];
      const updated: BlogPost = {
        ...existing,
        ...data,
        updatedAt: new Date().toISOString(),
        canonicalPath: data.slug ? `/blog/${data.slug}` : existing.canonicalPath,
        readingTime: data.content
          ? Math.max(1, Math.ceil(data.content.split(/\s+/).length / 200))
          : existing.readingTime,
      };
      runtime[runtimeIndex] = updated;
      await saveRuntimePosts(runtime);
      return updated;
    }

    if (seedIndex >= 0) {
      const existing = seedPosts[seedIndex];
      const updated: BlogPost = {
        ...existing,
        ...data,
        updatedAt: new Date().toISOString(),
        canonicalPath: data.slug ? `/blog/${data.slug}` : existing.canonicalPath,
      };
      runtime.push(updated);
      await saveRuntimePosts(runtime);
      return updated;
    }

    return null;
  }

  async delete(id: string) {
    const runtime = await loadRuntimePosts();
    const index = runtime.findIndex((p) => p.id === id);
    if (index >= 0) {
      runtime.splice(index, 1);
      await saveRuntimePosts(runtime);
      return true;
    }
    const seedPost = seedPosts.find((p) => p.id === id);
    if (seedPost) {
      runtime.push({ ...seedPost, status: "draft" as const });
      await saveRuntimePosts(runtime);
      return true;
    }
    return false;
  }
}

export const mockBlogRepository = new MockBlogRepository();
