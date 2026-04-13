import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact UK Job Tools",
  description:
    "Get in touch about UK Job Tools. Ask questions, suggest features, or report issues.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase text-blue-700">Contact</p>
      <h1 className="text-3xl font-semibold text-slate-900">Contact UK Job Tools</h1>
      <p className="text-base text-slate-700">
        Have a question or spotted an issue? Send an email and we’ll get back within 2
        working days.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">Email</h2>
          <p className="mt-2 text-sm text-slate-700">
            Email:{" "}
            <a className="text-blue-700 hover:underline" href="mailto:hello@ukjobtools.co.uk">
              hello@ukjobtools.co.uk
            </a>
          </p>
          <p className="mt-3 text-sm text-slate-700">
            Include which tool or page you were using and what you expected to happen.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <Link
              href="/tools"
              className="rounded-full border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
            >
              Tools
            </Link>
            <Link
              href="/resources"
              className="rounded-full border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
            >
              Resources
            </Link>
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <label className="block text-sm font-semibold text-slate-800" htmlFor="name">
              Name
            </label>
            <input id="name" name="name" type="text" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what you need help with"
            />
          </div>
          <p className="text-xs text-slate-600">
            This form is for demo purposes—please email us directly so we can respond.
          </p>
        </form>
      </div>
    </div>
  );
}
