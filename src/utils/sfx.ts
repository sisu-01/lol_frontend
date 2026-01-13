// src/utils/sfx.ts
const sfx = {
  correct: new Audio('/audio/correct.mp3'),
  wrong: new Audio('/audio/wrong.mp3'),
};

export const playSfx = (name: keyof typeof sfx): Promise<void> => {
  return new Promise((resolve) => {
    const sound = sfx[name];
    sound.currentTime = 0;
    
    // 소리가 끝났을 때 실행될 이벤트
    sound.onended = () => {
      resolve();
    };

    setTimeout(() => {
      resolve();
    }, 800);

    sound.play().catch((e) => {
      console.warn("자동 재생 차단됨:", e);
      resolve(); // 에러 발생 시에도 게임은 진행되어야 하므로 resolve 호출
    });
  })
}