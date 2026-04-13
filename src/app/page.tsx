import Link from "next/link";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";
import { ToolCard } from "@/components/tool-card";
import { ResourceCard } from "@/components/resource-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { RecentlyViewedTools } from "@/components/recently-viewed";
import { featuredTools, popularTools } from "@/data/tools";
import { resources } from "@/data/resources";
import { buildFaqJsonLd } from "@/lib/seo";
import { buildCanonical } from "@/lib/utils";

const faqs = [
  {
    question: "Are these tools free?",
    answer: "Yes. Everything on UK Job Tools is free to use and built for UK workers.",
  },
  {
    question: "Do you store my data?",
    answer:
      "No accounts or databases are used. Calculations run in your browser and stay local.",
  },
  {
    question: "Are the calculators accurate for the UK?",
    answer:
      "They use simple, transparent math for UK-style hourly and weekly pay planning. Always check against your payslip or contract.",
  },
];

export default function Home() {
  const latestResources = resources.slice(0, 3);
  const faqJsonLd = buildFaqJsonLd({
    faqs,
    canonicalUrl: buildCanonical("/"),
    name: "UK Job Tools FAQ",
  });

  return (
    <div className="space-y-14 pb-6">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Trusted UK pay helpers
              <Shield className="h-4 w-4" aria-hidden />
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Free UK Job Tools for Pay, CVs, and Interviews
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Calculate your pay, tidy your CV, and prepare confident interview answers.
              Clear, beginner-friendly, and built for UK workers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Explore calculators
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Read guides
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden />
                No sign-up or payments
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden />
                Mobile-first & accessible
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden />
                Built for UK pay
              </span>
            </div>
          </div>
          <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-inner">
            <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase text-white">
              Practical & clear
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                <Sparkles className="h-5 w-5 text-blue-600" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Instant pay calculations
                  </p>
                  <p className="text-sm text-slate-600">
                    Hourly to annual, overtime, shifts, holidays, and notice pay.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase text-blue-700">CV help</p>
                  <p className="mt-1 text-sm text-slate-700">
                    Copy-ready CV summaries and UK application checklists.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase text-blue-700">
                    Interview prep
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Confident answers for common questions with ready-made examples.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase text-blue-700">
                  SEO-friendly resources
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Clean URLs, clear headings, and helpful internal links for discoverability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-blue-700">Popular</p>
            <h2 className="text-2xl font-semibold text-slate-900">Popular tools</h2>
            <p className="text-sm text-slate-600">
              Quick picks workers use most—open any to start calculating right away.
            </p>
          </div>
          <Link
            href="/tools"
            className="text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            Browse all tools
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-blue-700">Featured</p>
            <h2 className="text-2xl font-semibold text-slate-900">Featured tools</h2>
            <p className="text-sm text-slate-600">
              Calculators UK workers use most for everyday pay planning.
            </p>
          </div>
          <Link
            href="/tools"
            className="text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all tools
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase text-blue-700">
            Why this site helps
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">
            Practical, trustworthy, and beginner-friendly
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
              Simple forms with defaults so you see results straight away.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
              No logins, cookies, or payments. Everything stays in your browser.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
              Clear “how it works” notes on every calculator to show the math.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
              Internal links across tools and guides to keep you moving quickly.
            </li>
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner">
          <h3 className="text-lg font-semibold text-slate-900">Recently viewed tools</h3>
          <RecentlyViewedTools />
          <div className="flex flex-wrap gap-2">
            <Link
              href="/tools/hourly-to-annual-salary"
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              Salary converter
            </Link>
            <Link
              href="/resources/cv-summary-examples"
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              CV examples
            </Link>
            <Link
              href="/tools/overtime-pay-calculator"
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              Overtime pay
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-blue-700">
              Latest resources
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">Fresh guides</h2>
            <p className="text-sm text-slate-600">
              Copy-ready UK examples for interviews, CVs, and applications.
            </p>
          </div>
          <Link
            href="/resources"
            className="text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all resources
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestResources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-blue-700">Newsletter</p>
            <h3 className="text-2xl font-semibold text-slate-900">Stay on top of pay tips</h3>
            <p className="text-sm text-slate-600">
              Monthly roundup of new calculators and guides. No spam, no marketing fluff.
            </p>
          </div>
          <form className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row" action="#">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-slate-200 px-4 py-3 text-sm shadow-inner shadow-slate-50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:w-auto"
            >
              Get updates
            </button>
          </form>
          <p className="text-xs text-slate-500">
            This is a simple, no-backend demo form—no emails are stored.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase text-blue-700">FAQ</p>
          <h2 className="text-2xl font-semibold text-slate-900">
            Questions UK workers ask
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Pay calculators</h3>
          <p className="mt-2 text-sm text-slate-600">
            Hourly to annual, overtime, shifts, holidays, and notice pay with clear math.
          </p>
          <Link
            href="/tools"
            className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700"
          >
            Browse tools
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Guides & checklists</h3>
          <p className="mt-2 text-sm text-slate-600">
            Interview answers, CV examples, and application checklists ready to copy.
          </p>
          <Link
            href="/resources"
            className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700"
          >
            View resources
          </Link>
        </div>
      </section>
    </div>
  );
}
