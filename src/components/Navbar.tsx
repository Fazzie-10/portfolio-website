import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(253, 251, 212, 0)", "rgba(255, 255, 255, 0.98)"]
  );

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-8 md:px-12 backdrop-blur-md transition-all duration-300 border-b border-foreground/5"
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <div className="w-8 h-8 bg-foreground flex items-center justify-center text-background font-sans font-black text-[10px]">
            JA
          </div>
          <span className="uppercase tracking-widest text-[10px] font-black text-foreground">Joshua Akintayo</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-wrap items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="mailto:joshuaakintayo21@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-3 bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-muted transition-all duration-300 rounded-sm"
          >
            Start Project
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-foreground/20 p-8 flex flex-col gap-6 md:hidden z-[999] w-full max-h-[80vh] overflow-y-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black tracking-tighter uppercase text-foreground"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
