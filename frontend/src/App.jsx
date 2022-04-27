import "@components/ChatContainer.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Quizz from "@pages/Quizz";
import Scoreboard from "@pages/Scoreboard";
import nameGenerator from "@services/nameGenerator";
import { useState } from "react";

function App() {
  const [nameGenerated, setNameGenerated] = useState("");
  const [score, setScore] = useState(0);

  const generateName = () => {
    const newName = nameGenerator();
    return setNameGenerated(newName);
  };

  const onGameEnd = (theScore) => {
    setScore(theScore);
  };

  return (
    <div className="App">
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
