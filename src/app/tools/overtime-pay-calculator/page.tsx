import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OvertimePayCalculator } from "@/components/calculator/overtime-pay";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Overtime Pay Calculator",
  description:
    "Estimate overtime earnings using your hourly rate, overtime hours, and multiplier. Built for UK shift workers.",
  path: "/tools/overtime-pay-calculator",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <OvertimePayCalculator />
    </>
  );
}
