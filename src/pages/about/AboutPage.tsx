import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | 도전! 롤든벨</title>
        <link rel="canonical" href="https://www.lol-updown.com/terms" />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
        <h1 className="text-2xl font-bold mb-6 text-white">About Us</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
            도전! 롤든벨에 오신 것을 환영합니다!
          </h2>
          
          <p className="mb-6 text-center text-gray-600 italic">
            "소환사의 협곡으로 향하는 가장 즐거운 지름길"
          </p>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3 border-b-2 border-blue-100 pb-1">Our Mission</h3>
            <p>
              현재 리그 오브 레전드는 고도의 전략과 숙련도가 요구되는 게임으로, 뉴비들이 입문하기에 장벽이 매우 높습니다. 
              <strong> '도전! 롤든벨'</strong>은 이러한 입문 장벽을 낮추기 위해 탄생했습니다. 
              복잡한 강의 영상 대신, 퀴즈를 통해 즐겁게 챔피언 간의 상성을 익히고 게임의 흐름을 파악할 수 있는 환경을 제공합니다.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3 border-b-2 border-blue-100 pb-1">What We Offer</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Champion Matchups:</strong> 챔피언 간의 유리함과 불리함을 퀴즈로 풀며 자연스럽게 게임 지식을 습득합니다.</li>
              <li><strong>Competitive Fun:</strong> 퀴즈 점수를 통해 친구들과 실력을 겨루고, 자신의 롤 지식 수준을 확인할 수 있습니다.</li>
              <li><strong>Instant Access:</strong> 별도의 설치나 가입 없이, 브라우저만 있다면 PC와 모바일 어디서든 즉시 학습하고 즐길 수 있습니다.</li>
              <li><strong>Free to Play:</strong> 모든 교육용 퀴즈 콘텐츠는 무료로 제공되며, 플레이어의 성장을 최우선으로 생각합니다.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 border-b-2 border-blue-100 pb-1">The Developer</h3>
            <p>
              본 사이트는 리그 오브 레전드를 사랑하고, 더 많은 사람이 이 게임의 재미를 느끼길 바라는 독립 개발자에 의해 운영되고 있습니다. 
              지속적인 업데이트를 통해 최신 메타를 반영한 퀴즈를 추가할 예정이니 많은 응원 부탁드립니다.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Thank you for visiting and improving your skills with us!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;