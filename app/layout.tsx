import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getSiteUrl } from "@/lib/services/seoService";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="preload"
          href="/fonts/material-symbols-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} bg-background text-on-background font-body-lg antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
