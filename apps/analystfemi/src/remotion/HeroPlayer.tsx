import LoopPlayer from "@ja/ui/remotion/LoopPlayer";

// Size is written here (not imported) so the animation's code only downloads when it's needed
export default function HeroPlayer() {
  return (
    <LoopPlayer
      width={900}
      height={580}
      load={() => import("./BrightparkSlides").then((m) => ({ component: m.BrightparkSlides, durationInFrames: m.DURATION, fps: m.FPS }))}
    />
  );
}
