import { useState } from "react";
import RandomAlias from "@components/RandomAlias";

import bulle from "@assets/img/batman.png";
import "./speechBubble.css";

function Home({ name, onNameGenerated }) {
  const [bubbleClasses, setBubbleClasses] = useState("speech-bubble-hide");

  return (
    <div className="h-screen flex flex-col justify-between items-center text-3xl sm:text-6xl">
      {/* ----------Header - nom du site ----------- */}
      <h1 className="py-4 text-2xl sm:text-5xl tracking-wide">
        N'oubliez pas la réplique
      </h1>
      {/* ----------Body - image et pop up bubble ----------- */}
      <div className="relative flex justify-center items-center grow overflow-hidden">
        <img
          className="h-auto mx-auto w-3/6"
          src={bulle}
          alt="batmancover"
          onMouseOver={() => setBubbleClasses("speech-bubble-show")}
          onMouseOut={() => setBubbleClasses("speech-bubble-hide")}
          onBlur={() => setBubbleClasses("speech-bubble-hide")}
          onFocus={() => setBubbleClasses("speech-bubble-show")}
        />

        <div
          className={`hidden sm:absolute sm:flex speech-bubble ${bubbleClasses}`}
        >
          I'm batman
        </div>
      </div>
      {/* ----------Footer - onClick=>RandomAliasVisible----------- */}
      <div className="pb-2">
        <button
          type="button"
          onClick={onNameGenerated}
          className={`relative group w-fit overflow-hidden px-8 h-10 sm:h-24 ${
            name === "" ? "visibility: visible" : "visibility : hidden"
          } border hover:bg-yellow-500 hover:text-black font-semibold border-yellow-500 rounded`}
        >
          <div
            aria-hidden="true"
            className="transition w-fit duration-300 group-hover:-translate-y-10 sm:group-hover:-translate-y-24"
          >
            <div className="h-10 sm:h-24 flex w-fit items-center justify-center">
              <span className="text-lg sm:text-4xl text-center">
                <h3>Put on your mask</h3>
              </span>
            </div>

            <div className="h-10  sm:h-24 flex w-fit items-center justify-center">
              <span className="text-lg sm:text-4xl tracking-wide">
                <h3 className="tracking-wider">Chose your alias</h3>
              </span>
            </div>
          </div>
        </button>
        <div className="flex  sm:pb-10">
          <h3 className="tracking-wide">
            <RandomAlias alias={name} />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
