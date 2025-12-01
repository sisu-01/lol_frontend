// /src/pages/hame/hooks/useGame.ts
import { useCallback, useEffect, useReducer, useRef } from "react";
import type { ChmpDataJsonType, fetchedMatchupsType, GameActionType, GameStateType, MatchDataType, RoleType } from "../../../types/game";
import { fetchMatchups } from "../../../api/matchups";
import { getDataDragonChmpJson } from "../../../api/ddragon";
import ReactGA from "react-ga4"

const initialState: GameStateType = {
  isLoading: true,
  isPending: false,
  isSliding: false,
  showAdModal: false,
  error: false,
  round: 0,
  score: 0,
  extraLife: 3,
  adLife: false,
  gameover: false,
  currentMatch: null,
  nextMatch: null
}

const reducer = (state: GameStateType, action: GameActionType): GameStateType => {
  switch (action.type) {
    case "GAME_INIT":
      return initialState
    case "GAME_START":
      return {
        ...initialState,
        isLoading: false,
        currentMatch: action.payload.first,
        nextMatch: action.payload.second
      };
    case "GAME_PEND":
      return {
        ...state,
        isPending: action.payload.value
      };
    case "SLIDE_START":
      return {
        ...state,
        isSliding: true
      }
    case "SCORE_UP":
      return {
        ...state,
        score: state.score + 1
      }
    case "NEXT_LEVEL":
      return {
        ...state,
        isSliding: false,
        isPending: false,
        round: state.round + 1,
        currentMatch: action.payload.nextMatch,
        nextMatch: action.payload.preloadNextMatch,
      }
    case "MODAL_SHOW":
      return {
        ...state,
        showAdModal: true,
        extraLife: state.extraLife + 1,
        adLife: true
      }
    case "MODAL_HIDE":
      return {
        ...state,
        showAdModal: false
      }
    case "LIFE_DONW":
      return {
        ...state,
        extraLife: state.extraLife - 1
      }
    case "LIFE_UP":
      return {
        ...state,
        adLife: true,
        extraLife: state.extraLife + 1
      }
    case "GAME_OVER":
      return {
        ...state,
        gameover: true
      };
    case "GAME_ERROR":
      return { ...state, error: true };

    default:
      return state;
  }
}

export const useGame = (role: RoleType) => {
  const matchupsRef = useRef<MatchDataType[]>([]);
  const chmpDataJsonRef = useRef<ChmpDataJsonType>({});
  const [state, dispatch] = useReducer(reducer, initialState);

  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const init = useCallback(async () => {
    const now = Date.now();
    const lastFetchDateTimeStr = localStorage.getItem("lastFetchDateTime");
    const hoursSinceLastFetch = lastFetchDateTimeStr
      ? (now - parseInt(lastFetchDateTimeStr, 10)) / (1000 * 60 * 60)
      : Infinity;
    const chmpDataStored = localStorage.getItem(`chmpDataJson`);
    const matchupsStored = localStorage.getItem(`matchups`);
    const shouldFetch = !chmpDataStored || !matchupsStored || !lastFetchDateTimeStr || hoursSinceLastFetch >= 1;
    if (shouldFetch) {
      const [fetchedChmpData, fetchedMatchups]: [ChmpDataJsonType, fetchedMatchupsType | null] = await Promise.all([
        getDataDragonChmpJson(),
        fetchMatchups()
      ]);
      if (fetchedChmpData) {
        localStorage.setItem("chmpDataJson", JSON.stringify(fetchedChmpData));
      }
      if (fetchedMatchups) {
        localStorage.setItem(`matchups`, JSON.stringify(parseFetchData(fetchedMatchups)));
        localStorage.setItem("lastFetchDateTime", now.toString());
      }
    }
    chmpDataJsonRef.current = JSON.parse(localStorage.getItem(`chmpDataJson`) || "null");
    const matchups = JSON.parse(localStorage.getItem(`matchups`) || "null");
    let gameData = null;
    if (role === 'all') {
      gameData = matchups['datas'];
    } else {
      gameData = getDataByPosition(role, matchups['datas'], matchups['lens']);
    }
    matchupsRef.current = gameData;
  }, [role]);

  const parseFetchData = (fecthData: fetchedMatchupsType) => {
    const result: MatchDataType[] = [];
    for (const i of fecthData['datas']) {
      const [position, chmpA, chmpB, aRate, bRate, count] = i.split(":");
      const chmpAwinRate = parseFloat(aRate);
      const chmpBwinRate = parseFloat(bRate);
      const winner =
        chmpAwinRate > chmpBwinRate
          ? Number(chmpA)
          : chmpBwinRate > chmpAwinRate
          ? Number(chmpB)
          : 0; // 비긴 경우 0
      result.push({
        position: position,
        chmpA: { id: Number(chmpA), winRate: chmpAwinRate },
        chmpB: { id: Number(chmpB), winRate: chmpBwinRate },
        winner,
        count: Number(count)
      })
    }
    return {
      lens: fecthData['lens'],
      datas: result,
    };
  }

  const getDataByPosition = (position: string, datas: MatchDataType[], lens: number[]) => {
    const positions = ['top', 'jungle', 'mid', 'adc', 'support'];
    const index = positions.indexOf(position);
    const start = lens.slice(0, index).reduce((sum, val) => sum + val, 0);
    const end = start+lens[index]-1;
    return datas.slice(start, end);
  }

  const shuffleMatchups = () => {
    const arr = [...matchupsRef.current];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    matchupsRef.current = arr;
  }

  // 시작이다
  const gameStart = useCallback(async () => {
    dispatch({ type: "GAME_INIT" });
    console.log("게임 시작");
    ReactGA.gtag('event', 'game_start', {
      category: 'game',
      label: 'start_function',
      value: 1
    });

    shuffleMatchups();
    const first = matchupsRef.current[0];
    const second = matchupsRef.current[1];
    const img1 = new Image();
    img1.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chmpDataJsonRef.current[first.chmpA.id].eng}_0.jpg`;
    const img2 = new Image();
    img2.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chmpDataJsonRef.current[first.chmpB.id].eng}_0.jpg`;
    console.log("기다렷! 이미지 로딩 완료?");
    await wait(1000); // 로딩 테스트를 위해서 고의적으로 지연.

    if (first && second) {
      dispatch({ type: "GAME_START", payload: { first, second } });
    } else {
      dispatch({ type: "GAME_ERROR" });
    }
  }, []);

  const isCorrectChampion = (selectId: number) => {
    if (state.showAdModal || state.isSliding || !state.currentMatch || state.gameover) return;

    const { winner } = state.currentMatch;
    const isCorrect = winner === selectId || winner === 0;
    if (isCorrect) {
      // const isClose = Math.abs(chmpA.winRate - chmpB.winRate) < 2
      // if (isClose) {
      //   console.log("근소했다.");
      // }
      dispatch({ type: "SCORE_UP" });
      dispatch({ type: "SLIDE_START" });
      // nextLevel();
      return;
    }

    if (state.extraLife > 1) {
      dispatch({ type: "LIFE_DONW" })
      dispatch({ type: "SLIDE_START" });
    } else {
      gameOver();
    }
  }

  const switchCurrentAndNextMatch = () => {
    if (!state.nextMatch) return;
    console.log("다음 단계다");
    const nextMatch = state.nextMatch;
    const preloadNextMatch = matchupsRef.current[state.round + 2];
    console.log(nextMatch, preloadNextMatch);
    if (nextMatch.winner) {
      console.log("승리: ", chmpDataJsonRef.current[nextMatch.winner].kor);
    } else {
      console.log("비빔", nextMatch.winner);
    }
    
    dispatch({ type: "NEXT_LEVEL", payload: { nextMatch, preloadNextMatch } });
  }

  const gameOver = () => {
    ReactGA.gtag('event', 'game_score', {
      category: 'game',
      label: `mode_${role}`,
      value: state.score
    });
    
    const stored = localStorage.getItem("highestScore");
    const highestScore = stored ? Number(stored) : 0;

    if (state.score > highestScore) {
      localStorage.setItem("highestScore", String(state.score));
    }
    dispatch({ type: "GAME_OVER" });
  }

  useEffect(() => {
    const setupGame = async () => {
      await init();
      gameStart();
    };
    setupGame();
  }, [init, gameStart]);

  return {
    chmpDataJson: chmpDataJsonRef.current,
    ...state,
    gameStart: gameStart,
    setIsPending: (value: boolean) => dispatch({ type: "GAME_PEND", payload: { value } }),
    addExtraLife: () => dispatch({ type: "MODAL_SHOW" }),
    setModalHide: () => dispatch({ type: "MODAL_HIDE" }),
    isCorrectChampion,
    switchCurrentAndNextMatch,
   };
}