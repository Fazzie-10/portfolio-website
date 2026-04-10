export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-surface border-t border-foreground/5 w-full overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3 text-sm font-black tracking-tighter">
          <div className="w-6 h-6 bg-foreground flex items-center justify-center text-background font-sans font-black text-[8px]">
            JA
          </div>
          <span className="uppercase tracking-widest text-[10px] text-foreground">Joshua Akintayo</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-[9px] font-black text-muted uppercase tracking-[0.3em]">
          <span>© 2026 ALL RIGHTS RESERVED</span>
        </div>

        <div className="text-[9px] font-black text-muted uppercase tracking-[0.4em]">
          GLOBAL TECH <span className="text-accent">TALENT</span>
        </div>
      </div>
    </footer>
  );
}
