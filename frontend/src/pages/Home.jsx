import RandomAlias from "@components/RandomAlias";
import { Link } from "react-router-dom";
import bulle from "@assets/img/batmanBul.png";
import "./Home.css";

function Home({ name, onNameGenerated }) {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="font-bold text-3xl text-yellow-500 mt-0.5 md:text-2xl">
        N'oubliez pas la réplique
      </h1>

      <img
        className="mx-auto my-[10%] w-[80%]  mt-[0]"
        src={bulle}
        alt="batmancover"
      />

      <RandomAlias alias={name} />
      <button
        type="button"
        className="bg-yellow-500 hover:bg-yellow-400 border-b-4 border-yellow-700 hover:border-yellow-500 text-white text-center py-2 px-4 rounded"
        onClick={onNameGenerated}
      >
        Generate your alias
      </button>

      <div>
        <Link
          className="mx-auto my-2 flex w-[30%] justify-center content-center bg-transparent hover:bg-yellow-500 text-white-700 font-semibold hover:text-white p-4  border border-blue-500 hover:border-transparent rounded"
          to="/quizz"
        >
          Start
        </Link>
      </div>
    </div>
  );
}

export default Home;
