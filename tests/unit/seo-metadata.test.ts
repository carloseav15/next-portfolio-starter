import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import { buildPageMetadata, createAbsoluteUrl, siteConfig } from "@/lib/site";

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

  it("builds reusable branded metadata with canonical, OG, twitter, and keywords", () => {
    const metadata = buildPageMetadata({
      title: "Resume | Carlos Arancibia",
      description: "Resume PDF and inline preview for Carlos Arancibia.",
      pathname: "/resume",
      ogAlt: "Resume access",
      keywords: ["Carlos Arancibia resume", "resume PDF"],
    });

    expect(metadata.title).toEqual({ absolute: "Resume | Carlos Arancibia" });
    expect(metadata.description).toBe("Resume PDF and inline preview for Carlos Arancibia.");
    expect(metadata.alternates?.canonical).toBe(`${expectedOrigin}/resume`);
    expect(metadata.openGraph).toMatchObject({
      title: "Resume | Carlos Arancibia",
      description: "Resume PDF and inline preview for Carlos Arancibia.",
      url: `${expectedOrigin}/resume`,
    });
    expect(metadata.twitter).toMatchObject({
      title: "Resume | Carlos Arancibia",
      description: "Resume PDF and inline preview for Carlos Arancibia.",
    });
    expect(metadata.keywords).toEqual(["Carlos Arancibia resume", "resume PDF"]);
  });

  it("keeps robots and sitemap aligned with canonical host", () => {
    const robotsConfig = robots();
    const sitemapSource = readSource("app/sitemap.ts");

    expect(robotsConfig.host).toBe(expectedOrigin);
    expect(robotsConfig.sitemap).toBe(`${expectedOrigin}/sitemap.xml`);
    expect(sitemapSource).toContain("process.env.BUILD_DATE");
    expect(sitemapSource).toContain('createAbsoluteUrl(route || "/")');
    expect(sitemapSource).toContain("createAbsoluteUrl(`/case-studies/${caseStudy.slug}`)");
  });

  it("uses branded route titles instead of generic titles", () => {
    const homeSource = readSource("app/page.tsx");
    const aboutSource = readSource("app/about/page.tsx");
    const caseStudiesSource = readSource("app/case-studies/page.tsx");
    const resumeSource = readSource("app/resume/page.tsx");

    expect(siteConfig.defaultTitle).toBe("Carlos Arancibia | Senior Product Engineer");
    expect(homeSource).not.toContain('title: "Home"');
    expect(aboutSource).not.toContain('title: "About"');
    expect(caseStudiesSource).not.toContain('title: "Case Studies"');
    expect(resumeSource).not.toContain('title: "Resume"');
    expect(aboutSource).toContain("About Carlos Arancibia | Senior Product Engineer");
    expect(caseStudiesSource).toContain("Case Studies | Apps, Payments & Internal Tools | Carlos Arancibia");
    expect(resumeSource).toContain("Resume | Carlos Arancibia");
  });

  it("defines complete SEO metadata and JSON-LD on case study detail pages", () => {
    const caseStudyPageSource = readSource("app/case-studies/[slug]/page.tsx");
    const caseStudiesListSource = readSource("app/case-studies/page.tsx");

    expect(caseStudyPageSource).toContain("buildPageMetadata");
    expect(caseStudyPageSource).toContain('type: "article"');
    expect(caseStudyPageSource).toContain("publishedTime");
    expect(caseStudyPageSource).toContain("articleSection");
    expect(caseStudyPageSource).toContain("metadata.seoKeywords");
    expect(caseStudyPageSource).toContain('"@type": "TechArticle"');
    expect(caseStudyPageSource).toContain('"@type": "BreadcrumbList"');

    expect(caseStudiesListSource).toContain('"@type": "CollectionPage"');
    expect(caseStudiesListSource).toContain('"@type": "ItemList"');
  });

  it("adds SEO keywords to every case study and keeps sitemap on www URLs", () => {
    const caseStudiesSource = readSource("lib/caseStudies.ts");

    expect(caseStudiesSource.match(/seoKeywords:\s*\[/g)?.length).toBe(5);
    expect(caseStudiesSource).toContain('"DigiApp"');
    expect(caseStudiesSource).toContain('"service collections"');
    expect(caseStudiesSource).toContain('"internal systems"');
    expect(caseStudiesSource).toContain('"soccer operations platform"');
    expect(caseStudiesSource).toContain('"Playfit"');
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
