import { Link } from "react-router-dom";

const FooterBar = () => {
  
  return (
    <div className="flex gap-2 p-5 text-white">
      <Link to={'/privacy'} className="hover:underline">Privacy-policy</Link>
      <Link to={'/terms'} className="hover:underline">Terms</Link>
      <Link to={'/contact'} className="hover:underline">Contact Us</Link>
      <Link to={'/about'} className="hover:underline">About Us</Link>
    </div>
  );
}

export default FooterBar;