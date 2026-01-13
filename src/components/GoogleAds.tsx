import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

interface googleAdsProps {
  slot: number;
}

const GoogldAds = ({ slot }: googleAdsProps) => {
  const slots = [
    8240058455, //수평1
    5675929701, //수평2
    7003106202, //수평3
    2981496917, //수평4
  ]

  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle;
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }
    const interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd()
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval)
      }
    }, 300)
    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-8512787804038939"
      data-ad-slot={slots[slot]}
      data-ad-format="horizontal"
      data-full-width-responsive="true"
      style={{ display: "block", width: "100%", zIndex: 11 }}
    ></ins>
  );
}

export default GoogldAds;