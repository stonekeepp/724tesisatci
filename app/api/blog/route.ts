import { NextResponse } from "next/server";
import { getPublishedBlogPosts } from "@/lib/services/blogService";
import { toPublicBlogPost } from "@/lib/utils/publication";

export async function GET() {
  try {
    const posts = await getPublishedBlogPosts();
    return NextResponse.json({
      data: posts.map((post) => toPublicBlogPost(post)),
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
