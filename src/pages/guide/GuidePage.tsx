import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const GuidePage = () => {
  return (
    <>
      <Helmet>
        <title>가이드 | 도전! 롤든벨 - 리그 오브 레전드 승률 예측 퀴즈</title>
        <meta name="description" content="도전! 롤든벨 게임 방법과 고득점 전략을 확인하세요. 두 챔피언의 승률을 예측하고 최고의 기록에 도전해보세요." />
        <link rel="canonical" href="https://www.lol-updown.com/guide" />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
        <h1 className="text-3xl font-bold mb-8 text-white">도전! 롤든벨 완벽 가이드</h1>

        {/* 섹션 1: 게임 소개 및 플레이 방법 */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-blue-600">🎮 도전! 롤든벨 플레이 방법</h2>
          <div className="space-y-4">
            <p>
              <strong>도전! 롤든벨</strong>은 리그 오브 레전드(League of Legends)의 방대한 데이터를 바탕으로 두 챔피언 간의 상대적인 승률을 맞히는 심리 및 데이터 추론 퀴즈 게임입니다.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>양자택일 퀴즈:</strong> 화면에 무작위로 등장하는 두 명의 챔피언 중, 실제 통계상 승률이 더 높은 챔피언을 클릭하세요.</li>
              <li><strong>목숨 시스템:</strong> 모든 플레이어에게는 총 <strong>3개의 하트(목숨)</strong>가 주어집니다. 틀릴 때마다 하트가 하나씩 차감됩니다.</li>
              <li><strong>게임 오버:</strong> 하트를 모두 소진하면 게임이 종료되며, 현재까지 맞힌 정답 개수가 최종 점수로 기록됩니다.</li>
              <li><strong>최신 데이터 반영:</strong> 퀴즈에 사용되는 데이터는 정기적으로 업데이트되는 랭크 게임 통계를 기반으로 합니다.</li>
            </ul>
          </div>
        </section>

        {/* 섹션 2: 고득점 공략법 */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-green-600">🏆 고득점을 위한 전략적 팁</h2>
          <div className="space-y-4">
            <p>단순한 운이 아닌, 협곡의 생태계를 이해하면 더 높은 점수를 얻을 수 있습니다.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-md bg-gray-50">
                <h3 className="font-bold mb-2">1. 메타의 흐름 파악</h3>
                <p className="text-sm">현재 패치 버전에서 강력한 성능을 발휘하는 '1티어 챔피언'들을 기억하세요. 승률은 보통 패치 노트에 따라 크게 요동칩니다.</p>
              </div>
              <div className="border p-4 rounded-md bg-gray-50">
                <h3 className="font-bold mb-2">2. 상성 관계 이해</h3>
                <p className="text-sm">단순 승률 외에도 특정 직군(예: 암살자 vs 탱커) 간의 기본적인 상성을 고려하는 것이 정답 확률을 높이는 비결입니다.</p>
              </div>
              <div className="border p-4 rounded-md bg-gray-50">
                <h3 className="font-bold mb-2">3. 난이도와 승률의 관계</h3>
                <p className="text-sm">조작 난이도가 매우 높은 챔피언은 숙련도에 따라 승률이 낮게 집계되는 경우가 많습니다. 대중적인 챔피언의 승률을 눈여겨보세요.</p>
              </div>
              <div className="border p-4 rounded-md bg-gray-50">
                <h3 className="font-bold mb-2">4. 표본 데이터의 함정</h3>
                <p className="text-sm">픽률이 낮은 장인 위주의 챔피언은 의외로 전체 승률이 높게 나타날 수 있습니다. 통계의 이면을 예측해 보세요.</p>
              </div>
              <div className="border p-4 rounded-md bg-gray-50">
                <h3 className="font-bold mb-2">5. 최신 밸런스 동향 파악</h3>
                <p className="text-sm">라이엇 게임즈의 패치에 따라서 챔피언들의 밸런스는 변화합니다. <Link to={'/news'} className="font-black text-blue-500">News</Link>에서 최신 패치노트를 확인하고 득점왕을 노리세요.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 섹션 3: 주의사항 */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 text-red-500">📌 주의사항</h2>
          <p className="text-sm text-gray-600">
            본 게임의 승률 데이터는 특정 티어 및 기간을 기준으로 산출되었으므로, 실제 실시간 게임 내 수치와는 미세한 차이가 있을 수 있습니다. 데이터는 주기적인 업데이트를 통해 최신화됩니다.
          </p>
        </section>

        <div className="text-center text-gray-400 text-sm mt-10 pb-10">
          <p>Last updated: 2026. 01. 20</p>
        </div>
      </div>
    </>
  );
}

export default GuidePage;