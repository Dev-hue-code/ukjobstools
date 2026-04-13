import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { ResourceCard } from "@/components/resource-card";
import { ToolCard } from "@/components/tool-card";
import {
  getRelatedResources,
  getResourceBySlug,
  resources,
} from "@/data/resources";
import { getRelatedTools } from "@/data/tools";
import { buildCanonical } from "@/lib/utils";
import { buildArticleJsonLd, buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const resource = getResourceBySlug(params.slug);
  if (!resource) return {};
  return buildPageMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
    type: "article",
  });
}

export default function ResourceDetail({ params }: PageProps) {
  const resource = getResourceBySlug(params.slug);
  if (!resource) return notFound();

  const relatedTools = getRelatedTools(resource.relatedTools);
  const relatedResources = getRelatedResources(resource.relatedResources);
  const canonical = buildCanonical(`/resources/${resource.slug}`);
  const faqJsonLd = buildFaqJsonLd({
    faqs: resource.faqs,
    canonicalUrl: canonical,
    name: resource.title,
  });
  const articleJsonLd = buildArticleJsonLd({
    title: resource.title,
    description: resource.description,
    canonicalUrl: canonical,
    tags: resource.tags,
  });

  return (
    <article className="space-y-10">
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Breadcrumbs />
      <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase text-blue-700">{resource.category}</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">{resource.title}</h1>
        <p className="mt-3 max-w-3xl text-base text-slate-700">{resource.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase text-slate-500">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-8">
        {resource.sections.map((section) => (
          <section
            key={section.heading}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{section.body}</p>
            {section.bullets && (
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">FAQs</h2>
          <Link href="/contact" className="text-sm font-semibold text-blue-700">
            Need help? Contact us
          </Link>
        </div>
        <div className="mt-4">
          <FAQAccordion items={resource.faqs} />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-blue-700">Related tools</p>
            <h3 className="text-lg font-semibold text-slate-900">Use these next</h3>
          </div>
          <Link href="/tools" className="text-sm font-semibold text-blue-700">
            View all tools
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {relatedTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-blue-700">
              Related resources
            </p>
            <h3 className="text-lg font-semibold text-slate-900">
              Keep preparing with these
            </h3>
          </div>
          <Link href="/resources" className="text-sm font-semibold text-blue-700">
            View all resources
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {relatedResources.map((item) => (
            <ResourceCard key={item.slug} resource={item} />
          ))}
        </div>
      </section>
    </article>
  );
}
