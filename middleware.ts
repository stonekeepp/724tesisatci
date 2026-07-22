import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAdminSession } from "@/lib/auth/adminAuth";

const HTML_CACHE_CONTROL =
  "public, max-age=0, s-maxage=60, stale-while-revalidate=300, must-revalidate";
const HTML_CDN_CACHE_CONTROL =
  "public, max-age=60, stale-while-revalidate=300";

function isDocumentPath(pathname: string): boolean {
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/fonts/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/api/")
  ) {
    return false;
  }
  // Skip paths that look like static files (logo.webp, robots.txt, etc.)
  return !/\.[a-zA-Z0-9]{1,8}$/.test(pathname);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!verifyAdminSession(request)) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  const response = NextResponse.next();

  if (isDocumentPath(pathname)) {
    response.headers.set("Cache-Control", HTML_CACHE_CONTROL);
    response.headers.set("CDN-Cache-Control", HTML_CDN_CACHE_CONTROL);
  }

  return response;
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/((?!_next/static|_next/image|fonts/|images/|api/|.*\\..*).*)",
  ],
};
