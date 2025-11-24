interface positionBoardProps {
  position: string;
}

const PositionBoard = ({ position }: positionBoardProps) => {
  return (
    <div className="select-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-4xl font-bold">
      {position}
    </div>
  );
}

export default PositionBoard;