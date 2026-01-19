// src/pages/game/GamePage.tsx
// import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useGame } from "./hooks/useGame";
import GameOver from "../../components/gameplay/Gameover";
import ScoreBoard from "../../components/gameplay/ScoreBoard";
import Versus from "../../components/gameplay/Versus";
import Error from "../../components/gameplay/Error";
import Loading from "../../components/gameplay/Loading";
import Slider from "../../components/gameplay/Slider";
import type { RoleType } from "../../types/game";
import { dDragonContext } from "../../context/dDragonContext";
import PositionBoard from "../../components/gameplay/PositionBoard";
import Admodal from "../../components/gameplay/AdModal";
import LifeBoard from "../../components/gameplay/LifeBoard";
// import { useEffect } from "react";
import Animation from "../../components/gameplay/Animation";
import { Helmet } from "react-helmet-async";

const GamePage = () => {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get("role");
  const role: RoleType = (roleParam as RoleType);
  const {
    chmpDataJson,
    isLoading,
    isPending,
    isAnimating,
    isSliding,
    showAdModal,
    error,
    score,
    extraLife,
    gameover,
    currentMatch,
    nextMatch,
    gameStart,
    setIsPending,
    setModalHide,
    isCorrectChampion,
    switchCurrentAndNextMatch,
  } = useGame(role);
  
  // const location = useLocation();
  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   if(!location.state?.access || sessionStorage.getItem('refresh') === "true") {
  //     navigate('/', { replace: true });
  //   }
    
  //   const handleBeforeUnload = () => {
  //     // 새로고침 또는 창을 닫을 때 실행
  //     sessionStorage.setItem('refresh', 'true');
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => {
  //     // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, [location, navigate]);
  
  // if (!location.state?.access) return null;
  if (error) return <Error />;
  if (gameover) return <GameOver score={score} gameStart={gameStart} />;
  if (isLoading || currentMatch === null || nextMatch === null) return <Loading />;

  const positionxTxt = {
    'all': '전 라인',
    'top': '탑',
    'jungle': '정글',
    'mid': '미드',
    'adc': '원딜',
    'support': '서포터'
  }

  return (
    <>
      <Helmet>
        <title>{positionxTxt[currentMatch.position]} 퀴즈 | 도전! 롤든벨</title>
        <meta property="og:title" content={`${positionxTxt[currentMatch.position]} 퀴즈 | 도전! 롤든벨`} />
        <meta name="description" content="두 챔피언이 싸우면 누가 이길까? 최신 데이터 기반 롤 상성 퀴즈! 챔피언 상성, 아이템 빌드와 트렌드를 반영한 퀴즈를 풀고 롤 지식왕에 도전하세요." />
        <link rel="canonical" href={`https://www.lol-updown.com/game?role=${currentMatch.position}`} />
      </Helmet>
      <ScoreBoard score={score} />
      <LifeBoard extraLife={extraLife} />
      <Animation isAnimating={isAnimating} />
      {!isSliding ? (
        <>
          {role==="all" ? <PositionBoard position={currentMatch.position} /> : ''}
          <Versus />
        </>
      ): ("")}
      <dDragonContext.Provider value={chmpDataJson}>
        <Slider
          isPending={isPending}
          setIsPending={setIsPending}
          isSliding={isSliding}
          currentMatch={currentMatch}
          nextMatch={nextMatch}
          isCorrectChampion={isCorrectChampion}
          switchCurrentAndNextMatch={switchCurrentAndNextMatch}
        />
      </dDragonContext.Provider>

      {showAdModal && <Admodal setModalHide={setModalHide} />}
    </>
  );
}

export default GamePage;