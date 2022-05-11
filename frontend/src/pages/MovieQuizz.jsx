import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Timer from "@components/Timer";
import { getFourAnswers } from "@services/api";
import FourAnswersQuizz from "@components/FourAnswersQuizz";

import bulle from "@assets/img/batman.png";

function MovieQuizz({ alias, onFinished }) {
  const [score, setScore] = useState(0);
  const [timerEnded, setTimerEnded] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState([]);
  const [correctTitle, setCorrectTitle] = useState("");
  const [lives, setLives] = useState(3);

  const generateAnswers = async () => {
    const fetchedAnswers = await getFourAnswers();
    const random = Math.round(Math.random() * 3);
    const randomQuestion = fetchedAnswers[random].content;

    setQuestion(randomQuestion);
    setAnswers(fetchedAnswers);
    setCorrectTitle(fetchedAnswers[random].title);
  };

  useEffect(async () => {
    generateAnswers();
  }, []);

  useEffect(() => {
    if (timerEnded) {
      onFinished(score);
    }
  }, [timerEnded]);

  useEffect(() => {
    if (lives === 0) {
      setTimerEnded(true);
    }
  }, [lives]);

  const onGameEnd = () => {
    setTimerEnded(true);
  };

  const onClick = (event) => {
    const isGoodResponse = correctTitle === event.target.innerText;
    if (isGoodResponse) {
      setScore(score + 10);
      generateAnswers();
    } else {
      setLives(lives - 1);
      generateAnswers();
    }
  };

  return (
    <div className="m-0 flex flex-col justify-between h-full">
      <img alt="batman" src={bulle} className="h-auto py-2 mx-auto w-1/4" />
      <div className="text-3xl flex flex-col sm:flex-row sm:justify-around">
        <h3 className="py-3">ALIAS: {alias}</h3>
        <h3 className="py-3">SCORE: {score}</h3>
        <h3 className="py-3">VIES: {lives}</h3>
      </div>
      {/* ------- Body -- Quizz ------- */}
      {lives && (
        <FourAnswersQuizz
          className="w-1/2"
          question={question}
          timerEnded={timerEnded}
          answers={answers}
          correctTitle={correctTitle}
          onClick={onClick}
        />
      )}
      {!timerEnded && (
        <h3 className="mx-auto my-3 bg-amber-400 text-neutral-900 rounded-full w-1/4 text-2xl">
          <Timer duration={120} onFinished={onGameEnd} />
        </h3>
      )}
      {!lives && (
        <div className="flex flex-col items-center my-3">
          <h3 className="text-3xl">Go check your rank you moron</h3>
          <Link
            className={`py-3 w-1/3 mx-auto sm:py-5 sm:px-10 flex hover:text-neutral-900 justify-center sm:my-10 sm:w-13 sm:ml-60 sm:mr-60 hover:bg-amber-400 bg-neutral-900 text-amber-400 border-yellow-400 font border border-current hover:border-transparent rounded-full `}
            to="/scoreboardMovieQuizz"
          >
            <h3>Scoreboard</h3>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MovieQuizz;
