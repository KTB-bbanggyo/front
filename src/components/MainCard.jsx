import React, { useState, useEffect } from "react";
import "../assets/styles/MainCard.css";
import dummy from "../assets/dummy.json";
import TagList from "./TagList";

const MainCard = () => {
  // bakery 인덱스를 상태로 관리
  const [bakeryIdx, setBakeryIdx] = useState(0);
  // bakery 데이터를 상태로 관리
  const [bakery, setBakery] = useState(dummy.bakery[0].info[0]);
  // 각 빵집의 좋아요 상태를 저장 (키: bakery.id, 값: boolean)
  const [likedStates, setLikedStates] = useState({});
  // 좋아요 상태 변경 여부를 상태로 관리
  const [likedChange, setLikedChange] = useState(false);

  // bakeryIdx가 바뀔 때마다 bakery 데이터를 업데이트하고, likedStates에 따라 heart 버튼 클래스를 조정
  useEffect(() => {
    const currentBakery = dummy.bakery[bakeryIdx].info[0];
    setBakery(currentBakery);
    console.log(likedStates)

    setLikedChange((prev) => ({
        likedChange: !prev.likedChange,
    }));

  }, [bakeryIdx]);

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

  // "다른 빵집 보기" 버튼 클릭 시 인덱스 업데이트
  const refreshClicked = () => {
    if (bakeryIdx < dummy.bakery.length - 1) {
      setBakeryIdx(bakeryIdx + 1);
    } else {
      setBakeryIdx(0);
    }
  };

  // // 현재 bakery에 대한 좋아요 상태 (기본값 false)
  // const isLiked = likedStates[bakery.id] || false;

  return (
    <div className="left-content">
      {/* 메인 콘텐츠 영역 */}
      <main className="main-card">
        <div className="main-card-content">
          {/* 상단 하트 버튼 */}
          <button
            className={`heart-btn`}
            onClick={toggleLiked}
          ></button>
          
          {/* 빵집 정보 */}
          <h2 className="bakery-name">{bakery.name}</h2>
          <div className="bakery-info">
          <p className="bakery-address">{bakery.address}</p>
          <p className="bakery-desc">{bakery.desc}</p>
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
