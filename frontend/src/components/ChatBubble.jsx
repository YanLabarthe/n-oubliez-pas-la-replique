export default function ChatBubble({ image, citationCryptee }) {
  return (
    <div className="flex flex-row justify-start">
      <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
        <img src={image} alt="on s'en branle" />
      </div>
      <div className="flex items-center flex-row group">
        <p className="px-6 py-3 rounded-b-full rounded-r-full bg-amber-400 max-w-xs lg:max-w-md">
          {citationCryptee}
        </p>
      </div>
    </div>
  );
}
