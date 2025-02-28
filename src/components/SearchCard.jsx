import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/SearchCard.css";

const SearchCard = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const navigate = useNavigate();

  const sendClicked = async () => {
    if (!text.trim()) {
      console.warn("입력값이 비어있습니다.");
      return;
    }

    setLoading(true); // API 요청 시작 시 로딩 상태 활성화

    const backUrl = "http://lb-bbanggyo-master-azone-1386370116.ap-northeast-2.elb.amazonaws.com:8000";
    const url = `${backUrl}/recommend?prompt=${encodeURIComponent(text)}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response Data:", response.data);
      navigate("/main", { state: { recommendation: response.data } });
    } catch (error) {
      console.error("Error fetching recommendation:", error);
    } finally {
      setLoading(false); // API 요청 완료 시 로딩 상태 해제
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
      <button className="send-btn" onClick={sendClicked} disabled={loading}>
        {loading ? "로딩 중..." : "보 내 기"}
      </button>
    </div>
  );
};

export default SearchCard;
