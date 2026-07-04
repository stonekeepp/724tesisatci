import { NextResponse } from "next/server";
import { generateSitemapEntries } from "@/lib/services/sitemapService";

export default async function sitemap() {
  const entries = await generateSitemapEntries();
  return entries;
}
