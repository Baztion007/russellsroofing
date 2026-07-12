import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/business-data";

const SITE_URL = "https://www.russellsroofing.uk";

// Note: the site is a single-route SPA — all "views" (Services, About, Contact,
// Gallery, FAQ, Areas, etc.) are client-side state, not crawlable URLs. So the
// sitemap lists the homepage plus one entry per service-area landing concept.
// If the site is later migrated to real routes, add them here.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const areaEntries: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${SITE_URL}/#area-${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...areaEntries,
  ];
}
