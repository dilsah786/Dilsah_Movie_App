import React, { Children, createContext } from 'react'

const AuthContext = createContext();


const AuthContextProvider = ({children}) => {
    console.log(children)
  
   
  return  <AuthContext.Provider>{children}</AuthContext.Provider>
  
}

export default AuthContextProvider