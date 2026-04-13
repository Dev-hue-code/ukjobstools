import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HourlyToAnnualCalculator } from "@/components/calculator/hourly-to-annual";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Hourly to Annual Salary Calculator",
  description:
    "Convert an hourly rate into weekly, monthly, and annual pay. Quick UK-friendly salary estimates with clear maths.",
  path: "/tools/hourly-to-annual-salary",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <HourlyToAnnualCalculator />
    </>
  );
}
