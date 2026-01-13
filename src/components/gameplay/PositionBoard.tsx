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
    <div className="select-none absolute top-4 left-1/2 -translate-x-1/2 lg:top-1/3 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 text-white text-2xl lg:text-4xl font-bold">
      {positionTxt[position]}
    </div>
  );
}

export default PositionBoard;