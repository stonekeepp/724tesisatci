import { NextResponse } from "next/server";
import { getAllServices } from "@/lib/services/serviceService";

export async function GET() {
  try {
    const services = await getAllServices();
    return NextResponse.json({ data: services });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
