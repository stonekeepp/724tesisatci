import { NextResponse } from "next/server";
import { submitContactForm } from "@/lib/services/contactService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await submitContactForm(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", errors: result.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ data: result.data, message: "Talebiniz alındı" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
