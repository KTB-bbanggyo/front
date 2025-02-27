import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/SearchCard.css";

const SearchCard = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const sendClicked = () => {
    console.log(text);
    navigate("/main");
  }
  return (
    <div className="search-card-container">
      <div className="search-card">
        <form>
          <h2 className="search-title">너에 대해서 알려줘</h2>
          {/* textarea에서 onChange 이벤트로 상태 업데이트 */}
          <div className="search-box">
            <textarea
              className="search-box-textbox"
              value={text}
              onChange={(e) => {setText(e.target.value)
              }
                
              }
            />
          </div>
        </form>
      </div>
      <button className="send-btn" onClick={sendClicked}>
        보 내 기
      </button>
    </div>
  );
};

export default SearchCard;
