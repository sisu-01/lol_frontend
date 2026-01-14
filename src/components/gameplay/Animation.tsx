interface AnimationProps {
  isAnimating: boolean | null;
}

const Animation = ({ isAnimating }: AnimationProps) => {

  let a = "";
  if (isAnimating !== null) {
    a = isAnimating ? "😀" : "😭";
  }

  return (
    <div
      className={`
        select-none
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        flex justify-center items-center
        text-9xl
        z-11
      `}
    >
      {a}
    </div>
  );
};

export default Animation;
