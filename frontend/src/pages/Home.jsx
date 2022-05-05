import { useState } from "react";
import RandomAlias from "@components/RandomAlias";

import bulle from "@assets/img/batman.png";
import "./speechBubble.css";

function Home({ name, onNameGenerated }) {
  const [bubbleClasses, setBubbleClasses] = useState("speech-bubble-hide");

  return (
    <div className="h-screen flex flex-col justify-between items-center text-3xl sm:text-6xl">
      {/* ----------Header - nom du site ----------- */}
      <h1 className="pt-5 text-2xl sm:text-5xl">N'oubliez pas la réplique</h1>
      {/* ----------Body - image et pop up bubble ----------- */}
      <div className="relative grow overflow-hidden">
        <div className="max-h-fit">
          <img
            className="w-auto mx-0"
            src={bulle}
            alt="batmancover"
            onMouseOver={() => setBubbleClasses("speech-bubble-show")}
            onMouseOut={() => setBubbleClasses("speech-bubble-hide")}
            onBlur={() => setBubbleClasses("speech-bubble-hide")}
            onFocus={() => setBubbleClasses("speech-bubble-show")}
          />
        </div>
        <div
          className={`hidden sm:absolute sm:flex speech-bubble ${bubbleClasses}`}
        >
          I'm a batman
        </div>
      </div>
      {/* ----------Footer - onClick=>RandomAliasVisible----------- */}
      <div className="">
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
                Put on your mask
              </span>
            </div>

            <div className="h-10  sm:h-24 flex w-fit items-center justify-center">
              <span className="text-lg sm:text-4xl">Chose your alias</span>
            </div>
          </div>
        </button>
        <div className="flex  sm:pb-10">
          <RandomAlias alias={name} />
        </div>
      </div>
    </div>
  );
}

export default Home;
