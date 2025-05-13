import { useState, useEffect } from "react";

const useSound = (url, options) => {
  const [audio, setAudio] = useState(null);
  const [isAllowed, setIsAllowed] = useState(false); // Tracks user interaction

  useEffect(() => {
    const newAudio = new Audio(url);
    newAudio.volume = options.volume;
    newAudio.load();
    setAudio(newAudio);

    const enableSound = () => setIsAllowed(true);
    window.addEventListener("click", enableSound);

    return () => {
      newAudio.pause();
      newAudio.currentTime = 0;
      setAudio(null);
      window.removeEventListener("click", enableSound);
    };
  }, [url, options.volume]);

  return () => {
    if (audio && isAllowed) {
      audio.currentTime = 0;
      audio
        .play()
        .then(() => {
          setTimeout(() => {
            audio.pause();
          }, options.timeout);
        })
        .catch((error) => console.error("Audio playback error:", error));
    }
  };
};

export default useSound;
