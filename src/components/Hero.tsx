import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: "100%" },
    show: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-surface">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-40" />
      
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image Container - Stacks on top on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center order-first md:order-last"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 bg-muted/10">
              <img 
                src="/profile photo.jpg" 
                alt="Joshua Akintayo" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full md:w-1/2 flex flex-col text-center md:text-left"
          >
            <div className="overflow-hidden reveal-text">
              <motion.h1 
                variants={item}
                className="text-4xl sm:text-6xl md:text-[5vw] font-black leading-[0.85] tracking-tighter uppercase text-foreground text-balance"
              >
                Joshua <br className="hidden md:block" /> Akintayo
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-2xl font-bold leading-tight mt-8 text-balance text-foreground"
            >
              Data Engineer and Analyst
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-12"
            >
              <a 
                href="https://drive.google.com/file/d/1w0rYCwm6PYxrA2VSYadvSOJS3YbtNZ_L/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-primary text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-sm"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats/Keywords */}
      <div className="absolute bottom-12 left-6 md:left-12 hidden lg:flex gap-12 text-[9px] font-black text-muted uppercase tracking-[0.3em]">
        <div className="flex items-center gap-2">
          <span className="text-primary">01</span>
          <span>Data Visualisation</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">02</span>
          <span>Data Engineering</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">03</span>
          <span>Data Storytelling</span>
        </div>
      </div>
    </section>
  );
}
