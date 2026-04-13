import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for UK Job Tools. Guidance only—always check contracts and payslips.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase text-blue-700">Terms</p>
      <h1 className="text-3xl font-semibold text-slate-900">Terms of Use</h1>
      <p className="text-sm text-slate-700">
        By using UK Job Tools you agree to these terms. The site provides general
        guidance only and is not financial or legal advice.
      </p>
      <ul className="space-y-3 text-sm text-slate-700">
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
          Calculations are estimates. Always confirm against your contract or payslip.
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
          We are not liable for decisions made using these tools.
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
          Do not misuse or attempt to disrupt the service.
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
          For questions, contact hello@ukjobtools.co.uk before relying on results.
        </li>
      </ul>
    </div>
  );
}
