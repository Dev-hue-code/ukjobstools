"use client";

import { useEffect, useMemo, useState } from "react";
import { CalculatorShell } from "@/components/calculator/calculator-shell";
import { ResultCard } from "@/components/calculator/result-card";
import { getRelatedTools } from "@/data/tools";
import { getRelatedResources } from "@/data/resources";
import { formatCurrency } from "@/lib/utils";
import { saveRecentlyViewed } from "@/lib/recently-viewed";

const related = getRelatedTools([
  "hourly-to-annual-salary",
  "overtime-pay-calculator",
  "shift-pay-calculator",
]);
const relatedResources = getRelatedResources([
  "part-time-vs-full-time-pay",
  "sick-pay-rights-uk",
  "uk-minimum-wage-guide",
]);

export function HolidayPayCalculator() {
  const [hourlyRate, setHourlyRate] = useState(14);
  const [hoursPerWeek, setHoursPerWeek] = useState(37.5);
  const [holidayDays, setHolidayDays] = useState(28);
  useEffect(() => {
    saveRecentlyViewed("holiday-pay-calculator");
  }, []);

  const error = useMemo(() => {
    if ([hourlyRate, hoursPerWeek, holidayDays].some((value) => value <= 0)) {
      return "Enter values above zero to estimate holiday pay.";
    }
    return "";
  }, [hourlyRate, hoursPerWeek, holidayDays]);

  const results = useMemo(() => {
    if (error) return null;
    const weeklyPay = hourlyRate * hoursPerWeek;
    const averageDailyPay = weeklyPay / 5;
    const estimatedHolidayPay = averageDailyPay * holidayDays;
    return { weeklyPay, averageDailyPay, estimatedHolidayPay };
  }, [error, hourlyRate, hoursPerWeek, holidayDays]);

  return (
    <CalculatorShell
      title="Holiday Pay Calculator"
      intro="Estimate paid holiday based on your hourly rate, weekly hours, and holiday days. Uses a simple 5-day working week assumption."
      canonicalPath="/tools/holiday-pay-calculator"
      howItWorks={[
        "Weekly pay = hourly rate × hours per week.",
        "Average day = weekly pay ÷ 5 (assumes 5 working days).",
        "Estimated holiday pay = average day × holiday days.",
      ]}
      faqs={[
        {
          question: "What if I don’t work 5 days?",
          answer:
            "Divide your weekly pay by the number of days you normally work to get your average day, then multiply by holiday days.",
        },
        {
          question: "Does this include overtime?",
          answer:
            "This uses your inputs only. For variable pay, use an average hourly rate based on your recent payslips.",
        },
      ]}
      relatedTools={related}
      relatedResources={relatedResources}
      result={
        <ResultCard
          title="Holiday pay estimate"
          items={[
            { label: "Weekly pay", value: formatCurrency(results?.weeklyPay ?? 0) },
            { label: "Average day", value: formatCurrency(results?.averageDailyPay ?? 0) },
            {
              label: "Estimated holiday pay",
              value: formatCurrency(results?.estimatedHolidayPay ?? 0),
            },
          ]}
          note="Uses a simple 5-day week assumption. Check your contract for exact rules."
        />
      }
    >
      <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-1 text-sm font-medium text-slate-800">
            Hourly rate (£)
            <input
              type="number"
              min="0"
              step="0.01"
              value={hourlyRate}
              onChange={(event) => setHourlyRate(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 14"
            />
          </label>
          <label className="space-y-1 text-sm font-medium text-slate-800">
            Hours per week
            <input
              type="number"
              min="0"
              step="0.5"
              value={hoursPerWeek}
              onChange={(event) => setHoursPerWeek(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 37.5"
            />
          </label>
          <label className="space-y-1 text-sm font-medium text-slate-800">
            Holiday days
            <input
              type="number"
              min="0"
              step="1"
              value={holidayDays}
              onChange={(event) => setHolidayDays(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 28"
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
