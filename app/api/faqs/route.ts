import { NextResponse } from "next/server";
import { getAllFaqs } from "@/lib/services/faqService";

export async function GET() {
  try {
    const faqs = await getAllFaqs();
    return NextResponse.json({ data: faqs });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
