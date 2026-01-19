import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | 도전! 롤든벨</title>
        <link rel="canonical" href="https://www.lol-updown.com/terms" />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
        <h1 className="text-2xl font-bold mb-6 text-white">Terms of Service</h1>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily play the games on this website for personal, non-commercial transitory viewing only.</p>
          <ul className="list-disc ml-5 mt-2">
            <li>You may not modify or copy the materials.</li>
            <li>You may not use the materials for any commercial purpose.</li>
            <li>You may not attempt to decompile or reverse engineer any software contained on this website.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">3. Disclaimer (면책 조항)</h2>
          <p>The materials on this website are provided on an 'as is' basis. The owner makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6 text-sm text-gray-600">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 italic">한국어 요약 안내</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>본 사이트의 게임과 콘텐츠는 개인적인 용도로만 이용 가능합니다.</li>
            <li>콘텐츠를 무단 복제하거나 수정, 상업적으로 이용하는 것을 금지합니다.</li>
            <li>서비스 이용 중 발생하는 데이터 손실 등에 대해 운영자는 책임을 지지 않습니다.</li>
          </ul>
        </section>

        <div className="text-center text-gray-400 text-sm mt-10">
          <p>Last updated: 2024. XX. XX</p>
        </div>
      </div>
    </>
  );
}

export default Terms;