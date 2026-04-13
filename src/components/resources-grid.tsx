"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchBar } from "@/components/search-bar";
import { ResourceCard } from "@/components/resource-card";
import type { Resource } from "@/data/resources";

type ResourcesGridProps = {
  resources: Resource[];
};

export function ResourcesGrid({ resources }: ResourcesGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const categories = Array.from(
    new Set(resources.map((resource) => resource.category)),
  ).map((value) => ({ label: value, value }));

  const filtered = useMemo(() => {
    return resources.filter((resource) => {
      const matchesQuery =
        resource.title.toLowerCase().includes(query.toLowerCase()) ||
        resource.description.toLowerCase().includes(query.toLowerCase()) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = category ? resource.category === category : true;
      return matchesQuery && matchesCategory;
    });
  }, [resources, query, category]);

  return (
    <div className="space-y-4">
      <SearchBar
        placeholder="Search resources (e.g. warehouse, CV, interview)"
        onSearch={setQuery}
        categories={categories}
        onCategoryChange={setCategory}
      />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">No resources match that search.</p>
          <p className="mt-1">
            Try “CV”, “interview”, “pay”, or browse popular guides below.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="/resources/cv-summary-examples"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              CV summaries
            </Link>
            <Link
              href="/resources/warehouse-interview-questions"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              Warehouse interview
            </Link>
            <Link
              href="/resources/uk-minimum-wage-guide"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              Minimum wage
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
}
