import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ececworkforcesolutions.au"

  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/for-centres", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/for-cleaning-companies", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/training/infection-control", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tools", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/book", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
