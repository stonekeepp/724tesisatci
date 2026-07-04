import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validation/schemas";
import { createAdminSessionResponse } from "@/lib/auth/adminAuth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }

    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD || "admin123";

    if (
      parsed.data.username !== adminUser ||
      parsed.data.password !== adminPass
    ) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return createAdminSessionResponse();
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
