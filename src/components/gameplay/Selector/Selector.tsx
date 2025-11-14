import { useCallback, useEffect, useRef, useState } from "react";
import type { MatchDataType } from "../../../types/game";
import ChampionCard from "./ChampionCard";
import { CHECK_WAIT } from "../../../constants/temp";

interface SelectorProps {
  matchProps: MatchDataType;
  isPending: boolean;
  setIsPending: (value: boolean) => void;
  isCorrectChampion: (id: number) => void;
}

const Selector = ({ matchProps, isPending, setIsPending, isCorrectChampion }: SelectorProps) => {
  const [hoverId, setHoverId] = useState<number|null>(null);
  const [selectId, setSelectId] = useState<number|null>(null);
  const selectIdRef = useRef<number | null>(null);
  const [, setDoneCount] = useState(0);
  
  useEffect(() => {
    selectIdRef.current = selectId;
    if (!isPending) {
      console.log("selector useEffect selectId = null");
      setSelectId(null);
    }
  }, [isPending, selectId]);

  const handleHoverId = (id: number | null) => { if (!isPending) setHoverId(id); }
  const handleSelectId = (id: number) => {
    console.log("하리스메다");
    if (isPending || selectId) return;
    console.log("유민우");
    setHoverId(null);
    setSelectId(id);
    setIsPending(true);
  }

  const winRateAnimeEnd = useCallback(() => {
    setDoneCount(prev => {
      const next = prev + 1;
      if (next === 2) {
        setDoneCount(0);
        setTimeout(() => {
          console.log("3000ms 대기 완료", selectIdRef.current);
          if (!selectIdRef.current) return;
          console.log("isCorroectChampion");
          isCorrectChampion(selectIdRef.current);
        }, CHECK_WAIT);
      }
      return next;
    });   
  }, [isCorrectChampion]);

  const chmpsArray = [matchProps.chmpA, matchProps.chmpB];

  return (
    <>
      {chmpsArray.map(chmp => (
        <ChampionCard
          key={chmp.id}
          chmpId={chmp.id}
          winRate={chmp.winRate}
          selectId={selectId}
          isPending={isPending}
          setIsPending={setIsPending}
          handleHoverId={handleHoverId}
          handleSelectId={handleSelectId}
          winRateAnimeEnd={winRateAnimeEnd}
          brightness={hoverId===null? 1 : hoverId===chmp.id? 1.1 : 0.75}
        />
      ))}
    </>
  );
}

export default Selector;