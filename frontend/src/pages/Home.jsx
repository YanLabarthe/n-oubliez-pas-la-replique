import { Link } from "react-router-dom";
import RandomAlias from "@components/RandomAlias";
import nameGenerator from "@services/nameGenerator";
import bulle from "@assets/img/batmanBul.png";

import { useState } from "react";

function Home() {
  const [nameGenerated, setNameGenerated] = useState("");
  const generateName = () => {
    const newName = nameGenerator();
    return setNameGenerated(newName);
  };
  return (
    <div className="block cursor-pointer bg-black text-center overflow-hidden w-full  md:overflow-hidden md:max-w-2xl mx-auto">
      <h1 className="font-bold text-3xl text-yellow-500 mt-0.5 md:text-2xl">
        N'oublie pas la réplique
      </h1>

      <img
        className="mx-auto my-[10%] w-[80%]  mt-[0]"
        src={bulle}
        alt="batmancover"
      />

      <RandomAlias alias={nameGenerated} />
      <button
        type="button"
        className=" mb-10  font-semibold bg-yellow-500 hover:bg-yellow-400 border-b-4 border-yellow-700 hover:border-yellow-500 text-white text-center py-2 px-4 rounded md:"
        onClick={generateName}
      >
        Generate your alias
      </button>

      <div>
        <Link
          className="mx-auto flex w-[30%] justify-center content-center bg-transparent hover:bg-yellow-500 text-white-700 font-semibold hover:text-white p-4  border border-blue-500 hover:border-transparent rounded"
          to="/quizz"
        >
          Start
        </Link>
      </div>
    </div>
  );
}

export default Home;
