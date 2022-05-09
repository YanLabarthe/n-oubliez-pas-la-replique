import BatFace from "./BatFace";

export default function BatmanAnswer({ face, answer }) {
  return (
    <div className="flex flex-row justify-start my-3 w-full">
      <div className="w-22 h-24 relative flex flex-shrink-0 mx-2">
        <BatFace className="" face={face} />
      </div>
      <div className="flex items-center flex-row group ml-4">
        <p className="text-left px-6 py-3 rounded-b-lg rounded-r-lg bg-amber-500 max-w-xs lg:max-w-md">
          {answer}
        </p>
      </div>
    </div>
  );
}
