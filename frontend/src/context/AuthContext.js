import React, { createContext, useState } from 'react';
import { login, register } from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (email, password) => {
    const data = await login(email, password);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const registerUser = async (name, email, password) => {
    const data = await register(name, email, password);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, registerUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
