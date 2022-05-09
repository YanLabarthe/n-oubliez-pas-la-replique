function FourAnswersQuizz({
  className,
  question,
  answers,
  onClick,
  timerEnded,
}) {
  return (
    <>
      <div className={className}>{question}</div>
      {answers.map((answer) => (
        <button
          disabled={timerEnded}
          onClick={onClick}
          type="button"
          className="flex px-20 py-3 w-[30%] text-3xl justify-center hover:bg-yellow-500 text-white-700 font-semibold hover:text-neutral-900 border border-yellow-500 rounded"
        >
          {answer.title}
        </button>
      ))}
    </>
  );
}

export default FourAnswersQuizz;
