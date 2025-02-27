import React, { createContext, useContext, useState } from 'react';

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider: 로그인 상태 관리
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 기본적으로 로그인 안 된 상태

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook을 사용해 쉽게 접근 가능하게 만듦
export const useAuth = () => {
  return useContext(AuthContext);
};
