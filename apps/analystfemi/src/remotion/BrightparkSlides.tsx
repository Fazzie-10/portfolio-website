import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// The three pages of the real BrightPark Power BI report (built in Joshua's class), sliding in turn.

export const FPS = 30;
const SLIDE = 3.2; // seconds per page
export const PAGES = [
  { src: "/media/brightpark-executive.webp", label: "Executive summary" },
  { src: "/media/brightpark-sales.webp", label: "Sales performance" },
  { src: "/media/brightpark-marketing.webp", label: "Marketing" },
];
export const DURATION = Math.round(PAGES.length * SLIDE * FPS);
export const WIDTH = 900;
export const HEIGHT = 580;

const MONO = '"JetBrains Mono Variable", ui-monospace, monospace';
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

export const BrightparkSlides: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const per = SLIDE * fps;
  const active = Math.min(PAGES.length - 1, Math.floor(frame / per));

  return (
    <AbsoluteFill style={{ background: "var(--surface)", fontFamily: MONO }}>
      {/* Page tabs, like the report's own navigation */}
      <div style={{ display: "flex", gap: 8, padding: "16px 18px 0" }}>
        {PAGES.map((p, i) => (
          <span
            key={p.label}
            style={{
              padding: "7px 14px",
              borderRadius: 99,
              fontSize: 15,
              border: "1px solid var(--line)",
              background: i === active ? "var(--accent)" : "var(--bg)",
              color: i === active ? "var(--accent-fg)" : "var(--fg)",
            }}
          >
            {p.label}
          </span>
        ))}
      </div>

      {/* Slides */}
      <div style={{ position: "absolute", left: 18, right: 18, top: 64, bottom: 18, overflow: "hidden", borderRadius: 16 }}>
        {PAGES.map((p, i) => {
          const start = i * per;
          const enter = i === 0 ? 1 : spring({ frame: frame - start, fps, config: { damping: 20 } });
          const leave = spring({ frame: frame - (start + per), fps, config: { damping: 20 } });
          const x = (1 - enter) * 100 - (i < PAGES.length - 1 ? leave * 100 : 0);
          const zoom = interpolate(frame, [start, start + per], [1, 1.04], clamp);
          if (frame < start - 2 || (i < PAGES.length - 1 && leave > 0.999)) return null;
          return (
            <div key={p.src} style={{ position: "absolute", inset: 0, transform: `translateX(${x}%)` }}>
              <Img src={p.src} alt={`BrightPark Power BI report, ${p.label} page`} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${zoom})` }} />
            </div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div style={{ position: "absolute", right: 30, bottom: 30, display: "flex", gap: 6 }}>
        {PAGES.map((_, i) => (
          <span key={i} style={{ width: i === active ? 22 : 8, height: 8, borderRadius: 99, background: i === active ? "var(--accent)" : "rgba(255,255,255,0.7)" }} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
