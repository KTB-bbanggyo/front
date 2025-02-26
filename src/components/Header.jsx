import React from "react";
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <div className="container">
      {/* 헤더 영역 */}
      <header className="header">
        <div className="header-left">
          <button className="menu-button">main</button>
          <img
            className="logo"
            src="../assets/images/bread1.png" // 빵 아이콘 위치
            alt="빵교 로고"
          />
          <h1 className="title">빵교</h1>
        </div>
        <div className="header-right">
          {/* 우측 원형(프로필 등) */}
          <div className="circle" />
        </div>
      </header>
    </div>
  );
};

export default Header;
