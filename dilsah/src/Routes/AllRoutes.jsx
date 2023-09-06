import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import Login from "../Page/Login";
import Signup from "../Page/Signup";
import MovieDetails from "../Page/MovieDetails";
import CrimeMovies from "../Page/CrimeMovies";
import ActionMovies from "../Page/ActionMovies";
import DramaMovies from "../Page/DramaMovies";
import Navbar from "../Component/Navbar";
import Private from "./Private";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Private><HomePage /></Private> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/moviedetails" element={<Private><MovieDetails /></Private> } />
        <Route path="/crimemovies" element={<Private><CrimeMovies /></Private>} />
        <Route path="/actionmovies" element={<Private><ActionMovies /></Private> } />
        <Route path="/dramamovies" element={<Private><DramaMovies /></Private> } />
        <Route path="navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
