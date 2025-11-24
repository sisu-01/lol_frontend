interface lifeBoardProps {
  extraLife: number;
  adLife: boolean;
  addExtraLife: () => void;
  isPending: boolean;
}

const LifeBoard = ({ extraLife, adLife, addExtraLife, isPending }: lifeBoardProps) => {

  const buttonHandler = () => {
    if (isPending) return;
    addExtraLife();
  };

  return (
    <div className="select-none absolute top-4 right-4 z-10 flex flex-col items-center gap-2 text-white">
      
      {/* 목숨 표시 */}
      <div className="flex gap-1 text-3xl md:text-4xl">
        {Array.from({ length: extraLife }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>

      {/* 광고 보고 목숨 추가 버튼 */}
      {!adLife && (
        <button
          onClick={buttonHandler}
          disabled={isPending}
          className={`
            flex flex-col items-center gap-1
            bg-gray-200 hover:bg-gray-300
            text-black text-sm font-semibold
            rounded-xl px-3 py-1
            shadow-md
            transition-all
            ${isPending ? 'cursor-not-allowed opacity-50 hover:bg-gray-200' : 'cursor-pointer'}
            ${adLife ? '' : 'bg-green-400'}  /* 선택 시 강조용 색상, 필요에 따라 변경 */
          `}
        >
          <span className="text-gray-700 text-[10px] md:text-sm text-center">
            광고 보고 목숨 추가
          </span>
        </button>
      )}
    </div>
  );
}

export default LifeBoard;
