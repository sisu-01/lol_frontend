<a href="https://lol-updown.com">
  <img width="1226" alt="logo" src="https://github.com/user-attachments/assets/74331cd2-ad64-45b8-947f-dc901b6b4ee9" />
</a>

### 🎮 [지금 플레이하기 (Click Here)](https://lol-updown.com)

# 🏆 도전! 롤든벨 (롤 승률 맞추기 퀴즈)

> **리그 오브 레전드의 수 많은 챔피언들의 매치업 승자를 알아맞춰보세요**<br/>
> OP.GG 데이터를 수집하여 챔피언 간의 상성 데이터를 퀴즈 형태로 제공합니다.

---

## 📖 프로젝트 소개
리그 오브 레전드의 챔피언 vs 챔피언 승률 데이터를 기반으로, 유저가 더 높은 승률을 가진 챔피언을 맞추는 퀴즈 게임입니다.
사용해 본 적 없는 기술 스택들(**Vite, TypeScript, Redis**)과 수익화(**AdSense**)를 경험해 보기 위해 개발되었습니다.
### 🎯 프로젝트 목표
1.  **TypeScript 도입:** 수 많은 프로젝트와 기업들이 TypeScript를 도입한 이유를 경험.
2.  **Redis 활용:** Key-Value 구조의 데이터 처리를 통해 RDBMS와의 차이점 이해 및 속도 최적화.
3.  **서비스 운영 경험:** 데이터 크롤링부터 배포, 그리고 수익화(**AdSense**) 시도까지 서비스의 전체 흐름 경험.

---

## 🛠 기술 스택
### 프론트엔드
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=white"/>


### 백엔드
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/> <img src="https://img.shields.io/badge/Flask-000000?style=flat-square&logo=Flask&logoColor=white"/> <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=Redis&logoColor=white"/> 

### 배포
<img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=GitHub%20Pages&logoColor=white"/> <img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=Cloudflare&logoColor=white"/> <img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=white"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>

---

## 📓 겪언던 문제, 느낌점, 새로 알게된 정보

### useReducer의 존재.
지금까지 React로 개발을 할 때에는 useState가 수 십개는 사용되었다.<br/>
그런데 useReducer의 존재를 알게 되어서 useState들을 갈아 엎고 useReducer를 도입해봤다.<br/>
useReducer가 상태 관리를 중앙에서 전부 담당하니 개발이 겁나 편해졌다.

### TypeScript 쓰는 이유를 알았다.
솔직히 직접 써보기 전까지는 왜 이걸 쓰는지 몰랐다.<br/>
JS 변수에 타입 정해주는 것이 그렇게 큰 일인가? 이렇게 단편적으로 생각했기 때문이다.<br/>
하지만 직접 써보니 나는 왜 TS를 쓰는지 단 번에 이해 할 수 있었다.<br/>
변수에 타입이 생기고, Java처럼 인터페이스나 타입들을 선언하고, 문제 있는 코드가 있으면 build를 막는다.<br/>
시간이 지나 내용을 까먹은 코드나 남의 코드를 분석 하기에도 편리하고 다른 개발자들과 협업을 하기에도 좋을 것 같다.

### SSL 인증서를 살 필요가 없다!
난 ssl 인증서를 적용하려면 무조건 기관에서 인증서를 구매해야 하는 줄로만 알았다.<br/>
하지만 Let's Encrypt를 통해 무료로 인증서를 발급 받을 수 있다는 걸 알았을 때 좋은 의미로 충격을 받았다.<br/>
대신 인증 유효 기간이 짧아서 자주 인증해줘야 했고, 이걸 자동화하는데 문제가 생겼다.<br/>

### SKT는 80번 포트를 차단해두었다.
Lets Encrypt 인증 자동화를 하는데 http-01와 dns-01 방식 두 개가 있었다.<br/>
처음엔 http-01 방식을 이용하려했지만 skt에서 80번 포트를 차단해놔서 http-01 방식을 사용 할 수 없었다.<br/>
기존에 사용했던 LG U+는 80번 포트를 사용 할 수 있었기에 난 당황했다.

### CloudFlare는 DNS 설정 API를 제공한다.
난 Let's Encrypt http-01 인증이 불가능하니 dns-01 방식을 사용해야했다.<br/>
하지만 내가 도메인을 구입한 가비아는 DNS 설정 API를 지원하지 않아서 인증 자동화를 할 수 없었다.<br/>
CloudFlare가 DNS API를 지원하는 것을 알고서 DNS는 CloudFlare 것을 사용 하는 것으로 문제를 해결했다.

### Adsense 달기 쉽지 않다. 😭
난 사이트만 완성하면 Adsense를 달아서 돈을 벌 수 있을거라 기대했다.<br/>
하지만 내 웹사이트는 Adsense 측이 보기에 내용도 없고 버튼만 달랑 몇 개 있는 가치 없는 웹사이트였다.<br/>
때문에 Adsense 심사를 하는 족족 **<게시자 콘텐츠가 없는 화면에 Google 게재 광고, 가치가 별로 없는 콘텐츠>** 라며 반려당했다.<br/> 
이대로 실패인가 생각했지만 **H5 Games Ads** 라는 것을 알게되어 이것도 시도해봤다.<br/>
결과는 이것도 실패였다...<br/>
시간이 나면 방도를 찾을 것이다.

### 나노바나나는 신이다.
내 전속 디자이너 한 명이 생긴 기분이다.