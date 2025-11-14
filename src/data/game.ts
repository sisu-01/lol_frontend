import type { RoleType } from "../types/game";

export const rolesData: {id: RoleType; txt: string;}[] = [ 
  {id: 'all',txt: '전체'},
  {id: 'top',txt: '탑'},
  {id: 'jungle',txt: '정글'},
  {id: 'mid',txt: '미드'},
  {id: 'adc',txt: '원딜'},
  {id: 'support',txt: '서포터'}
];