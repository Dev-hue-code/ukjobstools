import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for UK Job Tools. No accounts, no trackers, and calculators run locally.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase text-blue-700">Privacy</p>
      <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
      <p className="text-sm text-slate-700">
        We respect your privacy. UK Job Tools is designed to avoid unnecessary data
        collection.
      </p>
      <ul className="space-y-3 text-sm text-slate-700">
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
          No accounts or payments are required to use the site.
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
          Calculations run in your browser. We do not store your inputs on a server.
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
          Basic, anonymous analytics may be used to understand page usage only.
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
          For any questions, email hello@ukjobtools.co.uk.
        </li>
      </ul>
    </div>
  );
}
