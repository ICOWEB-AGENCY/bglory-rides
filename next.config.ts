import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  // Blog posts kept their old BGlory slugs until the Zyon rename; old links
  // still land on the same post.
  async redirects() {
    return [
      { source: "/blog/7-safety-layers-on-every-bglory-ride", destination: "/blog/7-safety-layers-on-every-zyon-ride", permanent: true },
      { source: "/blog/why-your-bglory-fare-never-changes", destination: "/blog/why-your-zyon-fare-never-changes", permanent: true },
      { source: "/blog/what-it-takes-to-become-a-bglory-driver", destination: "/blog/what-it-takes-to-become-a-zyon-driver", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
