import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const initializeAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const userResponse = await axios.get('https://ziadaapi.onrender.com/api/user/profile', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setIsAuthenticated(true);
                    setUser(userResponse.data.data);
                } catch (error) {
                    console.error('Error fetching user profile:', error);
                    localStorage.removeItem('token'); 
                    setIsAuthenticated(false);
                    setUser(null);
                }
            }
        };

        initializeAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('https://ziadaapi.onrender.com/api/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);

            const userResponse = await axios.get('https://ziadaapi.onrender.com/api/user/profile', {
                headers: { Authorization: `Bearer ${token}` },
            });

            setIsAuthenticated(true);
            setUser(userResponse.data.data);
        } catch (error) {
            console.error('Login error:', error);
            throw new Error(error.response?.data?.error || 'An error occurred during login');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
