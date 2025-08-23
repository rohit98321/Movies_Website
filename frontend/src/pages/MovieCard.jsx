import React from 'react'
import {motion} from "framer-motion"
import {Link, useParams } from "react-router-dom"
const MovieCard = ({movie}) => {

  const id =useParams()

  return (
    <Link to={`/singlecard/${id.toString()}`}>
    <motion.div
      className="bg-gray-900 text-white rounded-2xl shadow-lg p-4 flex flex-col gap-3 hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      >
      {/* Poster */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
          />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-yellow-400">{movie.title}</h2>

      {/* Info */}
      <div className="text-sm space-y-1">
        <p>
          <span className="font-semibold">Genre:</span> {movie.genre}
        </p>
        <p>
          <span className="font-semibold">Language:</span> {movie.languages}
        </p>
        <p>
          <span className="font-semibold">Director:</span> {movie.director}
        </p>
        <p>
          <span className="font-semibold">Stars:</span> {movie.stars}
        </p>
        
      </div>

      {/* Video Link */}
      <a
        href={movie.video}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg hover:bg-yellow-400 transition-all"
        >
        Watch Now 🎬
      </a>
    </motion.div>
        </Link>
  )
}

export default MovieCard