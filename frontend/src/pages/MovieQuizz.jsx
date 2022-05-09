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
      onFinished(score);
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
    <>
      <div className="m-0 flex flex-col h-screen w-full">
        <img alt="batman" src={bulle} className="h-auto mx-auto w-1/4" />
        {!timerEnded && (
          <h3 className="bg-neutral-900  rounded-full p-4">
            <Timer duration={30} onFinished={onGameEnd} />
          </h3>
        )}
        <div>ALIAS: {alias}</div>
        <div>SCORE: {score}</div>
        <div>VIES: {lives}</div>

        {/* ------- Body -- Quizz ------- */}
        <FourAnswersQuizz
          className="grid grid-cols-2 mx-auto place-items-center"
          question={question}
          timerEnded={timerEnded}
          answers={answers}
          correctTitle={correctTitle}
          onClick={onClick}
        />
      </div>
      {timerEnded && (
        <Link
          className={`py-3 mx-20 sm:py-5 sm:px-10 flex hover:text-neutral-900 justify-center sm:my-10 sm:w-13 sm:ml-60 sm:mr-60 hover:bg-amber-500 bg-neutral-900 text-amber-500 border-yellow-500 text-white-700 font border border-current hover:border-transparent rounded-full `}
          to="/scoreboard"
        >
          <h3>Scoreboard</h3>
        </Link>
      )}
    </>
  );
}

export default MovieQuizz;
