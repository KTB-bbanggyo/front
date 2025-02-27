import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';


import '../assets/styles/App.css';

import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import LoginSuccessPage from '../pages/LoginSuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/success" element={<LoginSuccessPage />} /> {/* 로그인 생성 시 리다이렉트할 페이지(더미) */}
      </Routes>
    </Router>
  );
}

export default App;
