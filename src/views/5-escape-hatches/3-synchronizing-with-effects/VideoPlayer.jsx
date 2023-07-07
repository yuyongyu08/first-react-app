import { useRef, useEffect } from "react";

export default function VideoPlayer({ src, isPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Calling video.play()");
      videoRef.current.play();
    } else {
      console.log("Calling video.pause()");
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <video width={200} ref={videoRef} src={src} loop playsInline />
    </div>
  );
}
