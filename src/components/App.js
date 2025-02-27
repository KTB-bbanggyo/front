import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';


import '../assets/styles/App.css';

import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';
import MyPage from '../pages/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />        
        <Route path="/mypage" element={<MyPage />} />        
      </Routes>
    </Router>
  );
}

export default App;
