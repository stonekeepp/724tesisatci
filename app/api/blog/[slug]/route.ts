import { NextResponse } from "next/server";
import { getBlogPostBySlug } from "@/lib/services/blogService";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);
    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }
    return NextResponse.json({ data: post });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
