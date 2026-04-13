"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { question: string; answer: string };

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items?.length) return null;

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <button
            type="button"
            key={item.question}
            className="flex w-full items-start gap-3 px-4 py-4 text-left transition hover:bg-slate-50"
            aria-expanded={isOpen}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <span className="mt-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold uppercase text-blue-700">
              Q
            </span>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900">{item.question}</p>
                <ChevronDown
                  className={`h-4 w-4 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </div>
              {isOpen && (
                <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
