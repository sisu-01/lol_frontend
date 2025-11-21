import { useNavigate } from 'react-router-dom';
import GoogldAds from '../GoogleAds';

interface gameOverProps {
  score: number;
}

const GameOver = ({ score }: gameOverProps) => {
  const navigate = useNavigate();
  const playAgain = () => window.location.reload();
  const goToMain = () => navigate('/');

  return (
    <div className="flex flex-row justify-around items-stretch h-full">
      <div>
        <GoogldAds />
      </div>
      <div className="h-full flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center items-center gap-4 bg-amber-200 p-4">
        <div>
          당신의 점수 {score}
        </div>
        <div>
          유저 평균 점수: null
        </div>
        <div className="flex flex-row gap-2">
          <button onClick={() => playAgain()}>다시하기</button>
          <button onClick={() => goToMain()}>메인으로</button>
        </div>
      </div>
    </div>
      <div>
        <GoogldAds />
      </div>
    </div>
    
  );
}

export default GameOver;