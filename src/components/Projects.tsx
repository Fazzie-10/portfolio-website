import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "SupplyChain360 Unified Data Platform",
    category: "Data Engineering",
    context: "Supply chain operations were generating massive amounts of fragmented data across different legacy systems, causing significant delays in reporting and creating operational bottlenecks.",
    problem: "How can we centralize and automate the data flow so stakeholders have a single, reliable source of truth for inventory and logistics without relying on slow, manual data extracts?",
    approach: [
      "Designed and implemented a scalable ELT pipeline to extract raw operational data from multiple disparate databases.",
      "Built automated transformation workflows to clean, standardize, and model the data specifically for business intelligence consumption.",
      "Configured cloud infrastructure to ensure high availability, secure storage, and seamless daily data refreshes."
    ],
    outcome: [
      "Slashed data processing times, delivering fresh, reliable data to executive dashboards automatically every morning.",
      "Eliminated manual reporting errors and engineering bottlenecks, allowing leadership to make faster, more confident logistics decisions."
    ],
    techStack: [
      { name: "Python", description: "Scripted automated data extraction and preliminary cleaning workflows." },
      { name: "SQL", description: "Executed complex data transformations and modeling." },
      { name: "AWS", description: "Hosted the centralized data architecture and pipeline infrastructure." }
    ],
    tags: ["AWS", "Airflow", "Python", "PowerBI"],
    image: "/capstone project.png",
    year: "2026",
    github: "https://github.com/Pajo00/DEC-Launchpad-Capstone-Project",
  },
  {
    title: "Fintech Customer Support",
    category: "Analytics",
    context: "Fintech customer support operations were struggling to keep track of high volumes of tickets, leading to delayed responses and customer dissatisfaction.",
    problem: "How can we monitor ticket volume and agent performance in real-time to reduce response lag and improve operational efficiency?",
    approach: [
      "Connected to support platform APIs to stream ticket data into a unified reporting layer.",
      "Developed real-time DAX measures to calculate response lag and resolution rates dynamically.",
      "Designed interactive drill-down reports for managers to identify bottlenecks in specific support tiers."
    ],
    outcome: [
      "Enabled operational teams to reduce response times by identifying peak load periods.",
      "Improved agent productivity tracking, leading to higher resolution rates across the department."
    ],
    techStack: [
      { name: "Power BI", description: "Built the operational dashboard and visualization layers." },
      { name: "Microsoft Fabric", description: "Managed the cloud-native data integration and storage." }
    ],
    tags: ["Power BI", "Fabric"],
    image: "/support.png",
    year: "2025",
    link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNzgzMmUwMzEtMjhiZi00MGE0LTk0NTQtOGY2MzM0YjYzYmZhIiwidCI6ImE1NTQ1NDcyLWY5ODEtNDc2Mi1iNTVhLTQ3OTQzZDIzY2I0NCIsImMiOjh9",
  },
  {
    title: "Presidential Travel Tracker",
    category: "Analytics",
    context: "Lack of transparency in high-level government spending and travel patterns made it difficult for the public to hold leadership accountable.",
    problem: "How can we translate complex travel logs into an accessible, interactive format that provides clear public insight and transparency?",
    approach: [
      "Scraped and aggregated travel data from official government records and journalistic investigations.",
      "Cleaned and structured fragmented location and cost data using Excel and Power Query.",
      "Built an interactive geospatial visualization that tracks travel frequency and patterns over time."
    ],
    outcome: [
      "Provided the public and media with a verified tool for tracking presidential movement and transparency.",
      "Reached millions through journalistic partnerships, sparking public discourse on accountability."
    ],
    techStack: [
      { name: "Power BI", description: "Created the interactive travel tracking maps and dashboards." },
      { name: "Excel", description: "Handled initial data cleaning and preparation." }
    ],
    tags: ["Power BI", "Excel"],
    image: "/tinubu tracker.png",
    year: "2025",
    link: "https://www.icirnigeria.org/president-tinubu-travel-tracker/",
  },
  {
    title: "Flexcube Ads Cost Dashboard",
    category: "Analytics",
    context: "Advertising spend across various digital channels was being tracked manually, leading to inconsistent ROI analysis and budget overruns.",
    problem: "How can we consolidate advertising cost data into a single view that allows for real-time ROI optimization and budget management?",
    approach: [
      "Automated the ingestion of marketing spend data from multiple ad platforms and Google Analytics.",
      "Built a consolidated view of 'Cost per Acquisition' (CPA) across all active campaigns.",
      "Implemented threshold alerts to notify the marketing team of budget overruns."
    ],
    outcome: [
      "Reduced marketing waste by providing immediate visibility into underperforming ad sets.",
      "Streamlined the monthly reporting process from days to minutes."
    ],
    techStack: [
      { name: "Looker Studio", description: "Visualized the advertising performance and cost metrics." },
      { name: "Google Analytics", description: "Tracked user conversion and campaign attribution." }
    ],
    tags: ["Looker Studio", "Google Analytics"],
    image: "/flexcube.png",
    year: "2024",
  },
];

const visualStories = [
  { title: "Tinubu 2 Years Review", image: "/tinubu_2yrs.png" },
  { title: "Israel vs Iran Conflict", image: "/israel vs iran.png" },
  { title: "National Jailbreak Analysis", image: "/jailbreak.png" },
  { title: "School Kidnappings Report", image: "/school kidnappings.png" },
  { title: "Taxation and Revenue", image: "/tax.png" },
  { title: "School Killings Investigation", image: "/school_killings.jpg" },
];

const categories = ["All", "Engineering", "Analytics"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <div className="w-full">
      <section id="projects" className="py-32 px-6 md:px-12 bg-background w-full overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-8 text-center md:text-left">
            <div className="overflow-hidden reveal-text">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-foreground text-balance"
              >
                Selected <br /> <span className="text-muted">Works</span>
              </motion.h2>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest border transition-all rounded-sm ${
                    activeCategory === cat 
                    ? "bg-primary text-white border-primary hover:bg-muted" 
                    : "border-foreground/20 text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-48">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group flex flex-col gap-16"
                >
                  {/* Header & Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-12 font-black flex justify-between items-baseline border-b border-foreground/10 pb-4">
                      <div className="flex gap-4 items-baseline">
                        <span className="text-primary text-xl lg:text-2xl">{i + 1}.</span>
                        <h3 className="text-2xl sm:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-foreground">
                          <span className="text-muted">{project.category}:</span> {project.title}
                        </h3>
                      </div>
                      <span className="text-xs uppercase tracking-widest text-muted">{project.year}</span>
                    </div>

                    <div className="lg:col-span-8 relative overflow-hidden aspect-[16/9] bg-foreground/10 border border-foreground/5">
                      <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                        className="w-full h-full"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-95 group-hover:opacity-100"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                      <div className="absolute top-6 right-6 flex gap-2">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-colors cursor-pointer border border-foreground/20"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-colors cursor-pointer border border-foreground/20"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-8 h-full">
                       <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Context</span>
                        <p className="text-sm font-bold leading-relaxed text-foreground">{project.context}</p>
                       </div>
                       <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Core Business Problem</span>
                        <p className="text-sm font-bold leading-relaxed text-foreground">{project.problem}</p>
                       </div>
                    </div>
                  </div>

                  {/* Detailed Approach, Outcome & Tech */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="space-y-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block">Approach</span>
                      <ul className="space-y-4">
                        {project.approach.map((step, idx) => (
                          <li key={idx} className="text-sm font-bold leading-snug text-foreground flex gap-3">
                            <span className="text-primary mt-1 shrink-0">•</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block">Outcome</span>
                      <ul className="space-y-4">
                        {project.outcome.map((res, idx) => (
                          <li key={idx} className="text-sm font-bold leading-snug text-foreground flex gap-3">
                            <span className="text-primary mt-1 shrink-0">•</span>
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block">Tech Stack</span>
                      <div className="space-y-4">
                        {project.techStack.map((tech, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-xs font-black uppercase tracking-widest text-foreground">{tech.name}</span>
                            <span className="text-[11px] font-bold text-muted leading-tight">{tech.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Visual Stories Section */}
      <section id="visual-stories" className="py-32 px-6 md:px-12 bg-surface w-full overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-24 text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Infographics</span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-foreground text-balance">Infographics</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visualStories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden bg-foreground/5"
              >
                <motion.img
                  src={story.image}
                  alt={story.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-xl font-black uppercase tracking-tighter text-white">{story.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-20 px-6 md:px-12 bg-background w-full">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center text-center">
          <a 
            href="https://drive.google.com/drive/folders/1N6aqe6g32H0EBHsRxwWDrFZJTBbiHYuw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-10 py-5 bg-primary text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-muted transition-all duration-500 rounded-sm"
          >
            Explore other visual stories on Google Drive
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
