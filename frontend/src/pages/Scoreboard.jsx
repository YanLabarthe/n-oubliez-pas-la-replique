import React, { useState, useEffect } from "react";
import "./Scoreboard.css";
import { Link } from "react-router-dom";
import { getScores } from "@services/api";

function Scoreboard() {
  const [score, setScore] = useState([]);

  useEffect(async () => {
    setScore(await getScores());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <h1>ScoreBoard</h1>

      <div className="batman flex justify-center p-20">
        <img src="/src/assets/img/batmanCoverPage.jpeg" alt="batman" />
      </div>
      <div className="mx-auto flex w-2/3">
        <div className="myGrid flex flex-col w-1/2">
          <div className="head">Pseudo</div>
          {score.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))}
        </div>
        <div className="myGrid flex flex-col w-1/2">
          <div className="head">Scores</div>
          {score.map((user) => (
            <div key={user.id}>{user.score}</div>
          ))}
        </div>
      </div>
      <Link
        className="bg-transparent hover:bg-yellow-500 text-white-700 font hover:text-black py-5 px-10 border border-current hover:border-transparent rounded flex justify-center my-10 w-13 ml-60 mr-60"
        to="/quizz"
      >
        Play
      </Link>
      <div />
    </div>
  );
}

export default Scoreboard;
