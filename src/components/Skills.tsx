import { motion } from "motion/react";
import { BarChart3, Layout, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Engineering",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Python", "Apache Airflow", "AWS (S3, Redshift)", "dbt", "Terraform", "Docker", "GitHub Actions", "PostgreSQL"],
  },
  {
    title: "Analytics & BI",
    icon: <BarChart3 className="w-5 h-5" />,
    skills: ["Power BI", "DAX", "SQL", "BigQuery", "Tableau", "Microsoft Fabric", "Looker Studio", "Excel", "Google Sheets", "SPSS"],
  },
  {
    title: "Design & Tools",
    icon: <Layout className="w-5 h-5" />,
    skills: ["Figma", "Canva", "Git", "MS 365", "Google Workspace"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-muted border-y border-foreground/5 w-full overflow-x-hidden">
      <div className="w-full">
        <div className="mb-24 text-center lg:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Expertise</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-white text-balance">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted p-12 hover:bg-primary transition-colors group"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-4 mb-8 text-white group-hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    {group.icon}
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors">{group.title}</h3>
                </div>
                <ul className="space-y-4 w-full">
                  {group.skills.map(skill => (
                    <li key={skill} className="text-xs font-black text-white flex items-center justify-center lg:justify-start gap-3 uppercase tracking-widest group-hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
