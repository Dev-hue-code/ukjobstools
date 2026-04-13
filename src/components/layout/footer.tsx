import Link from "next/link";

const primaryLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold text-slate-900">UK Job Tools</div>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Practical calculators and guides to help UK workers plan pay, prepare CVs,
              and interview with confidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-700">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 px-3 py-2 transition hover:border-blue-200 hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <div className="flex gap-4">
            {policyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-blue-700">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-slate-500">© {new Date().getFullYear()} UK Job Tools.</p>
        </div>
      </div>
    </footer>
  );
}
