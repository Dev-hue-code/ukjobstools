import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResourcesGrid } from "@/components/resources-grid";
import { resources } from "@/data/resources";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "UK Job Resources and Guides",
  description:
    "Interview answers, CV examples, and UK job application checklists with clear, SEO-friendly structure.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase text-blue-700">Resources</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Guides for interviews, CVs, and applications
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          SEO-friendly articles with ready-to-copy examples, headings, and internal links
          to the right tools. Built for UK workers and hiring teams.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link
            href="/tools"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
          >
            View calculators
          </Link>
          <Link
            href="/resources/cv-summary-examples"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
          >
            CV summaries
          </Link>
          <Link
            href="/resources/warehouse-interview-questions"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
          >
            Warehouse interviews
          </Link>
        </div>
      </div>

      <ResourcesGrid resources={resources} />
    </div>
  );
}
