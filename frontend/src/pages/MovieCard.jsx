import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/singlecard/${movie._id}`}>
      <div
        className="bg-gray-900 w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px]
        rounded-2xl shadow-xl overflow-hidden mx-auto 
        hover:scale-105 hover:shadow-2xl transition-all duration-300"
      >
        {/* Poster */}
        <div className="w-full h-[150px] sm:h-60 md:h-64 overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between h-[230px] sm:h-[210px] md:h-[230px]">
          <div className="flex flex-col gap-2">
            {/* Title */}
            <h2 className="text-lg font-bold text-yellow-400 truncate text-center">
              {movie.title}
            </h2>

            {/* Info */}
            <div className="text-sm text-gray-200 space-y-1">
              <p>
                <span className="font-semibold text-gray-300">Genre:</span>{" "}
                {movie.genre}
              </p>
              <p>
                <span className="font-semibold text-gray-300">Language:</span>{" "}
                {movie.languages}
              </p>
              <p>
                <span className="font-semibold text-gray-300">Director:</span>{" "}
                {movie.director}
              </p>
              <p className="line-clamp-1">
                <span className="font-semibold text-gray-300">Stars:</span>{" "}
                {movie.stars}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
