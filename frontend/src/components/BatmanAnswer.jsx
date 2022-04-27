import BatFace from "./BatFace";

export default function BatmanAnswer({ batFace, answer }) {
  return (
    <div className="flex flex-row justify-start my-3">
      <div className="w-12 h-12 relative flex flex-shrink-0 mx-4 my-3">
        <BatFace face={batFace} />
      </div>
      <div className="flex items-center flex-row group">
        <p className="px-6 py-3 rounded-b-full rounded-r-full bg-amber-400 max-w-xs lg:max-w-md">
          {answer}
        </p>
      </div>
    </div>
  );
}
