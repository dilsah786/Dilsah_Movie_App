import React from 'react'
import { useState , useEffect } from 'react';

// Carousel Works and imports
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieDetails from './MovieDetails';
import DramaMovies from './DramaMovies';










const HomePage = () => {
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


// Carousel Responsiveness

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  }
};





















  console.log(movieData);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <Carousel   swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  >
  <div> <img  src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" width={600} height={300} /></div>
  <div> <img src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"width={200} /> </div>
  <div> <img  src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg" width={200} /> </div>
  <div> <img src="https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022-thumbnail.jpg" width={200} /> </div>
</Carousel>;
    
     {movieData.map((elem) => {
      return (
        <div>
          <h1 style={{color:"red"}}>{elem.id} </h1>
          <img src={elem.poster} />
        </div>
      );
    })}

    <DramaMovies/>
    <MovieDetails/>
    
    </div>
  )
}

export default HomePage