import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";
import { createAbsoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

function getBuildDate() {
  const buildDateValue = process.env.BUILD_DATE;

  if (!buildDateValue) {
    return new Date();
  }

  const parsedDate = new Date(buildDateValue);
  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
}

const buildDate = getBuildDate();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/case-studies", "/resume", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: createAbsoluteUrl(route || "/"),
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: createAbsoluteUrl(`/case-studies/${caseStudy.slug}`),
      lastModified: new Date(caseStudy.date),
      changeFrequency: "monthly" as const,
      priority: caseStudy.audienceTier === "primary" ? 0.9 : 0.7,
    })),
  ];
}
