import React, { Children, createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const pass = "Dilsah";
  const em = "dilsah@gmail.com";

  const handleLogin = () =>{
     setIsAuth(true);
  }

  const handleLogout = () =>{
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuth, handleLogin, handleLogout, em, pass }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
