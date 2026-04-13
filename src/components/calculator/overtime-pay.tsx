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
  "night-shift-survival-uk",
  "uk-minimum-wage-guide",
  "negotiate-pay-rise",
]);

export function OvertimePayCalculator() {
  const [hourlyRate, setHourlyRate] = useState(16);
  const [overtimeHours, setOvertimeHours] = useState(5);
  const [multiplier, setMultiplier] = useState(1.5);
  useEffect(() => {
    saveRecentlyViewed("overtime-pay-calculator");
  }, []);

  const error = useMemo(() => {
    if ([hourlyRate, overtimeHours, multiplier].some((value) => value <= 0)) {
      return "Enter values above zero to calculate overtime pay.";
    }
    return "";
  }, [hourlyRate, overtimeHours, multiplier]);

  const overtimePay = useMemo(() => {
    if (error) return 0;
    return hourlyRate * overtimeHours * multiplier;
  }, [error, hourlyRate, overtimeHours, multiplier]);

  return (
    <CalculatorShell
      title="Overtime Pay Calculator"
      intro="Work out how much extra you’ll earn from overtime hours using your rate and multiplier."
      canonicalPath="/tools/overtime-pay-calculator"
      howItWorks={[
        "Overtime pay = hourly rate × overtime hours × multiplier.",
        "Common multipliers: 1.25x weekday, 1.5x Saturday, 2x Sunday/bank holidays.",
        "If your multiplier changes by day, run this for each block of hours.",
      ]}
      faqs={[
        {
          question: "Where do I find my overtime multiplier?",
          answer:
            "Check your contract, staff handbook, or rota note. If unsure, ask your manager to confirm weekday vs weekend rates.",
        },
        {
          question: "Does this include tax?",
          answer:
            "No, this shows gross overtime earnings. It helps you check payslip calculations and plan your budget.",
        },
      ]}
      relatedTools={related}
      relatedResources={relatedResources}
      result={
        <ResultCard
          title="Overtime earnings"
          items={[
            { label: "Overtime pay", value: formatCurrency(overtimePay) },
            {
              label: "Hourly rate used",
              value: `£${formatNumber(hourlyRate, 2)} x ${formatNumber(multiplier, 2)}`,
            },
            { label: "Hours included", value: formatNumber(overtimeHours, 2) },
          ]}
          note="Gross overtime only. Check your contract for weekend or bank holiday multipliers."
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
              placeholder="e.g. 16"
            />
          </label>
          <label className="space-y-1 text-sm font-medium text-slate-800">
            Overtime hours
            <input
              type="number"
              min="0"
              step="0.5"
              value={overtimeHours}
              onChange={(event) => setOvertimeHours(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 5"
            />
          </label>
          <label className="space-y-1 text-sm font-medium text-slate-800">
            Multiplier (e.g. 1.5x)
            <input
              type="number"
              min="0"
              step="0.1"
              value={multiplier}
              onChange={(event) => setMultiplier(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 1.5"
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
