import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/besiktas-tesisatci-tamir-onarim-servisi",
        destination: "/hizmet-bolgeleri/besiktas",
        permanent: true,
      },
      {
        source: "/seyrantepe-tesisatci-tamir-onarim-servisi",
        destination: "/hizmet-bolgeleri/kagithane/seyrantepe",
        permanent: true,
      },
      {
        source: "/mecidiyekoy-tesisatci-tamir-onarim-servisi",
        destination: "/hizmet-bolgeleri/sisli",
        permanent: true,
      },
      {
        source: "/levent-tesisatci-tamir-onarim-servisi",
        destination: "/hizmet-bolgeleri/besiktas",
        permanent: true,
      },
      {
        source: "/bebek-tesisatci-tamir-onarim-servisi",
        destination: "/hizmet-bolgeleri/besiktas",
        permanent: true,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/api/admin/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
