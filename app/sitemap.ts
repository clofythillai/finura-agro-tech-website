import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://finuraagrotechllp.com";
  const pages = [
    { url: "/", priority: 1 },
    { url: "/about", priority: 0.9 },
    { url: "/services", priority: 0.9 },
    { url: "/research", priority: 0.8 },
    { url: "/training", priority: 0.9 },
    { url: "/nursery", priority: 0.8 },
    { url: "/gallery", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
    { url: "/apply", priority: 0.6 },
  ];

  return pages.map(({ url, priority }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
