import React from "react";
import "../assets/styles/MainCard.css";

const MainCard = () => {
  return (
    <div className="container">
      {/* 메인 콘텐츠 영역 */}
      <main className="main-content">
        {/* 본문 레이아웃: 왼쪽 영역(베이지 박스), 오른쪽 지도 */}
        <div className="content-layout">
          <div className="left-content">
            {/* 원하는 내용 삽입 (예: 빵집 목록, 정보 등) */}
          </div>
          <div className="right-map">
            {/* 지도 삽입 (예: 카카오맵 iframe 등) */}
            <div
              title="kakao-map"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainCard;
