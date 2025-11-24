// src/pages/game/GamePage.tsx
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
    adLife,
    gameover,
    currentMatch,
    nextMatch,
    setIsPending,
    addExtraLife,
    setModalHide,
    isCorrectChampion,
    switchCurrentAndNextMatch,
    // modalChoice
   } = useGame(role);

  if (error) return <Error />;
  if (gameover) return <GameOver score={score} />;
  if (isLoading || currentMatch === null || nextMatch === null) return <Loading />;

  return (
    <>
      <ScoreBoard score={score} />
      <LifeBoard extraLife={extraLife} adLife={adLife} addExtraLife={addExtraLife} isPending={isPending}/>
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

      {showAdModal && <Admodal modalChoice={()=>{}} setModalHide={setModalHide} />}
    </>
  );
}

export default GamePage;