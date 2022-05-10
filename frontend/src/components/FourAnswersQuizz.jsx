import "../base.css";

function FourAnswersQuizz({ question, answers, onClick, timerEnded }) {
  return (
    <>
      <div className="m-8 flex flex-grow justify-center text-amber-400 items-center text-lg sm:text-3xl">
        <h1>{question}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-center w-3/4 mx-auto my-2">
        {answers.map((answer) => (
          <button
            disabled={timerEnded}
            onClick={onClick}
            type="button"
            className="highlight rounded cursor-pointer text-xl flex justify-center p-4 text-neutral-900 font-semibold hover:text-amber-400"
          >
            <h3> {answer.title}</h3>
          </button>
        ))}
      </div>
    </>
  );
}

export default FourAnswersQuizz;
