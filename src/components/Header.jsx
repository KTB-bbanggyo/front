import React from "react";
import "../assets/styles/Header.css";
import bread1 from "../assets/images/bread1.png";
import bread2 from "../assets/images/bread2.png";
import logoutIcon from "../assets/images/logout.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const logoClick = () => { 
    // 로고 클릭 시 이벤트
    navigate("/search");
  };

  const profileClick = () => { 
    // 프로필 클릭 시 이벤트
    navigate("/mypage");
  };

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <button className="logo" onClick={logoClick}>
            {/* <img src={bread1} alt="빵교 로고" /> */}
          </button>
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
          {/* 우측 원형(프로필 등) */}
          <button className="circle" onClick={profileClick}>
            {/* <img src={bread2} alt="마이 페이지" /> */}
          </button>
          {/* <img className="circle" src={bread2} alt="빵교 로고" /> */}
        </div>
      </header>
    </div>
  );
};

export default Header;