import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/styles/LoginCard.css";
import LoginCard from "../components/LoginCard.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // login 함수는 필요 없음

  useEffect(() => {
    // 이미 로그인 상태라면 메인 페이지로 이동
    if (isAuthenticated) {
      console.log("이미 로그인됨, 메인 페이지로 이동");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? null : (
    <div>
      <LoginCard />
    </div>
  );
};

export default LoginPage;