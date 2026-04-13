"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import { tools } from "@/data/tools";
import { getRecentlyViewed } from "@/lib/recently-viewed";

export function RecentlyViewedTools() {
  const recent = useMemo(
    () => (typeof window === "undefined" ? [] : getRecentlyViewed()),
    [],
  );

  const items = recent
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter(Boolean);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
        <Clock3 className="h-4 w-4 text-blue-600" aria-hidden />
        Recently viewed tools
      </div>
      {items.length === 0 ? (
        <p className="text-sm text-slate-600">
          Nothing here yet. Open any calculator or guide and it’ll appear in this list.
        </p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {items.map(
            (item) =>
              item && (
                <Link
                  key={item.slug}
                  href={item.path}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  {item.title}
                </Link>
              ),
          )}
        </div>
      )}
    </section>
  );
}
