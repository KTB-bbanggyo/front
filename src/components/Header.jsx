import React from "react";
import "./MainLayout.css"; // 스타일 분리 시 사용

const Header = () => {
  return (
    <div className="container">
      {/* 헤더 영역 */}
      <header className="header">
        <div className="header-left">
          <button className="menu-button">main</button>
          <img
            className="logo"
            src="https://via.placeholder.com/40" // 빵 아이콘 위치
            alt="빵교 로고"
          />
          <h1 className="title">빵교</h1>
        </div>
        <div className="header-right">
          {/* 우측 원형(프로필 등) */}
          <div className="circle" />
        </div>
      </header>

      {/* 메인 영역 */}
    </div>
  );
};

export default Layout;
