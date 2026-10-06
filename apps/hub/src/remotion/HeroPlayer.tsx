import LoopPlayer from "@ja/ui/remotion/LoopPlayer";

// Size is written here (not imported) so the animation's code only downloads when it's needed
export default function HeroPlayer() {
  return (
    <LoopPlayer
      width={800}
      height={900}
      load={() => import("./DataToStory").then((m) => ({ component: m.DataToStory, durationInFrames: m.DURATION, fps: m.FPS }))}
    />
  );
}
