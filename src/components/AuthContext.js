import React, { createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response, // on success, just return the response
      error => {
        // on error, check for 401 status code
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptor when component unmounts
    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [navigate]); // useEffect should depend on `history`

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);