import type { MetadataRoute } from "next";
import { resources } from "@/data/resources";
import { tools } from "@/data/tools";
import { siteBaseUrl } from "@/lib/utils";

const staticPaths = [
  "/",
  "/tools",
  "/resources",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools
    .filter((tool) => tool.path.startsWith("/tools/"))
    .map((tool) => ({
      url: `${siteBaseUrl}${tool.path}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  const resourcePages = resources.map((resource) => ({
    url: `${siteBaseUrl}/resources/${resource.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const staticPages = staticPaths.map((path) => ({
    url: `${siteBaseUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages, ...resourcePages];
}
