import { useState, useEffect, useRef } from "react";
import batFaceImg from "@assets/batFaceImg";
import { cryptedQuote, randomWord } from "@services/cryptedQuote";
import sendAnswerButton from "@assets/img/send.png";
import BatFace from "@components/BatFace";
import BubbleAnswer from "@components/BubbleAnswer";
import BatmanAnswer from "@components/BatmanAnswer";
import Timer from "@components/Timer";
import { Link } from "react-router-dom";
import getRandomQuoteIndex from "@services/randomQuoteIndex";
import { getQuotes } from "@services/api";
import TypingAnimation from "@components/TypingAnimation";

export default function Quizz({ alias, onFinished }) {
  // contains all the quotes after import
  const [api, setApi] = useState([]);

  // contains the current word you have to guess from the crypted quote
  const [wordToGuess, setWordToGuess] = useState();

  // gives the possibility to set all the button disabled at the end of the timer
  const [timerEnded, setTimerEnded] = useState(false);

  // contains the current index of the crypted quote
  const [quoteIndex, setQuoteIndex] = useState();

  // contains the current score of the user
  const [score, setScore] = useState(0);

  // contains the current answer of the user sent from the input
  const [userMessage, setUserMessage] = useState("");

  // contains all the messages (all the userMessage and all the answer of batman, definied in the action function)
  const [messageList, setMessageList] = useState([]);

  // set's the face of batman depending if the user answer is good or bad
  const [batFace, setBatFace] = useState(batFaceImg.neutral);

  const [isTyping, setIsTyping] = useState(false);

  const endMessagesRef = useRef(null);

  // imports all the quotes from MySQL and initialize all the values of the first crypted quote
  useEffect(async () => {
    const newApi = await getQuotes();
    setApi(newApi);

    const newQuoteIndex = getRandomQuoteIndex(newApi.length);
    const firstWordToGuess = randomWord(newApi[newQuoteIndex].content);

    setMessageList([
      {
        name: "batman",
        message: cryptedQuote(newApi[newQuoteIndex].content, firstWordToGuess),
      },
    ]);
    setQuoteIndex(newQuoteIndex);
    setWordToGuess(firstWordToGuess);
  }, []);

  // Tracks the score value so we can transfer it from here to the App page (we didn't succeed to have the score value one the App page without that useEffect)
  useEffect(() => {
    if (timerEnded) {
      onFinished(score);
    }
  }, [timerEnded]);

  const onGameEnd = () => {
    setTimerEnded(true);
    endMessagesRef.current?.scrollIntoView();
  };

  useEffect(() => {
    endMessagesRef.current?.scrollIntoView();
  }, [messageList]);

  // function that gives the title of the movie
  const getTitleQuote = () => {
    setMessageList([
      ...messageList,
      {
        name: "batman",
        message: cryptedQuote(api[quoteIndex].title, wordToGuess),
      },
    ]);
  };

  // function that gives some letters in the word to guess
  const needHelp = () => {
    setMessageList([
      ...messageList,
      {
        name: "batman",
        message: cryptedQuote(api[quoteIndex].content, wordToGuess, 1),
      },
    ]);
  };

  // function that gives the answer to the crypted quote and generate a new crypted quote
  const needAnswer = () => {
    const newQuoteIndex = getRandomQuoteIndex(api.length);
    let newWordToGuess = wordToGuess;
    newWordToGuess = randomWord(api[newQuoteIndex].content);
    setWordToGuess(newWordToGuess);
    setQuoteIndex(newQuoteIndex);
    setMessageList([
      ...messageList,
      {
        name: "batman",
        message: wordToGuess,
      },
      {
        name: "batman",
        message: cryptedQuote(api[newQuoteIndex].content, newWordToGuess),
      },
    ]);
  };

  // function launched after a answer is sent by the user
  const action = (event) => {
    event.preventDefault();

    if (userMessage !== "") {
      let winstreak = 0;
      let losestreak = 0;
      const userResponse = {
        name: "user",
        message: userMessage,
        isCorrect: false,
      };

      const batmanResponse = {
        name: "batman",
        message: "",
        isCorrect: true,
      };

      const newQuoteIndex = getRandomQuoteIndex(api.length);
      let newWordToGuess = wordToGuess;

      const isGoodResponse =
        userMessage.toLowerCase() === wordToGuess.toLowerCase();

      // case 1 : Good answer
      if (isGoodResponse) {
        setScore(score + 10);
        userResponse.isCorrect = true;
        batmanResponse.isCorrect = true;
        batmanResponse.message = "Good.";
        newWordToGuess = randomWord(api[newQuoteIndex].content);
        setWordToGuess(newWordToGuess);
        setQuoteIndex(newQuoteIndex);

        if (winstreak === 2) {
          setBatFace(batFaceImg.happy);
        }

        winstreak += 1;
        losestreak = 0;

        // case 2 : Wrong answer
      } else {
        winstreak = 0;
        losestreak += 1;
        batmanResponse.message = "you are a loser";
        batmanResponse.isCorrect = false;

        if (losestreak === 2) {
          setBatFace(batFaceImg.angry);
        }
      }

      setMessageList([...messageList, userResponse]);

      setIsTyping(true);

      setTimeout(() => {
        setMessageList([...messageList, userResponse, batmanResponse]);
      }, 1000);

      setTimeout(() => {
        setMessageList([
          ...messageList,
          userResponse,
          batmanResponse,
          {
            name: "batman",
            message: cryptedQuote(
              api[isGoodResponse ? newQuoteIndex : quoteIndex].content,
              isGoodResponse ? newWordToGuess : wordToGuess
            ),
          },
        ]);
        setIsTyping(false);
      }, 2500);

      setUserMessage("");
    }
  };

  // after the database of quotes is loaded
  return (
    <div className="m-0 flex flex-col h-screen w-full border-amber-100 overflow-hidden shadow-lg">
      {/* ------- Header du Chat / là où s'affiche le statut de Batman------- */}
      <div className="flex flex-row justify-between items-center shadow bg-amber-500">
        <div className="flex ">
          <div className="flex ">
            <BatFace className="lg:h-26 " face={batFace} />
          </div>
          <div className="m-0 min-h-full text-sm ml-4 text-gray-900 flex flex-col justify-center ">
            <p className="font-bold pt-2 text-2xl flex justify-self-center sm:pt-0 sm:text-base">
              Batman
            </p>
            <p className="hidden sm:flex ">Justicier et mauvais perdant</p>
          </div>
        </div>

        {!timerEnded && (
          <h3 className="bg-neutral-900  rounded-full p-4">
            <Timer duration={120} onFinished={onGameEnd} />
          </h3>
        )}

        <div className="flex p-4">
          <div>
            <button
              type="button"
              disabled={timerEnded}
              onClick={getTitleQuote}
              className="bg-black hover:bg-gray-900 text-yellow text-center py-2 px-4 rounded-full h-12 w-12 inline-flex items-center ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </button>
            <h3 className="w-full h-full fill-current text-black ml-2">
              titre
            </h3>
          </div>

          <div>
            <button
              title="donne certaines lettres du mot"
              type="button"
              disabled={timerEnded}
              onClick={() => {
                needHelp();
              }}
              className="bg-black hover:bg-gray-900 text-yellow text-center py-2 px-4 rounded-full h-12 w-12 inline-flex items-center ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </button>
            <h3 className="w-full h-full fill-current text-black ml-2 ">
              Aide
            </h3>
          </div>
        </div>
      </div>
      {/* ------- Body du Chat ------- */}

      <div className="chat_body flex flex-col grow overflow-auto text-neutral-900 bg-neutral-900">
        <div className="p-2">
          {messageList.map((mess) => (
            <>
              {mess.name === "user" && (
                <BubbleAnswer
                  answer={mess.message}
                  isCorrect={mess.isCorrect}
                />
              )}

              {mess.name === "batman" && (
                <BatmanAnswer
                  answer={mess.message}
                  face={mess.isCorrect ? batFaceImg.happy : batFaceImg.angry}
                />
              )}
            </>
          ))}
          <TypingAnimation face={batFace} isTyping={isTyping} />
        </div>
        {timerEnded && (
          <Link
            className={`py-3 mx-20 sm:py-5 sm:px-10 flex hover:text-neutral-900 justify-center sm:my-10 sm:w-13 sm:ml-60 sm:mr-60 hover:bg-amber-500 bg-neutral-900 text-amber-500 border-yellow-500 text-white-700 font border border-current hover:border-transparent rounded-full `}
            to="/scoreboard"
          >
            <h3>Scoreboard</h3>
          </Link>
        )}

        <div ref={endMessagesRef} />
      </div>

      {/* ------- Footer du Chat / là où on tape sa réponse ------- */}
      <div className="flex-none">
        <div className="flex flex-row items-center p-4">
          <span className="sm:block text-2xl rounded-full p-10 py-2 ml-4 text-amber-500">
            <h3>{alias}</h3>
            <h3>SCORE : {score} </h3>
          </span>
          <div className="flex-grow">
            <label className="flex-grow" htmlFor="cryptedQuoteAnswer">
              <form className="relative flex-grow" onSubmit={action}>
                <input
                  className=" rounded-full py-2 pl-3 pr-10 w-full border border-amber-800 focus:border-amber-300 bg-gray-300 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                  type="text"
                  disabled={timerEnded}
                  placeholder="Aa"
                  onChange={(e) => setUserMessage(e.target.value)}
                  value={userMessage}
                  onSubmit={action}
                />
                <button
                  type="button"
                  disabled={timerEnded}
                  onClick={action}
                  className="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-red-300 hover:text-amber-600 w-6 h-6"
                >
                  <img
                    src={sendAnswerButton}
                    alt="button in the input to send the answer"
                  />
                </button>
              </form>
            </label>
          </div>
          <button
            title="réponse"
            type="button"
            disabled={timerEnded}
            onClick={() => {
              needAnswer();
            }}
            className="cursor-pointer flex flex-shrink-0 focus:outline-none mx-2 block text-amber-500 hover:text-amber-64300 w-6 h-6"
          >
            <svg
              viewBox="0 0 20 20"
              transform="rotate(180)"
              className="w-full h-full fill-current animate-waving-hand"
            >
              <path d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
