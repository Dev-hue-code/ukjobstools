import Link from "next/link";
import type { ReactNode } from "react";
import type { FAQItem } from "@/components/faq-accordion";
import { FAQAccordion } from "@/components/faq-accordion";
import type { Tool } from "@/data/tools";
import type { Resource } from "@/data/resources";
import { buildCanonical } from "@/lib/utils";
import { buildFaqJsonLd } from "@/lib/seo";

type CalculatorShellProps = {
  title: string;
  intro: string;
  canonicalPath: string;
  children: ReactNode;
  result: ReactNode;
  howItWorks: string[];
  faqs: FAQItem[];
  relatedTools: Tool[];
  relatedResources: Resource[];
};

export function CalculatorShell({
  title,
  intro,
  canonicalPath,
  children,
  result,
  howItWorks,
  faqs,
  relatedTools,
  relatedResources,
}: CalculatorShellProps) {
  const faqJsonLd = buildFaqJsonLd({
    faqs,
    canonicalUrl: buildCanonical(canonicalPath),
    name: title,
  });

  return (
    <div className="space-y-8">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          Pay calculator
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-base text-slate-600">{intro}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {children}
          {howItWorks?.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">How this works</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {howItWorks.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {result}
          {faqs?.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">FAQs</h2>
              <FAQAccordion items={faqs} />
            </div>
          )}
          {relatedTools?.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Related tools</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.path}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    {tool.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {relatedResources?.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Related resources</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedResources.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    {resource.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
