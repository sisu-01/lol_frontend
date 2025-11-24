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
    <div className="h-full flex flex-row justify-between items-center"
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
        {/* 서브 타이틀 */}
        <span className="text-lg sm:text-xl text-blue-200 drop-shadow">
          둘이 싸우면 누가 이길까?
        </span>
        {/* 메인 타이틀 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
          도전! 롤잘알
        </h1>
        {/* 설명 문구 */}
        {/* <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl drop-shadow">
          두 챔피언이 같은 라인에서 마주섰을 때,
          <br />
          어느 쪽의 승률이 더 높은지 맞춰보세요!
        </p> */}
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
    </div>
  );
}

export default Home;