import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header.jsx';
import MainCard from '../components/MainCard.jsx';
import MapComponent from '../components/MapComponent.jsx';
import "../assets/styles/MainPage.css";

const MainPage = () => {
  const location = useLocation();
  const recommendation = location.state?.recommendation || []; // API 응답 데이터

  useEffect(() => {
    console.log("Received recommendation data:", recommendation);
  }, [recommendation]); // recommendation이 변경될 때마다 출력

  return (
    <div className='container'>
      <Header />
      <div className="content-layout">
        <MainCard bakeryList={recommendation} />
        <div className="right-content">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
