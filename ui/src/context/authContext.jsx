import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = function ({ children, value }) {
  const [authData, setAuthData] = useState({});

  const updateAuth = ({loggedIn, mobile, email,role}) => {
    setAuthData({loggedIn, mobile, email, role});
  }

  const authContextValue = { authData: value || authData, updateAuth }

  return (
    <AuthContext.Provider
      value={authContextValue}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {

  const context = useContext(AuthContext);
  return context;
}
