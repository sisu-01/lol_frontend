import GoogleAds from "./GoogleAds";

interface adBarProps {
  position: "header" | "footer";
}

const AdBar = ({ position }: adBarProps) => {
  
  const slots: Record<"header"|"footer", number[]> = {
    'header': [0, 1],
    'footer': [2, 3]
  }

  const css = {
    'header': 'top-0',
    'footer': 'bottom-0',
  }

  return (
    <div className={`w-full h-[50px] sm:h-[100px] flex justify-center items-center absolute ${css[position]} overflow-hidden z-10`}>
      {slots[position].map((slot) => (
        <GoogleAds key={slot} slot={slot} />
      ))}
    </div>
  );
}

export default AdBar;