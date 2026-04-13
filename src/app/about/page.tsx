import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About UK Job Tools",
  description:
    "Why UK Job Tools exists: practical calculators and guides for UK workers without logins or ads.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase text-blue-700">About</p>
      <h1 className="text-3xl font-semibold text-slate-900">About UK Job Tools</h1>
      <p className="text-base text-slate-700">
        UK Job Tools exists to give hourly workers and job seekers quick, trustworthy
        helpers without the usual hassle. No logins, no paywalls—just clear calculators
        and guides you can use from your phone.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h2 className="text-lg font-semibold text-slate-900">What we care about</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
              Practical tools that load fast on mobile.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
              Transparent calculations you can double-check.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
              Helpful links between tools, guides, and checklists.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h2 className="text-lg font-semibold text-slate-900">How to use</h2>
          <p className="mt-2 text-sm text-slate-700">
            Start on the{" "}
            <Link href="/tools" className="text-blue-700 hover:underline">
              tools page
            </Link>{" "}
            to calculate pay, then jump to{" "}
            <Link href="/resources" className="text-blue-700 hover:underline">
              resources
            </Link>{" "}
            for CV and interview help. Bookmark any calculator you rely on—no account is
            needed.
          </p>
        </div>
      </div>
    </div>
  );
}
