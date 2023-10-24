import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import Login from "../Firebase/Login";
import Signup from "../Firebase/Signup";
import MovieDetails from "../Page/MovieDetails";
import CrimeMovies from "../Page/CrimeMovies";
import ActionMovies from "../Page/ActionMovies";
import DramaMovies from "../Page/DramaMovies";
import Navbar from "../Component/Navbar";
import PrivateRoute from "./PrivateRoutes";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/moviedetails" element={<PrivateRoute><MovieDetails /></PrivateRoute> } />
        <Route path="/crimemovies" element={<PrivateRoute><CrimeMovies /></PrivateRoute>} />
        <Route path="/actionmovies" element={<PrivateRoute><ActionMovies /></PrivateRoute> } />
        <Route path="/dramamovies" element={<PrivateRoute><DramaMovies /></PrivateRoute> } />
        <Route path="navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
