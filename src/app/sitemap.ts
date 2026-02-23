import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bglory-rides.vercel.app";

  const routes = [
    "",
    "/about",
    "/services",
    "/safety",
    "/drive",
    "/contact",
    "/careers",
    "/press",
    "/blog",
    "/business",
    "/help",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}
