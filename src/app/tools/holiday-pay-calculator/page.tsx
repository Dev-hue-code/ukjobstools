import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HolidayPayCalculator } from "@/components/calculator/holiday-pay";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Holiday Pay Calculator",
  description:
    "Estimate UK holiday pay using your hourly rate, weekly hours, and holiday days with clear assumptions.",
  path: "/tools/holiday-pay-calculator",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <HolidayPayCalculator />
    </>
  );
}
