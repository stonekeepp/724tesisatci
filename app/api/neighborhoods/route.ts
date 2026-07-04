import { NextResponse } from "next/server";
import { getAllNeighborhoods } from "@/lib/services/neighborhoodService";

export async function GET() {
  try {
    const neighborhoods = await getAllNeighborhoods();
    return NextResponse.json({ data: neighborhoods });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
