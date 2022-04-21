import React from "react";
import "./Scoreboard.css";
import { Link } from "react-router-dom";

function Scoreboard() {
  return (
    <>
      <link
        href="https://fr.allfont.net/allfont.css?fonts=star-jedi"
        rel="stylesheet"
        type="text/css"
      />
      <h1>ScoreBoard</h1>
      <div className="batman">
        <img src="/src/assets/img/batmanCoverPage.jpeg" alt="batman" id="App" />
      </div>

      <div>
        <div className="grid">
          <div className="head">Pseudo</div>
          <div className="head">Scores</div>
          <div>CrazyTiger</div>
          <div>4500 points</div>
          <div>AngryTaurus</div>
          <div>4000 points</div>
          <div>oldDog</div>
          <div>3500 points</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
        </div>
        <Link
          className="bg-transparent hover:bg-yellow-500 text-white-700 font hover:text-black py-5 px-10 border border-current hover:border-transparent rounded flex justify-center my-10 w-13 ml-60 mr-60"
          to="/quizz"
        >
          Play
        </Link>
      </div>
    </>
  );
}

export default Scoreboard;
