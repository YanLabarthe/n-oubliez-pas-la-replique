import BatFace from "./BatFace";

function TypingAnimationLeft({ face, isTyping }) {
  return (
    isTyping && (
      <div className="flex flex-row justify-start my-3 w-full">
        <div className="w-22 h-24 relative flex flex-shrink-0 mx-2">
          <BatFace className="" face={face} />
        </div>
        <div className="flex items-center flex-row group ml-4">
          <div className="text-left px-6 py-4 rounded-b-lg rounded-r-lg bg-amber-500 max-w-xs lg:max-w-md">
            <div className="snippet" data-title=".dot-flashing">
              <div className="stage">
                <div className="dot-flashing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default TypingAnimationLeft;
