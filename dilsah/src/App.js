import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Component/Navbar";


function App() {

  return (
    <div className="App">
   
   
    <Navbar/>
    <AllRoutes/>
    
    </div>
  );
}

export default App;

//  background-image: url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg);