import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    <div className="w-full h-[50px] sm:h-[80px] flex justify-center items-center absolute bottom-0 overflow-hidden z-10 gap-4 sm:gap-8 text-gray-300 text-[11px] sm:text-sm font-light backdrop-blur-[2px] bg-black/10">
      <Link to={'/privacy'} className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-colors">Privacy Policy</Link>
      <span className="w-[1px] h-2 bg-gray-600"></span>
      <Link to={'/terms'} className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-colors">Terms</Link>
      <span className="w-[1px] h-2 bg-gray-600"></span>
      <Link to={'/contact'} className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-colors">Contact Us</Link>
      <span className="w-[1px] h-2 bg-gray-600"></span>
      <Link to={'/about'} className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-colors">About Us</Link>
    </div>
  );
}

export default FooterBar;