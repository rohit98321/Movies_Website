import React from "react";
import {useSelector } from 'react-redux'
import MovieCard from './MovieCard'


const Bollywood = () => {


  
  const movies=useSelector((state)=> state.movie.movies || [])

  console.log(movies);

    const bollywoodMovies=movies.filter(movie=> movie.category === "bollywood")
    console.log(bollywoodMovies);

    const renderMovies= bollywoodMovies.map((movie)=>(
      <MovieCard key={movie._id} movie={movie}/>
  ))



  return (
    <div className="grid grid-cols-2 p-10 sm:grid-cols-3 mx-auto md:grid-cols-6 gap-4 z-5">
      {bollywoodMovies.length > 0 ? renderMovies : <p>loading...</p>}
    </div>
  );
};

export default Bollywood;
