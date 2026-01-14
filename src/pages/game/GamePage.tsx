// src/pages/game/GamePage.tsx
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
import { useEffect } from "react";

const GamePage = () => {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get("role");
  const role: RoleType = (roleParam as RoleType);
  const {
    chmpDataJson,
    isLoading,
    isPending,
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
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!location.state?.access) {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);
  
  if (!location.state?.access) return null;
  if (error) return <Error />;
  if (gameover) return <GameOver score={score} gameStart={gameStart} />;
  if (isLoading || currentMatch === null || nextMatch === null) return <Loading />;

  return (
    <>
      <ScoreBoard score={score} />
      <LifeBoard extraLife={extraLife} />
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