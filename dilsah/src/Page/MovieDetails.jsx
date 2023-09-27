import React, { useEffect, useState } from "react";

const MovieDetails = () => {
  const [movieBestData, setMovieBestData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [currLimit, setCurrLimit] = useState(10);

  const fetchMovie = async (currPage, currLimit) => {
    let url = `http://localhost:3000/best_Movie?_page=${currPage}&_limit=${currLimit}`;
    try {
      const result = await fetch(url);
      const res = await result.json();
      setMovieBestData(res);
    } catch (err) {
      console.log(err);
    }
    console.log(url);
  };

  useEffect(()=>{
    fetchMovie(currPage,currLimit)
  },[currLimit,currPage])


  return (
    <div>
      <h1>
        <button onClick={() => fetchMovie(currPage, currLimit)}>
          MovieDetails
        </button>{" "}
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr) " }}>
        {movieBestData.map((movie) => {
          return (
            <div key={movie.id}>
              <h1>{movie.id} </h1>
              <img src={movie.image.url} width={200} />
              <h1>{movie.name}</h1>
              <h3>
                Power Stats
                <ul>
                  <li>intelligence : {movie.powerstats.intelligence}</li>
                  <li>strength : {movie.powerstats.strength}</li>
                  <li>speed : {movie.powerstats.speed}</li>
                  <li>durability : {movie.powerstats.durability}</li>
                  <li>{movie.powerstats.power}</li>
                  <li>combat: {movie.powerstats.combat} </li>
                </ul>
              </h3>
            </div>
          );
        })}
      </div>
      <div>
        <button
          disabled={currPage === 1}
          onClick={ () => setCurrPage(currPage - 1) }>
          Prev
        </button>
        <button>{currPage} </button>
        <button onClick={() => setCurrPage(currPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default MovieDetails;
