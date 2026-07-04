import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAllBlogPosts } from "@/lib/services/blogService";
import { requireAdminApi } from "@/lib/auth/adminAuth";

export async function GET(request: NextRequest) {
  const authError = requireAdminApi(request);
  if (authError) return authError;

  try {
    const posts = await getAllBlogPosts();
    return NextResponse.json({ data: posts });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const authError = requireAdminApi(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const { blogFormSchema } = await import("@/lib/validation/schemas");
    const { getBlogRepository } = await import("@/lib/repositories");

    const parsed = blogFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const post = await getBlogRepository().create(parsed.data);
    return NextResponse.json({ data: post }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
