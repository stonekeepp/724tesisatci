import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import {
  Analytics,
  AnalyticsHead,
} from "@/components/analytics/Analytics";
import { getSiteUrl } from "@/lib/services/seoService";
import "./material-symbols-font.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <AnalyticsHead />
      </head>
      <body
        className={`${inter.variable} bg-background text-on-background font-body-lg antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
