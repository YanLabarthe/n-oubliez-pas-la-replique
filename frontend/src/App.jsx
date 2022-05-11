import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Quizz from "@pages/Quizz";
import Scoreboard from "@pages/Scoreboard";
import MovieQuizz from "@pages/MovieQuizz";
import nameGenerator from "@services/nameGenerator";
import { useState } from "react";
import { addScore, addScore2 } from "@services/api";
import "../index.css";
import ScoreboardMovieQuizz from "@pages/ScoreboardMovieQuizz";

function App() {
  const [nameGenerated, setNameGenerated] = useState("");
  const [score, setScore] = useState(0);
  const [theRank, setTheRank] = useState("");
  const [theRank2, setTheRank2] = useState("");

  const generateName = () => {
    const newName = nameGenerator();
    setNameGenerated(newName);
  };

  const onGameEnd = async (theScore) => {
    setScore(theScore);
    const rank = await addScore(nameGenerated || "unknown", theScore);
    const rank2 = await addScore2(nameGenerated || "unknown", theScore);
    setTheRank(rank[0].myrank);
    setTheRank2(rank2[0].myrank);
  };

  return (
    <div className="App h-screen text-center bg-neutral-900 text-yellow-500">
      <Routes>
        <Route
          path="/"
          element={<Home name={nameGenerated} onNameGenerated={generateName} />}
        />
        <Route
          path="/quizz"
          element={<Quizz alias={nameGenerated} onFinished={onGameEnd} />}
        />
        <Route
          path="/moviequizz"
          element={<MovieQuizz alias={nameGenerated} onFinished={onGameEnd} />}
        />
        <Route
          path="/scoreboard"
          element={
            <Scoreboard name={nameGenerated} score={score} rank={theRank} />
          }
        />
        <Route
          path="/scoreboardMovieQuizz"
          element={
            <ScoreboardMovieQuizz
              name={nameGenerated}
              score={score}
              rank={theRank2}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
