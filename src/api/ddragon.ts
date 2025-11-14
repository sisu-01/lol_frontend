import type { ChmpDataJsonType } from "../types/game";

export const getDataDragonChmpJson = async (): Promise<ChmpDataJsonType> => {
  try {
    // 버전 가져오기
    const versionRes = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
    const versions: string[] = await versionRes.json();
    const version = versions[0];

    // 챔피언 데이터 가져오기
    const champRes = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`);
    const championJsonData = await champRes.json();

    const chmpJson: ChmpDataJsonType = {};
    const champions = championJsonData.data;

    for (const engName in champions) {
      const champData = champions[engName];
      const korName = champData.name;

      chmpJson[champData.key] = {
        eng: engName,
        kor: korName
      };
    }

    return chmpJson;

  } catch (e) {
    console.error("getDataDragon error:", e);
    return {};
  }
}
