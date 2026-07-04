import { NextResponse } from "next/server";
import { getAllLocations } from "@/lib/services/locationService";

export async function GET() {
  try {
    const locations = await getAllLocations();
    return NextResponse.json({ data: locations });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
