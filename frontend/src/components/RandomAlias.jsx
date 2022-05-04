import { Link } from "react-router-dom";

function RandomAlias({ alias }) {
  return (
    <div className="Home">
      {alias && (
        <>
          <p className="text-yellow-600 text-2xl sm:text-3xl xl:text-4xl">
            Alors tu es le fameux
          </p>
          <br />
          <div className="text-amber-400 font-bold text-5xl sm:text-6xl xl:text-7xl">
            {" "}
            {alias}{" "}
          </div>
          <br />
          <p className="text-yellow-600 text-2xl sm:text-3xl xl:text-4xl">
            {" "}
            Voyons si tu es à la hauteur !
          </p>
          <br />
          <br />
          <Link
            className="my-2 w-[30%] justify-center content-center bg-transparent hover:bg-yellow-500 text-white-700 font-semibold hover:text-white p-4  border border-yellow-500 hover:border-transparent rounded"
            to="/quizz"
          >
            Start
          </Link>
        </>
      )}
    </div>
  );
}

export default RandomAlias;
