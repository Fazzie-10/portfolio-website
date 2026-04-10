import { motion } from "motion/react";
import { Hammer, BarChart3, Palette, Search } from "lucide-react";

const services = [
  {
    title: "Data Engineering",
    icon: <Hammer className="w-6 h-6" />,
    description: "End-to-end pipeline design and deployment, cloud infrastructure (AWS), ETL/ELT workflows, data warehouse architecture, orchestration with Airflow, infrastructure as code with Terraform, containerisation with Docker.",
    number: "01"
  },
  {
    title: "Data Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Business intelligence, KPI design, Power BI dashboards (DAX, Power Query, data modelling), SQL analysis, dataset validation and reconciliation, automated reporting.",
    number: "02"
  },
  {
    title: "Data Visualisation & Infographics",
    icon: <Palette className="w-6 h-6" />,
    description: "Interactive dashboards, static and motion infographics, data-driven visual storytelling for public, media, and corporate audiences.",
    number: "03"
  },
  {
    title: "Research & Data Consulting",
    icon: <Search className="w-6 h-6" />,
    description: "Survey design, statistical analysis, research data management, structured reporting for academic and organisational publication.",
    number: "04"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-surface border-y border-foreground/5 w-full overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-24 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">What I Do</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-foreground text-balance">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/5 border border-foreground/5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-12 group hover:bg-primary transition-all duration-500 text-center md:text-left"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 bg-primary flex items-center justify-center text-background group-hover:bg-muted transition-all mx-auto md:mx-0">
                  {service.icon}
                </div>
                <span className="text-4xl font-black text-foreground/5 group-hover:text-background/20 transition-colors hidden md:block">{service.number}</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 group-hover:text-background transition-colors text-balance">
                {service.title}
              </h3>
              <p className="text-foreground group-hover:text-background transition-colors leading-relaxed font-bold text-balance">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
