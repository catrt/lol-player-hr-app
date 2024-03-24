# **[ 직원 관리 서비스 ]**

직원들을 관리할 수 있는 관리자 서비스를 만들어 보세요.

## DEMO 사이트

LOL 선수 관리 사이트 : [DEMO](https://lol-player-hr-app.vercel.app/#/)

## 기간

- 2024/03/18 ~ 2024/03/24

## 사용 기술 스택

- Programming

  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SASS&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)

- Deploying

  ![VERCEL](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 유저 플로우
  
  ![USER FLOW](/public/images/user_flow.PNG)

## 주요 구현 사항

- 선수 개인 프로필 페이지를 개발
- 선수 리스팅 페이지를 개발
- 전체 페이지 데스크탑-모바일 반응형 페이지를 개발
- 사진을 등록, 수정, 삭제가 가능
- 유저 플로우를 제작
- 페이지가 보여지기 전에 로딩 애니메이션 추가
- 직원 검색 기능을 추가
- 선수 리스팅 페이지에서 데이터가 더 존재하는 경우 원할 때 정보 추가 제공
- LocalStorage를 사용
- CSS
    - 애니메이션 구현
    - 상대수치 사용(rem, em)
- JavaScript
    - DOM event 조작

## 어려웠던 부분

- 이미지를 input으로 받아서 저장했다가 다시 사용하는 부분이 어려움
- 처음부터 모든 style 작업을 하려니깐 디자인적인 부분이 어려움

## 맞게 구현한건지 확실하지 않은 부분

- media query를 그냥 화면 줄여가보면서 어색해지는 부분이 있을 때마다 추가하였는데 이렇게 무식하게 추가해도 되는 건지 의문
- 페이지 전환시 로딩 애니메이션을 단순히 setTimeout으로 추가했는데 다른 방법이 떠오르질 않음

## 아쉬운 부분

- 처음에 supabase로 구현하려다가 실패해서 시간을 너무 많이 잡아먹어서 스타일 쪽을 거의 신경쓰지 못한 것 같음
- API 통신을 제어하는 과정에서 에러 핸들링이 주먹구구식으로 되어있는 것 같음
- 로그인 시스템이 있었다면 더 좋은 파일관리가 가능했을 것 같음