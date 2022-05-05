import { Link } from "react-router-dom";

function RandomAlias({ alias }) {
  return (
    <div className="flex flex-col items-center">
      {alias && (
        <>
          <p className="text-yellow-600 text-lg sm:text-3xl xl:text-4xl">
            Alors tu es le fameux
          </p>
          <div className="p-3 text-amber-400 font-bold text-2xl sm:text-6xl xl:text-7xl">
            {" "}
            {alias}{" "}
          </div>
          <p className="pb-4 text-yellow-600 text-lg sm:text-3xl xl:text-4xl">
            {" "}
            Voyons si tu es à la hauteur !
          </p>

          <Link
            className="flex px-20 py-3 w-[30%] text-3xl justify-center hover:bg-yellow-500 text-white-700 font-semibold hover:text-neutral-900 border border-yellow-500 rounded"
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
