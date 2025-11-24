interface lifeBoardProps {
  extraLife: number;
  adLife: boolean;
  addExtraLife: () => void;
}

const LifeBoard = ({ extraLife, adLife, addExtraLife }: lifeBoardProps) => {
  return (
    <div className="select-none absolute z-10 text-white text-4xl font-bold bg-yellow-200">
      {Array.from({ length: extraLife }).map((_, i) => (
        <span key={i}>❤️</span>
      ))}
      {!adLife? (
        <button className="cursor-pointer" onClick={() => addExtraLife()}>
        ❤️‍🔥<span className="text-black ">+</span><span className="text-gray-500 text-sm">광고 보고 목숨 추가</span>
        </button>
      ): ''}
      
    </div>
  );
}

export default LifeBoard;