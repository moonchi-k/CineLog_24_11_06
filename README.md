## CineLog | 영화 리뷰 앱

### 1. 목적성

---

- 최근 인기 영화를 추천하고, 원하는 영화의 정보를 제공한다.
- 시청 경력이 있는 영화에 대한 리뷰를 작성하고, 내 리뷰를 모아본다.
  => 사용자가 영화의 정보를 제공받기만 하는 사이트와는 달리, 스스로 정보도 제공하고, 사용자만의
  아카이브가 될 수 있게 함.

### 2. 페이지구성

---

- 메인페이지 (현재 상영작, 인기 상영작, 상위 랭킹작)
- 검색페이지
- 디테일페이지 (영화 관련 정보, 리뷰 작성란 - array, localstorage, input 사용)
- 마이페이지 (나의 리뷰 - array, localstorage 사용, input의 value값을 마이페이지에 띄움)
- 로그인, 회원가입

  \*\* 구현이 되지 않을 시

- Home 화면에 <리뷰모아보기 section> 추가, 클릭 시 해당 영화의 Detail 페이지로 이동 (리뷰 흘러가게끔)

### 3. 사이트맵

---

`Home` `Search` `Detail` `MyPage`

### 4. TimeTable

---

| 날짜       | 내용                                                                                  |
|------------|---------------------------------------------------------------------------------------|
| 24.11.07   | 기획 및 레퍼런스 리서치, 디자인 기획                                                    |
| 24.11.08   | 디자인 컨펌, npm 설치, Router 설정, 전체 페이지 컴포넌트 구성, Header, Footer 구성, Helmet 구성, GlobalStyled 설정 |
| 24.11.10   | API 연결, Loading 페이지 구성, Main 페이지, Detail 페이지, Search 페이지 UI 구성        |
| 24.11.11   | Detail 페이지에 리뷰 작성 창 구성, Main 페이지에 연결                                 |
| 24.11.12   | 모바일 반응형 디자인 수정 및 추가, 배포                                                |
| 24.11.13   | 유지보수 및 배포 확인, 기능 점검                                                      |

---

- [ ]   Global styled 에 font-family: "Inter", sans-serif; 추가
