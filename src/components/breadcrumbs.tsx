"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [{ href: "/", label: "Home" }];
  segments.forEach((segment, idx) => {
    const href = `/${segments.slice(0, idx + 1).join("/")}`;
    const label = segment.replace(/-/g, " ");
    crumbs.push({ href, label });
  });

  if (crumbs.length <= 1) return null;

  return (
    <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
      {crumbs.map((crumb, idx) => (
        <span key={crumb.href} className="flex items-center gap-2">
          <Link href={crumb.href} className="transition hover:text-blue-700">
            {idx === crumbs.length - 1 ? (
              <span className="font-medium text-slate-900">
                {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
              </span>
            ) : (
              crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)
            )}
          </Link>
          {idx < crumbs.length - 1 && (
            <ChevronRight className="h-4 w-4 text-slate-300" aria-hidden />
          )}
        </span>
      ))}
    </nav>
  );
}
