import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import { createAbsoluteUrl, siteConfig } from "@/lib/site";

const expectedOrigin = "https://www.carlos-arancibia.com";

function readSource(filePath: string) {
  return readFileSync(path.join(process.cwd(), filePath), "utf8");
}

describe("SEO metadata and canonical surface", () => {
  it("uses www canonical host in site configuration", () => {
    expect(siteConfig.url).toBe(expectedOrigin);
    expect(createAbsoluteUrl("/")).toBe(`${expectedOrigin}/`);
    expect(createAbsoluteUrl("/case-studies")).toBe(`${expectedOrigin}/case-studies`);
  });

  it("keeps robots and sitemap aligned with canonical host", () => {
    const robotsConfig = robots();
    const sitemapSource = readSource("app/sitemap.ts");

    expect(robotsConfig.host).toBe(expectedOrigin);
    expect(robotsConfig.sitemap).toBe(`${expectedOrigin}/sitemap.xml`);
    expect(sitemapSource).toContain("process.env.BUILD_DATE");
    expect(sitemapSource).toContain("createAbsoluteUrl(route || \"/\")");
    expect(sitemapSource).toContain("createAbsoluteUrl(`/case-studies/${caseStudy.slug}`)");
  });

  it("defines complete SEO metadata and JSON-LD on case study detail pages", () => {
    const caseStudyPageSource = readSource("app/case-studies/[slug]/page.tsx");

    expect(caseStudyPageSource).toContain("alternates:");
    expect(caseStudyPageSource).toContain("canonical: canonicalUrl");
    expect(caseStudyPageSource).toContain('type: "article"');
    expect(caseStudyPageSource).toContain("publishedTime");
    expect(caseStudyPageSource).toContain('"@type": "TechArticle"');
    expect(caseStudyPageSource).toContain('"@type": "BreadcrumbList"');
  });

  it("removes recruiter-first wording from public indexable surfaces", () => {
    const sources = [
      "app/layout.tsx",
      "app/page.tsx",
      "app/case-studies/page.tsx",
      "app/resume/page.tsx",
      "README.md",
    ].map(readSource);

    const publicSurface = sources.join("\n").toLowerCase();

    expect(publicSurface).not.toContain("recruiter-first");
    expect(publicSurface).not.toContain("recruiter relevance");
    expect(publicSurface).not.toContain("recruiter review");
    expect(publicSurface).not.toContain("recruiter portfolio");
  });
});
