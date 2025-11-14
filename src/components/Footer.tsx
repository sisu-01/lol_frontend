import GoogldAds from "./GoogleAds";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 flex justify-center gap-2">
        <GoogldAds />
        <GoogldAds />
      </div>
    </div>
 );
}

export default Footer;