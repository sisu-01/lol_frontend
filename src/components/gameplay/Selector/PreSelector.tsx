import type { MatchDataType } from "../../../types/game";
import ChampionCard from "./ChampionCard";

interface PreSelectorProps {
  matchProps: MatchDataType;
}

const PreSelector = ({ matchProps }: PreSelectorProps) => {
  const { chmpA, chmpB } = matchProps;
  const chmpAId = chmpA.id;
  const chmpBId = chmpB.id;

  return (
    <>
      <ChampionCard chmpId={chmpAId} brightness={1}/>
      <ChampionCard chmpId={chmpBId} brightness={1}/>
    </>
  );
}

export default PreSelector;