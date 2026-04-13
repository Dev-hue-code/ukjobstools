export type FAQ = {
  question: string;
  answer: string;
};

export type ResourceSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: "Interviews" | "Applications" | "Workplace";
  tags: string[];
  sections: ResourceSection[];
  faqs: FAQ[];
  relatedTools: string[];
  relatedResources: string[];
};

export const resources: Resource[] = [
  {
    slug: "warehouse-interview-questions",
    title: "Warehouse Interview Questions (with Answers)",
    description:
      "Common UK warehouse interview questions, answer structures, and examples you can adapt.",
    category: "Interviews",
    tags: ["warehouse", "interview", "operations"],
    sections: [
      {
        heading: "What to expect",
        body: "Warehouse interviews focus on safety, reliability, and teamwork. Prepare examples that show you can work quickly without cutting corners.",
        bullets: [
          "Show you understand health and safety basics.",
          "Highlight punctuality and consistency across shifts.",
          "Use STAR examples that involve heavy workloads or last-minute changes.",
        ],
      },
      {
        heading: "High-frequency questions",
        body: "Use short, confident answers backed by numbers or outcomes.",
        bullets: [
          "Tell me about a time you hit a tight target.",
          "How do you stay safe when the pace is high?",
          "How do you handle repetitive tasks without losing focus?",
          "Describe a time you helped a teammate meet their target.",
        ],
      },
      {
        heading: "Answer patterns to reuse",
        body: "Keep answers under 90 seconds. Mention the situation, your action, and the result.",
        bullets: [
          "Situation: what was happening, who was involved, and the risk.",
          "Action: what you did, tools used (PPE, scanners), and how you coordinated.",
          "Result: time saved, errors avoided, or safety incident prevented.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to mention certifications?",
        answer:
          "Yes. Call out forklift tickets, first-aid, or manual handling training—these reduce risk for employers.",
      },
      {
        question: "How many examples should I prepare?",
        answer:
          "Prepare 3–4 strong examples that cover safety, speed, teamwork, and reliability. Reuse them across questions.",
      },
    ],
    relatedTools: [
      "warehouse-interview-prep",
      "why-hire-you-answers",
      "hourly-to-annual-salary",
    ],
    relatedResources: [
      "how-to-answer-why-should-we-hire-you",
      "cv-summary-examples",
      "call-center-interview-questions",
    ],
  },
  {
    slug: "cv-summary-examples",
    title: "CV Summary Examples for UK Roles",
    description:
      "Copy-ready UK CV summary statements tailored for frontline, admin, and operations roles.",
    category: "Applications",
    tags: ["cv", "writing", "examples"],
    sections: [
      {
        heading: "How to write a summary",
        body: "Keep it 3–4 lines, lead with your value, and name the role you want.",
        bullets: [
          "Open with your role: “Warehouse operative with 3 years…”",
          "Name 2–3 strengths: speed, accuracy, customer care.",
          "Show proof: KPIs, error-free weeks, on-time attendance.",
        ],
      },
      {
        heading: "Examples you can adapt",
        body: "Swap in your numbers and tools.",
        bullets: [
          "Warehouse: “Warehouse operative (3 yrs) hitting 98% pick accuracy and 100% on-time attendance across night shifts.”",
          "Admin: “Office admin supporting 3 managers, streamlining diaries and reducing inbox backlog by 30% with clear triage.”",
          "Retail: “Retail assistant known for 4.8/5 customer scores and consistent add-on sales through simple product demos.”",
        ],
      },
      {
        heading: "Checklist before you send",
        body: "Keep it clean, specific, and UK-focused.",
        bullets: [
          "No buzzwords without proof—add numbers.",
          "Match keywords from the job advert.",
          "Keep spelling UK English and remove US phrasing.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long should a CV summary be?",
        answer: "3–4 lines. If it’s longer, move details into bullet points below.",
      },
      {
        question: "Do I list every skill?",
        answer:
          "No. Pick the 3–4 skills that match the job advert and back them with proof.",
      },
    ],
    relatedTools: ["cv-summary-helper", "application-checklist", "hourly-to-annual-salary"],
    relatedResources: [
      "uk-job-application-checklist",
      "how-to-answer-why-should-we-hire-you",
      "retail-customer-service-answers",
    ],
  },
  {
    slug: "how-to-answer-why-should-we-hire-you",
    title: "How to Answer “Why Should We Hire You?”",
    description:
      "A repeatable structure for confident UK interview answers with examples.",
    category: "Interviews",
    tags: ["interview", "answers", "confidence"],
    sections: [
      {
        heading: "Use a 3-part structure",
        body: "Keep it concise: fit, proof, and result.",
        bullets: [
          "Fit: connect your skills to their job advert.",
          "Proof: 1–2 examples with numbers.",
          "Result: what improves when you join (speed, quality, customer care).",
        ],
      },
      {
        heading: "Example answer you can adapt",
        body: "Swap in your metrics and tools.",
        bullets: [
          "“You need reliable shift cover and safe handling. I’ve completed manual handling training, hit 98% pick accuracy, and covered 6 short-notice shifts last quarter without errors.”",
          "“You want calmer customer queues. I reduced wait times by 20% last year by triaging quick requests and flagging complex ones for supervisors.”",
        ],
      },
      {
        heading: "Avoid common pitfalls",
        body: "Keep it grounded and UK-relevant.",
        bullets: [
          "Don’t repeat your whole CV—pick one headline strength.",
          "Avoid vague claims like “hard worker” without numbers.",
          "Keep it under 60–90 seconds.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I prepare the answer word-for-word?",
        answer:
          "Use bullet points, not a script. Natural delivery sounds more trustworthy.",
      },
      {
        question: "What if I lack direct experience?",
        answer:
          "Borrow proof from similar tasks: shift work, safety checks, or customer handling. Emphasise reliability and trainability.",
      },
    ],
    relatedTools: ["why-hire-you-answers", "warehouse-interview-prep", "application-checklist"],
    relatedResources: [
      "warehouse-interview-questions",
      "cv-summary-examples",
      "call-center-interview-questions",
    ],
  },
  {
    slug: "uk-job-application-checklist",
    title: "UK Job Application Checklist",
    description:
      "A step-by-step checklist to submit tidy, confident applications that pass screening.",
    category: "Applications",
    tags: ["application", "checklist", "uk"],
    sections: [
      {
        heading: "Before you start",
        body: "Line up documents and facts so you can apply quickly.",
        bullets: [
          "Right-to-work documents and NI number handy.",
          "Contact details for two recent managers.",
          "Dates, employers, and job titles double-checked.",
        ],
      },
      {
        heading: "During the application",
        body: "Tailor quickly using the job advert.",
        bullets: [
          "Mirror 3–5 keywords from the advert (safety, accuracy, customer care).",
          "Attach a CV that matches the job title and location.",
          "Add one short cover note that names the employer and shift pattern you can work.",
        ],
      },
      {
        heading: "Before you submit",
        body: "Final tidy-ups reduce rejections.",
        bullets: [
          "Check spelling (UK English) and remove US date formats.",
          "Delete blank sections and tidy spacing.",
          "Rename files clearly: firstname-lastname-cv.pdf.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a cover letter?",
        answer:
          "A short cover note helps. 4–6 sentences naming the role, location, and why you fit.",
      },
      {
        question: "How many jobs should I apply for at once?",
        answer:
          "Focus on 3–5 tailored applications per week rather than mass sending. Quality wins.",
      },
    ],
    relatedTools: ["application-checklist", "cv-summary-helper", "hourly-to-annual-salary"],
    relatedResources: [
      "cv-summary-examples",
      "how-to-answer-why-should-we-hire-you",
      "pay-slip-decoder",
    ],
  },
  {
    slug: "uk-minimum-wage-guide",
    title: "UK Minimum Wage Guide (Current Year)",
    description:
      "Know the current UK minimum wage rates, age bands, and how to check you’re paid correctly.",
    category: "Workplace",
    tags: ["wage", "pay", "uk"],
    sections: [
      {
        heading: "Current rates at a glance",
        body: "Rates change every April. Check your age band and role.",
        bullets: [
          "Rates differ by age and apprenticeship status.",
          "Overtime and night shifts should still respect minimum hourly pay.",
          "Keep an eye on deductions—uniforms can’t drop you below minimum wage.",
        ],
      },
      {
        heading: "How to check your payslip",
        body: "Use hourly totals and deductions to confirm compliance.",
        bullets: [
          "Divide gross pay by hours worked to find the true hourly rate.",
          "Check for unpaid breaks or missing overtime multipliers.",
          "Flag uniform or equipment deductions that reduce your effective rate.",
        ],
      },
      {
        heading: "What to do if underpaid",
        body: "Raise it politely first, then use official routes if needed.",
        bullets: [
          "Ask your manager for a corrected payslip.",
          "Keep records of shifts, breaks, and overtime.",
          "If unresolved, contact ACAS or HMRC for guidance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does minimum wage include holiday pay?",
        answer: "Holiday pay is separate. Your hourly rate still needs to meet minimum wage.",
      },
      {
        question: "Can uniform costs reduce my wage?",
        answer: "Not below minimum wage. Large deductions should be spread over time.",
      },
    ],
    relatedTools: [
      "hourly-to-annual-salary",
      "overtime-pay-calculator",
      "holiday-pay-calculator",
    ],
    relatedResources: [
      "pay-slip-decoder",
      "part-time-vs-full-time-pay",
      "sick-pay-rights-uk",
    ],
  },
  {
    slug: "pay-slip-decoder",
    title: "Payslip Decoder: Understand Your UK Payslip",
    description:
      "Break down gross pay, deductions, and take-home pay so you can spot mistakes fast.",
    category: "Workplace",
    tags: ["payslip", "deductions", "pay"],
    sections: [
      {
        heading: "Key parts of a payslip",
        body: "Know what each line means to avoid surprises.",
        bullets: [
          "Gross pay vs net pay and typical deductions (tax, NI, pension).",
          "Contracted hours, overtime lines, and shift premiums.",
          "Holiday accrual and balance where shown.",
        ],
      },
      {
        heading: "Quick checks to run",
        body: "Five-minute review to catch errors.",
        bullets: [
          "Does the hourly rate match your contract?",
          "Are overtime hours multiplied correctly?",
          "Do deductions look consistent month to month?",
        ],
      },
      {
        heading: "How to raise issues",
        body: "Stay factual and keep records.",
        bullets: [
          "Screenshot or print the payslip with notes.",
          "Email payroll/HR with shift dates and totals.",
          "Request a corrected payslip if needed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should tips appear on my payslip?",
        answer: "If processed through payroll, yes. Cash tips usually don’t show but may be taxable.",
      },
      {
        question: "Why is my tax code important?",
        answer:
          "Wrong tax codes can reduce take-home pay. Compare with HMRC guidance and ask payroll to correct it.",
      },
    ],
    relatedTools: [
      "hourly-to-annual-salary",
      "holiday-pay-calculator",
      "application-checklist",
    ],
    relatedResources: [
      "uk-minimum-wage-guide",
      "part-time-vs-full-time-pay",
      "sick-pay-rights-uk",
    ],
  },
  {
    slug: "probation-period-survival",
    title: "Probation Period Survival Guide",
    description:
      "Hit targets, communicate well, and protect your rights during probation in the UK.",
    category: "Workplace",
    tags: ["probation", "performance", "rights"],
    sections: [
      {
        heading: "What employers look for",
        body: "Reliability, learning speed, and teamwork are the big three.",
        bullets: [
          "Show up consistently and on time.",
          "Ask for quick feedback after your first week.",
          "Document what you’ve learned and where you need help.",
        ],
      },
      {
        heading: "How to avoid common pitfalls",
        body: "Small habits matter most.",
        bullets: [
          "Clarify priorities daily with your lead or manager.",
          "Keep notes on tasks, errors, and fixes.",
          "Volunteer for at least one extra helpful task per week.",
        ],
      },
      {
        heading: "If things go wrong",
        body: "Stay calm and factual.",
        bullets: [
          "Ask for a specific improvement plan with dates.",
          "Request shadowing or training on weak areas.",
          "Know your notice period and rights during probation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can probation be extended?",
        answer: "Yes. Extensions should be written, with clear reasons and timelines.",
      },
      {
        question: "Do I still accrue holiday?",
        answer: "Usually yes—check your contract. You’re still an employee during probation.",
      },
    ],
    relatedTools: [
      "notice-period-calculator",
      "application-checklist",
      "shift-pay-calculator",
    ],
    relatedResources: [
      "uk-job-application-checklist",
      "negotiate-pay-rise",
      "sick-pay-rights-uk",
    ],
  },
  {
    slug: "night-shift-survival-uk",
    title: "Night Shift Survival Tips (UK)",
    description:
      "Stay alert, stay safe, and manage pay and breaks when working nights in the UK.",
    category: "Workplace",
    tags: ["night shift", "health", "pay"],
    sections: [
      {
        heading: "Prep before your shift",
        body: "Small routines keep you sharp.",
        bullets: [
          "Nap 60–90 minutes before the shift if possible.",
          "Eat light, balanced meals—avoid heavy fried foods before starting.",
          "Pack high-vis, layers, and a water bottle.",
        ],
      },
      {
        heading: "During the shift",
        body: "Protect your energy and safety.",
        bullets: [
          "Use short movement breaks to reset focus.",
          "Stay hydrated and avoid too much caffeine late in the shift.",
          "Log your hours and breaks for accurate pay.",
        ],
      },
      {
        heading: "After the shift",
        body: "Wind down so you can rest.",
        bullets: [
          "Block light with curtains or an eye mask.",
          "Avoid screens 30 minutes before sleep.",
          "Plan recovery time before your next shift block.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are night shift premiums required?",
        answer:
          "Premiums aren’t mandatory, but many employers pay more. Check your contract for multipliers.",
      },
      {
        question: "How do I handle fatigue safely?",
        answer:
          "Report when you’re too tired to work safely and ask for a short break or rotation to a lower-risk task.",
      },
    ],
    relatedTools: [
      "shift-pay-calculator",
      "overtime-pay-calculator",
      "holiday-pay-calculator",
    ],
    relatedResources: [
      "delivery-driver-checklist",
      "warehouse-interview-questions",
      "sick-pay-rights-uk",
    ],
  },
  {
    slug: "call-center-interview-questions",
    title: "Call Centre Interview Questions (UK)",
    description:
      "Common call centre interview questions with short answer patterns you can adapt.",
    category: "Interviews",
    tags: ["interview", "call centre", "customer service"],
    sections: [
      {
        heading: "What employers check",
        body: "Calm communication, reliability, and handling pressure.",
        bullets: [
          "Voice tone and clarity on the phone.",
          "Ability to follow scripts while staying human.",
          "Examples of de-escalating upset customers.",
        ],
      },
      {
        heading: "Questions you’ll hear",
        body: "Prepare concise answers with proof.",
        bullets: [
          "Tell me about a time you calmed an angry customer.",
          "How do you stay accurate while multitasking?",
          "What does good call quality mean to you?",
        ],
      },
      {
        heading: "Answer structure",
        body: "Use STAR but keep it under 90 seconds.",
        bullets: [
          "Situation: type of caller and issue.",
          "Action: steps you took to resolve or escalate.",
          "Result: time saved, customer score, or repeat business.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need sales experience?",
        answer:
          "Not always. Show you can follow prompts, listen well, and record details accurately.",
      },
      {
        question: "How should I prepare for call listening tests?",
        answer:
          "Practice speaking clearly at a steady pace and repeat details back to show you listened.",
      },
    ],
    relatedTools: [
      "why-hire-you-answers",
      "warehouse-interview-prep",
      "overtime-pay-calculator",
    ],
    relatedResources: [
      "how-to-answer-why-should-we-hire-you",
      "retail-customer-service-answers",
      "cv-summary-examples",
    ],
  },
  {
    slug: "retail-customer-service-answers",
    title: "Retail Customer Service Answers",
    description:
      "Ready-to-use answer patterns for shop floor and retail assistant interviews in the UK.",
    category: "Interviews",
    tags: ["retail", "customer service", "interview"],
    sections: [
      {
        heading: "Show impact in numbers",
        body: "Even small wins count.",
        bullets: [
          "Queue times reduced, add-on sales, or stock accuracy improvements.",
          "Customer feedback scores or compliments.",
          "Reliability: zero no-shows, covering shifts when needed.",
        ],
      },
      {
        heading: "Questions to prep",
        body: "Use specific, short answers.",
        bullets: [
          "Describe a time you handled a long queue.",
          "How do you approach upselling without pressure?",
          "Tell me about preventing a mistake at the till.",
        ],
      },
      {
        heading: "Body language and tone",
        body: "Friendly, steady pace, and clear eye contact.",
      },
    ],
    faqs: [
      {
        question: "Do I need retail experience?",
        answer:
          "Not always. Borrow examples from any customer-facing role—cafes, call centres, or volunteering.",
      },
      {
        question: "Should I memorise scripts?",
        answer:
          "Use bullet points, not scripts. Focus on calm tone and clear steps you take to help customers.",
      },
    ],
    relatedTools: [
      "why-hire-you-answers",
      "hourly-to-annual-salary",
      "application-checklist",
    ],
    relatedResources: [
      "call-center-interview-questions",
      "warehouse-interview-questions",
      "cv-summary-examples",
    ],
  },
  {
    slug: "delivery-driver-checklist",
    title: "Delivery Driver Checklist (UK)",
    description:
      "Safety, timing, and customer tips for multi-drop and last-mile delivery drivers.",
    category: "Workplace",
    tags: ["delivery", "safety", "logistics"],
    sections: [
      {
        heading: "Before you start",
        body: "Prevent issues before you leave the depot.",
        bullets: [
          "Vehicle checks: tyres, lights, fuel, and windscreen wash.",
          "Route review: cluster deliveries to reduce backtracking.",
          "Load order: place earliest drops near the door.",
        ],
      },
      {
        heading: "On the road",
        body: "Stay safe and efficient.",
        bullets: [
          "Use safe parking—even if it means a short walk.",
          "Scan items before leaving the van to avoid misdrops.",
          "Communicate delays early with dispatch if running behind.",
        ],
      },
      {
        heading: "Customer handover",
        body: "Keep it friendly and quick.",
        bullets: [
          "Confirm names and signatures/photos where required.",
          "Note any access issues for next time.",
          "Stay calm with difficult drops—log issues, don’t argue.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I handle paid vs unpaid breaks?",
        answer:
          "Track break times accurately and confirm whether they are paid. Use a stopwatch on your phone if needed.",
      },
      {
        question: "What if a parcel is damaged?",
        answer:
          "Record photos immediately, note the condition, and follow your company’s damage process before moving on.",
      },
    ],
    relatedTools: [
      "shift-pay-calculator",
      "hourly-to-annual-salary",
      "overtime-pay-calculator",
    ],
    relatedResources: [
      "night-shift-survival-uk",
      "uk-minimum-wage-guide",
      "pay-slip-decoder",
    ],
  },
  {
    slug: "part-time-vs-full-time-pay",
    title: "Part-Time vs Full-Time Pay: UK Calculator Guide",
    description:
      "Compare part-time and full-time pay, holidays, and benefits so you can choose the right pattern.",
    category: "Workplace",
    tags: ["part-time", "full-time", "pay"],
    sections: [
      {
        heading: "What changes with hours",
        body: "Pay, holiday, and pension can shift.",
        bullets: [
          "Hourly rates may match, but total pay and holiday accrual differ.",
          "Some benefits (bonuses, health plans) depend on hours worked.",
          "Check minimum hours for statutory benefits.",
        ],
      },
      {
        heading: "How to compare offers",
        body: "Use numbers to decide.",
        bullets: [
          "Calculate weekly and monthly pay for both options.",
          "Factor travel costs and unpaid breaks.",
          "List benefits you’d lose or gain (pension match, overtime access).",
        ],
      },
      {
        heading: "When part-time wins",
        body: "Flexibility can outweigh lower pay if planned.",
        bullets: [
          "Better work-life balance or study time.",
          "Lower travel costs if you cluster shifts.",
          "Ability to take a second role within working time limits.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do part-time staff get less holiday?",
        answer:
          "Holiday is pro-rated. Use hours worked to calculate a fair allowance.",
      },
      {
        question: "Can I request more hours later?",
        answer:
          "Yes—ask about overtime availability or formal hour increase reviews.",
      },
    ],
    relatedTools: [
      "hourly-to-annual-salary",
      "holiday-pay-calculator",
      "shift-pay-calculator",
    ],
    relatedResources: [
      "uk-minimum-wage-guide",
      "pay-slip-decoder",
      "negotiate-pay-rise",
    ],
  },
  {
    slug: "negotiate-pay-rise",
    title: "How to Negotiate a Pay Rise (UK)",
    description:
      "Simple steps to build your case, pick timing, and negotiate pay confidently in the UK.",
    category: "Workplace",
    tags: ["pay rise", "negotiation", "salary"],
    sections: [
      {
        heading: "Prepare your evidence",
        body: "Numbers talk louder than adjectives.",
        bullets: [
          "List 3–5 results: time saved, errors reduced, shifts covered.",
          "Benchmark pay using job ads in your area.",
          "Know your current total package (salary, overtime, benefits).",
        ],
      },
      {
        heading: "Pick the right moment",
        body: "Timing matters.",
        bullets: [
          "Aim after a good review or completed project.",
          "Avoid peak stress periods for your manager.",
          "Ask for a short meeting with clear purpose.",
        ],
      },
      {
        heading: "How to ask",
        body: "Be direct, specific, and calm.",
        bullets: [
          "State the raise you’re requesting and the evidence.",
          "Offer options: pay increase, bonus, or extra training budget.",
          "Ask for a follow-up date if a decision can’t be made now.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if they say no?",
        answer:
          "Ask what proof they need to say yes and agree a review date. Consider market roles if progress stalls.",
      },
      {
        question: "Should I mention other offers?",
        answer:
          "Only if genuine and politely. Focus on your value and staying long term.",
      },
    ],
    relatedTools: [
      "hourly-to-annual-salary",
      "overtime-pay-calculator",
      "notice-period-calculator",
    ],
    relatedResources: [
      "part-time-vs-full-time-pay",
      "uk-minimum-wage-guide",
      "pay-slip-decoder",
    ],
  },
  {
    slug: "sick-pay-rights-uk",
    title: "Sick Pay Rights in the UK",
    description:
      "Understand statutory sick pay, company sick pay, and how to report absence correctly.",
    category: "Workplace",
    tags: ["sick pay", "rights", "ssp"],
    sections: [
      {
        heading: "Statutory Sick Pay (SSP) basics",
        body: "Who qualifies and how much you receive.",
        bullets: [
          "SSP eligibility depends on average earnings and time off.",
          "SSP starts after the first 3 waiting days in most cases.",
          "Company sick pay may top up SSP—check your handbook.",
        ],
      },
      {
        heading: "Reporting absence",
        body: "Report early and document symptoms.",
        bullets: [
          "Follow your employer’s call-in process every day you’re off unless told otherwise.",
          "Provide fit notes if off more than 7 days.",
          "Record dates and times you reported absence.",
        ],
      },
      {
        heading: "Protecting your pay",
        body: "Avoid mistakes that reduce payments.",
        bullets: [
          "Check your payslip to confirm SSP was included when eligible.",
          "Keep copies of fit notes and emails.",
          "Ask HR to correct missing days promptly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I take holiday instead of sick pay?",
        answer:
          "Yes, if agreed with your employer. This can protect income but uses holiday allowance.",
      },
      {
        question: "Do zero-hours workers get sick pay?",
        answer:
          "Eligibility depends on average earnings. Check recent payslips to see if you meet the threshold.",
      },
    ],
    relatedTools: [
      "holiday-pay-calculator",
      "notice-period-calculator",
      "shift-pay-calculator",
    ],
    relatedResources: [
      "uk-minimum-wage-guide",
      "pay-slip-decoder",
      "probation-period-survival",
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function getRelatedResources(slugs: string[]) {
  return resources.filter((resource) => slugs.includes(resource.slug));
}
