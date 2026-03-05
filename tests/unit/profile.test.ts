import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  activePlatformsInProduction,
  caseStudyHighlights,
  careerTimeline,
  profileIdentity,
  profileMetrics,
  recommendations,
} from "@/lib/profile";
import { DIGICORP_PROOF, externalLinks } from "@/lib/links";

describe("profile source of truth", () => {
  it("keeps hiring positioning explicit", () => {
    expect(profileIdentity.roleLabel).toContain("Full-Stack");
    expect(profileIdentity.openTo).toContain("Software Engineer I/II");
  });

  it("contains compact KPI strip metrics", () => {
    expect(profileMetrics).toHaveLength(4);
    expect(profileMetrics.map((metric) => metric.value)).toContain("10,000+");
    expect(profileMetrics.map((metric) => metric.value)).toContain("3,000/day");
    expect(profileMetrics.map((metric) => metric.value)).toContain("~1,000/day");
    expect(profileMetrics.map((metric) => metric.value)).not.toContain("3 active");
  });

  it("locks timeline periods as specified", () => {
    const datec = careerTimeline.find((item) => item.company === "DATEC LATAM");
    const tismart = careerTimeline.find((item) => item.company === "TISMART (DATEC Division)");
    const iglesia = careerTimeline.find((item) => item.company === "Iglesia Tiempo de Cambio");
    const vcomm = careerTimeline.find((item) => item.company === "V@COMM");
    const digicorp = careerTimeline.find((item) => item.company === "DIGICORP LTDA");
    const diaz = careerTimeline.find((item) => item.company === "Diaz Brothers Company LLC");
    const matchdayos = careerTimeline.find((item) => item.company === "MatchdayOS");

    expect(datec?.period).toBe("Aug 2014 - Dec 2014");
    expect(tismart?.period).toBe("Jan 2015 - May 2016");
    expect(iglesia?.period).toBe("Jun 2016 - Dec 2019");
    expect(vcomm?.period).toBe("Jan 2017 - Jun 2024");
    expect(digicorp?.period).toBe("Dec 2019 - Jun 2024");
    expect(diaz?.period).toBe("Jul 2024 - Dec 2025");
    expect(matchdayos?.period).toBe("Jan 2026 - Present");
    expect(careerTimeline.some((item) => item.company.includes("FEP"))).toBe(false);
    expect(careerTimeline.map((item) => item.period)).not.toContain("January 2019 - July 2024");
    expect(diaz?.activeInProduction).toBe(true);
  });

  it("includes Vanilla JavaScript ecommerce proof", () => {
    const digicorp = careerTimeline.find((item) => item.company === "DIGICORP LTDA");

    expect(
      digicorp?.highlights.some((highlight) => highlight.toLowerCase().includes("vanilla javascript")),
    ).toBe(true);

    const digicorpHighlight = caseStudyHighlights.find((item) => item.slug === "digicorp");
    expect(digicorpHighlight?.summary.toLowerCase()).toContain("vanilla javascript");
  });

  it("tracks three active platforms", () => {
    expect(activePlatformsInProduction).toHaveLength(3);
    expect(activePlatformsInProduction.map((item) => item.name)).toEqual(
      expect.arrayContaining([
        "Digicorp e-Commerce Platform",
        "Octopus Payments Platform",
        "Tiempo de Cambio Platform",
      ]),
    );
  });

  it("keeps highlights aligned with production credibility", () => {
    expect(caseStudyHighlights.some((item) => item.slug === "octopus")).toBe(true);
    expect(caseStudyHighlights.every((item) => item.evidenceStatus === "verified")).toBe(true);
  });

  it("keeps verified public links resolvable", () => {
    expect(externalLinks.email.href?.startsWith("mailto:")).toBe(true);
    expect(externalLinks.linkedin.href?.startsWith("https://")).toBe(true);
    expect(externalLinks.github.href?.startsWith("https://")).toBe(true);
    expect(externalLinks.website.href).toBe("https://www.carlos-arancibia.com");
    expect(externalLinks.googlePlay.href).toContain("play.google.com/store/apps/details");
    expect(externalLinks.appStore.href).toContain("apps.apple.com/bo/app");
    expect(externalLinks.digicorpBolivia.href).toBe("https://www.digicorp.com.bo");
    expect(externalLinks.digicorpPeru.href).toBe("https://www.digicorp.com.pe");
    expect(externalLinks.digicorpChile.href).toBe("https://www.digicorp.cl");
    expect(DIGICORP_PROOF.status).toBe("verified");
    expect(DIGICORP_PROOF.imageSrc).toBe("/images/digicorp-proof-2026.webp");
  });

  it("keeps Octopus timeline and continuity explicit in profile data", () => {
    const vcomm = careerTimeline.find((item) => item.company === "V@COMM");
    const digicorp = careerTimeline.find((item) => item.company === "DIGICORP LTDA");

    expect(vcomm?.period).toBe("Jan 2017 - Jun 2024");
    expect(vcomm?.highlights.some((item) => item.toLowerCase().includes("active operational use"))).toBe(
      true,
    );
    expect(vcomm?.parallelContext).toContain("Dec 2019");
    expect(digicorp?.parallelContext).toContain("Dec 2019");
  });

  it("keeps recommendation neutral and recruiter-facing", () => {
    const samuelRecommendation = recommendations.find(
      (item) => item.author === "Samuel Soliz Adaos",
    );

    expect(samuelRecommendation).toBeDefined();
    expect(samuelRecommendation?.quote).toBe(
      "Excellent professional and person: responsible, loyal, and committed.",
    );
    expect(samuelRecommendation?.quote.toLowerCase()).not.toContain("dios");
    expect(samuelRecommendation?.sourceUrl).toBe(
      "https://www.linkedin.com/in/carancibiav/details/recommendations/",
    );
  });

  it("uses Open Resume label without visible new-tab suffix", () => {
    const homeSource = readFileSync(path.join(process.cwd(), "app/page.tsx"), "utf8");
    const resumeSource = readFileSync(path.join(process.cwd(), "app/resume/page.tsx"), "utf8");
    const aboutSource = readFileSync(path.join(process.cwd(), "app/about/page.tsx"), "utf8");

    expect(homeSource).toContain("Open Resume");
    expect(resumeSource).toContain("Open Resume");
    expect(homeSource).not.toContain("Open Resume (new tab)");
    expect(resumeSource).not.toContain("Open Resume (new tab)");
    expect(aboutSource).not.toContain(
      "My work spans public mobile distribution, payment collections, and operational systems used by",
    );
  });
});
