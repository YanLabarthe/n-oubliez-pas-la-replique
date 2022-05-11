import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getScores2 } from "@services/api";

function ScoreboardMovieQuizz({ rank }) {
  const [score, setScore] = useState([]);

  useEffect(async () => {
    setScore(await getScores2());
  }, []);

  return (
    <div className="flex flex-col w-full border-amber-500 ">
      <h1 className="py-4 text-3xl sm:text-5x">ScoreBoard</h1>
      <div className="p-3 flex mx-auto">
        Ton classement :<h3 className="text-2xl px-2">{rank}</h3>ème
      </div>
      <div className="mx-auto flex w-2/3">
        <div className="flex flex-col w-1/2">
          <div className=" bg-amber-400 p-2">
            <h3 className="text-black">Pseudo</h3>
          </div>
          {score.map((user) => (
            <div
              className="border-amber-500 border-b p-2 font-semibold"
              key={user.id}
            >
              {user.username}
            </div>
          ))}
        </div>
        <div className="border-amber-500 flex flex-col w-1/2">
          <div className="bg-amber-400 p-2">
            <h3 className="text-black">Scores</h3>
          </div>
          {score.map((user) => (
            <div
              className="border-amber-500 border-b p-2 font-semibold"
              key={user.id}
            >
              {user.score}
            </div>
          ))}
        </div>
      </div>
      <Link
        className="bg-transparent hover:bg-yellow-500 text-white-700 font hover:text-black py-5 px-10 border border-current hover:border-transparent rounded flex justify-center my-10 w-13 ml-60 mr-60"
        to="/moviequizz"
      >
        Play again
      </Link>
      <div />
    </div>
  );
}

export default ScoreboardMovieQuizz;
