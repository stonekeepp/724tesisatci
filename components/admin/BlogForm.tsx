"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/types";

interface BlogFormProps {
  initialData?: BlogPost;
}

export function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const relatedRaw = formData.get("relatedServices") as string;

    const payload = {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      excerpt: formData.get("excerpt") as string,
      content: formData.get("content") as string,
      category: formData.get("category") as string,
      status: formData.get("status") as "draft" | "published",
      seoTitle: formData.get("seoTitle") as string,
      seoDescription: formData.get("seoDescription") as string,
      relatedServices: relatedRaw
        ? relatedRaw.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
      publishedAt: formData.get("publishedAt") as string,
    };

    const url = initialData
      ? `/api/admin/blog/${initialData.id}`
      : "/api/admin/blog";
    const method = initialData ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      setErrors(data.errors || { general: [data.error] });
      setLoading(false);
      return;
    }

    router.push("/admin/blog");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg border max-w-2xl">
      <div>
        <label className="block text-sm font-medium mb-1">Başlık *</label>
        <input name="title" required defaultValue={initialData?.title} className="w-full border rounded px-3 py-2" />
        {errors.title && <p className="text-red-600 text-xs mt-1">{errors.title[0]}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Slug *</label>
        <input name="slug" required defaultValue={initialData?.slug} className="w-full border rounded px-3 py-2" />
        {errors.slug && <p className="text-red-600 text-xs mt-1">{errors.slug[0]}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Özet *</label>
        <textarea name="excerpt" required rows={2} defaultValue={initialData?.excerpt} className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">İçerik *</label>
        <textarea name="content" required rows={10} defaultValue={initialData?.content} className="w-full border rounded px-3 py-2 font-mono text-sm" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Kategori *</label>
          <input name="category" required defaultValue={initialData?.category} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Durum *</label>
          <select name="status" defaultValue={initialData?.status || "draft"} className="w-full border rounded px-3 py-2">
            <option value="draft">Taslak</option>
            <option value="published">Yayında</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Meta Title</label>
        <input name="seoTitle" defaultValue={initialData?.seoTitle} className="w-full border rounded px-3 py-2" />
        {errors.seoTitle && <p className="text-red-600 text-xs mt-1">{errors.seoTitle[0]}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Meta Description</label>
        <textarea name="seoDescription" rows={2} defaultValue={initialData?.seoDescription} className="w-full border rounded px-3 py-2" />
        {errors.seoDescription && <p className="text-red-600 text-xs mt-1">{errors.seoDescription[0]}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">İlgili Hizmetler (slug, virgülle)</label>
        <input
          name="relatedServices"
          defaultValue={initialData?.relatedServices?.join(", ")}
          placeholder="su-kacagi-tespit-ve-onarim, tikaniklik-acma"
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Yayın Tarihi</label>
        <input
          name="publishedAt"
          type="datetime-local"
          defaultValue={
            initialData?.publishedAt
              ? new Date(initialData.publishedAt).toISOString().slice(0, 16)
              : new Date().toISOString().slice(0, 16)
          }
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Kaydediliyor..." : "Kaydet"}
      </button>
    </form>
  );
}
