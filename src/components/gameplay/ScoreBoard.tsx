interface scoreBoardProps {
  score: number;
}

const ScoreBoard = ({ score }: scoreBoardProps) => {
  const stored = localStorage.getItem("highestScore");
  const highestScore = stored ? Number(stored) : 0;

  return (
    <div className="
      select-none
      absolute top-4 left-4
      z-10
      bg-black/50 backdrop-blur-sm
      text-white
      rounded-xl
      px-4 py-2
      text-base md:text-lg lg:text-xl
      font-bold
      shadow-lg
      text-center
      "
    >
      <div>최고 점수: <span className="text-yellow-400">{highestScore}</span></div>
      <div>점수: <span className="text-green-400">{score}</span></div>
    </div>
  );
}

export default ScoreBoard;
