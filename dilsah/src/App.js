import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [movieData, setMovieData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch(` http://localhost:8080/movies`);
      const res = await result.json();
      setMovieData(res);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(movieData);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
    <h1 style={{color:"red"}}>Dilsah</h1>
      {movieData.map((elem) => {
        return (
          <div>
            <h1 style={{color:"red"}}>{elem.id} </h1>
            <img src={elem.poster} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
