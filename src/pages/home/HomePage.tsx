import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameSet from "../../components/GameSet";
import type { RoleType } from "../../types/game";
import { rolesData } from "../../data/game";
// import GoogldAds from "../../components/GoogleAds";

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
    <div className="w-full h-full flex flex-row justify-between items-center"
    // <div className="w-full h-full justify-between items-center overflow-auto"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${getRandomBg()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hidden md:block p-4">
        {/* <GoogldAds /> */}
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-5 text-center px-4">
        <div>
          <img src="/logo.svg" className="h-[200px]" alt="도전! 롤든벨" />
        </div>
        <div>
          <span className="desc text-base sm:text-6xl text-gray-200 drop-shadow-md animate-fadeIn">
            둘이 싸우면&nbsp;<span className="text-yellow-200">누가</span>&nbsp;이길까?
          </span>
        </div>
        {/* 설명 문구 */}
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl drop-shadow mt-3">
          ** 라인전 승패 말고 게임 최종 승자를 맞춰주세요!😋**
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

        <div className="text-gray-300 text-sm sm:text-base leading-4 mt-4">
          매치업은 최신 op.gg 데이터 기준입니다.
        </div>

        {/* <div className="mt-12 p-6 bg-gray-900 text-gray-300 rounded-lg border border-gray-700 leading-relaxed text-sm md:text-base">
          <section className="mb-6">
            <h2 className="text-xl font-bold text-yellow-400 mb-3">도전! 롤든벨: 리그 오브 레전드 상성 퀴즈 가이드</h2>
            <p>
              리그 오브 레전드(LoL)는 160여 명이 넘는 챔피언들이 존재하며, 각 챔피언 간의 '상성'은 승패를 결정짓는 핵심 요소입니다. <strong>도전! 롤든벨</strong>은 이러한 복잡한 챔피언 메커니즘을 퀴즈 형식으로 풀어내어, 초보자(뉴비)들이 소환사의 협곡에 더 쉽게 적응할 수 있도록 돕는 학습형 웹 게임입니다. 
            </p>
          </section>
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2 underline underline-offset-4 decoration-yellow-500">게임 방법 및 데이터 기준</h3>
            <p className="mb-2">
              본 게임은 무작위로 매칭되는 두 챔피언의 라인전 혹은 한타 기여도를 기반으로 문제를 출제합니다. 사용자는 제시된 상황에서 어떤 챔피언이 더 우위에 있는지 판단해야 합니다.
            </p>
            <ul className="list-disc ml-5 space-y-1 text-gray-400">
              <li><strong>데이터 집계:</strong> 퀴즈의 정답 기준은 글로벌 플래티넘 티어 이상의 랭크 게임 승률, 라인전 킬 확률, 그리고 Riot API를 통한 실제 매치업 통계를 바탕으로 구성되었습니다.</li>
              <li><strong>실시간 메타 반영:</strong> 최신 패치 노트와 아이템 변경 사항을 고려하여 주기적으로 퀴즈 데이터셋을 업데이트합니다.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">뉴비 플레이 팁: 상성을 알아야 하는 이유</h3>
            <p>
              단순히 컨트롤 실력(피지컬)만으로는 한계가 있습니다. 상대 챔피언의 스킬 쿨타임과 상성을 이해하면, 불리한 라인전에서도 '사리는 플레이'를 통해 성장을 도모할 수 있습니다. <strong>도전! 롤든벨</strong>을 통해 반복적으로 상성을 학습하면 인게임 밴픽 단계에서부터 전략적인 우위를 점할 수 있으며, 이는 곧 승률 상승과 티어 점수 향상으로 이어집니다.
            </p>
          </section>
        </div> */}
      </div>
      <div className="hidden md:block p-4">
        {/* <GoogldAds /> */}
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