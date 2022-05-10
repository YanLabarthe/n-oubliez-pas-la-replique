function TypingAnimationRight({ isTyping }) {
  return (
    isTyping && (
      <div className="flex flex-row justify-end p-2 w-full">
        <div className="flex items-center flex-row-reverse">
          <div className="px-6 py-3 rounded-b-full rounded-l-full bg-slate-300 max-w-xs lg:max-w-md">
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

export default TypingAnimationRight;
