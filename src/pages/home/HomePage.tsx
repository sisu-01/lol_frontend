import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameSet from "../../components/GameSet";
import type { RoleType } from "../../types/game";
import { rolesData } from "../../data/game";

const Home = () => {
  const [role, setRole] = useState<RoleType| ''>('');
  const navigate = useNavigate();

  const gameStart = () => {
    if (!role) {alert('라인을 선택해주세요.');return;}
    navigate(`/game?role=${role}`);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full gap-5">
      <span className="text-5xl">프로젝트 미정</span>
      <div className="flex flex-col justify-center gap-4 bg-red-200 p-4">        
        <div className="bg-blue-200">
          <GameSet items={rolesData} setItem={setRole} selected={role} />
        </div>
        <button onClick={() => gameStart()}>게임시작</button>
      </div>
      <div className="w-[728px] text-gray-500 text-[10px] leading-4">
        대충 opgg 제공 그리고 에메랄드 이상 통계 가져왔다는 내용
      </div>
    </div>
  );
}

export default Home;