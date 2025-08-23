import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const MovieSingleCard = () => {
  const id =useParams()
  console.log(id.toString());
  const movies=useSelector((state)=>state.movie.movies)
 

  return (
    <div>

    {id.toString()}

        
    </div>
  )
}

export default MovieSingleCard