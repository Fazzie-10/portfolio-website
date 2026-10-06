import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";

// "Messy data → chart → headline → dashboard": the hub's story in one 8-second loop.
// Colours come from the page's CSS variables, so it follows the light/dark theme.

export const FPS = 30;
export const DURATION = 8 * FPS;
export const WIDTH = 800;
export const HEIGHT = 900;

const DISPLAY = '"Bricolage Grotesque Variable", system-ui, sans-serif';
const SERIF = '"Instrument Serif", Georgia, serif';
const MONO = '"JetBrains Mono Variable", ui-monospace, monospace';

// Average price index of a food basket, 2015 → 2025 (illustrative, echoes the "400% in a decade" story)
const VALUES = [100, 108, 121, 132, 146, 170, 205, 248, 330, 455, 500];
const YEARS = ["15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

export const DataToStory: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timing (in frames)
  const toChart = 1.6 * fps;
  const toHeadline = 3.6 * fps;
  const toDashboard = 5.6 * fps;
  const fadeOut = DURATION - 0.5 * fps;

  const gridOpacity = interpolate(frame, [toChart, toChart + 12], [1, 0], clamp);
  const chartIn = interpolate(frame, [toChart, toChart + 10], [0, 1], clamp);
  const headlineIn = spring({ frame: frame - toHeadline, fps, config: { damping: 18 } });
  const dashIn = spring({ frame: frame - toDashboard, fps, config: { damping: 20 } });
  const loopFade = interpolate(frame, [0, 8, fadeOut, DURATION], [0, 1, 1, 0], clamp);
  const chartTop = interpolate(dashIn, [0, 1], [330, 300]);

  const max = Math.max(...VALUES);

  return (
    <AbsoluteFill style={{ background: "var(--surface)", color: "var(--fg)", fontFamily: DISPLAY, opacity: loopFade }}>
      {/* Window chrome */}
      <div style={{ position: "absolute", top: 28, left: 32, display: "flex", gap: 10 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 14, height: 14, borderRadius: 99, background: "var(--line)" }} />
        ))}
      </div>
      <div style={{ position: "absolute", top: 22, right: 32, fontFamily: MONO, fontSize: 18, color: "var(--muted)" }}>
        food_prices_2015_2025.csv
      </div>

      {/* Scene 1: raw spreadsheet */}
      <div style={{ position: "absolute", inset: "90px 32px auto 32px", opacity: gridOpacity, fontFamily: MONO, fontSize: 22 }}>
        {VALUES.map((v, i) => {
          const rowIn = interpolate(frame, [i * 2, i * 2 + 8], [0, 1], clamp);
          const noisy = i % 3 === 1 ? `₦${(v * 37).toLocaleString()}` : i % 4 === 2 ? "N/A" : `${v * 37}`;
          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr 1fr",
                gap: 16,
                padding: "9px 12px",
                borderBottom: "1px solid var(--line)",
                opacity: rowIn,
                transform: `translateX(${(1 - rowIn) * -20}px)`,
              }}
            >
              <span style={{ color: "var(--muted)" }}>20{YEARS[i]}</span>
              <span>{noisy}</span>
              <span style={{ color: "var(--muted)" }}>{i % 2 ? "Lagos" : "lagos "}</span>
            </div>
          );
        })}
      </div>

      {/* Scene 2+: bar chart */}
      <div
        style={{
          position: "absolute",
          left: 48,
          right: 48,
          top: chartTop,
          height: 440,
          display: "flex",
          alignItems: "flex-end",
          gap: 14,
          opacity: chartIn,
        }}
      >
        {VALUES.map((v, i) => {
          const grow = spring({ frame: frame - toChart - i * 2, fps, config: { damping: 16, mass: 0.6 } });
          const last = i === VALUES.length - 1;
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, height: "100%", justifyContent: "flex-end" }}>
              <div
                style={{
                  width: "100%",
                  height: `${(v / max) * 92 * grow}%`,
                  borderRadius: "8px 8px 2px 2px",
                  background: last ? "var(--accent)" : "color-mix(in oklab, var(--accent) 32%, transparent)",
                }}
              />
              <span style={{ fontFamily: MONO, fontSize: 16, color: "var(--muted)" }}>’{YEARS[i]}</span>
            </div>
          );
        })}
      </div>

      {/* Scene 3: the headline */}
      <div
        style={{
          position: "absolute",
          left: 48,
          right: 48,
          top: interpolate(dashIn, [0, 1], [96, 150]),
          opacity: headlineIn,
          transform: `translateY(${(1 - headlineIn) * 24}px)`,
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: 18, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase" }}>
          The story
        </div>
        <div style={{ fontSize: 58, fontWeight: 650, lineHeight: 1.02, letterSpacing: -2, marginTop: 10 }}>
          Food prices up{" "}
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>400%</span> in a decade
        </div>
      </div>

      {/* Scene 4: dashboard KPI cards */}
      <div style={{ position: "absolute", left: 48, right: 48, top: 72, display: "flex", gap: 14, opacity: dashIn }}>
        {[
          { k: "Change", v: "+400%" },
          { k: "Period", v: "10 yrs" },
          { k: "Source", v: "NBS" },
        ].map((c, i) => {
          const s = spring({ frame: frame - toDashboard - i * 4, fps, config: { damping: 18 } });
          return (
            <div
              key={c.k}
              style={{
                flex: 1,
                background: "var(--bg)",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: "12px 16px",
                transform: `translateY(${(1 - s) * -16}px)`,
                opacity: s,
              }}
            >
              <div style={{ fontFamily: MONO, fontSize: 15, color: "var(--muted)" }}>{c.k}</div>
              <div style={{ fontFamily: MONO, fontSize: 28, fontWeight: 500, color: i === 0 ? "var(--accent)" : "var(--fg)" }}>{c.v}</div>
            </div>
          );
        })}
      </div>

      {/* Progress line along the bottom */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: 4,
          width: `${interpolate(frame, [0, DURATION], [0, 100], { easing: Easing.linear })}%`,
          background: "var(--accent)",
        }}
      />
    </AbsoluteFill>
  );
};
