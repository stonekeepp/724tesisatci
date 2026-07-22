import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireAdminApi } from "@/lib/auth/adminAuth";
import { submitIndexNowUrls } from "@/lib/seo/indexNow";
import { generateSitemapEntries } from "@/lib/services/sitemapService";

function authorize(request: NextRequest): NextResponse | null {
  const cronSecret = process.env.CRON_SECRET?.trim();
  const authHeader = request.headers.get("authorization");
  if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
    return null;
  }
  return requireAdminApi(request);
}

export async function POST(request: NextRequest) {
  const authError = authorize(request);
  if (authError) return authError;

  try {
    const body = (await request.json().catch(() => ({}))) as {
      urls?: string[];
      sitemap?: boolean;
    };

    let urls = Array.isArray(body.urls) ? body.urls : [];

    if (body.sitemap || urls.length === 0) {
      const entries = await generateSitemapEntries();
      urls = entries.map((e) => e.url);
    }

    const result = await submitIndexNowUrls(urls);
    return NextResponse.json(result, {
      status: result.ok ? 200 : 502,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
