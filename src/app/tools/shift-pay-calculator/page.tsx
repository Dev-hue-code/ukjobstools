import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ShiftPayCalculator } from "@/components/calculator/shift-pay";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Shift Pay Calculator",
  description:
    "Work out pay per shift and total earnings after unpaid breaks. Handy for UK shift workers.",
  path: "/tools/shift-pay-calculator",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <ShiftPayCalculator />
    </>
  );
}
