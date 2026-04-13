import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div className="flex items-center justify-center rounded-full bg-blue-50 p-3 text-blue-700">
        <AlertTriangle className="h-6 w-6" aria-hidden />
      </div>
      <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="max-w-2xl text-sm text-slate-600">
        The page you’re looking for doesn’t exist. Try the home page or jump straight to
        tools and resources.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Back to home
        </Link>
        <Link
          href="/tools"
          className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          View tools
        </Link>
        <Link
          href="/resources"
          className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Read resources
        </Link>
      </div>
    </div>
  );
}
