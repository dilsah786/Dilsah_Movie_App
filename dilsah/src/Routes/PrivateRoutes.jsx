import React from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  // const { isAuth } = useContext(AuthContext);
   const isAuth = false;
  console.log(isAuth);

  if (!isAuth) {
    return <Navigate to="/signup" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
