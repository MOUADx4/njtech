import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const BASE_URL = siteConfig.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow:     "/",
      disallow:  ["/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
