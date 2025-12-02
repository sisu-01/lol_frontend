interface lifeBoardProps {
  extraLife: number;
}

const LifeBoard = ({ extraLife }: lifeBoardProps) => {

  return (
    <div className="select-none absolute top-4 right-4 z-10 flex flex-col items-center gap-2 text-white">
      
      {/* 목숨 표시 */}
      <div className="flex gap-1 text-3xl md:text-4xl">
        {Array.from({ length: extraLife }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>
    </div>
  );
}

export default LifeBoard;
