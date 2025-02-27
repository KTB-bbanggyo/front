import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = () => {
      setIsAuthenticated(true);
    };

    const logout = () => {
      setIsAuthenticated(false);
      setToken(null);
      localStorage.clear();
    };

    // 앱이 처음 로드될 때 Kakao 토큰 확인
    useEffect(() => {
        const kakaoKey = Object.keys(localStorage).find((key) => key.startsWith("kakao_"));
        const storedToken = kakaoKey ? localStorage.getItem(kakaoKey) : null;

        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
            console.log("이미 로그인: 토큰 확인됨");
        } else {
            console.log("로그인 필요: 저장된 토큰 없음");
        }
        setLoading(false);
    }, []);

    // isAuthenticated 값이 변경될 때마다 확인하는 useEffect 추가
    useEffect(() => {
        console.log("setIsAuthenticated 변경됨: ", isAuthenticated);
    }, [isAuthenticated]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
