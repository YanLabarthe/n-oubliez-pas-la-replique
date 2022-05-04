import { useState } from "react";
import RandomAlias from "@components/RandomAlias";

import bulle from "@assets/img/batman.png";
import "./speechBubble.css";

function Home({ name, onNameGenerated }) {
  const [bubbleClasses, setBubbleClasses] = useState("speech-bubble-hide");

  return (
    <div className="h-screen flex flex-col justify-between items-center text-6xl">
      <h1 className="pt-24 text-5xl sm:text-7xl">N'oubliez pas la réplique</h1>

      <div className="relative">
        <img
          className="max-w-sm w-full sm:max-w-md"
          src={bulle}
          alt="batmancover"
          onMouseOver={() => setBubbleClasses("speech-bubble-show")}
          onMouseOut={() => setBubbleClasses("speech-bubble-hide")}
          onBlur={() => setBubbleClasses("speech-bubble-hide")}
          onFocus={() => setBubbleClasses("speech-bubble-show")}
        />

        <div
          className={`hidden sm:absolute sm:block speech-bubble ${bubbleClasses}`}
        >
          I'm a batman
        </div>
      </div>

      <button
        type="button"
        onClick={onNameGenerated}
        className={`relative group w-fit overflow-hidden px-8 h-24 ${
          name === "" ? "visibility: visible" : "visibility : hidden"
        } border hover:bg-yellow-500 hover:text-black font-semibold border-yellow-500 rounded`}
      >
        <div
          aria-hidden="true"
          className="transition w-fit duration-300 group-hover:-translate-y-24"
        >
          <div className="h-24 flex w-fit items-center justify-center">
            <span className="text-4xl text-center">Put on your mask</span>
          </div>

          <div className="h-24 flex w-fit items-center justify-center">
            <span className="text-4xl">Chose your alias</span>
          </div>
        </div>
      </button>

      <RandomAlias alias={name} />
    </div>
  );
}

export default Home;

/*   var rectangle = $("#Rectangle");
var speechBubble = $("#SpeechBubble");

  rectangle.hover(
    function () {
      speechBubble.css({
        "animation-name": "expand-bounce",
        "animation-duration": "0.25s",
      });
    },
    function () {
      speechBubble.css({
        "animation-name": "shrink",
        "animation-duration": "0.1s",
      });
    }
  ); */

/*       <button
        type="button"
        className={`my-2 w-fit justify-center content-center bg-transparent hover:bg-yellow-500 text-white-700 font-semibold ${
          name === "" ? "visibility: visible" : "visibility : hidden"
        } hover:text-white p-4 border border-yellow-500 hover:border-transparent rounded`}
        onClick={onNameGenerated}
      >
        Put on your mask
      </button>
       */
