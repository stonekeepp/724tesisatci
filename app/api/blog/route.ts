import { NextResponse } from "next/server";
import { getPublishedBlogPosts } from "@/lib/services/blogService";

export async function GET() {
  try {
    const posts = await getPublishedBlogPosts();
    return NextResponse.json({ data: posts });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
