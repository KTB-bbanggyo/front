import React from "react";
import "../assets/styles/SearchCard.css";

const SearchCard = () => {
  return (
    <div className="search-card-container">
      <div className="search-card">
        <form>
        <h2 className="search-title">너에 대해서 알려줘</h2>
        {/* <div className="search-box">dmdkd</div> */}
        <textarea className="search-box"></textarea>
        </form>
      </div>
    </div>
  );
};

export default SearchCard;
