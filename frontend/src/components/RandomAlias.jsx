function RandomAlias({ alias }) {
  return (
    <div>
      <p className="mb-5 text-xl">Put on your mask</p>
      {alias && (
        <>
          <div className="text-amber-400 text-xl font-bold"> {alias} </div>
          <p>and let the game begin !</p>
        </>
      )}
    </div>
  );
}

export default RandomAlias;
