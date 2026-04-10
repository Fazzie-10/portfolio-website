import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "SupplyChain360 Unified Data Platform",
    category: "Engineering",
    description: "End-to-end data platform for supply chain visibility, integrating disparate data sources into a unified cloud environment.",
    tags: ["AWS", "Airflow", "Python", "PowerBI"],
    image: "/capstone project.png",
    year: "2026",
    github: "https://github.com/Pajo00/DEC-Launchpad-Capstone-Project",
  },
  {
    title: "Fintech Customer Support",
    category: "Analytics",
    description: "Operational monitoring of ticket volume, response lag, and agent resolution rates.",
    tags: ["Power BI"],
    image: "/support.png",
    year: "2025",
    link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNzgzMmUwMzEtMjhiZi00MGE0LTk0NTQtOGY2MzM0YjYzYmZhIiwidCI6ImE1NTQ1NDcyLWY5ODEtNDc2Mi1iNTVhLTQ3OTQzZDIzY2I0NCIsImMiOjh9",
  },
  {
    title: "Presidential Travel Tracker",
    category: "Analytics",
    description: "Interactive visualization and analysis of presidential travel patterns, providing transparency and public insight.",
    tags: ["Power BI", "Excel"],
    image: "/tinubu tracker.png",
    year: "2025",
    link: "https://www.icirnigeria.org/president-tinubu-travel-tracker/",
  },
  {
    title: "Flexcube Ads Cost Dashboard",
    category: "Analytics",
    description: "Comprehensive dashboard for tracking and analyzing Flexcube advertising costs and performance metrics.",
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
    : projects.filter(p => p.category === activeCategory);

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

          <div className="space-y-32">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
                >
                  <div className="md:col-span-7 relative overflow-hidden aspect-[16/10] bg-foreground/10">
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

                  <div className="md:col-span-5 flex flex-col pt-4 text-center md:text-left">
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-black text-foreground uppercase tracking-widest">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-none text-foreground text-balance">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-foreground mb-10 leading-snug font-bold text-balance">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 border border-foreground/20 text-foreground">
                          {tag}
                        </span>
                      ))}
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
