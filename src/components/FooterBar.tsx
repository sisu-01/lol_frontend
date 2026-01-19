import { Link } from "react-router-dom";

const FooterBar = () => {
  
  return (
    <div className="w-full h-[50px] sm:h-[100px] flex justify-center items-center absolute bottom-0 overflow-hidden z-10 gap-2 text-white">
      <Link to={'/'} className="hover:underline">main</Link>
      <Link to={'/privacy'} className="hover:underline">Privacy-policy</Link>
      <Link to={'/terms'} className="hover:underline">Terms</Link>
      <Link to={'/contact'} className="hover:underline">Contact Us</Link>
      <Link to={'/about'} className="hover:underline">About Us</Link>
    </div>
  );
}

export default FooterBar;