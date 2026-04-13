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
  "overtime-pay-calculator",
  "holiday-pay-calculator",
]);
const relatedResources = getRelatedResources([
  "night-shift-survival-uk",
  "delivery-driver-checklist",
  "part-time-vs-full-time-pay",
]);

export function ShiftPayCalculator() {
  const [hourlyRate, setHourlyRate] = useState(14);
  const [shiftLengthHours, setShiftLengthHours] = useState(8);
  const [unpaidBreakMinutes, setUnpaidBreakMinutes] = useState(30);
  const [numberOfShifts, setNumberOfShifts] = useState(5);
  useEffect(() => {
    saveRecentlyViewed("shift-pay-calculator");
  }, []);

  const error = useMemo(() => {
    if (
      [hourlyRate, shiftLengthHours, numberOfShifts].some((value) => value <= 0) ||
      unpaidBreakMinutes < 0
    ) {
      return "Enter positive values to calculate shift pay.";
    }
    const effectiveHours = shiftLengthHours - unpaidBreakMinutes / 60;
    if (effectiveHours <= 0) {
      return "Unpaid break can’t be longer than the shift.";
    }
    return "";
  }, [hourlyRate, shiftLengthHours, unpaidBreakMinutes, numberOfShifts]);

  const results = useMemo(() => {
    if (error) return null;
    const effectiveHours = shiftLengthHours - unpaidBreakMinutes / 60;
    const payPerShift = hourlyRate * effectiveHours;
    const totalPay = payPerShift * numberOfShifts;
    return { effectiveHours, payPerShift, totalPay };
  }, [error, hourlyRate, shiftLengthHours, unpaidBreakMinutes, numberOfShifts]);

  return (
    <CalculatorShell
      title="Shift Pay Calculator"
      intro="Estimate pay per shift and total pay across several shifts, accounting for unpaid breaks."
      canonicalPath="/tools/shift-pay-calculator"
      howItWorks={[
        "Effective hours = shift length − unpaid break minutes.",
        "Pay per shift = hourly rate × effective hours.",
        "Total pay = pay per shift × number of shifts.",
      ]}
      faqs={[
        {
          question: "What if my break is paid?",
          answer: "Set unpaid break minutes to 0 so all shift hours are paid.",
        },
        {
          question: "Should I include travel time?",
          answer:
            "No. Only include paid working hours. Travel time is usually unpaid unless your contract says otherwise.",
        },
      ]}
      relatedTools={related}
      relatedResources={relatedResources}
      result={
        <ResultCard
          title="Shift pay"
          items={[
            {
              label: "Paid hours per shift",
              value: `${formatNumber(results?.effectiveHours ?? 0, 2)} hrs`,
            },
            { label: "Pay per shift", value: formatCurrency(results?.payPerShift ?? 0) },
            { label: "Total pay", value: formatCurrency(results?.totalPay ?? 0) },
          ]}
          note="Use this to check rota changes or compare offers with unpaid breaks."
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
            Shift length (hours)
            <input
              type="number"
              min="0"
              step="0.25"
              value={shiftLengthHours}
              onChange={(event) => setShiftLengthHours(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 8"
            />
          </label>
          <label className="space-y-1 text-sm font-medium text-slate-800">
            Unpaid break (minutes)
            <input
              type="number"
              min="0"
              step="5"
              value={unpaidBreakMinutes}
              onChange={(event) =>
                setUnpaidBreakMinutes(parseFloat(event.target.value) || 0)
              }
              placeholder="e.g. 30"
            />
          </label>
          <label className="space-y-1 text-sm font-medium text-slate-800">
            Number of shifts
            <input
              type="number"
              min="0"
              step="1"
              value={numberOfShifts}
              onChange={(event) => setNumberOfShifts(parseFloat(event.target.value) || 0)}
              placeholder="e.g. 5"
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
