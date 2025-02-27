import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <section className="intro-section">
        <h2>🎉 어서오세요, 빵 덕후 여러분!</h2>
        <p>
          <strong>판교의 숨겨진 보석 같은 빵집</strong>을 AI가 찾아드립니다.
        </p>
        <p>
          당신의 취향을 저격하는 **완벽한 빵집 매칭**을 경험해보세요!
        </p>
      </section>

      <section className="features-section">
        <h2>🚀 핵심 기능</h2>
        <ul>
          <li>🔍 <b>개인 맞춤형 빵집 추천</b></li>
          <li>🥐 <b>판교 기반 베스트 빵집 분석</b></li>
          <li>📊 <b>리뷰 감성 분석 & 평점 시스템</b></li>
          <li>🎉 <b>사용자 커뮤니티 & 랭킹 시스템</b></li>
        </ul>
      </section>

      <header className="homepage-header">
        <button className="homepage-title-button" onClick={() => navigate("/search")}>
          <h1>✨ 나도 몰랐던 취향저격 판교 빵집 찾기</h1>
          <p>당신의 빵 사랑을 완벽히 채워줄 AI 추천 서비스!</p>
        </button>
      </header>

      <section className="tech-stack">
        <h2>🛠 기술 스택</h2>
        <div className="tech-grid">
          <div>Frontend: React, Next.js</div>
          <div>Backend: FastAPI, MySQL</div>
          <div>AI & Data: OpenAI, ChromaDB</div>
          <div>DevOps: Docker, AWS</div>
        </div>
      </section>

      <section className="contribute-section">
        <h2>🎉 참여 방법</h2>
        <p>🚀 KTB-bbanggyo 프로젝트에 기여하는 방법!</p>
        <ul>
          <li>✅ <b>Fork & Star</b>: 프로젝트를 Fork하고 ⭐️ Star를 눌러주세요!</li>
          <li>✅ <b>Issue 작성</b>: 버그, 개선사항, 새로운 아이디어 제안</li>
          <li>✅ <b>Pull Request 기여</b>: 기능 추가 및 코드 개선 후 PR 제출</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>📩 문의 & 네트워크</h2>
        <p>
          - 🏢 GitHub:{" "}
          <a href="https://github.com/KTB-bbanggyo" target="_blank" rel="noopener noreferrer">
            KTB-bbanggyo
          </a>
        </p>
        <p>
          - 💬 Discord:{" "}
          <a href="https://discord.gg/8wcVy2Yr" target="_blank" rel="noopener noreferrer">
            bbanggyo Discord Server
          </a>
        </p>
      </section>
    </div>
  );
};

export default HomePage;
