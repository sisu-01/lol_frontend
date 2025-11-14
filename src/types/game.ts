export type RoleType = 'all' | 'top' | 'jungle' | 'mid' | 'adc' | 'support';
export type ChmpDataJsonType = {
  [key: number]: {
    eng: string;
    kor: string;
  };
}
export type fetchedMatchupsType = {
  datas: string[];
  lens: number[];
}
export type MatchDataType = {
  position: string;
  winner: number;
  count: number;
  chmpA: {id: number; winRate: number};
  chmpB: {id: number; winRate: number};
}
export type GameStateType = {
  isLoading: boolean;
  isPending: boolean;
  isSliding: boolean;
  error: boolean;
  score: number;
  showAdModal: boolean;
  extraLife: boolean;
  gameover: boolean;
  currentMatch: MatchDataType | null;
  nextMatch: MatchDataType | null;
}
export type GameActionType =
  | { type: "GAME_INIT"; payload: { first: MatchDataType; second: MatchDataType; } }
  | { type: "GAME_PEND"; payload: { value: boolean } }
  | { type: "SLIDE_START"; }
  | { type: "NEXT_LEVEL"; payload: { nextMatch: MatchDataType; preloadNextMatch: MatchDataType} }
  | { type: "MODAL_SHOW"; }
  | { type: "MODAL_HIDE"; }
  | { type: "GAME_OVER"; }
  | { type: "GAME_ERROR"; }
