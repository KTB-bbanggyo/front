import React, { useState, useEffect } from "react";
import "../assets/styles/SearchCard.css";

const SearchCard = () => {
// "http://13.209.109.248:8000/", {
    // 서버에서 가져온 데이터를 저장할 상태
    const [data, setData] = useState(null);
    // 로딩 상태 관리
    const [loading, setLoading] = useState(true);
    // 에러 상태 관리
    const [error, setError] = useState(null);

  // GET 요청을 위한 함수
  const fetchData = async () => {
    try {
      setLoading(true);
      // const response = await fetch("13.209.109.248:8000/",  {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/html",
      //     // 필요한 경우 인증 헤더 등 추가
      //   },
      // });
      const response = await fetch("http://13.209.109.248:8000/");
      const text = await response.text();
      console.log("응답 텍스트:", text);


      if (!response.ok) {
        throw new Error(`서버 에러! 상태 코드: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("GET 요청 에러:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트가 마운트될 때 fetchData를 호출
  useEffect(() => {
    fetchData();
  }, []);

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
