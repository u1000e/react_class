import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        username: null,
        accessToken: null,
        refreshToken: null,
    });

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        const username = localStorage.getItem('username');
        if (accessToken && refreshToken && username) {
            setAuth({
                isAuthenticated: true,
                username,
                accessToken,
                refreshToken
            });
        }
    }, []);

    const login = (username, accessToken, refreshToken) => {
        localStorage.setItem('username', username);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setAuth({
            isAuthenticated: true,
            username,
            accessToken,
            refreshToken
        });
    };

    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setAuth({
            isAuthenticated: false,
            username: null,
            accessToken: null,
            refreshToken: null
        });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};