
<h1>🐻⚾ Doosan Baseball Diary </h1>
<h3>두산베어스 팬들을 위한 직관 일기장 </h3>
직관의 감정을 기록으로 남기는 개인 사이드 프로젝트 입니다. 
경기장에서 느낀 순간들을 저장하고, 나중에 다시 꺼내볼 수 있도록 만든 
두산베어스 팬들을 위한 '직관 일기장'입니다.
<br/>

🖥 **배포 URL**
👉 https://doosanbearsbaseballdiary.vercel.app/
<br/>

## 📌 프로젝트 소개

2025년 8월, 두산베어스 팬으로서  
“직관 다녀온 날의 감정과 명경기를 다시 보고 싶다”는 생각에서 시작한 프로젝트입니다.

- 오늘 본 경기의 **스코어**, **상대팀**, **경기장**, **승패 여부**
- 내가 뽑은 **오늘의 두산 MVP 선수**
- 직관 당시의 기분을 적는 **직관 일기**
- 구장에서 먹은 음식 기록

이것들을 기록할수 있는
_“두산베어스의 최강10번 타자”_ 로서의 추억을 저장하는 웹앱입니다.

<br/>

<h2>주요 기능</h2>

### 🏟 1. 홈(Home) – 직관 일기 목록

- 날짜순 정렬(오래된순/최신순)
- 원하는 리스트만 정렬(모두/승리만/패배만)
- 리스트 형태로 직관 기록을 한눈에 보기
- 클릭 시 해당 일기로 이동

### 📘 2. 일기 보기(View Diary)

- 경기 정보(상대팀, 스코어, 승패)
- 오늘의 MVP(선수 이미지 + 이름)
- 오늘의 직관 일기 본문
- 오늘의 음식 리스트


### ✏ 3. 새 일기(New Diary)

- 새 직관 기록 생성
- textarea 기반 자유로운 감정 기록
- select로 팀/경기장 입력
- 경기스코어 입력
- 음식 추가 기능
- MVP 선수 선택 기능


### 🛠 4. 수정(Edit Diary)

- 기존 기록 수정 가능


### 🗂 5. 로컬스토리지 기반 영구 저장

- 새로고침해도 기록 유지
- 브라우저에서 데이터 관리


<br/>

## 📁 프로젝트 구조

```bash
personal_project-react/
 ├── public/
 │    └── ... 이미지 파일 (favicon, og image 등)
 ├── src/
 │    ├── assets/        # 이미지 파일
 │    ├── components/    # 공통 UI 컴포넌트
 │    ├── pages/         # Home / Diary / Edit / New / NotFound
 │    ├── util/          # 날짜/팀 이미지/팀 색상 등 유틸 함수
 │    ├── main.jsx
 │    └── index.css
 ├── package.json
 ├── vite.config.js
 ├── README.md
```

<h2>📅 기간 </h2>
**2025.08 (1개월)** 
현재도 지속적으로 기능 확장 및 리팩토링 예정
<br/>

<h2>🛠️ Tech Stack</h2>
<div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: center;">

  <div align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60" />
    <div>React</div>
  </div>

  <div align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60" />
    <div>JavaScript</div>
  </div>

  <div align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" width="60" />
    <div>Vite</div>
  </div>

  <div align="center">
    <img src="https://www.svgrepo.com/show/327408/logo-vercel.svg" width="55" />
    <div>Vercel</div>
  </div>

  <div align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="60" />
    <div>CSS3</div>
  </div>

  <div align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="60" />
    <div>Git</div>
  </div>

  <div align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="60" />
    <div>GitHub</div>
  </div>

</div>

<br/>
```
