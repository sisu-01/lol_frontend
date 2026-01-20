import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <div className="w-full h-[50px] sm:h-[100px] flex justify-center items-center absolute top-0 overflow-hidden z-10 gap-5 text-white text-lg sm:text-2xl">
      <Link to={'/'} className="hover:underline">🏠Main</Link>
      <Link to={'/news'} className="hover:underline">🗞️News</Link>
      <Link to={'/guide'} className="hover:underline">🤔Guide</Link>
    </div>
  );
}

export default HeaderBar;