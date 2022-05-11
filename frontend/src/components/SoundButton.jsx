import useSound from "use-sound";
import { useState } from "react";

function SoundButton({ className, onNameGenerated }) {
  const [playbackRate, setPlaybackRate] = useState(0.75);

  const soundUrl = "./src/assets/sound/drama-stringsmp3-14627.mp3";

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    onNameGenerated();
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      <div
        aria-hidden="true"
        className="transition w-fit duration-300 group-hover:-translate-y-10 sm:group-hover:-translate-y-24"
      >
        <div className="h-10 sm:h-24 flex w-fit items-center justify-center">
          <span className="text-lg sm:text-4xl text-center">
            <h3>Put on your mask</h3>
          </span>
        </div>

        <div className="h-10  sm:h-24 flex w-fit items-center justify-center">
          <span className="text-lg sm:text-4xl tracking-wide">
            <h3 className="tracking-wider">Chose your alias</h3>
          </span>
        </div>
      </div>
    </button>
  );
}

export default SoundButton;
