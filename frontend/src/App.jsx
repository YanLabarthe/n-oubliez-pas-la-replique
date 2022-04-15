import ChatContainer from "@components/ChatContainer";
import "@components/ChatContainer.css";
// import QuizzFindCryptedWord from "@pages/Quizz";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Quizz from "@pages/Quizz";
import Scoreboard from "@pages/Scoreboard";

function App() {
  return (
    <>
      {/* <div className="App"> */}
      {/* <QuizzFindCryptedWord /> */}
      <ChatContainer />
      {/* <div className="flex justify-center">
        <h1 className="font-bold text-2xl text-blue-900">
          React and Tailwind with Vitejs!
        </h1>
      </div>
    </div> */}

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
