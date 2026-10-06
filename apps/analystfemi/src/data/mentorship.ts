// "Zero to Data Analyst" mentorship details. Price and format come from Joshua's flyer;
// the week-by-week curriculum is a draft for him to confirm.

export const PROGRAM = {
  name: "Zero to Data Analyst",
  weeks: 12,
  pricePerMonth: 50000,
  months: 3,
  sessions: "3 live sessions a week, 2 hours each",
  platform: "Google Meet",
};

export const TIKTOK = { handle: "@analystfemi", url: "https://www.tiktok.com/@analystfemi", followers: "457" };
export const YOUTUBE = "https://www.youtube.com/@AnalystFemi";

export const TOOLS = [
  { name: "Excel", logo: "excel", learn: "Cleaning, formulas, lookups, PivotTables and your first dashboard." },
  { name: "PostgreSQL", logo: "postgresql", learn: "Querying real databases: joins, aggregations and business questions." },
  { name: "Power BI", logo: "powerbi", learn: "Power Query, data modelling, DAX and dashboards that tell a story." },
];

// From Joshua's "Excel for Data Analysis" course (Course_Materials/Product_A_Excel, modules 0-11).
// SQL and Power BI follow once students finish the Excel track.
export const PHASES = [
  {
    phase: "Phase 1",
    tool: "Excel",
    title: "Excel foundations",
    modules: ["Setup & data hygiene", "Understand your data", "Clean data with formulas", "Text & dates", "Logic & aggregation", "Lookups: VLOOKUP, XLOOKUP, INDEX-MATCH"],
    project: "60-question formula drill",
  },
  {
    phase: "Phase 2",
    tool: "Excel",
    title: "Analyse & build dashboards",
    modules: ["Power Query: clean once, refresh forever", "PivotTables", "Dashboard design & storytelling", "Build the dashboard"],
    project: "Capstone · FinTrust bank dashboard",
  },
  {
    phase: "Phase 3",
    tool: "SQL · Power BI",
    title: "Level up & get hired",
    modules: ["SQL with PostgreSQL", "Power BI dashboards", "Portfolio case study", "LinkedIn & job hunting"],
    project: "Portfolio + LinkedIn ready",
  },
];

export const INCLUDED = [
  { icon: "video", title: "3 live sessions a week", note: "2 hours each, on Google Meet" },
  { icon: "file", title: "4 portfolio projects", note: "End-to-end, ready to show employers" },
  { icon: "chart", title: "Business logic & storytelling", note: "Not just tools: what the numbers mean" },
  { icon: "users", title: "Interview & CV prep", note: "Get ready for the job search" },
] as const;

export const SERVICES = [
  { title: "Dashboards", body: "Power BI or Looker Studio dashboards your team will actually open." },
  { title: "Analysis & reporting", body: "Clear answers from your data, with charts and a short written summary." },
  { title: "Data cleaning & automation", body: "Messy spreadsheets turned into clean, automatically updated reports." },
];

export const FAQS = [
  {
    q: "Is this for complete beginners?",
    a: "Yes. We start from zero in Excel and build up to SQL and Power BI. If you can use a computer, you can start.",
  },
  {
    q: "What do I need?",
    a: "A laptop and a stable internet connection for Google Meet. A Windows laptop is best, because Power BI Desktop only runs on Windows.",
  },
  {
    q: "How do I pay?",
    a: "Monthly, ₦50,000 a month for 3 months. Message me on WhatsApp to reserve a seat and I'll share the payment details there.",
  },
  {
    q: "When does the next cohort start?",
    a: "Message me on WhatsApp and I'll tell you the next start date and the class schedule.",
  },
];
