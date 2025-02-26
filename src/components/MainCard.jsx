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
            <div className="card">
              {/* 상단 하트 버튼 */}
              <button className="heart-btn"></button>
              
              {/* 빵집 정보 */}
              <h2 className="bakery-name">카테부 빵집</h2>
              <p className="bakery-address">성남시 분당구 빵교로 00</p>
              <p className="bakery-hours">영업 시간: 주중, 주말 9:00 ~ 9:00</p>
              <p className="bakery-desc">식사 대용 빵이 맛있고, 조용한 분위기</p>
              
              {/* 태그 목록 */}
              <p className="bakery-menu">이런 메뉴가 있어요!</p>
              <div className="bakery-tags">
                <span className="tag">식빵</span>
                <span className="tag">식빵</span>
                <span className="tag">식빵</span>
              </div>
            </div>
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
