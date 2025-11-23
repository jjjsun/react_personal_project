<h1>🐻⚾ Doosan Baseball Diary</h1>

<h3>두산베어스 팬들을 위한 직관 일기장</h3>

<p>
직관의 감정을 기록으로 남기는 개인 사이드 프로젝트입니다.<br/>
경기장에서 느낀 순간들을 저장하고, 나중에 다시 꺼내볼 수 있도록 만든<br/>
두산베어스 팬들을 위한 <b>'직관 일기장'</b>입니다.
</p>

<br/>

🖇️ **배포 URL**  
 https://doosanbearsbaseballdiary.vercel.app/

---

## 📌 프로젝트 소개

2025년 8월, 두산베어스 팬으로서  
“직관 다녀온 날의 감정과 명경기를 다시 보고 싶다”는 생각에서 시작한 프로젝트입니다.

- 오늘 본 경기의 **스코어**, **상대팀**, **경기장**, **승패 여부**
- 내가 뽑은 **오늘의 두산 MVP 선수**
- 직관 당시의 기분을 적는 **직관 일기**
- 구장에서 먹은 음식 기록

이 모든 기록들을 저장하여  
_“두산베어스의 최강 10번 타자”_ 로서의 추억을 남기는 웹앱입니다.

<br/>

## 📚 주요 기능

### 🏟 1. 홈(Home) – 직관 일기 목록
- 날짜순 정렬(오래된순/최신순)
- 승리/패배/전체 필터링
- 리스트 형태로 일기 보기
- 클릭 시 해당 기록 페이지로 이동

---

### 📘 2. 일기 보기(View Diary)
- 경기 정보(상대팀, 스코어, 승패)
- 오늘의 MVP 특징 표시
- 직관 일기 본문
- 오늘 먹은 음식 리스트

---

### ✏ 3. 새 일기(New Diary)
- 새 직관 기록 생성
- textarea 기반 감정 입력
- 경기장 / 팀 선택
- 스코어 입력
- 음식 목록 추가 기능
- MVP 선택 기능

---

### 🛠 4. 수정(Edit Diary)
- 기존 기록 수정 가능

---

### 🗂 5. 로컬스토리지 기반 영구 저장
- 새로고침해도 유지
- 브라우저 자동 저장

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

## 📅 기간 
<b>2025.08 (1개월)</b>
현재도 지속적으로 기능 확장 및 리팩토링 예정
<br/>

<h2>🛠️ Tech Stack</h2>

<div align="center">

<!-- React -->
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />

<!-- JavaScript -->
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

<!-- Vite -->
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" />

<!-- Vercel -->
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />

<!-- CSS3 -->
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />

<!-- Git -->
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />

<!-- GitHub -->
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />

</div>

<br/>

