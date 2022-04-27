export default function BubbleAnswer({ answer, isCorrect }) {
  return (
    <div className="flex flex-row justify-end p-2">
      <div className="flex items-center flex-row-reverse">
        <p
          className={`px-6 py-3 rounded-b-full rounded-l-full bg-slate-300 max-w-xs lg:max-w-md ${
            isCorrect ? "my-2 bg-green-500" : "my-2 bg-red-600"
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
