import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NoticePayCalculator } from "@/components/calculator/notice-pay";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Notice Period Pay Calculator",
  description:
    "Estimate total notice pay with your notice weeks and weekly pay. Simple UK-friendly calculation.",
  path: "/tools/notice-period-calculator",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <NoticePayCalculator />
    </>
  );
}
