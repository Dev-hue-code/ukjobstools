"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchBar } from "@/components/search-bar";
import { ToolCard } from "@/components/tool-card";
import type { Tool } from "@/data/tools";

type ToolsGridProps = {
  tools: Tool[];
};

export function ToolsGrid({ tools }: ToolsGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const categories = Array.from(new Set(tools.map((tool) => tool.category))).map(
    (value) => ({ label: value, value }),
  );

  const filtered = useMemo(() => {
    return tools.filter((tool) => {
      const matchesQuery =
        tool.title.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = category ? tool.category === category : true;
      return matchesQuery && matchesCategory;
    });
  }, [tools, query, category]);

  return (
    <div className="space-y-4">
      <SearchBar
        placeholder="Search tools (e.g. overtime, CV, holiday)"
        onSearch={setQuery}
        categories={categories}
        onCategoryChange={setCategory}
      />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">No tools match that search.</p>
          <p className="mt-1">
            Try keywords like “pay”, “holiday”, “overtime”, or browse all tools below.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="/tools/hourly-to-annual-salary"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              Salary converter
            </Link>
            <Link
              href="/tools/overtime-pay-calculator"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              Overtime
            </Link>
            <Link
              href="/tools/holiday-pay-calculator"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              Holiday pay
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
