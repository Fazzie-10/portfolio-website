import { motion } from "motion/react";
import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    title: "Microsoft Certified Fabric Analytics Engineer Associate",
    year: "2024",
    type: "Certification"
  },
  {
    title: "Certified Associate Data Analyst, DataCamp",
    year: "2023",
    type: "Certification"
  },
  {
    title: "Data Analytics — Turing College, Lithuania",
    year: "2024",
    type: "Education"
  },
  {
    title: "B.Sc. Microbiology (Second-Class Upper) — University of Ibadan",
    year: "2023",
    type: "Education"
  }
];

export default function Education() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface border-b border-foreground/5 w-full overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-24 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Credentials</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-foreground text-balance">Education <br /> <span className="text-muted">& Certs</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-primary/5 border border-foreground/5 flex flex-col sm:flex-row gap-6 items-center sm:items-start group hover:bg-primary transition-all duration-500 text-center sm:text-left"
            >
              <div className="w-12 h-12 bg-background flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-foreground group-hover:text-background transition-all">
                {item.type === "Education" ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold leading-tight uppercase tracking-tighter group-hover:text-background transition-colors text-foreground text-balance">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
