"use client";

import { BlogForm } from "@/components/admin/BlogForm";

export default function NewBlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Yeni Blog Yazısı</h1>
      <BlogForm />
    </div>
  );
}
