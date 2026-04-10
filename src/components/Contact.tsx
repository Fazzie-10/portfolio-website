import { motion } from "motion/react";
import { Mail, Linkedin, Github, ArrowUpRight, Phone, Instagram, Facebook, Youtube } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-5 h-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v5.48c.01 1.89-.4 3.81-1.58 5.2-1.64 2.04-4.41 2.86-6.89 2.14-2.48-.72-4.37-2.95-4.63-5.5-.33-2.87 1.34-5.83 3.98-6.93.49-.2 1-.35 1.53-.44v4.02c-.32.06-.64.15-.95.28-1.11.47-1.85 1.61-1.77 2.81.05 1.13.84 2.15 1.93 2.45 1.1.32 2.37-.02 3.06-.94.4-.53.59-1.2.57-1.87V0h.01z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-5 h-5">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298L17.607 20.65z"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-foreground text-background w-full overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="text-center lg:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block">Ready to start?</span>
            <h2 className="text-5xl sm:text-7xl md:text-[10vw] font-black tracking-tighter leading-[0.85] uppercase mb-16 text-background text-balance">
              Let's <br /> <span className="text-background">Work</span> <br /> Together.
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <a href="mailto:joshuaakintayo21@gmail.com" className="flex items-center justify-center lg:justify-start gap-3 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-primary flex items-center justify-center text-background group-hover:bg-background group-hover:text-foreground transition-all duration-500">
                  <Mail className="w-4 h-4 sm:w-6 h-6" />
                </div>
                <span className="text-[11px] sm:text-lg md:text-xl font-bold lowercase text-background whitespace-nowrap">joshuaakintayo21@gmail.com</span>
              </a>
              
              <a href="tel:+2348143988668" className="flex items-center justify-center lg:justify-start gap-3 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-primary flex items-center justify-center text-background group-hover:bg-background group-hover:text-foreground transition-all duration-500">
                  <Phone className="w-4 h-4 sm:w-6 h-6" />
                </div>
                <span className="text-[11px] sm:text-lg md:text-xl font-bold text-background whitespace-nowrap">+234 814 398 8668</span>
              </a>
              
              <div className="flex flex-nowrap justify-center lg:justify-start gap-2 sm:gap-4 pt-8 sm:pt-12 overflow-x-auto pb-4">
                {[
                  { icon: <Linkedin className="w-3.5 h-3.5 sm:w-5 h-5" />, href: "https://www.linkedin.com/in/joshua-akintayo/" },
                  { icon: <XIcon />, href: "https://x.com/_joshuafemi?s=21" },
                  { icon: <Github className="w-3.5 h-3.5 sm:w-5 h-5" />, href: "https://github.com/Pajo00" },
                  { icon: <TikTokIcon />, href: "https://www.tiktok.com/@analystfemi" },
                  { icon: <Instagram className="w-3.5 h-3.5 sm:w-5 h-5" />, href: "https://www.instagram.com/_joshua.femi/" },
                  { icon: <Facebook className="w-3.5 h-3.5 sm:w-5 h-5" />, href: "https://web.facebook.com/profile.php?id=100087293221410" },
                  { icon: <Youtube className="w-3.5 h-3.5 sm:w-5 h-5" />, href: "https://www.youtube.com/@AnalystFemi" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: "#C05800", color: "#FDFBD4" }}
                    className="flex-shrink-0 w-8 h-8 sm:w-14 sm:h-14 border border-background/20 flex items-center justify-center transition-all duration-300 text-background"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between pt-12 text-center lg:text-left">
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-20 text-balance text-background">
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions.
            </p>

            <a 
              href="mailto:joshuaakintayo21@gmail.com"
              className="p-12 bg-primary border border-background/20 relative overflow-hidden group cursor-pointer rounded-[20px] block text-left"
            >
              <div className="absolute top-0 right-0 p-10">
                <ArrowUpRight className="w-10 h-10 text-background group-hover:text-background transition-colors duration-500" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 text-background">Inquiry</h3>
              <p className="text-background font-bold uppercase tracking-widest text-[10px] mb-10">Send a brief about your project</p>
              <div className="inline-block px-10 py-5 bg-background text-primary font-black uppercase tracking-[0.2em] text-[10px] hover:bg-muted hover:text-white transition-all duration-500 rounded-sm">
                Contact Me
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
