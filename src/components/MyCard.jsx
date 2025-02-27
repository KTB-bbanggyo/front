import React, { useState, useEffect } from "react";
import "../assets/styles/MyCard.css";
import dummy from "../assets/dummy.json";

const MyCard = () => {
  const bakeries= dummy.bakery;

  // 하트 버튼 클릭 시 좋아요 표시
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => setLiked(prev => !prev);

  return (
    <div className="my-list">
    {bakeries.map((bakery) => (
      <div className="my-card" key={bakery.info[0].id}>
        <div className="my-card-info">
          <span className="my-bakery-name">{bakery.info[0].name}</span>
          <div className="my-bakery-tags">
            {bakery.info[0].tags.map((tag, idx) => (
              <span className="my-tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 좋아요(하트) 버튼 */}
        <button
            className={`my-heart-btn ${liked ? "liked" : ""}`}
            onClick={toggleLiked}
          />
      </div>
    ))}
  </div>
  );
};

export default MyCard;
