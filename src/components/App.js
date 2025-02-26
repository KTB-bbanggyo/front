import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';


import '../assets/styles/App.css';

import MainPage from '../pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
