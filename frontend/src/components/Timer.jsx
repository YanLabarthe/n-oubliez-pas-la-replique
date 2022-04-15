import { useEffect, useState } from "react";

function Timer({ duration = 5, onFinished }) {
  let time = duration;

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      let newMinutes = parseInt(time / 60, 10);
      let newSeconds = parseInt(time % 60, 10);

      newMinutes = newMinutes < 10 ? `0${newMinutes}` : newMinutes;
      newSeconds = newSeconds < 10 ? `0${newSeconds}` : newSeconds;

      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (time <= 0) {
        clearInterval(timer);
        onFinished();
      }

      time -= 1;
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
}

export default Timer;
