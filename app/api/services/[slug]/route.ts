import { NextResponse } from "next/server";
import { getServiceBySlug } from "@/lib/services/serviceService";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    const { slug } = await params;
    const service = await getServiceBySlug(slug);
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }
    return NextResponse.json({ data: service });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
