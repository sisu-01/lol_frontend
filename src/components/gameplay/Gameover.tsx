import { useNavigate } from "react-router-dom";
import GoogldAds from "../GoogleAds";

interface gameOverProps {
  score: number;
}

const GameOver = ({ score }: gameOverProps) => {
  const navigate = useNavigate();
  const playAgain = () => window.location.reload();
  const goToMain = () => navigate("/");

  const url = "https://media1.tenor.com/m/MusbmvXoZXYAAAAd/lol-defeat-game.gif";

  return (
    <div
      className="h-full flex flex-row justify-between items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* 좌측 광고 */}
      <div className="hidden md:block p-4">
        <GoogldAds />
      </div>

      {/* 중앙 결과 카드 */}
      <div className="flex flex-col justify-center items-center w-full px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl flex flex-col items-center gap-6 max-w-md w-full">

          <h2 className="text-3xl font-bold text-gray-900 drop-shadow">
            게임 종료!
          </h2>

          <div className="text-xl font-semibold text-gray-800">
            당신의 점수: <span className="text-blue-600">{score}</span>
          </div>

          <div className="text-gray-700">
            유저 평균 점수: <span className="italic text-gray-500">준비중…</span>
          </div>

          {/* 버튼 영역 */}
          <div className="flex flex-row gap-4">
            <button
              onClick={playAgain}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              다시하기
            </button>
            <button
              onClick={goToMain}
              className="bg-gray-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              메인으로
            </button>
          </div>
        </div>
      </div>

      {/* 우측 광고 */}
      <div className="hidden md:block p-4">
        <GoogldAds />
      </div>
    </div>
  );
};

export default GameOver;
