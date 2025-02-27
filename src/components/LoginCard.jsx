import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, login } from "../context/AuthContext";
import "../assets/styles/LoginCard.css";

const LoginCard = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = initializeKakao;
    } else {
      initializeKakao();
    }
  }, []);

  const initializeKakao = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      console.log("Kakao SDK 초기화 완료");
    }
  };

  // 로그인 후 리다이렉션 처리 부분 추가
  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log("로그인 성공", authObj);
        login();
        navigate("/");
      },
      fail: (err) => {
        console.error("로그인 실패", err);
      },
    });
  };

  return (
    <div className="login-card-container">
      <div className="card">
        <h2 className="title">로그인</h2>
        <button onClick={handleKakaoLogin}>카카오 로그인</button>
      </div>
    </div>
  );
};

export default LoginCard;
