"use client";

import { useEffect, useState } from "react";
import { BlogForm } from "@/components/admin/BlogForm";
import type { BlogPost } from "@/types";

interface Props {
  params: Promise<{ id: string }>;
}

export default function EditBlogPage({ params }: Props) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then(({ id }) => {
      fetch(`/api/admin/blog/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data.data);
          setLoading(false);
        });
    });
  }, [params]);

  if (loading) return <p>Yükleniyor...</p>;
  if (!post) return <p>Yazı bulunamadı.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blog Düzenle</h1>
      <BlogForm initialData={post} />
    </div>
  );
}
