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

<section className="bg-white p-6 rounded-lg shadow-md mb-6 text-gray-800">
  <h2 className="text-2xl font-bold mb-6 border-b-4 border-blue-500 pb-2">2. 최신 패치 상세 내역 26.02</h2>

  <div className="mb-10 bg-blue-50 p-5 rounded-xl border border-blue-100">
    <h3 className="text-xl font-bold mb-4 text-blue-800">▣ 챔피언 공통 개편: 치명타 시스템</h3>
    <p className="leading-relaxed mb-4">
      이번 시즌부터 모든 챔피언의 <strong>기본 치명타 피해량이 200%로 복구</strong>됩니다. 이에 따라 치명타 확률을 확보하는 원거리 딜러들이 마법사가 아닌 진정한 기본 공격 핵심 딜러로서 빛나게 하고자 스킬 계수와 치명타 비례 계수를 전반적으로 재정비했습니다.
    </p>
  </div>

  <div className="space-y-12">
    
    <article>
      <h3 className="text-xl font-bold mb-3 text-emerald-700 border-l-4 border-emerald-500 pl-3">카시오페아</h3>
      <p className="text-sm text-gray-600 mb-4">장화 구매 불가 페널티를 완화하고 신규 이동 속도 체계를 적용했습니다.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
        <div>
          <span className="font-bold text-gray-500">[기본 능력치]</span>
          <p>기본 이동 속도: 328 ⇒ <span className="text-blue-600 font-bold">335</span></p>
        </div>
        <div>
          <span className="font-bold text-gray-500">[독사의 품격(P)]</span>
          <p className="text-xs">이속 증가(4~72) ⇒ <span className="text-blue-600 font-bold font-sm font-bold">모든 이속 추가 효과 6~40%(레벨별) 증가</span></p>
        </div>
      </div>
    </article>

    <article>
      <h3 className="text-xl font-bold mb-3 text-red-700 border-l-4 border-red-500 pl-3">사미라</h3>
      <div className="space-y-3 bg-gray-50 p-4 rounded-lg text-sm">
        <p><strong>Q - 천부적 재능:</strong> 일반 피해량 5~25(+총 AD 95~125%) ⇒ <span className="text-blue-600">0~20(+총 AD 110%)</span> / 치명타 피해량 1.25~1.65x ⇒ <span className="text-blue-600">추가 치명타 피해의 50%(1.5~1.65x)</span></p>
        <p><strong>R - 지옥불 난사:</strong> 일반 피해량 5/15/25(+총 AD 45%) ⇒ <span className="text-blue-600">20/40/60(+총 AD 30%)</span> / 치명타 피해량 1.75~2.15x ⇒ <span className="text-blue-600">추가 치명타 피해의 100%(2.0~2.3x)</span></p>
      </div>
    </article>

    <article>
      <h3 className="text-xl font-bold mb-3 text-indigo-700 border-l-4 border-indigo-500 pl-3">아펠리오스</h3>
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-2 leading-tight">
        <p><strong>만월총:</strong> 표식 추가 피해 AD 계수 20% ⇒ <span className="text-red-500">10%</span></p>
        <p><strong>절단검(맹공):</strong> 타격당 피해 <span className="text-blue-600">총 AD 기반(19~40%)</span>으로 변경 / 치명타 피해 2.0~2.3x 상향</p>
        <p><strong>화염포(황혼파):</strong> 추가 AD 계수 56~80% ⇒ <span className="text-red-500">10~16%</span> (기본 피해량 대폭 상향)</p>
        <p><strong>반월검(파수탑):</strong> 추가 AD 계수 42~60% ⇒ <span className="text-red-500">30~42%</span></p>
        <p><strong>R - 월광포화:</strong> 후속 치명타 피해 1.2~1.6x ⇒ <span className="text-blue-600">추가 치명타 피해 30%(1.3~1.39x)</span></p>
      </div>
    </article>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
      <div className="p-4 border border-gray-200 rounded-lg">
        <h4 className="font-bold text-gray-900 mb-2">케이틀린</h4>
        <p>헤드샷 치명타 계수 하향(총 AD 100~130%). 비장의 한 발(R)에 이제 무한의 대검 효과 적용.</p>
      </div>
      <div className="p-4 border border-gray-200 rounded-lg">
        <h4 className="font-bold text-gray-900 mb-2">트리스타나</h4>
        <p>E(폭발 화약) 기본 피해 상향(60~160), 대신 추가 AD 계수 80%로 하향 및 치명타 고점 하향.</p>
      </div>
      <div className="p-4 border border-gray-200 rounded-lg">
        <h4 className="font-bold text-gray-900 mb-2">닐라/징크스/진</h4>
        <p>닐라 Q 치명타 계수 조정 및 R 마나 소모 증가. 징크스/진 기본 능력치(공속 증가량/치명타 피해량) 소폭 하향.</p>
      </div>
      <div className="p-4 border border-gray-200 rounded-lg">
        <h4 className="font-bold text-gray-900 mb-2">루시안/자야</h4>
        <p>루시안 R 치명타 기반 탄환수 상향. 자야 E 피해 구조 안정화 및 치명타 계수 조정.</p>
      </div>
    </div>

    <article className="bg-orange-50 p-5 rounded-lg border border-orange-200">
      <h3 className="text-xl font-bold mb-3 text-orange-800 italic underline">트린다미어 (게임플레이 업데이트)</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li><strong>Q(피의 갈망):</strong> 남은 체력 10%일 때 최대 공격력 도달 (궁극기 효율 극대화)</li>
        <li><strong>W(조롱의 외침):</strong> 적이 바라보는 방향 상관없이 멀어지는 중이면 둔화 적용 (안정성 증가)</li>
        <li><strong>E(회전 베기):</strong> 피해량 AD 계수 130% ⇒ <span className="text-red-500">100%</span></li>
      </ul>
    </article>

    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-900 pb-1">▣ 신규 아이템 (New Items)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-800 text-white rounded-lg shadow-lg">
          <h4 className="text-yellow-400 font-bold text-lg mb-2">요새파괴자 (암살자용)</h4>
          <p className="text-xs mb-2">가격: 3,200G / 물관: 22</p>
          <p className="text-sm">에픽 몬스터/포탑 공격 시 <strong>(300 + 물관 2,500%)</strong> 고정 피해. 게임을 매듭짓는 암살자의 강력한 도구.</p>
        </div>
        <div className="p-4 bg-blue-900 text-white rounded-lg shadow-lg">
          <h4 className="text-blue-300 font-bold text-lg mb-2">실체화 장비 (메이지용)</h4>
          <p className="text-xs mb-2">가격: 3,100G / 마나: 300</p>
          <p className="text-sm">사용 시 8초간 마나 소모 100% 증가, 대신 스킬 피해/회복량/보호막 증가 및 쿨타임 가속.</p>
        </div>
        <div className="p-4 bg-emerald-800 text-white rounded-lg shadow-lg">
          <h4 className="text-emerald-300 font-bold text-lg mb-2">마법광학 장치 C44 (원딜용)</h4>
          <p className="text-xs mb-2">가격: 2,800G / 치명타: 25%</p>
          <p className="text-sm">거리에 비례해 최대 10% 추가 피해. 처치 관여 시 사거리 100 증가.</p>
        </div>
        <div className="p-4 bg-red-900 text-white rounded-lg shadow-lg">
          <h4 className="text-red-300 font-bold text-lg mb-2">원형질 안전벨트 (탱커용)</h4>
          <p className="text-xs mb-2">가격: 2,500G / 체력: 600</p>
          <p className="text-sm">생명선 발동 시 대폭 회복 및 크기/이속/강인함 증가. 방마저 비례 회복량 적용.</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
      <h3 className="text-xl font-bold mb-4">▣ 주요 아이템 업데이트 & 삭제</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div>
          <h5 className="font-bold border-b border-gray-400 mb-2 text-blue-700">업데이트</h5>
          <ul className="space-y-1">
            <li><strong>지평선의 초점:</strong> 견제형 마법사 버전 복구</li>
            <li><strong>정수 약탈자:</strong> <strong>광휘의 검 효과 귀환</strong></li>
            <li><strong>무한의 대검:</strong> AD 75 상향, 치명타 피해 30% 하향</li>
            <li><strong>여신의 눈물:</strong> 이제 여러 개 소지 가능</li>
          </ul> 
        </div>
        <div>
          <h5 className="font-bold border-b border-gray-400 mb-2 text-orange-700">복귀</h5>
          <ul className="space-y-1">
            <li><strong>마법공학 총검:</strong> 모든 피해 흡혈 10%</li>
            <li><strong>폭풍갈퀴:</strong> 충전 상태 공격 시 이속 45% 증가</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold border-b border-gray-400 mb-2 text-red-700">삭제</h5>
          <ul className="space-y-1">
            <li>군단의 방패</li>
            <li>공생형 밑창</li>
            <li>경계의 와드석</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>

        <div className="text-center text-gray-400 text-sm mt-10">
          <p>Last updated: 2026. 01. 22</p>
        </div>
      </div>
    </>
  );
}

export default NewsPage;