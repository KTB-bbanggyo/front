import React, { useState } from "react";
import "../assets/styles/MyCard.css";
import dummy from "../assets/dummy.json";

const MyCard = () => {
  const bakeries = dummy.bakery;

  // 각 bakery의 좋아요 상태를 bakery id를 키로 하는 객체로 초기화 (초기값은 모두 false)
  const initialLikedState = bakeries.reduce((acc, bakery) => {
    const id = bakery.id;
    acc[id] = true;
    return acc;
  }, {});

  const [likedStates, setLikedStates] = useState(initialLikedState);

  // 특정 bakery의 좋아요 상태를 토글하는 함수
  const toggleLiked = (id) => {
    setLikedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="my-list">
      {bakeries.map((bakery) => {
        const id = bakery.id;
        if(bakery.info[0].like) {
        return (
          <div className="my-card" key={id}>
            <div className="my-card-info">
              <span className="my-bakery-name">{bakery.info[0].name}</span>
              <div className="my-bakery-tags">
                {bakery.info[0].keywords.map((tag, idx) => (
                  <span className="my-tag" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* 각 카드의 하트 버튼에 개별 상태에 따른 클래스 적용 */}
            <button
              className={`my-heart-btn ${likedStates[id] ? "myliked" : ""}`}
              onClick={() => toggleLiked(id)}
            />
          </div>
        );
      }
      })}
    </div>
  );
};

export default MyCard;
