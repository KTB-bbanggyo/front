import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../routes/ProtectedRoute';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';
import HomePage from '../pages/HomePage';
import { AuthProvider } from '../context/AuthContext';
import MyPage from '../pages/MyPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* 개방 라우트 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* 보호된 라우트 */}
          <Route element={<ProtectedRoute />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />  
            <Route path="/mypage" element={<MyPage />} />
          </Route>
       </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
