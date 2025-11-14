interface scoreBoardProps {
  score: number;
}

const ScoreBoard = ({ score }: scoreBoardProps) => {
  return (
    <div className="select-none absolute z-10 text-white text-4xl font-bold">
      점수: {score}
    </div>
  );
}

export default ScoreBoard;