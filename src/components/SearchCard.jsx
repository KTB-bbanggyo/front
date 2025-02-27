import React from "react";
import "../assets/styles/SearchCard.css";

const SearchCard = () => {
    const sendClicked = () => {
        console.log("clicked");
        window.location.href="http://localhost:3000/";
    }
  return (
    <div className="search-card-container">
      <div className="search-card">
        <form>
        <h2 className="search-title">너에 대해서 알려줘</h2>
        {/* <div className="search-box">dmdkd</div> */}
        <textarea className="search-box"></textarea>
        </form>
      </div>
      <button className="send-btn" onClick={sendClicked}>보내기
    </button>
    </div>
  );
};

export default SearchCard;
