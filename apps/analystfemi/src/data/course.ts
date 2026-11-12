// AnalystFemi recorded course: Excel + Power BI.
// Edit prices, checkout links and the launch offer here. The page reads everything from this file.

export const COURSE = {
  name: "Excel & Power BI for Data Analysts",
  hours: "11+",
  lessons: "80+",
  modules: 14,
  capstones: 2,
};

// Student quotes. Add real ones only (with the student's OK). Shown in the "What students say" section.
export const TESTIMONIALS = [
  {
    quote: [
      "The Power BI class actually surpassed my expectations.",
      "Beyond pasting data on dashboards, we were able to design the backgrounds ourselves, a part I never saw coming.",
      "In addition, the DAX measures made many KPIs and charts possible on the same page.",
      "Finally, the calendar table part and SWITCH formulas, all of these are the high of the class for me.",
      "I also use some of the basic formulas at work every day and they have been very helpful.",
    ],
    name: "Zacchaus",
    role: "Took the Power BI class",
  },
  {
    quote: [
      "So, to be totally honest and frank, learning data analysis isn't easy, especially if you are totally new to it like myself.",
      "But I don't regret learning it at all, I mean, I can boldly call myself a data analyst now. I was sceptical starting cause I thought it would be crazy, but I'm glad I took the decision to start. It's now added to my CV.",
      "I had a good experience with learning it under you actually, you were frank where you needed to, you were jovial when the air was getting too tight, and you didn't take the classes for a joke at any point in time. I liked that aspect a lot.",
      "So now, Excel no longer sounds like programming to me, I now find it fun building dashboards and all.",
      "Yeah, overall, I had a great experience, and I will still cause I'm still learning.",
    ],
    name: "Bose",
    role: "Took the Excel class",
  },
];

// free = the Free Starter Pack Drive folder ("anyone with the link can view").
// excel / full: paid tiers use the Bachs checkout (/api/checkout) via the pay buttons. These only act as a no-JavaScript
// fallback; while empty they open a pre-filled WhatsApp message.
export const CHECKOUT = {
  free: "https://drive.google.com/drive/folders/1MQxJ6rMJsEKmel-rS4aHSihZVz-BmKO7",
  excel: "",
  full: "",
};

// Launch offer: 50% off. Set `active` to false (and `endsOn`) when the offer closes.
// Only keep it on while it is true: a fixed cap or a real end date, then return to full price.
export const LAUNCH = {
  active: true,
  percent: 50,
  cap: "the first 14 days",
  endsOn: "26 November 2026", // Keep in step with LAUNCH_ENDS_ON (2026-11-26) in Vercel.
};

export const TIKTOK = { handle: "@analystfemi", url: "https://www.tiktok.com/@analystfemi", followers: "457" };
export const YOUTUBE = "https://www.youtube.com/@AnalystFemi";

export const TOOLS = [
  { name: "Excel", logo: "excel", learn: "Cleaning, formulas, lookups, Power Query, PivotTables and your first dashboards." },
  { name: "Power BI", logo: "powerbi", learn: "Data modelling, DAX, time intelligence and dashboards that tell a story." },
];

export const TIERS = [
  {
    id: "free" as const,
    name: "Free Starter Pack",
    price: 0,
    blurb: "Try my teaching before you pay anything.",
    cta: "Get it free",
    features: [
      "4 hand-picked lessons (pivot table, XLOOKUP, Power Query, dashboard)",
      "1 practice dataset",
      "“AI in Data Analysis” PDF",
      "1 analyst checklist",
    ],
  },
  {
    id: "excel" as const,
    name: "Excel Track",
    price: 10000,
    blurb: "Everything you need to clean, analyse and report in Excel.",
    cta: "Start the Excel Track",
    features: [
      "Excel modules 1 to 8 (about 5 hours)",
      "All Excel datasets and workbooks",
      "FinTrust capstone project brief",
      "Excel checklists",
    ],
  },
  {
    id: "full" as const,
    name: "Full Course",
    price: 25000,
    blurb: "Excel and Power BI, every file, every guide, and a community.",
    cta: "Get the Full Course",
    highlight: true,
    features: [
      "All 14 modules plus the AI portfolio bonus (11+ hours)",
      "Every dataset, workbook and Power BI file (BrightPack, SwiftTel)",
      "Dashboard backgrounds, icons and templates",
      "PDF guides, plus all checklists",
      "“AI in Data Analysis” PDF",
      "AnalystFemi Data Club (WhatsApp community)",
      "Certificate of completion",
    ],
  },
];

export const PARTS = [
  {
    part: "Part 1",
    tool: "Excel",
    title: "From messy sheet to clean dashboard",
    modules: [
      { n: "01", t: "Data analysis foundations", m: 65 },
      { n: "02", t: "Cleaning data with formulas", m: 33 },
      { n: "03", t: "IF logic and conditional totals", m: 19 },
      { n: "04", t: "Lookups: VLOOKUP, XLOOKUP, INDEX-MATCH", m: 25 },
      { n: "05", t: "Power Query in Excel", m: 26 },
      { n: "06", t: "PivotTables and KPIs", m: 33 },
      { n: "07", t: "Excel dashboards", m: 77 },
      { n: "08", t: "Capstone: FinTrust bank project", m: 17 },
    ],
    project: "Capstone · FinTrust bank dashboard",
  },
  {
    part: "Part 2",
    tool: "Power BI",
    title: "From data model to finished report",
    modules: [
      { n: "09", t: "Power BI foundations and star schema", m: 52 },
      { n: "10", t: "DAX measures and the calendar table", m: 27 },
      { n: "11", t: "CALCULATE and time intelligence", m: 42 },
      { n: "12", t: "Dashboard design: the BrightPack build", m: 145 },
      { n: "13", t: "Bookmarks, tooltips and publishing", m: 79 },
      { n: "14", t: "Capstone: SwiftTel churn project", m: 31 },
    ],
    project: "Capstone · SwiftTel telecom dashboard",
  },
];

export const INCLUDED = [
  { icon: "video", title: "Real class lessons", note: "Cut from live classes where students worked on messy data" },
  { icon: "file", title: "Every practice file", note: "Datasets, workbooks and Power BI files to rebuild each lesson" },
  { icon: "check", title: "Checklists and PDF guides", note: "Step-by-step guides, plus an AI in Data Analysis guide" },
  { icon: "users", title: "AnalystFemi Data Club", note: "Full Course. A WhatsApp community to ask questions and share your dashboards" },
] as const;

export const FOR_YOU = [
  "You can use a computer and you want a practical skill for work or jobs.",
  "You have watched tutorials but cannot build a dashboard on your own yet.",
  "You want projects to put in a portfolio.",
];

export const NOT_FOR_YOU = [
  "You want live classes. This course is recorded.",
  "You want SQL or Python. It covers Excel and Power BI only.",
  "You expect a job guarantee. I teach the skill and the projects, not placements.",
];

export const FAQS = [
  { q: "Is this live?", a: "No. It is recorded, so you learn at your own pace. Full Course students can ask questions in the AnalystFemi Data Club on WhatsApp." },
  { q: "Is it for complete beginners?", a: "Yes. It starts with the basics of data analysis and Excel, then builds up to Power BI." },
  { q: "What do I need?", a: "A Windows laptop, because Power BI Desktop only runs on Windows. Excel 2021 or Microsoft 365 (XLOOKUP and some other functions need it). Power BI Desktop is free." },
  { q: "Does it cover SQL?", a: "No. The course focuses on Excel and Power BI, the two tools most junior analyst roles ask for first." },
  { q: "Will I get a job?", a: "I cannot promise that. You will leave with real projects to show and the skills to handle practical tests." },
  { q: "What if it is not for me?", a: "Start with the Free Starter Pack. If you buy and it is not right, message me within 7 days of buying, having watched less than a quarter of it, and I will refund you." },
  { q: "How do I pay and get access?", a: "Pay securely on the checkout page. Straight after payment you are added to the course Google Drive folder with the lessons and practice files. The Full Course also adds you to the AnalystFemi Data Club on WhatsApp. Use the email address you want access on." },
];
