import type { MatchDataType } from "../../types/game";
import PreSelector from "./Selector/PreSelector";
import Selector from "./Selector/Selector";

interface SliderProps {
  isPending: boolean;
  setIsPending: (value: boolean) => void;
  isSliding: boolean;
  currentMatch: MatchDataType;
  nextMatch: MatchDataType;
  isCorrectChampion: (id: number) => void;
  switchCurrentAndNextMatch: () => void;
}

const sliderCSS = `
  .slider-wrapper {
    transform: translateY(0);
    }
  .slider-wrapper.slide-down {
    transition: transform 1s ease;
  }
  .slider-wrapper.hide {
    transform: translateY(-50%);
  }
`;

const Slider = ({isPending, setIsPending, isSliding, currentMatch, nextMatch, isCorrectChampion, switchCurrentAndNextMatch }: SliderProps) => {

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div 
        className={`slider-wrapper flex flex-col w-full h-[200%] ${isSliding ? "slide-down" : "hide"}`}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget) return; // 자식 transition 무시
          if (isPending && isSliding) switchCurrentAndNextMatch();
        }}
      >
        <div className="h-[50%]">
          <div className="flex flex-col lg:flex-row h-full">
            <PreSelector matchProps={nextMatch} />
          </div>
        </div>
        <div className="h-[50%]">
          <div className="flex flex-col lg:flex-row h-full">
            <Selector
              isPending={isPending}
              setIsPending={setIsPending}
              matchProps={currentMatch}
              isCorrectChampion={isCorrectChampion}
            />
          </div>
        </div>
      </div>
      <style>{sliderCSS}</style>
    </div>
  );
}

export default Slider;