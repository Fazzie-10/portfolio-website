import LoopPlayer from "@ja/ui/remotion/LoopPlayer";

// Size is written here (not imported) so the animation's code only downloads when it's needed
export default function WorkflowPlayer() {
  return (
    <LoopPlayer
      width={800}
      height={900}
      load={() => import("./WorkflowLoop").then((m) => ({ component: m.WorkflowLoop, durationInFrames: m.DURATION, fps: m.FPS }))}
    />
  );
}
