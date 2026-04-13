import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ToolsGrid } from "@/components/tools-grid";
import { tools } from "@/data/tools";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "UK Job Tools and Calculators",
  description:
    "All UK Job Tools calculators and helpers in one place: pay, holidays, notice periods, CV help, and interview prep.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase text-blue-700">Tools</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          UK Job Tools and Calculators
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Search and filter calculators and guides built for UK workers. No sign-up or
          payments—just straightforward tools you can use in seconds.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link
            href="/tools/hourly-to-annual-salary"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
          >
            Salary converter
          </Link>
          <Link
            href="/tools/overtime-pay-calculator"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
          >
            Overtime
          </Link>
          <Link
            href="/tools/holiday-pay-calculator"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
          >
            Holiday pay
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
          >
            Resources
          </Link>
        </div>
      </div>

      <ToolsGrid tools={tools} />
    </div>
  );
}
