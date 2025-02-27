import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <section className="intro-section">
        <h2 className="welcome">🎉 어서오세요, 빵 덕후 여러분! <span style={{fontFamily: "Mungyeong-Gamhong-Apple",fontSize:"2.4rem", color:"var(--font-main-color)"}}>빵교</span>에 오신걸 환영합니다!</h2>
        <hr></hr>
        <p>
          <strong>판교의 숨겨진 보석 같은 빵집</strong>을 AI가 찾아드립니다.
        </p>
        <p>
          당신의 취향을 저격하는 <span style={{fontWeight: "bold"}}>완벽한 빵집 매칭</span>을 <span style={{fontWeight: "bold"}}>빵교</span>와 함께 경험해보세요!
        </p>
      </section>

      <header className="homepage-header">
        <button className="homepage-title-button" onClick={() => navigate("/search")}>
          <h1>🍞 나도 몰랐던 취향저격 판교 빵집 찾기 🍞</h1>
          <p>바로가기!</p>
        </button>
      </header>

      <section className="about-section">
        <section className="features-section">
          <h2>🚀 핵심 기능</h2>
          <ul>
            <li>🔍 <b>개인 맞춤형 빵집 추천</b></li>
            <li>🥐 <b>판교 기반 베스트 빵집 분석</b></li>
            <li> <b>업데이트 예정</b></li>
            <li>(+📊 <b>리뷰 감성 분석 & 평점 시스템)</b></li>
            <li>(+🎉 <b>사용자 커뮤니티 & 랭킹 시스템)</b></li>
          </ul>
        </section>
        <section className="tech-stack">
          <h2>🛠 기술 스택</h2>
          <div className="tech-grid">
            <div>Frontend: React <br /></div>
            <div>Backend: Node.js, MySQL<br /></div>
            <div>AI & Data: OpenAI, FastAPI, ChromaDB<br /></div>
            <div>DevOps: Docker, AWS<br /></div>
          </div>
        </section>
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
