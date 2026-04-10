import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden w-full">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 text-center lg:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">About Me</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none text-foreground text-balance">
              The <br /> <span className="text-primary">Person</span> <br /> Behind.
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-[800px] mx-auto lg:mx-0"
            >
              <p className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-foreground text-balance">
                I am Joshua Akintayo, a Data Engineer and Analyst. I specialize in building the full stack of data, from architecting scalable cloud-native pipelines to designing high-impact infographics and dashboards that have reached millions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-foreground max-w-[800px] mx-auto lg:mx-0"
            >
              <p className="text-lg font-bold text-balance">
                With 3 years of experience across journalism, healthtech, and startups, I bridge the gap between technical data architecture and human decision-making. My work focuses on turning complex datasets into clear, actionable stories that streamline operations and drive real-world results.
              </p>
              <p className="text-lg font-bold text-balance">
                I believe data is only as powerful as the clarity it provides. Beyond professional consulting, I share this vision with a growing digital community across TikTok, Instagram, Facebook, and YouTube.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
