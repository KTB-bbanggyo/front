import React from 'react';
import Header from '../components/Header.jsx';
import MainCard from '../components/MainCard.jsx';
import "../assets/styles/MainPage.css";


const MainPage = () => {
  return (
    <div className='container'>
      <Header />
      {/* 본문 레이아웃: 왼쪽 영역(베이지 박스), 오른쪽 지도 */}
      <div className="content-layout">
        <MainCard />
        <div className="right-map">
          {/* 지도 삽입 (예: 카카오맵 iframe 등) */}
          <div
            title="kakao-map"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
