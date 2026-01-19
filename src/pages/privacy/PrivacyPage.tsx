import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | 도전! 롤든벨</title>
        <link rel="canonical" href="https://www.lol-updown.com/privacy" />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
        <h1 className="text-2xl font-bold mb-6 text-white">Privacy Policy</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">1. Information Collection and Use</h2>
          <p className="mb-4">
            Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
          </p>
          <p className="mb-4">
            Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">2. Personalized Advertising (Opt-out)</h2>
          <p className="mb-4">
            Users may opt out of personalized advertising by visiting 
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-blue-600 underline ml-1">
              Ads Settings
            </a>.
          </p>
          <p className="mb-4">
            Alternatively, you can direct users to opt out of a third-party vendor's use of cookies for personalized advertising by visiting 
            <a href="http://www.aboutads.info" target="_blank" rel="noreferrer" className="text-blue-600 underline ml-1">
              www.aboutads.info
            </a>.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6 text-sm text-gray-600">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 italic">한국어 요약 안내</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>본 사이트는 Google 및 제3자 광고 업체의 쿠키를 사용하여 광고를 게재합니다.</li>
            <li>Google은 쿠키를 통해 귀하의 방문 기록을 분석하고 맞춤형 광고를 제공합니다.</li>
            <li>귀하는 Google 광고 설정 페이지에서 맞춤형 광고 기능을 끌 수 있습니다.</li>
            <li>본 방침은 Google 애드센스 정책을 준수하기 위해 작성되었습니다.</li>
          </ul>
        </section>

        <div className="text-center text-gray-400 text-sm mt-10">
          <p>Last updated: 2026. 01. 19</p>
        </div>
      </div>
    </>
  );
};

export default Privacy;