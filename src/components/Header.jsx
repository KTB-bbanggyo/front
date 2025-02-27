import React from "react";
import "../assets/styles/Header.css";
import bread1 from "../assets/images/bread1.png";
import bread2 from "../assets/images/bread2.png";
import logoutIcon from "../assets/images/logout.png";
import { useAuth } from "../context/AuthContext"; // useAuth 사용
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // logout 함수 직접 추출

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const logoClick = () => { 
    // 로고 클릭 시 이벤트
    window.location.href = "http://localhost:3000/search"; // 서치 페이지로 이동
  }
  const profileClick = () => { 
    // 프로필 클릭 시 이벤트
    window.location.href = "http://localhost:3000/mypage"; // 마이 페이지로 이동
  }
  
  return (
    <div>
      <header className="header">
        <div className="header-left">
          <button
            className="logo"
            src={bread1}// 빵 아이콘 위치
            alt="빵교 로고"
            onClick={logoClick} // 프로필 클릭 시 이벤트
          />
          <h1 className="header-title">빵교</h1>
        </div>
        <div className="header-right">
          <img
            className="logout"
            src={logoutIcon}
            alt="로그아웃"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          {/* 우측 원형(프로필 등) */}
          <button
            className="circle"
            src={bread2}// 빵 아이콘 위치
            alt="마이 페이지"
            onClick={profileClick} // 프로필 클릭 시 이벤트
          />
          <img className="circle" src={bread2} alt="빵교 로고" />
        </div>

      </header>
    </div>
  );
};

export default Header;
