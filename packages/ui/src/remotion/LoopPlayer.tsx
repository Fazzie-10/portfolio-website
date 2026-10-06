import { useEffect, useState, type ComponentType } from "react";

export interface LoadedComposition {
  component: ComponentType;
  durationInFrames: number;
  fps: number;
}

interface Props {
  // Loaded lazily so Remotion's code never delays the first paint
  load: () => Promise<LoadedComposition>;
  width: number;
  height: number;
  radius?: number;
}

type PlayerModule = typeof import("@remotion/player");

// Shared looping Remotion player for every site's animations.
// Shows a same-sized placeholder first, then loads Remotion on the first interaction.
// People who ask their device to reduce motion get a still frame near the end instead.
export default function LoopPlayer({ load, width, height, radius = 24 }: Props) {
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState<{ player: PlayerModule; comp: LoadedComposition } | null>(null);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);

    let cancelled = false;
    const start = () => {
      Promise.all([import("@remotion/player"), load()]).then(([player, comp]) => {
        if (!cancelled) setReady({ player, comp });
      });
    };
    // Start on the visitor's first scroll, touch, key or mouse move (or after 8s), so slow phones
    // never pay for the animation while the page is still loading.
    const events = ["pointermove", "pointerdown", "touchstart", "scroll", "keydown"] as const;
    let started = false;
    const go = () => {
      if (started) return;
      started = true;
      events.forEach((e) => removeEventListener(e, go));
      start();
    };
    events.forEach((e) => addEventListener(e, go, { once: true, passive: true }));
    const timer = setTimeout(go, 8000);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      events.forEach((e) => removeEventListener(e, go));
      media.removeEventListener("change", onChange);
    };
  }, []);

  const box = { width: "100%", aspectRatio: `${width} / ${height}`, borderRadius: radius, overflow: "hidden" } as const;

  if (!ready) return <div style={{ ...box, background: "var(--surface)" }} aria-hidden="true" />;

  const { Player } = ready.player;
  const { component, durationInFrames, fps } = ready.comp;
  return (
    <div aria-hidden="true">
    <Player
      key={reduced ? "still" : "loop"}
      component={component}
      durationInFrames={durationInFrames}
      fps={fps}
      compositionWidth={width}
      compositionHeight={height}
      autoPlay={!reduced}
      loop
      initialFrame={reduced ? durationInFrames - 20 : 0}
      controls={false}
      clickToPlay={false}
      acknowledgeRemotionLicense
      style={box}
    />
    </div>
  );
}
