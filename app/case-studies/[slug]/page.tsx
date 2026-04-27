import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyArticle } from "@/components/case-studies/CaseStudyArticle";
import {
  caseStudies,
  caseStudyContentBySlug,
  getCaseStudyBySlug,
  isCaseStudySlug,
} from "@/lib/caseStudies";
import { DIGICORP_PROOF } from "@/lib/links";
import { profileIdentity } from "@/lib/profile";
import { buildPageMetadata, createAbsoluteUrl } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;
const defaultOgImageUrl = createAbsoluteUrl(DIGICORP_PROOF.imageSrc);
const caseStudiesUrl = createAbsoluteUrl("/case-studies");

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const publishedTime = new Date(`${caseStudy.date}T00:00:00Z`).toISOString();
  const baseMetadata = buildPageMetadata({
    title: `${caseStudy.title} | Carlos Arancibia`,
    description: caseStudy.summary,
    pathname: `/case-studies/${caseStudy.slug}`,
    ogAlt: `${caseStudy.title} preview`,
    keywords: caseStudy.seoKeywords,
    ogImagePath: DIGICORP_PROOF.imageSrc,
  });

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      type: "article",
      publishedTime,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  if (!isCaseStudySlug(slug)) {
    notFound();
  }

  const metadata = getCaseStudyBySlug(slug);

  if (!metadata) {
    notFound();
  }

  const Content = caseStudyContentBySlug[slug];
  const canonicalUrl = createAbsoluteUrl(`/case-studies/${slug}`);
  const publishedTime = new Date(`${metadata.date}T00:00:00Z`).toISOString();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: metadata.title,
    description: metadata.summary,
    datePublished: publishedTime,
    dateModified: publishedTime,
    image: [defaultOgImageUrl],
    author: {
      "@type": "Person",
      name: profileIdentity.fullName,
      url: profileIdentity.website,
    },
    publisher: {
      "@type": "Person",
      name: profileIdentity.fullName,
      url: profileIdentity.website,
    },
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    articleSection: metadata.tags.slice(0, 3).join(", "),
    keywords: metadata.seoKeywords,
    about: metadata.whyItMatters,
    inLanguage: "en-US",
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: createAbsoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: caseStudiesUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: metadata.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudyArticle metadata={metadata}>
        <Content />
      </CaseStudyArticle>
    </>
  );
}
