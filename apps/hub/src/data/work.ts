// Portfolio projects on the hub. Projects with a `caseStudy` get their own /work/<slug>/ page.
// Copy for SupplyChain360, Fintech Support, Tinubu Tracker and Flexcube comes from Joshua's original portfolio.

export type Category = "dashboards" | "engineering" | "journalism";

export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "dashboards", label: "Dashboards & BI" },
  { id: "engineering", label: "Data engineering" },
  { id: "journalism", label: "Data journalism" },
];

export interface Project {
  slug: string;
  title: string;
  category: Category;
  kind: string; // e.g. "Client dashboard", "Investigation"
  year: string;
  summary: string;
  image: string;
  tools: string[];
  links?: { label: string; href: string }[];
  caseStudy?: {
    context: string;
    problem: string;
    approach: string[];
    outcome: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "fintech-customer-support",
    title: "Fintech Customer Support Dashboard",
    category: "dashboards",
    kind: "Operations dashboard",
    year: "2025",
    summary: "Real-time view of ticket volume, resolution and escalation rates, so support managers can spot bottlenecks and cut response times.",
    image: "/media/fintech-support.webp",
    tools: ["Power BI", "Microsoft Fabric", "DAX"],
    links: [
      {
        label: "Open live dashboard",
        href: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNzgzMmUwMzEtMjhiZi00MGE0LTk0NTQtOGY2MzM0YjYzYmZhIiwidCI6ImE1NTQ1NDcyLWY5ODEtNDc2Mi1iNTVhLTQ3OTQzZDIzY2I0NCIsImMiOjh9",
      },
    ],
    caseStudy: {
      context: "Fintech customer support operations were struggling to keep track of high volumes of tickets, leading to delayed responses and customer dissatisfaction.",
      problem: "How can we monitor ticket volume and agent performance in real time to reduce response lag and improve operational efficiency?",
      approach: [
        "Connected to support platform APIs to stream ticket data into a unified reporting layer.",
        "Developed real-time DAX measures to calculate response lag and resolution rates dynamically.",
        "Designed interactive drill-down reports for managers to identify bottlenecks in specific support tiers.",
      ],
      outcome: [
        "Enabled operational teams to reduce response times by identifying peak load periods.",
        "Improved agent productivity tracking, leading to higher resolution rates across the department.",
      ],
    },
  },
  {
    slug: "flexcube-ads-cost",
    title: "Flexcube Ads Cost Report",
    category: "dashboards",
    kind: "Marketing dashboard",
    year: "2024",
    summary: "One view of Google, Bing and Pinterest ad spend across Switzerland and Germany, built to stop budget overruns and speed up ROI checks.",
    image: "/media/flexcube-ads.webp",
    tools: ["Looker Studio", "Google Analytics"],
    caseStudy: {
      context: "Advertising spend across various digital channels was being tracked manually, leading to inconsistent ROI analysis and budget overruns.",
      problem: "How can we consolidate advertising cost data into a single view that allows for real-time ROI optimisation and budget management?",
      approach: [
        "Automated the ingestion of marketing spend data from multiple ad platforms and Google Analytics.",
        "Built a consolidated view of cost per acquisition (CPA) across all active campaigns.",
        "Implemented threshold alerts to notify the marketing team of budget overruns.",
      ],
      outcome: [
        "Reduced marketing waste by providing immediate visibility into underperforming ad sets.",
        "Streamlined the monthly reporting process from days to minutes.",
      ],
    },
  },
  {
    slug: "brightpark-sales-report",
    title: "BrightPark Sales Report",
    category: "dashboards",
    kind: "Built with my Power BI class",
    year: "2026",
    summary: "A three-page Power BI report (executive summary, sales performance and marketing) covering $1.36bn in revenue across regions, reps and channels.",
    image: "/media/brightpark-executive.webp",
    tools: ["Power BI", "DAX", "Power Query"],
  },
  {
    slug: "weather-dashboard",
    title: "Live Weather Dashboard",
    category: "dashboards",
    kind: "Live API data",
    year: "2025",
    summary: "Current conditions, a 7-day forecast, air quality and chance of rain for Abuja, Ibadan and Kano, built on live weather API data.",
    image: "/media/weather-dashboard.webp",
    tools: ["Power BI", "Weather API"],
  },
  {
    slug: "sales-performance-calendar",
    title: "Sales Performance Calendar",
    category: "dashboards",
    kind: "Interactive report",
    year: "2025",
    summary: "A calendar-style Power BI report: pick a month and hover any day to see revenue, units and items sold.",
    image: "/media/sales-calendar.webp",
    tools: ["Power BI", "DAX"],
  },
  {
    slug: "supplychain360",
    title: "SupplyChain360 Unified Data Platform",
    category: "engineering",
    kind: "Data engineering capstone",
    year: "2026",
    summary: "An automated ELT platform pulling products, inventory, shipments and sales from S3, Google Sheets and Postgres into Redshift, ready for Power BI every morning.",
    image: "/media/supplychain360.webp",
    tools: ["Python", "Apache Airflow", "AWS S3", "Redshift", "dbt", "Docker", "Power BI"],
    links: [{ label: "View on GitHub", href: "https://github.com/AnalystFemi/DEC-Launchpad-Capstone-Project" }],
    caseStudy: {
      context: "Supply chain operations were generating fragmented data across different legacy systems, causing delays in reporting and creating operational bottlenecks.",
      problem: "How can we centralise and automate the data flow so stakeholders have a single, reliable source of truth for inventory and logistics without relying on slow, manual data extracts?",
      approach: [
        "Designed and implemented a scalable ELT pipeline to extract raw operational data from multiple sources: S3 buckets, Google Sheets and a Postgres database.",
        "Orchestrated ingestion with Apache Airflow in Docker, landing data in an S3 raw layer before loading it into Amazon Redshift.",
        "Built dbt transformation models to clean, standardise and model the data for business intelligence.",
      ],
      outcome: [
        "Fresh, reliable data delivered to executive dashboards automatically every morning.",
        "Eliminated manual reporting errors and engineering bottlenecks, so leadership can make faster, more confident logistics decisions.",
      ],
    },
  },
  {
    slug: "netflix-elt-pipeline",
    title: "Netflix ELT Pipeline",
    category: "engineering",
    kind: "Data engineering project",
    year: "2025",
    summary: "Raw CSV data extracted to Amazon S3, loaded into Snowflake, and transformed with dbt across staging and dev environments, then visualised in Power BI.",
    image: "/media/netflix-pipeline.webp",
    tools: ["Amazon S3", "Snowflake", "dbt", "Power BI"],
    links: [{ label: "View on GitHub", href: "https://github.com/AnalystFemi/netflix" }],
  },
  {
    slug: "tinubu-travel-tracker",
    title: "President Tinubu Travel Tracker",
    category: "journalism",
    kind: "Live tracker · The ICIR",
    year: "2025",
    summary: "Every presidential trip, logged and mapped, so the public can see where the president goes and how often.",
    image: "/media/tinubu-tracker.webp",
    tools: ["Power BI", "Excel", "Power Query"],
    links: [{ label: "Open on The ICIR", href: "https://www.icirnigeria.org/president-tinubu-travel-tracker/" }],
    caseStudy: {
      context: "A lack of transparency in high-level government spending and travel patterns made it difficult for the public to hold leadership accountable.",
      problem: "How can we translate complex travel logs into an accessible, interactive format that gives clear public insight?",
      approach: [
        "Scraped and aggregated travel data from official government records and journalistic investigations.",
        "Cleaned and structured fragmented location and cost data using Excel and Power Query.",
        "Built an interactive geospatial visualisation that tracks travel frequency and patterns over time.",
      ],
      outcome: [
        "Gave the public and media a verified tool for tracking presidential movement.",
        "Reached millions through journalistic partnerships, sparking public discourse on accountability.",
      ],
    },
  },
  {
    slug: "food-prices-investigation",
    title: "Food prices rose over 400% in a decade",
    category: "journalism",
    kind: "Investigation · The ICIR",
    year: "2026",
    summary: "An analysis of staple food prices from January 2016 to October 2025: rice, beans, garri, bread, eggs and yams rose by over 413% across two administrations.",
    image: "/media/food-prices.webp",
    tools: ["NBS data", "Excel", "Data visualisation"],
    links: [{ label: "Read the investigation", href: "https://www.icirnigeria.org/data-shows-food-prices-in-nigeria-rose-by-over-400-in-10-years/" }],
  },
];

export const INFOGRAPHICS = [
  { title: "Tinubu: two years in", image: "/media/tinubu-2-years.webp" },
  { title: "Israel vs Iran", image: "/media/israel-iran.webp" },
  { title: "Nigeria's jailbreaks", image: "/media/jailbreaks.webp" },
  { title: "School kidnappings", image: "/media/school-kidnappings.webp" },
  { title: "Tax and revenue", image: "/media/tax.webp" },
  { title: "School killings", image: "/media/school-killings.webp" },
];

export const SERVICES = [
  { title: "Dashboards & reporting", body: "Power BI and Looker Studio dashboards your team will actually open, with KPIs that answer real questions." },
  { title: "Data analysis", body: "Clear answers from your data, with charts and a short written summary of what to do next." },
  { title: "Data pipelines", body: "Automated pipelines with Python, Airflow, dbt and cloud warehouses, so reports refresh themselves." },
  { title: "Data cleaning & automation", body: "Messy spreadsheets and exports turned into clean, automatically updated datasets." },
];
