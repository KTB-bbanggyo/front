import React, {useState} from "react";
import "../assets/styles/MainCard.css";
import dummy from "../assets/dummy.json";

import BakeryList from "./BakeryList";
const MainCard = () => {
  // 하트 버튼 클릭 시 좋아요 표시
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked((prev) => !prev);
  };

  // 빵집 정보
  const bakery = dummy.bakery.at(0).info[0];
  console.log(bakery);

  return (
    <div className="left-content">
      {/* 메인 콘텐츠 영역 */}
      <main >
            {/* 원하는 내용 삽입 (예: 빵집 목록, 정보 등) */}
            <div className="main-card">
              {/* 상단 하트 버튼 */}
              <button
                className={`heart-btn ${liked ? "liked" : ""}`}
                onClick={toggleLiked}
              ></button>
              
              {/* 빵집 정보 */}
              <h2 className="bakery-name">{bakery.name}</h2>
              <p className="bakery-address">{bakery.address}</p>
              <p className="bakery-desc">{bakery.desc}</p>
              
              {/* 태그 목록 */}
              <p className="bakery-menu">이런 곳이에요!</p>
              <BakeryList bakery={bakery}/>
              <div className="refresh">
                <button className="refresh-btn">다른 빵집 보기</button>
              </div>
            </div>

      </main>
    </div>
  );
};

export default MainCard;
