import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/data/tools";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={tool.path}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-blue-700">
            {tool.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{tool.title}</h3>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
          {tool.tags[0]}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{tool.description}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
        Open tool
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
