import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameSet from "../../components/GameSet";
import type { RoleType } from "../../types/game";
import { rolesData } from "../../data/game";
import GoogldAds from "../../components/GoogleAds";

const Home = () => {
  const [role, setRole] = useState<RoleType| ''>('');
  const navigate = useNavigate();

  const gameStart = () => {
    if (!role) {alert('라인을 선택해주세요.');return;}
    navigate(`/game?role=${role}`);
  }

  const bgUrls = [
    // "https://media.giphy.com/media/3etP8HqLPVixUc9Y3s/giphy.gif",
    // "https://media.giphy.com/media/BmmfETghGOPrW/giphy.gif",
    "https://media.giphy.com/media/26Ec7TKFZ9XED3MM8/giphy.gif",
    "https://media.giphy.com/media/5h9jqglckLc1HQbPvT/giphy.gif",
    "https://media.giphy.com/media/fFxiqBNam2UtAYa9Oi/giphy.gif",
    "https://media.giphy.com/media/fvxUIwNJRaj8UQe3ti/giphy.gif",
    "https://media.giphy.com/media/KBPu6znQu2DsgPvOpm/giphy.gif",
    "https://media.giphy.com/media/jU2wR5WIzi1wnoHJkx/giphy.gif",
    "https://media.giphy.com/media/i8ztw1wqGxqRysjAnZ/giphy.gif"
  ];

  const getRandomBg = () => {
    const randomIndex = Math.floor(Math.random() * bgUrls.length);
    return bgUrls[randomIndex];
  }
    
  return (
    <div className="w-full h-full flex flex-row justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${getRandomBg()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hidden md:block p-4">
        <GoogldAds />
      </div>

      <div className="flex flex-col justify-center items-center gap-8 text-center px-4">
        <div className="flex flex-col items-center text-center relative">
          {/* 서브 타이틀 */}
          <span className="text-base sm:text-lg text-gray-200 drop-shadow-md animate-fadeIn">
            둘이 싸우면 누가 이길까?
          </span>
          {/* 메인 타이틀 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide mt-2 animate-fadeIn delay-200">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-[0_0_15px_rgba(255,165,0,0.8)]">
              도전!
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 drop-shadow-[0_0_15px_rgba(128,0,128,0.8)]">
              롤잘알
            </span>
          </h1>
        </div>
        {/* 설명 문구 */}
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl drop-shadow mt-3">
          ** 라인전 승패 말고 게임 전체 승률을 맞춰주세요!😋**
        </p>
        {/* 역할 선택 카드 */}
        <div className="flex flex-col justify-center gap-6 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md w-full">
          <div className="p-4 backdrop-blur rounded-xl shadow-inner">
            <GameSet items={rolesData} setItem={setRole} selected={role} />
          </div>
          <button
            onClick={gameStart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all active:scale-95"
            >
            게임 시작
          </button>
        </div>
        {/* 하단 안내 텍스트 */}
        <div className="text-gray-300 text-sm sm:text-base leading-4 mt-4">
          매치업은 최신 op.gg 데이터 기준입니다.
        </div>
      </div>
      <div className="hidden md:block p-4">
        <GoogldAds />
      </div>
      {/* TailwindCSS 확장: animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </div>
  );
}

export default Home;