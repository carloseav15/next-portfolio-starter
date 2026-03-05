import type { MetadataRoute } from "next";
import { createAbsoluteUrl } from "@/lib/site";

export const dynamic = "force-static";
const siteOrigin = new URL(createAbsoluteUrl("/")).origin;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: createAbsoluteUrl("/sitemap.xml"),
    host: siteOrigin,
  };
}
