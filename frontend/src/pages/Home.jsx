import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {loadMovie} from "../redux/Slices/movie.slice"

const Home = () => {


    const dispatch=useDispatch()


    const movies2=useSelector((state)=> state.movie.movies)



  console.log("movies2",movies2);

      const fetchMovies= async ()=>{
        try {

          const {data}=await axios.get("http://localhost:3000/movie/movies")
          console.log(data);
          
          dispatch(loadMovie(data))
          
        } catch (error) {
          console.log(error);
          
        }
      }

      

      useEffect(() => {
       fetchMovies()
      
      }, [])
      
      const renderMovies=movies2.map((movie)=>(

        <MovieCard key={movie._id.toString()} movie={movie}/>
      ))


  return (
    <div className='grid p-5 sm:grid-cols-3 mx-auto md:grid-cols-6 gap-4 z-5'>

            {renderMovies}

    </div>
  )
}

export default Home