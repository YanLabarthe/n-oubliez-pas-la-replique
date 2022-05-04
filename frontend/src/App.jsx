import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Quizz from "@pages/Quizz";
import Scoreboard from "@pages/Scoreboard";
import nameGenerator from "@services/nameGenerator";
import { useState } from "react";
import { addScore } from "@services/api";

function App() {
  const [nameGenerated, setNameGenerated] = useState("");
  const [score, setScore] = useState(0);

  const generateName = () => {
    const newName = nameGenerator();
    setNameGenerated(newName);
  };

  const onGameEnd = (theScore) => {
    setScore(theScore);
    addScore(nameGenerated, theScore);
  };

  return (
    <div className="App min-h-screen text-center bg-neutral-900 text-yellow-500">
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
          path="/scoreboard"
          element={<Scoreboard name={nameGenerated} score={score} />}
        />
      </Routes>
    </div>
  );
}

export default App;
