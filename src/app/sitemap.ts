import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";

const BASE_URL = "https://njtech-solution.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicePages: MetadataRoute.Sitemap = SERVICES.map(s => ({
    url:             `${BASE_URL}/services/${s.slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.85,
  }));

  return [
    {
      url:              BASE_URL,
      lastModified:     now,
      changeFrequency:  "monthly",
      priority:         1.0,
    },
    {
      url:              `${BASE_URL}/a-propos`,
      lastModified:     now,
      changeFrequency:  "monthly",
      priority:         0.8,
    },
    {
      url:              `${BASE_URL}/services`,
      lastModified:     now,
      changeFrequency:  "monthly",
      priority:         0.9,
    },
    ...servicePages,
    {
      url:              `${BASE_URL}/realisations`,
      lastModified:     now,
      changeFrequency:  "monthly",
      priority:         0.8,
    },
    {
      url:              `${BASE_URL}/contact`,
      lastModified:     now,
      changeFrequency:  "yearly",
      priority:         0.7,
    },
    {
      url:              `${BASE_URL}/mentions-legales`,
      lastModified:     now,
      changeFrequency:  "yearly",
      priority:         0.2,
    },
    {
      url:              `${BASE_URL}/politique-de-confidentialite`,
      lastModified:     now,
      changeFrequency:  "yearly",
      priority:         0.2,
    },
    {
      url:              `${BASE_URL}/politique-cookies`,
      lastModified:     now,
      changeFrequency:  "yearly",
      priority:         0.2,
    },
    {
      url:              `${BASE_URL}/cgu`,
      lastModified:     now,
      changeFrequency:  "yearly",
      priority:         0.2,
    },
  ];
}
