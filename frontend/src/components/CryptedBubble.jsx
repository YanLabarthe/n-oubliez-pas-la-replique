import BatFace from "./BatFace";

export default function CryptedBubble({ batFace, citationCryptee }) {
  return (
    <div className="flex flex-row justify-start">
      <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
        <BatFace face={batFace} />
      </div>
      <div className="flex items-center flex-row group">
        <p className="px-6 py-3 rounded-b-lg rounded-r-lg bg-amber-400 max-w-xs lg:max-w-md lg:rounded-b-full lg:rounded-r-full">
          {citationCryptee}
        </p>
      </div>
    </div>
  );
}
