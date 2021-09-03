# Our Record Backend

### 연인들의 데이트 내용 기록 및 통계를 공유하는 웹 앱

<br>

<img width="486" alt="Our Record_메인페이지" src="">
<br><br>

## 프로젝트 계획 및 기간

### 📆 2021.07.21 - 08.11

- 1st Sprint : 개발환경 초기세팅, 전체 레이아웃, 컴포넌트화
- 2nd Sprint : 컴포넌트 별 기능 구현, 프론트-백 통신, 코드 리팩토링, conflict 수정 작업
  <br><br>

### 👥 팀원

- 프론트 : [신미영](https://github.com/smy0102)
- 벡엔드 & 프론트 : [박준우](https://github.com/AutumnWithJay)
- 프론트엔드 깃허브 : [깃허브](https://github.com/our-record/our-record-client)
  <br><br>

### 🛠 사용한 기술

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/></br>

<br>

### 🛠 사용한 툴

<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/> <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"/><img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/> <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/> <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" /></a>
<br><br>

## Modeling

---

<br><br>

## Our Record 유튜브 링크

<a href="https://youtu.be/cxtBWz6Fbss">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white/"
        style="height : auto; margin-left : 10px; margin-right : 10px;"/>
</a>

<br><br>

## 기능 상세

---

### User

- 카카오 RESTful API 사용하여 서버에서 소셜 회원가입 처리
  <br><br>

### Couple_DB

- 최초 가입자에게 초대 코드 발행
- 각자의 생일, 사귄 일자, 커플 사진 등록
- 초대 코드 받은 상대방은 본인의 닉네임만 입력받게 설정
  <br><br>

### Anniversary

- 커플 기념일 혹은 일정 설정
  <br><br>

### Post

- 데이트 기록 작성
- 지출 내역 및 사진을 첨부하여 해당 내역에 무슨 데이트를 했는지 파악
  <br><br>

### Chart

- 주간, 월간 차트 데이터 전달
