import { NextResponse } from "next/server";
import { getSiteSettings } from "@/lib/services/settingsService";

export async function GET() {
  try {
    const settings = await getSiteSettings();
    return NextResponse.json({ data: settings });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
