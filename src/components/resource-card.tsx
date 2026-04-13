import Link from "next/link";
import { ArrowUpRight, Tag } from "lucide-react";
import type { Resource } from "@/data/resources";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-blue-700">
            {resource.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {resource.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Tag className="h-4 w-4" aria-hidden />
          {resource.tags[0]}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {resource.description}
      </p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
        Read guide
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
