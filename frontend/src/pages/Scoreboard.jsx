import React from "react";
import "./Scoreboard.css";
import { Link } from "react-router-dom";

function Scoreboard({ name, score }) {
  return (
    <div className="flex flex-col w-full">
      <h1>ScoreBoard</h1>

      <div className="batman flex justify-center p-20">
        <img src="/src/assets/img/batmanCoverPage.jpeg" alt="batman" />
      </div>

      <div className="grid">
        <div className="head text-xl">Pseudo</div>
        <div className="head text-xl">Scores</div>
        <div>CrazyTiger</div>
        <div>4500 points</div>
        <div>AngryTaurus</div>
        <div>4000 points</div>
        <div>oldDog</div>
        <div>3500 points</div>
        <div>{name}</div>
        <div>{score} points</div>
        <div>...</div>
        <div>...</div>
        <div>...</div>
        <div>...</div>
      </div>

      <div className="flex justify-center p-20">
        <Link
          className="flex items-center justify-center group w-fit overflow-hidden px-8 h-24 border hover:bg-yellow-500 hover:text-black font-semibold border-yellow-500 rounded"
          to="/quizz"
        >
          Replay
        </Link>
      </div>
    </div>
  );
}

export default Scoreboard;
