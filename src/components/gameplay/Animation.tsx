import React, { useEffect, useState } from 'react';

interface AnimationProps {
  isAnimating: boolean | null;
}

const Animation = ({ isAnimating }: AnimationProps) => {
  const [show, setShow] = useState(false);

  // isAnimating 상태가 변경될 때마다 애니메이션을 다시 트리거하기 위한 로직
  useEffect(() => {
    if (isAnimating !== null) {
      setShow(true);
      // 1초 뒤에 자동으로 사라지게 설정 (옵션)
      const timer = setTimeout(() => setShow(false), 1000);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isAnimating]);

  if (isAnimating === null || !show) return null;

  const isCorrect = isAnimating === true;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* 배경 딤 처리 (선택 사항: 집중도를 높이고 싶다면 주석 해제) */}
      {/* <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" /> */}

      <div
        className={`
          relative
          flex items-center justify-center
          w-64 h-64
          rounded-full
          ${isCorrect ? 'animate-pop-elastic' : 'animate-shake-hard'}
        `}
      >
        {/* SVG 그래픽 */}
        {isCorrect ? (
          // 정답: 초록색 O (체크 느낌의 원)
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-500 drop-shadow-2xl filter" fill="none" stroke="currentColor" strokeWidth="3">
             <circle cx="12" cy="12" r="10" />
          </svg>
        ) : (
          // 오답: 빨간색 X
          <svg viewBox="0 0 24 24" className="w-full h-full text-red-500 drop-shadow-2xl filter" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      {/* Tailwind 설정 없이 바로 쓸 수 있도록 스타일 주입 */}
      <style jsx>{`
        @keyframes pop-elastic {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shake-hard {
          0% { transform: translateX(0); }
          25% { transform: translateX(-20px) rotate(-5deg); }
          50% { transform: translateX(20px) rotate(5deg); }
          75% { transform: translateX(-10px) rotate(-3deg); }
          100% { transform: translateX(0); }
        }
        .animate-pop-elastic {
          animation: pop-elastic 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-shake-hard {
          animation: shake-hard 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Animation;