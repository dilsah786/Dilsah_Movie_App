import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Component/Navbar";
import Navbar1 from "./Navbar1";

function App() {

  return (
    <div className="App">
   
    <h1 style={{color:"red"}}>Dilsah</h1>
    <Navbar/>
    <AllRoutes/>
    
    </div>
  );
}

export default App;

//  background-image: url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg);