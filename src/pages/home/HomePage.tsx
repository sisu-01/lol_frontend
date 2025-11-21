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
    <div className="flex flex-row justify-around items-stretch h-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${getRandomBg()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div>
        <GoogldAds />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <span className="text-white">
            둘이 싸우면 누가 이길까?
          </span>
        </div>
        <div>
          <span className="text-5xl text-white">도전! 롤잘알</span>
        </div>
        <div>
          <span className="text-white">
            두 챔피언이 같은 라인으로 마주섰을 때 게임 승률이 어느 쪽이 더 높으가 알아맞춰보세요.
          </span>
        </div>
        <div className="flex flex-col justify-center gap-4 bg-red-200 p-4">        
          <div className="bg-blue-200">
            <GameSet items={rolesData} setItem={setRole} selected={role} />
          </div>
          <button onClick={() => gameStart()}>게임시작</button>
        </div>
        <div className="text-gray-400 text-[16px] leading-4">
          매치업은 최신 op.gg 데이터 기준입니다.
        </div>
      </div>
      <div>
        <GoogldAds />
      </div>
    </div>
  );
}

export default Home;