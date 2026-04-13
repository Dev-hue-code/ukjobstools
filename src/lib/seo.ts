import type { Metadata } from "next";
import { buildCanonical, siteBaseUrl } from "./utils";
import type { FAQ } from "@/data/resources";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
}: BuildMetadataInput): Metadata {
  const url = path ? buildCanonical(path) : siteBaseUrl;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "UK Job Tools",
      locale: "en_GB",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function buildFaqJsonLd({
  faqs,
  canonicalUrl,
  name,
}: {
  faqs: FAQ[];
  canonicalUrl: string;
  name: string;
}) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url: canonicalUrl,
    name,
  };
}

export function buildArticleJsonLd({
  title,
  description,
  canonicalUrl,
  tags,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: canonicalUrl,
    inLanguage: "en-GB",
    keywords: tags?.join(", "),
    author: {
      "@type": "Organization",
      name: "UK Job Tools",
      url: siteBaseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "UK Job Tools",
      url: siteBaseUrl,
    },
  };
}
