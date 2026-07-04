import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getBlogPostById } from "@/lib/services/blogService";
import { requireAdminApi } from "@/lib/auth/adminAuth";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const authError = requireAdminApi(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const post = await getBlogPostById(id);
    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }
    return NextResponse.json({ data: post });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: Props) {
  const authError = requireAdminApi(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const body = await request.json();
    const { blogFormSchema } = await import("@/lib/validation/schemas");
    const { getBlogRepository } = await import("@/lib/repositories");

    const parsed = blogFormSchema.partial().safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const post = await getBlogRepository().update(id, parsed.data);
    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }
    return NextResponse.json({ data: post });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const authError = requireAdminApi(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const { getBlogRepository } = await import("@/lib/repositories");
    const deleted = await getBlogRepository().delete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
