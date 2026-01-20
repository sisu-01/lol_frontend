import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <div className="w-full h-[60px] sm:h-[100px] flex justify-center items-center absolute top-0 overflow-hidden z-10 gap-6 sm:gap-10 text-white font-semibold tracking-wide">
      <Link to={'/'} className="group flex items-center gap-2 transition-all duration-300 hover:text-yellow-400">
        <span className="text-xl sm:text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform">🏠</span>
        <span className="hidden sm:inline border-b-2 border-transparent group-hover:border-yellow-400">Main</span>
      </Link>
      
      <Link to={'/news'} className="group flex items-center gap-2 transition-all duration-300 hover:text-blue-400">
        <span className="text-xl sm:text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform">🗞️</span>
        <span className="hidden sm:inline border-b-2 border-transparent group-hover:border-blue-400">News</span>
      </Link>
      
      <Link to={'/guide'} className="group flex items-center gap-2 transition-all duration-300 hover:text-green-400">
        <span className="text-xl sm:text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform">🤔</span>
        <span className="hidden sm:inline border-b-2 border-transparent group-hover:border-green-400">Guide</span>
      </Link>
    </div>
  );
}

export default HeaderBar;