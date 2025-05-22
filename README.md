# 🥖 빵교 - Frontend

AI 기반 판교 빵집 추천 플랫폼의 프론트엔드 레포입니다.  
당신의 취향을 저격할 빵집, 빵교가 찾아드립니다! 🍞✨

> 💡 이 프로젝트는 React 기반으로 구현되었으며, 사용자 경험 중심의 맞춤형 빵집 추천 UI를 제공합니다.

---

## 🔍 주요 기능 (프론트 기준)
<img width="400" alt="빵교 페이지" src="https://github.com/user-attachments/assets/7fb74832-496f-4197-af89-39f5b69d9894" />

- 🔎 **AI 추천 결과 시각화**  
[영상으로 보기](https://www.youtube.com/watch?v=qOSNdes2yTg)

---

## 🛠 기술 스택

| 영역 | 기술 |
|------|------|
| 언어         | JavaScript        |
| UI 프레임워크 | React 18 |
| 상태 관리 | Context API |
| 스타일링 | CSS3 |
| 지도 | Kakao Map SDK |
| 번들러 | CRA |

---

## 📂 프로젝트 구조

```
src/
├── assets/         # 이미지 및 정적 파일
├── components/     # 컴포넌트
|   └── App.js         # 진입 파일
├── context/        # context API 전역 상태
├── pages/          # 페이지
├── services/       # 기타
└── routes/         # 라우팅 설정
```

### Run by Docker
- attach to `localhost:3000`(default)
```
docker-compose up -d
```

### Install Dependencies
```
npm install
```

### Run Locally
```
npm start
```
