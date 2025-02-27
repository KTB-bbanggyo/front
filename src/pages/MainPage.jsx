import React from 'react';
import Header from '../components/Header.jsx';
import MainCard from '../components/MainCard.jsx';
import MapComponent from '../components/MapComponent.jsx';
import "../assets/styles/MainPage.css";


const MainPage = () => {
  return (
    <div className='container'>
      <Header />
      {/* 본문 레이아웃: 왼쪽 영역(베이지 박스), 오른쪽 지도 */}
      <div className="content-layout">
        <MainCard />
        <div className="right-content">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
