import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const {handleLogin , handleLogout,em,pass,isAuth} = useContext(AuthContext)
  const [email , setEmail] = useState("");
  const [password,setPassword] = useState("");

 
  function handleSubmit(){
    if(em===email && pass===password){
      alert("Welcome")
      handleLogin(email,password)
    }else{
      alert("Try again with Correct Email and Password")
    }
  }

 if (isAuth){
  return  <Navigate to="/" />
  }

  console.log(email)
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="example@gmail.com" />
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
