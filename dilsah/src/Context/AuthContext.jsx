import React, { Children, createContext, useState } from 'react'

 export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {
  const [isAuth , setIsAuth] = useState(false);
  const pass = "Dilsah"
  const em = "dilsah@gmail.com";
  
  const handleLogin = () =>{
     setIsAuth(true);
  }

  const handleLogout = () =>{
    setIsAuth(false);
  }
    console.log(children)
  
   
  return  <AuthContext.Provider value={{isAuth,handleLogin,handleLogout,em,pass}}>{children}</AuthContext.Provider>
  
}

export default AuthContextProvider