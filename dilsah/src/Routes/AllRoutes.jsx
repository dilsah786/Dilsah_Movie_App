import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../Page/HomePage'
import Login from '../Page/Login'
import Signup from '../Page/Signup'
import MovieDetails from '../Page/MovieDetails'
import CrimeMovies from '../Page/CrimeMovies'
import ActionMovies from '../Page/ActionMovies'
import DramaMovies from '../Page/DramaMovies'
const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<HomePage/>} />\
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/moviedetails' element={<MovieDetails/>} />
        <Route path='/crimemovies' element={<CrimeMovies/>} />
        <Route path='/actionmovies' element={<ActionMovies/>} />
        <Route path='/dramamovies' element={<DramaMovies/>} />
    </Routes>
    </div>
  )
}

export default AllRoutes