import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/index.css';
import './assets/styles/theme.css';

import App from './components/App';
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);