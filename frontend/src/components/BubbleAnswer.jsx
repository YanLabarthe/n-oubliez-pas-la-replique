export default function BubbleAnswer({ answer, isCorrect }) {
  return (
    <div
      className={`flex items-center flex-row-reverse group ${
        isCorrect ? "my-2 bg-green-500" : "my-2 bg-red-600"
      }`}
    >
      <p className="px-6 py-3 rounded-b-full rounded-l-full bg-slate-300 max-w-xs lg:max-w-md">
        {answer}
      </p>
    </div>
  );
}
