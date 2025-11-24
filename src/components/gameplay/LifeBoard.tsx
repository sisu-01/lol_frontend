interface lifeBoardProps {
  extraLife: number;
}

const LifeBoard = ({ extraLife }: lifeBoardProps) => {
  return (
    <div className="select-none absolute z-10 text-white text-4xl font-bold bg-yellow-200">
      {Array.from({ length: extraLife }).map((_, i) => (
        <span key={i}>❤️</span>
      ))}
    </div>
  );
}

export default LifeBoard;