import { useEffect, useState } from "react";
import { WIN_RATE_DURATION } from "../../constants/temp";

interface winRateProps {
  winRate: number;
  winRateAnimeEnd: () => void;
}

const WinRate = ({ winRate, winRateAnimeEnd }: winRateProps) => {
  const [displayValue, setDisplayValue] = useState("0.00");

  useEffect(() => {
    let start: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / WIN_RATE_DURATION, 1); // 0 ~ 1

      const currentValue = winRate * percentage;
      setDisplayValue(currentValue.toFixed(2)); // 소숫점 둘째 자리까지 반영

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        winRateAnimeEnd();
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [winRate, winRateAnimeEnd]);

  return (
    <div>
      {displayValue}%
    </div>
  );
}

export default WinRate;