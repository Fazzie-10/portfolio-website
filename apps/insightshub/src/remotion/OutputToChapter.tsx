import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// SPSS output → the numbers that matter → a finished Chapter 4 table with interpretation.
// Same made-up sample as the before/after section (χ²(3) = 10.28, p = .016).

export const FPS = 30;
export const DURATION = 10 * FPS;
export const WIDTH = 800;
export const HEIGHT = 900;

const DISPLAY = '"Bricolage Grotesque Variable", system-ui, sans-serif';
const SERIF = '"Instrument Serif", Georgia, serif';
const MONO = '"JetBrains Mono Variable", ui-monospace, monospace';
const SPSS = "Arial, Helvetica, sans-serif";
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

const SPSS_ROWS = [
  ["Pearson Chi-Square", "10.280ª", "3", ".016"],
  ["Likelihood Ratio", "10.527", "3", ".015"],
  ["Linear-by-Linear Association", "10.204", "1", ".001"],
  ["N of Valid Cases", "180", "", ""],
];

const APA_ROWS = [
  ["100 level", "22 (48.9)", 48.9],
  ["200 level", "27 (60.0)", 60.0],
  ["300 level", "31 (68.9)", 68.9],
  ["400 level", "36 (80.0)", 80.0],
] as const;

const SENTENCE =
  "Use of AI writing tools rose with level of study, from 48.9% at 100 level to 80.0% at 400 level, χ²(3, N = 180) = 10.28, p = .016.";

export const OutputToChapter: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const highlightAt = 2.2 * fps;
  const pageAt = 4.2 * fps;
  const typeAt = 6 * fps;
  const stampAt = 8.4 * fps;

  const fadeLoop = interpolate(frame, [0, 8, DURATION - 12, DURATION], [0, 1, 1, 0], clamp);
  const page = spring({ frame: frame - pageAt, fps, config: { damping: 18 } });
  const spssY = interpolate(page, [0, 1], [0, -120]);
  const spssScale = interpolate(page, [0, 1], [1, 0.86]);
  const spssOpacity = interpolate(page, [0, 1], [1, 0.35]);
  const glow = interpolate(frame, [highlightAt, highlightAt + 10], [0, 1], clamp);
  const typed = Math.floor(interpolate(frame, [typeAt, stampAt - 6], [0, SENTENCE.length], clamp));
  const stamp = spring({ frame: frame - stampAt, fps, config: { damping: 10, mass: 0.6 } });

  return (
    <AbsoluteFill style={{ background: "var(--surface)", fontFamily: DISPLAY, color: "var(--fg)", opacity: fadeLoop }}>
      {/* SPSS output window */}
      <div
        style={{
          position: "absolute",
          left: 40,
          right: 40,
          top: 60,
          background: "#f4f4f4",
          color: "#111",
          borderRadius: 14,
          border: "1px solid #d4d4d4",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          transform: `translateY(${spssY}px) scale(${spssScale})`,
          opacity: spssOpacity,
          fontFamily: SPSS,
          overflow: "hidden",
        }}
      >
        <div style={{ background: "#e2e2e2", padding: "10px 16px", fontSize: 16, color: "#555", display: "flex", gap: 8 }}>
          <span style={{ width: 11, height: 11, borderRadius: 99, background: "#c9c9c9", marginTop: 4 }} />
          <span style={{ width: 11, height: 11, borderRadius: 99, background: "#c9c9c9", marginTop: 4 }} />
          <span style={{ marginLeft: 8 }}>Output1.spv · IBM SPSS Statistics Viewer</span>
        </div>
        <div style={{ padding: "18px 22px 22px" }}>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 10 }}>Chi-Square Tests</div>
          {SPSS_ROWS.map((r, i) => {
            const rowIn = interpolate(frame, [6 + i * 6, 16 + i * 6], [0, 1], clamp);
            const key = i === 0;
            return (
              <div
                key={r[0]}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.9fr 0.8fr 0.4fr 0.6fr",
                  fontSize: 18,
                  padding: "7px 0",
                  borderTop: i === 0 ? "1px solid #999" : undefined,
                  borderBottom: i === SPSS_ROWS.length - 1 ? "1px solid #999" : undefined,
                  opacity: rowIn,
                }}
              >
                <span>{r[0]}</span>
                {r.slice(1).map((c, j) => (
                  <span
                    key={j}
                    style={{
                      textAlign: "right",
                      borderRadius: 6,
                      padding: "0 6px",
                      outline: key && c ? `${3 * glow}px solid var(--accent)` : undefined,
                      background: key && c ? `color-mix(in oklab, var(--accent) ${18 * glow}%, transparent)` : undefined,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            );
          })}
          <div style={{ fontSize: 14, marginTop: 8, color: "#444" }}>
            a. 0 cells (0.0%) have expected count less than 5. The minimum expected count is 16.00.
          </div>
        </div>
      </div>

      {/* "What matters" label */}
      <div
        style={{
          position: "absolute",
          right: 56,
          top: 300,
          opacity: glow * (1 - page),
          fontFamily: MONO,
          fontSize: 18,
          background: "var(--accent)",
          color: "var(--accent-fg)",
          padding: "8px 14px",
          borderRadius: 99,
        }}
      >
        ↑ the numbers that matter
      </div>

      {/* Chapter 4 page */}
      <div
        style={{
          position: "absolute",
          left: 56,
          right: 56,
          bottom: 40,
          height: 600,
          background: "var(--bg)",
          border: "1px solid var(--line)",
          borderRadius: 18,
          boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
          padding: "32px 36px",
          transform: `translateY(${(1 - page) * 680}px)`,
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: 15, letterSpacing: 2, color: "var(--muted)" }}>CHAPTER FOUR · RESULTS</div>
        <div style={{ marginTop: 18, fontSize: 19, fontWeight: 700 }}>Table 4.6</div>
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 24 }}>Use of AI Writing Tools by Level of Study (N = 180)</div>

        <div style={{ marginTop: 14, borderTop: "2px solid var(--fg)", borderBottom: "2px solid var(--fg)", padding: "6px 0" }}>
          {APA_ROWS.map(([lvl, n, pct], i) => {
            const grow = spring({ frame: frame - pageAt - 8 - i * 4, fps, config: { damping: 18 } });
            return (
              <div key={lvl} style={{ display: "grid", gridTemplateColumns: "130px 130px 1fr", alignItems: "center", gap: 14, padding: "7px 0", fontSize: 18 }}>
                <span>{lvl}</span>
                <span style={{ fontFamily: MONO }}>{n}</span>
                <div style={{ height: 12, borderRadius: 99, background: "var(--line)" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${pct * grow}%`,
                      borderRadius: 99,
                      background: i === APA_ROWS.length - 1 ? "var(--accent)" : "color-mix(in oklab, var(--accent) 45%, transparent)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 22, fontSize: 21, lineHeight: 1.45, minHeight: 130 }}>
          {SENTENCE.slice(0, typed)}
          {typed > 0 && typed < SENTENCE.length && <span style={{ color: "var(--accent)" }}>▍</span>}
        </div>

        {/* Stamp */}
        <div
          style={{
            position: "absolute",
            right: 30,
            bottom: 28,
            transform: `rotate(-8deg) scale(${stamp})`,
            border: "3px solid var(--accent)",
            color: "var(--accent)",
            borderRadius: 12,
            padding: "8px 16px",
            fontFamily: MONO,
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: 1,
          }}
        >
          ✓ DEFENCE READY
        </div>
      </div>
    </AbsoluteFill>
  );
};
