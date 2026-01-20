import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>News | 도전! 롤든벨</title>
        <link rel="canonical" href="https://www.lol-updown.com/news" />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
        <h1 className="text-2xl font-bold mb-6 text-white">News 새 소식 2026.01.20</h1>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">1. 패치 일정</h2>
          <p>
            패치 일정입니다.
            리그 오브 레전드는 계속해서 변화하는 게임입니다.
            계속된 패치노트를 확인해야 바뀌는 챔피언들의 능력, 그리고 그에 따라 변화하는 챔피언들의 상하 관계를 파악할 수 있습니다.
            그리고 그것이 <span className="font-black">'도전! 롤든벨'</span>을 잘 알아맞추는 방법이며,
            나아가서는 <span className="font-black">'리그 오브 레전드'</span>의 상위 티어로 들어가는 지름길입니다.
          </p>
          <p>
            게임 가이드는 <Link to={'/guide'} className="font-bold text-blue-300">가이드</Link>에서 확인 가능합니다.
          </p>
          <table className="w-full max-w-3xl mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  패치
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  예정일 (태평양 표준시)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.01</td>
                <td className="px-4 py-3">2026년 1월 8일 (목요일)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.02</td>
                <td className="px-4 py-3">2026년 1월 22일 (목요일)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.03</td>
                <td className="px-4 py-3">2026년 2월 4일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.04</td>
                <td className="px-4 py-3">2026년 2월 19일 (목요일)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.05</td>
                <td className="px-4 py-3">2026년 3월 4일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.06</td>
                <td className="px-4 py-3">2026년 3월 18일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.07</td>
                <td className="px-4 py-3">2026년 4월 1일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.08</td>
                <td className="px-4 py-3">2026년 4월 15일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.09</td>
                <td className="px-4 py-3">2026년 4월 29일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.10</td>
                <td className="px-4 py-3">2026년 5월 13일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.11</td>
                <td className="px-4 py-3">2026년 5월 28일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.12</td>
                <td className="px-4 py-3">2026년 6월 10일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.13</td>
                <td className="px-4 py-3">2026년 6월 24일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.14</td>
                <td className="px-4 py-3">2026년 7월 15일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.15</td>
                <td className="px-4 py-3">2026년 7월 29일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.16</td>
                <td className="px-4 py-3">2026년 8월 12일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.17</td>
                <td className="px-4 py-3">2026년 8월 26일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.18</td>
                <td className="px-4 py-3">2026년 9월 10일 (목요일)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.19</td>
                <td className="px-4 py-3">2026년 9월 23일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.20</td>
                <td className="px-4 py-3">2026년 10월 7일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.21</td>
                <td className="px-4 py-3">2026년 10월 21일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.22</td>
                <td className="px-4 py-3">2026년 11월 4일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.23</td>
                <td className="px-4 py-3">2026년 11월 18일</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">26.24</td>
                <td className="px-4 py-3">2026년 12월 9일</td>
              </tr>
            </tbody>
          </table>
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
          <p>Last updated: 2026. 01. 19</p>
        </div>
      </div>
    </>
  );
}

export default NewsPage;