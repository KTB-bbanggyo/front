import React, { useState, useEffect } from "react";
import "../assets/styles/MyCard.css";
import dummy from "../assets/dummy.json";
import TagList from "./TagList";

const MyCard = () => {
  // bakery 인덱스를 상태로 관리
  const [bakeryIdx, setBakeryIdx] = useState(0);
  // bakery 데이터를 상태로 관리
  const [bakery, setBakery] = useState(dummy.bakery[0].info[0]);
//   // 각 빵집의 좋아요 상태를 저장 (키: bakery.id, 값: boolean)
//   const [likedStates, setLikedStates] = useState({});
//   // 좋아요 상태 변경 여부를 상태로 관리
//   const [likedChange, setLikedChange] = useState(false);


  useEffect(() => { 
    // 하트 버튼의 DOM 요소 선택
    const heartButton = document.querySelector(".heart-btn");
    if (likedStates[bakeryIdx]) {
      heartButton.classList.add("liked");
    } else {
      heartButton.classList.remove("liked");
    }
  }, [likedChange]);

  // 하트 버튼 클릭 시 현재 bakery의 좋아요 상태 토글
  const toggleLiked = () => {
    setLikedStates((prev) => ({
      ...prev,
      [bakeryIdx]: !prev[bakeryIdx],
    }));

    setLikedChange((prev) => ({
      likedChange: !prev.likedChange,
    }));
  };

  return (
    <div className="left-content">
      {/* 메인 콘텐츠 영역 */}
      <main>
        <div className="main-card">
          {/* 상단 하트 버튼 */}
          <button
            className={`heart-btn`}
            onClick={toggleLiked}
          ></button>
          
          {/* 빵집 정보 */}
          <h2 className="bakery-name">{bakery.name}</h2>
          
          {/* 태그 목록 */}
          <p className="bakery-menu">이런 곳이에요!</p>
          <TagList bakery={bakery} />
        </div>
        

      </main>
    </div>
  );
};

export default MyCard;
