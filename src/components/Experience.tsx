import { motion } from "motion/react";

const experiences = [
  {
    company: "DEC",
    role: "Data Engineer",
    period: "Sept 2025 – Present",
    description: "Leading data engineering initiatives, designing scalable pipelines and cloud infrastructure to support organizational data needs.",
  },
  {
    company: "ICIR",
    role: "Data Analyst",
    period: "Nov 2024 – Present",
    description: "Delivering data-driven insights for investigative journalism, building dashboards and infographics that communicate complex findings to the public.",
  },
  {
    company: "InsightsHub",
    role: "Research Data Analyst",
    period: "Feb 2024 – Apr 2025",
    description: "Managing research data, performing statistical analysis, and developing structured reports for academic and organizational publication.",
  },
  {
    company: "JGB Stores",
    role: "Data Analyst",
    period: "Oct 2023 – Dec 2023",
    description: "Optimized e-commerce operations through business intelligence and automated reporting systems.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-surface w-full overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-24 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Journey</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-foreground">Experience</h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-foreground/10 last:border-b"
            >
              <div className="md:col-span-3 text-center md:text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{exp.period}</span>
              </div>
              <div className="md:col-span-4 text-center md:text-left">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors text-foreground">{exp.company}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{exp.role}</p>
              </div>
              <div className="md:col-span-5 text-center md:text-left">
                <p className="text-lg font-bold leading-snug text-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
