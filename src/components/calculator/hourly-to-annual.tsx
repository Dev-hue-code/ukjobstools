"use client";

import { useEffect, useMemo, useState } from "react";
import { CalculatorShell } from "@/components/calculator/calculator-shell";
import { ResultCard } from "@/components/calculator/result-card";
import { getRelatedTools } from "@/data/tools";
import { getRelatedResources } from "@/data/resources";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { saveRecentlyViewed } from "@/lib/recently-viewed";

const related = getRelatedTools([
  "overtime-pay-calculator",
  "shift-pay-calculator",
  "holiday-pay-calculator",
]);
const relatedResources = getRelatedResources([
  "uk-minimum-wage-guide",
  "part-time-vs-full-time-pay",
  "negotiate-pay-rise",
]);

export function HourlyToAnnualCalculator() {
  const [hourlyRate, setHourlyRate] = useState(15);
  const [hoursPerWeek, setHoursPerWeek] = useState(37.5);
  const [weeksPerYear, setWeeksPerYear] = useState(52);
  useEffect(() => {
    saveRecentlyViewed("hourly-to-annual-salary");
  }, []);

  const error = useMemo(() => {
    if ([hourlyRate, hoursPerWeek, weeksPerYear].some((value) => value <= 0)) {
      return "Enter values above zero to calculate pay.";
    }
    return "";
  }, [hourlyRate, hoursPerWeek, weeksPerYear]);

  const results = useMemo(() => {
    if (error) return null;
    const annual = hourlyRate * hoursPerWeek * weeksPerYear;
    const weekly = hourlyRate * hoursPerWeek;
    const monthly = annual / 12;
    return { annual, monthly, weekly };
  }, [error, hourlyRate, hoursPerWeek, weeksPerYear]);

  return (
    <CalculatorShell
      title="Hourly to Annual Salary Calculator"
      intro="Convert an hourly rate into weekly, monthly, and annual pay. Good for checking job adverts, comparing offers, or planning overtime."
      canonicalPath="/tools/hourly-to-annual-salary"
      howItWorks={[
        "Annual pay = hourly rate × hours per week × working weeks per year.",
        "Monthly estimate is annual pay divided by 12.",
        "Weekly pay = hourly rate × hours per week.",
      ]}
      faqs={[
        {
          question: "What should I use for weeks per year?",
          answer:
            "52 weeks is common. If you take unpaid time off, reduce the number. If you’re paid for holidays, keep 52.",
        },
        {
          question: "Does this include tax?",
          answer:
            "No. This shows gross pay (before tax, NI, or pension). Use it to compare offers or estimate budget.",
        },
      ]}
      relatedTools={related}
      relatedResources={relatedResources}
      result={
        <ResultCard
          title="Your estimates"
          items={[
            { label: "Annual pay", value: formatCurrency(results?.annual ?? 0) },
            { label: "Monthly estimate", value: formatCurrency(results?.monthly ?? 0) },
            { label: "Weekly pay", value: formatCurrency(results?.weekly ?? 0) },
            {
              label: "Hourly rate used",
              value: `£${formatNumber(hourlyRate, 2)}`,
            },
          ]}
          note="Gross pay only. Check your payslip or contract for deductions."
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
              placeholder="e.g. 15"
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
            Working weeks per year
            <input
              type="number"
              min="0"
              step="1"
              value={weeksPerYear}
              onChange={(event) => setWeeksPerYear(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 52"
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
