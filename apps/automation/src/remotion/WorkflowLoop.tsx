import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// How an automation like VendorIQ works, as a loop:
// WhatsApp message → AI reads it → saved to the database → reply sent.

export const FPS = 30;
export const DURATION = 9 * FPS;
export const WIDTH = 800;
export const HEIGHT = 900;

const DISPLAY = '"Bricolage Grotesque Variable", system-ui, sans-serif';
const MONO = '"JetBrains Mono Variable", ui-monospace, monospace';
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

const NODES = [
  { y: 70, label: "WhatsApp", tag: "Trigger" },
  { y: 285, label: "Gemini", tag: "Understand" },
  { y: 500, label: "Supabase", tag: "Store" },
  { y: 715, label: "WhatsApp", tag: "Reply" },
];
const STEP = 1.9; // seconds between nodes

export const WorkflowLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fade = interpolate(frame, [0, 8, DURATION - 12, DURATION], [0, 1, 1, 0], clamp);

  const at = (i: number) => (0.3 + i * STEP) * fps;
  const pop = (i: number) => spring({ frame: frame - at(i), fps, config: { damping: 14, mass: 0.7 } });

  return (
    <AbsoluteFill style={{ background: "var(--surface)", color: "var(--fg)", fontFamily: DISPLAY, opacity: fade }}>
      {/* Dot grid */}
      <AbsoluteFill
        style={{
          backgroundImage: "radial-gradient(color-mix(in oklab, var(--fg) 14%, transparent) 1.4px, transparent 1.4px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Connectors with a travelling pulse */}
      {NODES.slice(0, -1).map((n, i) => {
        const start = at(i) + 0.6 * fps;
        const progress = interpolate(frame, [start, at(i + 1)], [0, 1], clamp);
        const top = n.y + 150;
        const height = NODES[i + 1].y - top;
        return (
          <div key={i} style={{ position: "absolute", left: 96, top, width: 4, height, background: "var(--line)", borderRadius: 4 }}>
            <div style={{ width: "100%", height: `${progress * 100}%`, background: "var(--accent)", borderRadius: 4 }} />
            {progress > 0 && progress < 1 && (
              <div
                style={{
                  position: "absolute",
                  left: -6,
                  top: `calc(${progress * 100}% - 8px)`,
                  width: 16,
                  height: 16,
                  borderRadius: 99,
                  background: "var(--accent)",
                  boxShadow: "0 0 18px var(--accent)",
                }}
              />
            )}
          </div>
        );
      })}

      {NODES.map((n, i) => {
        const p = pop(i);
        return (
          <div key={i} style={{ position: "absolute", left: 40, right: 40, top: n.y, opacity: p, transform: `translateX(${(1 - p) * -30}px)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 116,
                  height: 116,
                  flexShrink: 0,
                  borderRadius: 28,
                  background: "var(--bg)",
                  border: `2px solid ${p > 0.9 ? "var(--accent)" : "var(--line)"}`,
                  display: "grid",
                  placeItems: "center",
                  fontFamily: MONO,
                  fontSize: 15,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                <div>
                  <div style={{ color: "var(--accent)", fontSize: 30, fontWeight: 600 }}>0{i + 1}</div>
                  {n.label}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: MONO, fontSize: 15, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted)" }}>{n.tag}</div>
                <Card index={i} progress={p} />
              </div>
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const Card: React.FC<{ index: number; progress: number }> = ({ index }) => {
  const bubble: React.CSSProperties = {
    marginTop: 8,
    padding: "14px 18px",
    borderRadius: 20,
    fontSize: 22,
    lineHeight: 1.3,
    maxWidth: 520,
  };
  if (index === 0)
    return (
      <div style={{ ...bubble, background: "var(--accent)", color: "var(--accent-fg)", borderBottomRightRadius: 6 }}>
        Sold 2 bags of rice to Kunle, ₦52k each
      </div>
    );
  if (index === 1)
    return (
      <div style={{ ...bubble, background: "var(--bg)", border: "1px solid var(--line)", fontFamily: MONO, fontSize: 18 }}>
        {"{ item: "}<span style={{ color: "var(--accent)" }}>"rice"</span>{", qty: 2,"}
        <br />
        {"  customer: "}<span style={{ color: "var(--accent)" }}>"Kunle"</span>{", total: 104000 }"}
      </div>
    );
  if (index === 2)
    return (
      <div style={{ ...bubble, background: "var(--bg)", border: "1px solid var(--line)", fontFamily: MONO, fontSize: 17, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
        <span style={{ color: "var(--muted)" }}>sales</span>
        <span style={{ color: "var(--muted)" }}>+1 row</span>
        <span style={{ color: "var(--accent)" }}>✓ saved</span>
      </div>
    );
  return (
    <div style={{ ...bubble, background: "var(--bg)", border: "1px solid var(--line)", borderBottomLeftRadius: 6 }}>
      Logged ✓ Today's total: <b>₦104,000</b>
    </div>
  );
};
