export type ToolCategory =
  | "Pay Calculators"
  | "Work Rights"
  | "Interviews"
  | "Applications";

export type Tool = {
  slug: string;
  title: string;
  description: string;
  path: string;
  category: ToolCategory;
  tags: string[];
  featured?: boolean;
  popular?: boolean;
  relatedResources: string[];
};

export const tools: Tool[] = [
  {
    slug: "hourly-to-annual-salary",
    title: "Hourly to Annual Salary",
    description:
      "Estimate your yearly, monthly, and weekly pay from an hourly rate.",
    path: "/tools/hourly-to-annual-salary",
    category: "Pay Calculators",
    tags: ["salary", "pay", "planning"],
    featured: true,
    popular: true,
    relatedResources: [
      "uk-minimum-wage-guide",
      "part-time-vs-full-time-pay",
      "negotiate-pay-rise",
    ],
  },
  {
    slug: "overtime-pay-calculator",
    title: "Overtime Pay Calculator",
    description: "Work out how much extra you’ll earn for overtime shifts.",
    path: "/tools/overtime-pay-calculator",
    category: "Pay Calculators",
    tags: ["overtime", "pay", "budget"],
    featured: true,
    popular: true,
    relatedResources: [
      "night-shift-survival-uk",
      "uk-minimum-wage-guide",
      "negotiate-pay-rise",
    ],
  },
  {
    slug: "shift-pay-calculator",
    title: "Shift Pay Calculator",
    description: "See your pay per shift and total earnings for multiple shifts.",
    path: "/tools/shift-pay-calculator",
    category: "Pay Calculators",
    tags: ["shift", "pay", "budget"],
    popular: true,
    relatedResources: [
      "night-shift-survival-uk",
      "delivery-driver-checklist",
      "part-time-vs-full-time-pay",
    ],
  },
  {
    slug: "holiday-pay-calculator",
    title: "Holiday Pay Calculator",
    description: "Estimate holiday pay based on your hours and holiday days.",
    path: "/tools/holiday-pay-calculator",
    category: "Pay Calculators",
    tags: ["holiday", "pay", "rights"],
    relatedResources: [
      "part-time-vs-full-time-pay",
      "sick-pay-rights-uk",
      "uk-minimum-wage-guide",
    ],
  },
  {
    slug: "notice-period-calculator",
    title: "Notice Period Calculator",
    description: "Calculate total notice pay from weeks of notice and weekly pay.",
    path: "/tools/notice-period-calculator",
    category: "Work Rights",
    tags: ["notice", "pay", "rights"],
    relatedResources: [
      "probation-period-survival",
      "sick-pay-rights-uk",
      "negotiate-pay-rise",
    ],
  },
  {
    slug: "cv-summary-helper",
    title: "CV Summary Helper",
    description: "Use proven UK CV summary examples you can copy and adapt.",
    path: "/resources/cv-summary-examples",
    category: "Applications",
    tags: ["cv", "writing", "templates"],
    featured: true,
    relatedResources: [
      "cv-summary-examples",
      "uk-job-application-checklist",
      "retail-customer-service-answers",
    ],
  },
  {
    slug: "warehouse-interview-prep",
    title: "Warehouse Interview Prep",
    description: "Common warehouse interview questions with answer tips.",
    path: "/resources/warehouse-interview-questions",
    category: "Interviews",
    tags: ["interview", "warehouse", "prep"],
    relatedResources: [
      "warehouse-interview-questions",
      "call-center-interview-questions",
      "delivery-driver-checklist",
    ],
  },
  {
    slug: "why-hire-you-answers",
    title: "\"Why should we hire you?\" Answers",
    description: "Confident answers you can tailor for UK job applications.",
    path: "/resources/how-to-answer-why-should-we-hire-you",
    category: "Interviews",
    tags: ["interview", "answer", "confidence"],
    relatedResources: [
      "how-to-answer-why-should-we-hire-you",
      "warehouse-interview-questions",
      "call-center-interview-questions",
    ],
  },
  {
    slug: "application-checklist",
    title: "Job Application Checklist",
    description: "Step-by-step checklist to submit strong UK applications.",
    path: "/resources/uk-job-application-checklist",
    category: "Applications",
    tags: ["application", "checklist", "uk"],
    relatedResources: [
      "uk-job-application-checklist",
      "cv-summary-examples",
      "pay-slip-decoder",
    ],
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getRelatedTools(slugs: string[]) {
  return tools.filter((tool) => slugs.includes(tool.slug));
}

export const featuredTools = tools.filter((tool) => tool.featured);
export const popularTools = tools.filter((tool) => tool.popular);
