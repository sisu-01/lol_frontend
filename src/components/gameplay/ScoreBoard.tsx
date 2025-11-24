interface scoreBoardProps {
  score: number;
}

const ScoreBoard = ({ score }: scoreBoardProps) => {
  const stored = localStorage.getItem("highestScore");
  const highestScore = stored ? Number(stored) : 0;
  return (
    <div className="select-none absolute right-0 z-10 text-white text-4xl font-bold">
      최고 점수: {highestScore}<br/> 점수: {score}
    </div>
  );
}

export default ScoreBoard;