interface positionBoardProps {
  position: 'top'|'jungle'|'mid'|'adc'|'support';
}

const positionTxt = {
  'top': '탑',
  'jungle': '정글',
  'mid': '미드',
  'adc': '원딜',
  'support': '서포터',
}

const PositionBoard = ({ position }: positionBoardProps) => {
  
  return (
    <div className="select-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-4xl font-bold">
      {positionTxt[position]}
    </div>
  );
}

export default PositionBoard;