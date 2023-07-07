import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function MyMedia() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Pause" : "Play"}</button>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      />
    </div>
  );
}


