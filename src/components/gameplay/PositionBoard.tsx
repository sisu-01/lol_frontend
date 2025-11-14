interface positionBoardProps {
  position: string;
}

const PositionBoard = ({ position }: positionBoardProps) => {
  return (
    <div className="select-none absolute right-0 z-10 text-white text-4xl font-bold">
      {position}
    </div>
  );
}

export default PositionBoard;