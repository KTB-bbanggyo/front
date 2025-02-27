import React, { useState, useEffect } from "react";
import "../assets/styles/MainCard.css";
import TagList from "./TagList";

const MainCard = ({ bakeryList }) => {
  const [bakeryIdx, setBakeryIdx] = useState(0);
  
  // bakeryList가 비어 있으면 오류 방지
  if (!bakeryList || bakeryList.length === 0) {
    return <div className="left-content">추천된 빵집이 없습니다.</div>;
  }

  // 현재 bakeryList에서 해당 인덱스의 빵집 가져오기
  const bakery = bakeryList[bakeryIdx];

  // "다른 빵집 보기" 버튼 클릭 시 다음 빵집 표시
  const refreshClicked = () => {
    setBakeryIdx((prevIdx) => (prevIdx + 1) % bakeryList.length);
  };

  return (
    <div className="left-content">
      <main className="main-card">
        <div className="main-card-content">
          {/* 상단 하트 버튼 */}
          <button className="heart-btn"></button>
          
          {/* 빵집 정보 */}
          <h2 className="bakery-name">{bakery.name}</h2>
          <div className="bakery-info">
            <p className="bakery-address">{bakery.address}</p>
            <p className="bakery-desc">{bakery.explanation}</p>
          </div>

          {/* 태그 목록 */}
          <div className="bakery-menu">
            <p>이런 곳이에요!</p>
            <TagList bakery={bakery} />
          </div>

          {/* 다른 빵집 보기 버튼 */}
          <div className="refresh">
            <button className="refresh-btn" onClick={refreshClicked}>
              다른 빵집 보기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainCard;
