function FourAnswersQuizz({ question, answers, onClick, timerEnded }) {
  return (
    <>
      <div className="m-8 flex flex-grow justify-center items-center text-lg sm:text-3xl">
        <h1>{question}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-center w-3/4 mx-auto my-2">
        {answers.map((answer) => (
          <button
            disabled={timerEnded}
            onClick={onClick}
            type="button"
            className="border border-amber-400 rounded cursor-pointer text-lg flex justify-center p-4 poi hover:bg-yellow-500 text-white-700 font-semibold hover:text-neutral-900"
          >
            {answer.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default FourAnswersQuizz;
