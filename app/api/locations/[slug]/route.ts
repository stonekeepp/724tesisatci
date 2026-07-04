import { NextResponse } from "next/server";
import { getLocationBySlug } from "@/lib/services/locationService";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    const { slug } = await params;
    const location = await getLocationBySlug(slug);
    if (!location) {
      return NextResponse.json({ error: "Location not found" }, { status: 404 });
    }
    return NextResponse.json({ data: location });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
