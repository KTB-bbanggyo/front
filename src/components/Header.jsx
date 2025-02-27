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

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <img
            className="logo"
            src={bread1}// 빵 아이콘 위치
            alt="빵교 로고"
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
          />
          <img className="circle" src={bread2} alt="빵교 로고" />
        </div>
      </header>
    </div>
  );
};

export default Header;
