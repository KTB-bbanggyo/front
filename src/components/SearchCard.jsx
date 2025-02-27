import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/SearchCard.css";

const SearchCard = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const sendClicked = async () => {
    if (!text.trim()) {
      console.warn("입력값이 비어있습니다.");
      return;
    }

    const backUrl = "http://lb-bbanggyo-master-azone-1386370116.ap-northeast-2.elb.amazonaws.com:8000"; // 실제 백엔드 URL로 변경
    const url = `${backUrl}/recommend?prompt=${encodeURIComponent(text)}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response Data:", response.data);

      // 데이터를 /main 페이지로 넘김
      navigate("/main", { state: { recommendation: response.data } });
    } catch (error) {
      console.error("Error fetching recommendation:", error);
    }
  };

  return (
    <div className="search-card-container">
      <div className="search-card">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className="search-title">너에 대해서 알려줘</h2>
          <div className="search-box">
            <textarea
              className="search-box-textbox"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </form>
      </div>
      <button className="send-btn" onClick={() => sendClicked()}>
        보 내 기
      </button>
    </div>
  );
};

export default SearchCard;
