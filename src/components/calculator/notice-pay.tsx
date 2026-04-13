"use client";

import { useEffect, useMemo, useState } from "react";
import { CalculatorShell } from "@/components/calculator/calculator-shell";
import { ResultCard } from "@/components/calculator/result-card";
import { getRelatedTools } from "@/data/tools";
import { getRelatedResources } from "@/data/resources";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { saveRecentlyViewed } from "@/lib/recently-viewed";

const related = getRelatedTools([
  "hourly-to-annual-salary",
  "shift-pay-calculator",
  "holiday-pay-calculator",
]);
const relatedResources = getRelatedResources([
  "probation-period-survival",
  "sick-pay-rights-uk",
  "negotiate-pay-rise",
]);

export function NoticePayCalculator() {
  const [noticeWeeks, setNoticeWeeks] = useState(4);
  const [weeklyPay, setWeeklyPay] = useState(520);
  useEffect(() => {
    saveRecentlyViewed("notice-period-calculator");
  }, []);

  const error = useMemo(() => {
    if (noticeWeeks <= 0 || weeklyPay <= 0) {
      return "Enter positive values to calculate notice pay.";
    }
    return "";
  }, [noticeWeeks, weeklyPay]);

  const totalNoticePay = useMemo(() => {
    if (error) return 0;
    return noticeWeeks * weeklyPay;
  }, [error, noticeWeeks, weeklyPay]);

  return (
    <CalculatorShell
      title="Notice Period Pay Calculator"
      intro="Estimate total notice pay using your notice period (weeks) and average weekly pay."
      canonicalPath="/tools/notice-period-calculator"
      howItWorks={[
        "Total notice pay = notice weeks × average weekly pay.",
        "Use your normal weekly pay including regular allowances you expect to receive.",
        "Check your contract for statutory vs contractual notice rules.",
      ]}
      faqs={[
        {
          question: "What counts as weekly pay?",
          answer:
            "Use your normal gross weekly pay, including regular allowances. Exclude one-off bonuses unless your contract guarantees them.",
        },
        {
          question: "Is this legally exact?",
          answer:
            "This is a simple estimate. Statutory and contractual notice can differ—always confirm with your contract or HR.",
        },
      ]}
      relatedTools={related}
      relatedResources={relatedResources}
      result={
        <ResultCard
          title="Notice pay estimate"
          items={[
            {
              label: "Total notice pay",
              value: formatCurrency(totalNoticePay),
            },
            { label: "Weeks used", value: formatNumber(noticeWeeks, 0) },
            { label: "Weekly pay used", value: formatCurrency(weeklyPay) },
          ]}
          note="Simple estimate only. Confirm contractual notice and any deductions with HR."
        />
      }
    >
      <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-1 text-sm font-medium text-slate-800">
            Notice weeks
            <input
              type="number"
              min="0"
              step="1"
              value={noticeWeeks}
              onChange={(event) => setNoticeWeeks(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 4"
            />
          </label>
          <label className="space-y-1 text-sm font-medium text-slate-800">
            Weekly pay (£)
            <input
              type="number"
              min="0"
              step="1"
              value={weeklyPay}
              onChange={(event) => setWeeklyPay(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 520"
            />
          </label>
        </div>
        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
        )}
      </form>
    </CalculatorShell>
  );
}
