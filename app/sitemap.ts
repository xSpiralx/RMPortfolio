import type { MetadataRoute } from "next";
import { projects } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://robbcodes.com";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resume`, changeFrequency: "monthly", priority: 0.7 },
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}

