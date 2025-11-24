import { useContext, useEffect, useState } from "react";
import WinRate from "../WinRate";
import { dDragonContext } from "../../../context/dDragonContext";

interface ChampionCardProps {
  chmpId: number;
  winRate?: number;
  selectId?: number | null;
  isPending?: boolean;
  setIsPending?: (value: boolean) => void;
  handleHoverId?: (id: number | null) => void;
  handleSelectId?: (id: number) => void;
  winRateAnimeEnd?: () => void;
  brightness: number;
}

const ChampionCard = ({ chmpId, winRate, isPending, selectId, handleHoverId, handleSelectId, winRateAnimeEnd, brightness }: ChampionCardProps) => {
  const chmpDataJson = useContext(dDragonContext);
  const [animeDone, setAnimeDone] = useState<boolean>(false);
  
  useEffect(() => {
    setAnimeDone(false);
  }, [selectId, setAnimeDone]);
  
  if (!chmpDataJson) return null;

  // const bgUrl = `/images/champions/${chmpDataJson[chmpId]['eng']}_0.jpg`;
  const bgUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chmpDataJson[chmpId]['eng']}_0.jpg`;

  const handleAnimeDone = () => {
    console.log(chmpId, "애니 끝!");
    setAnimeDone(true);
    winRateAnimeEnd?.();
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className={`select-none w-full h-full flex justify-center items-center bg-cover bg-center cursor-pointer ${selectId ? "" : "hover:scale-105"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgUrl})`,
          filter: `brightness(${brightness})`,
          transition: "all 0.3s",
        }}
        onClick={() => handleSelectId?.(chmpId)}
        onMouseEnter={() => handleHoverId?.(chmpId)}
        onMouseLeave={() => handleHoverId?.(null)}
      >
        <div className="text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            {chmpDataJson[chmpId]['kor']}
            {selectId === chmpId && <span className="text-yellow-400 text-2xl">✔</span>}
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mt-2">
            {!animeDone && isPending && winRateAnimeEnd && selectId && winRate !== undefined
              ? <WinRate winRate={winRate} winRateAnimeEnd={handleAnimeDone} />
              : ""
            }
            {animeDone ? winRate?.toFixed(2) + "%" : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChampionCard;