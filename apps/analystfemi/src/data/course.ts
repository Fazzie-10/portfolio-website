// AnalystFemi recorded course: Zero to Data Analyst (Excel + Power BI).
// Edit prices, checkout links and the launch offer here. The page reads everything from this file.

export const COURSE = {
  name: "Zero to Data Analyst",
  tagline: "Excel & Power BI for Data Analysts",
  hours: "11+",
  lessons: "80+",
  modules: 14,
  capstones: 2,
};

// Real WhatsApp screenshot testimonials + verified quotes.
export const TESTIMONIALS = [
  {
    name: "Zacchaus",
    role: "Took the Power BI class",
    image: "/media/testimonial-2.jpg",
    highlight: "Designed dashboard backgrounds, DAX measures, and use basic formulas at work everyday.",
    quote: [
      "The Power BI class actually surpassed my expectations.",
      "Beyond pasting data on dashboards, we were able to design the backgrounds ourselves, a part I never saw coming.",
      "In addition, the DAX measures made many KPIs and charts possible on the same page.",
      "Finally, the calendar table part and SWITCH formulas, all of these are the high of the class for me.",
      "I also use some of the basic formulas at work every day and they have been very helpful.",
    ],
  },
  {
    name: "Bose",
    role: "Took the Excel class",
    image: "/media/testimonial-1.jpg",
    highlight: "From complete beginner afraid of formulas to proudly calling herself a data analyst.",
    quote: [
      "So, to be totally honest and frank, learning data analysis isn't easy, especially if you are totally new to it like myself.",
      "But I don't regret learning it at all, I mean, I can boldly call myself a data analyst now. I was sceptical starting cause I thought it would be crazy, but I'm glad I took the decision to start. It's now added to my CV.",
      "I had a good experience with learning it under you actually, you were frank where you needed to, you were jovial when the air was getting too tight, and you didn't take the classes for a joke at any point in time. I liked that aspect a lot.",
      "So now, Excel no longer sounds like programming to me, I now find it fun building dashboards and all.",
      "Yeah, overall, I had a great experience, and I will still cause I'm still learning.",
    ],
  },
];

// Market salaries grounded in Jobberman and Nigerian hiring data (Naira only, real figures).
export const MARKET_SALARIES = [
  {
    role: "Junior Data Analyst",
    range: "₦150,000 – ₦250,000 / month",
    type: "Entry-level Nigerian companies & agencies",
    duty: "Cleaning daily sales records, fixing broken formulas, and preparing weekly Excel management summaries.",
  },
  {
    role: "Commercial / Reporting Analyst",
    range: "₦250,000 – ₦450,000 / month",
    type: "Mid-level retail, FMCG & logistics",
    duty: "Automating reporting pipelines in Power Query, building Star Schema models, and tracking monthly revenue leaks.",
  },
  {
    role: "Power BI & BI Specialist",
    range: "₦450,000 – ₦750,000+ / month",
    type: "Fintech, corporate banks & consulting",
    duty: "Developing complex DAX measures, designing multi-page executive dashboards, and presenting data to leadership.",
  },
  {
    role: "Freelance Dashboard Consultant",
    range: "₦100,000 – ₦250,000 per build",
    type: "Project-based for SMEs & startups",
    duty: "Taking messy business exports and turning them into automated, branded Power BI / Excel reporting systems.",
  },
];

// The step-by-step loop of what a Data Analyst actually does
export const ANALYSIS_LOOP = [
  { step: "01", label: "Ingest Messy Data", desc: "Take messy CSVs, mismatched columns, and dirty exports" },
  { step: "02", label: "Power Query Cleanse", desc: "Automate column splitting, null removal, and table joins" },
  { step: "03", label: "Model Relationships", desc: "Build clean Star Schema models with dedicated calendar tables" },
  { step: "04", label: "DAX Calculations", desc: "Write business logic: YoY growth, profit margins, and SWITCH KPIs" },
  { step: "05", label: "Executive Dashboard", desc: "Design clean, branded UI reports that tell an intuitive story" },
  { step: "06", label: "Strategic Decisions", desc: "Help leadership spot lost revenue, cut churn, and boost profit" },
];

// Roles / Bridge: "You May Already Be Closer Than You Think"
export const ROLES_BRIDGE = [
  {
    who: "If you work in Accounting or Finance,",
    has: "you already understand business numbers.",
    desc: "You know debits, credits, and margins. All you need is Power Query and Power BI to automate what takes you hours into seconds.",
  },
  {
    who: "If you work in Admin or as a Virtual Assistant,",
    has: "you already understand operational workflows.",
    desc: "You deal with client spreadsheets daily. Stepping into data modeling and dashboard design immediately multiplies your earning power.",
  },
  {
    who: "If you work in Sales, Marketing, or Customer Care,",
    has: "you already understand customer behavior.",
    desc: "You know what makes customers buy and why they leave. Putting numbers behind that intuition makes you invaluable to any employer.",
  },
  {
    who: "And if you are starting from absolute scratch?",
    has: "we start with you from the very beginning.",
    desc: "No assumptions, no tech jargon. You learn step by step: opening Excel, cleaning the first row, writing your first formula, all the way to advanced Power BI.",
  },
];

// Comparison: Most Online Courses vs Zero to Data Analyst
export const COMPARISON = {
  others: [
    {
      title: "Clean 'toy' datasets",
      desc: "They give you pristine, 50-row spreadsheets where nothing is missing. The moment you face a real business file with 10,000 rows of errors, you freeze.",
    },
    {
      title: "Teaching button clicks, not thinking",
      desc: "They show you which button to press. But they never teach you *why* to choose a metric, how to spot revenue leaks, or how to speak to a manager.",
    },
    {
      title: "Leaving you stranded on a Drive link",
      desc: "You pay, get dumped in a dead group, and nobody ever reviews your dashboards or tells you why your DAX formula returned blank.",
    },
    {
      title: "Useless paper certificates",
      desc: "Employers don't hire certificates. They hire proof of work. Courses that don't help you build a portfolio leave you empty-handed.",
    },
  ],
  us: [
    {
      title: "Real messy Nigerian business data",
      desc: "Cut directly from live classes. You watch formulas break, missing records get fixed, and messy imports transform into clean intelligence.",
    },
    {
      title: "Business-first thinking & UI design",
      desc: "Learn why executives care about specific KPIs, how to design custom dashboard backgrounds, and how to present actionable insights.",
    },
    {
      title: "Full mentorship & the AnalystFemi Data Club",
      desc: "You are not left alone. Joshua is right there in the WhatsApp community to review your work, critique your dashboards, and answer questions.",
    },
    {
      title: "Two capstone portfolio projects ready for CV",
      desc: "You finish with FinTrust Bank and SwiftTel Churn dashboards built by you — tangible proof you can show to any employer or client.",
    },
  ],
};

// Price comparison against alternative learning paths
export const PRICE_COMPARISONS = [
  {
    name: "International Tech Bootcamps",
    note: "Coursera / DataCamp / General Assembly",
    price: "₦1,500,000+",
    sub: "($1,000 – $2,500 recurring)",
  },
  {
    name: "Physical Nigerian Computer Centers",
    note: "Rushed physical lectures in crowded halls",
    price: "₦150,000 – ₦300,000",
    sub: "Usually covers basic formulas only",
  },
  {
    name: "Zero to Data Analyst (Complete System)",
    note: "Lifetime access + 14 modules + Data Club mentorship",
    price: "₦12,500",
    sub: "One payment, launch offer (standard ₦25,000)",
    highlight: true,
  },
];

// Price Ladder
export const PRICE_LADDER = [
  {
    stage: "Founding Launch",
    price: "₦12,500",
    note: "Current 50% discount · Limited launch cohort",
    active: true,
  },
  {
    stage: "Standard Price",
    price: "₦25,000",
    note: "After the founding cohort reaches cap",
    active: false,
  },
  {
    stage: "Established Price",
    price: "₦50,000",
    note: "As more verified student results & projects are added",
    active: false,
  },
];

// free = the Free Starter Pack Drive folder ("anyone with the link can view").
export const CHECKOUT = {
  free: "https://drive.google.com/drive/folders/1MQxJ6rMJsEKmel-rS4aHSihZVz-BmKO7",
  excel: "",
  full: "",
};

// Launch offer: 50% off. Set `active` to false (and `endsOn`) when the offer closes.
export const LAUNCH = {
  active: true,
  percent: 50,
  cap: "the founding launch cohort",
  endsOn: "26 November 2026",
};

export const TIKTOK = { handle: "@analystfemi", url: "https://www.tiktok.com/@analystfemi", followers: "457" };
export const YOUTUBE = "https://www.youtube.com/@AnalystFemi";

export const TOOLS = [
  { name: "Excel", logo: "excel", learn: "Data hygiene, formulas, lookups, Power Query, PivotTables, and dynamic reporting dashboards." },
  { name: "Power BI", logo: "powerbi", learn: "Star Schema data modelling, DAX measures, time intelligence, and executive UI dashboards." },
];

export const TIERS = [
  {
    id: "free" as const,
    name: "Free Starter Pack",
    price: 0,
    blurb: "Experience my teaching style and start with real datasets before spending a kobo.",
    cta: "Download Free Starter Pack",
    features: [
      "4 hand-picked video lessons (Pivot Tables, XLOOKUP, Power Query, Mini Dashboard)",
      "1 real practice dataset to rebuild alongside the video",
      "“AI in Data Analysis” complete PDF guide",
      "Official Data Analyst starter checklist",
    ],
  },
  {
    id: "full" as const,
    name: "Zero to Data Analyst (Full Program)",
    price: 25000,
    blurb: "The complete Excel + Power BI masterclass, every practice workbook, two capstone portfolio projects, and full mentorship.",
    cta: "Lock Your Seat for ₦12,500",
    highlight: true,
    features: [
      "Lifetime access to all 14 modules (Excel + Power BI, 11+ hours of recorded classes)",
      "Every raw messy dataset, practice workbook & completed .pbix file",
      "Custom dashboard background templates, icons, and UI design assets",
      "FinTrust Bank & SwiftTel Telecom Churn capstone project briefs",
      "AnalystFemi Data Club (WhatsApp community with direct mentorship from Joshua)",
      "Personal portfolio teardowns & dashboard critiques",
      "AI in Data Analysis guide + Bonus: Build your portfolio website with AI",
      "Official Certificate of Completion",
    ],
  },
];

export const PARTS = [
  {
    phase: "Phase 1",
    tool: "Foundations",
    title: "Thinking in Data & Business Metrics",
    desc: "Before you touch a single formula, understand how businesses generate data and what questions executives actually want answered.",
    modules: [{ n: "01", t: "Data analysis foundations & business thinking", m: 65 }],
  },
  {
    phase: "Phase 2",
    tool: "Excel",
    title: "Taming Messy Data with Formulas & Hygiene",
    desc: "Learn to clean messy, corrupted spreadsheets: removing whitespace, standardising dates, splitting names, and fixing common import errors.",
    modules: [{ n: "02", t: "Cleaning data with formulas & text functions", m: 33 }],
  },
  {
    phase: "Phase 3",
    tool: "Excel",
    title: "Logic & Advanced Business Lookups",
    desc: "Master conditional logic (IF, AND, OR) and transition from outdated VLOOKUP to XLOOKUP and INDEX-MATCH that never break when columns move.",
    modules: [
      { n: "03", t: "IF logic, nested conditions & conditional totals", m: 19 },
      { n: "04", t: "Lookups: VLOOKUP, XLOOKUP & INDEX-MATCH", m: 25 },
    ],
  },
  {
    phase: "Phase 4",
    tool: "Excel",
    title: "Automation with Power Query & Pivot Reporting",
    desc: "Automate repetitive data cleaning in Power Query with one click, then build interactive PivotTable summaries and dynamic Excel KPI dashboards.",
    modules: [
      { n: "05", t: "Power Query: automated ETL data transformation", m: 26 },
      { n: "06", t: "PivotTables, calculated fields & KPI cards", m: 33 },
      { n: "07", t: "Interactive Excel dashboard design & slicers", m: 77 },
      { n: "08", t: "Capstone 1: FinTrust Bank performance dashboard", m: 17 },
    ],
  },
  {
    phase: "Phase 5",
    tool: "Power BI",
    title: "Data Architecture & Star Schema Modeling",
    desc: "Step into modern Business Intelligence. Connect multiple data tables, understand Fact vs. Dimension tables, and build a dedicated Calendar table.",
    modules: [
      { n: "09", t: "Power BI foundations, import vs DirectQuery & Star Schema", m: 52 },
      { n: "10", t: "DAX fundamentals & automated calendar tables", m: 27 },
    ],
  },
  {
    phase: "Phase 6",
    tool: "Power BI",
    title: "Advanced DAX & Time Intelligence",
    desc: "Write the formulas that separate junior button-pushers from real analysts: CALCULATE, FILTER, Year-over-Year (YoY) growth, and Month-over-Month metrics.",
    modules: [{ n: "11", t: "CALCULATE, time intelligence & dynamic KPIs", m: 42 }],
  },
  {
    phase: "Phase 7",
    tool: "Power BI",
    title: "Executive UI/UX Dashboard Design (The BrightPark Build)",
    desc: "Design dashboards executives love opening. Learn custom backgrounds in PowerPoint, interactive bookmarks, custom tooltips, and page navigation.",
    modules: [
      { n: "12", t: "Dashboard design: the 3-page BrightPark build", m: 145 },
      { n: "13", t: "Bookmarks, drill-through, tooltips & report publishing", m: 79 },
    ],
  },
  {
    phase: "Phase 8",
    tool: "Portfolio",
    title: "Telecom Churn Capstone & Portfolio Presentation",
    desc: "Build the SwiftTel Telecom Customer Churn dashboard from scratch, uncover why subscribers leave, and publish your project portfolio online.",
    modules: [
      { n: "14", t: "Capstone 2: SwiftTel telecom churn intelligence", m: 31 },
      { n: "Bonus", t: "AI portfolio builder: host your projects online", m: 45 },
    ],
  },
];

export const INCLUDED_STACK = [
  "Complete 14-Module Recorded Masterclass (11+ hours)",
  "Every raw messy dataset & practice workbook (.xlsx, .pbix)",
  "Executive dashboard background templates & icon kits",
  "FinTrust Bank & SwiftTel Telecom churn capstone briefs",
  "AI in Data Analysis comprehensive guide",
  "Lifetime access to all future course updates",
  "AnalystFemi Data Club WhatsApp community",
  "Full direct mentorship & guidance from Joshua Akintayo",
  "Personal dashboard design critiques & DAX troubleshooting",
  "Verified Certificate of Completion",
];

export const FOR_YOU = [
  "You want to build a high-income, recession-proof skill with strong local and remote demand.",
  "You've watched YouTube tutorials or taken free courses, but still freeze when given a real, messy spreadsheet.",
  "You work in accounting, admin, sales, or customer service and want to automate your reporting and earn more.",
  "You want tangible, executive-grade portfolio projects you can proudly link on your CV and LinkedIn.",
  "You are a beginner willing to sit down, open the practice files, and do the actual work.",
];

export const NOT_FOR_YOU = [
  "You are looking for a 'get-rich-quick' scheme without opening Excel or practicing with real data.",
  "You only want a paper certificate without caring about building real-world competence.",
  "You expect magical job offers without building your portfolio or doing the capstone assignments.",
  "You are looking for Python, R, or advanced SQL right now (this program focuses 100% on Excel & Power BI, the two core tools 85%+ of Nigerian entry & mid roles demand).",
];

export const FAQS = [
  {
    q: "Do I need previous coding, math, or tech experience?",
    a: "No. You do not need a computer science degree or advanced math. If you can open a computer and follow instructions, Phase 1 starts from absolute ground zero and takes you step by step to building advanced dashboards.",
  },
  {
    q: "What laptop and software do I need?",
    a: "You need a Windows laptop (or a Mac running Parallels/Windows VM), because Power BI Desktop is currently Windows-only and free to download. For Excel, Microsoft 365 or Excel 2021 is recommended so you have modern functions like XLOOKUP.",
  },
  {
    q: "Can I learn this while working a full-time 9-to-5 or studying in school?",
    a: "Yes. All 14 modules are pre-recorded from real classes, so you can watch them at your own pace whenever you are free — late nights, early mornings, or weekends. The files are yours for life.",
  },
  {
    q: "How does the mentorship and Data Club work?",
    a: "As soon as you enroll in the Full Program, you are added directly to the private AnalystFemi Data Club on WhatsApp. Joshua is right there in the group to guide you, answer your questions, critique your dashboards, and help you whenever a formula or DAX measure breaks.",
  },
  {
    q: "Will this course guarantee me a job?",
    a: "No honest mentor promises a guaranteed job, because hiring decisions depend on your effort, interview prep, and consistency. What Zero to Data Analyst DOES guarantee is that you will master the actual skills employers test for and leave with two production-grade portfolio projects you can defend in any practical interview.",
  },
  {
    q: "How do I get access after paying?",
    a: "Immediately after your payment is confirmed, you are granted access to the official Google Drive course folder containing every video, practice workbook, and dataset. You will also receive an invitation link to the AnalystFemi Data Club on WhatsApp.",
  },
  {
    q: "What is the 30-day money-back guarantee?",
    a: "If within your first 30 days of enrolling you go through the lessons, open the files, and decide the program is not practical or not for you, simply send a message on WhatsApp or email. We will issue a 100% full refund with no long story.",
  },
];
