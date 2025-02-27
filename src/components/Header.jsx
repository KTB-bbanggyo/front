import React from "react";
import "../assets/styles/Header.css";
import bread1 from "../assets/images/bread1.png"; // 이미지 import
import bread2 from "../assets/images/bread2.png"; // 이미지 import

const Header = () => {
  const profileClick = () => { 
    // 프로필 클릭 시 이벤트
    window.location.href = "http://localhost:3000/mypage"; // 마이 페이지로 이동
  }
  return (
    <div >
      {/* 헤더 영역 */}
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
          {/* 우측 원형(프로필 등) */}
          <button
            className="circle"
            src={bread2}// 빵 아이콘 위치
            alt="마이 페이지"
            onClick={profileClick} // 프로필 클릭 시 이벤트
          />
        </div>

      </header>
    </div>
  );
};

export default Header;
