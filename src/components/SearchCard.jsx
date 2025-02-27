import React, { useState, useEffect } from "react";
import "../assets/styles/SearchCard.css";

const SearchCard = () => {
  // console.log(response);
  const [text, setText] = useState("");

  return (
    <div className="search-card-container">
      <div className="search-card">
        <form>
          <h2 className="search-title">너에 대해서 알려줘</h2>
          {/* textarea에서 onChange 이벤트로 상태 업데이트 */}
          <textarea
            className="search-box"
            value={text}
            onChange={(e) => {setText(e.target.value)
            }
              
            }
          />
        </form>
      </div>
      <button className="send-btn">
        보내기
      </button>
    </div>
  );
};

export default SearchCard;
