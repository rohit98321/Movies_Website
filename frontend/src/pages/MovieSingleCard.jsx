import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

import { useParams } from "react-router-dom";

const MovieSingleCard = () => {
  const { id } = useParams();

  const movies = useSelector((state) => state.movie.movies);

  const movie = movies?.find((movie) => movie._id == id);

  console.log("find movie", movie);

  return movie ? (
    <div>
      <div className="w-full flex justify-center">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-60 rounded-lg shadow-md"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4 text-yellow-400 text-center">
        {movie.title}
      </h1>

      {/* Details */}
      <div className="mt-4 space-y-2 text-lg">
        <p>
          <span className="font-semibold">🎭 Genre:</span>{" "}
          {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
        </p>
        <p>
          <span className="font-semibold">🌍 Language:</span>{" "}
          {Array.isArray(movie.languages)
            ? movie.languages.join(", ")
            : movie.languages}
        </p>
        <p>
          <span className="font-semibold">🎬 Director:</span> {movie.director}
        </p>
        <p>
          <span className="font-semibold">⭐ Stars:</span>{" "}
          {Array.isArray(movie.stars) ? movie.stars.join(", ") : movie.stars}
        </p>
      </div>

      {/* Video Player */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-3">🎥 Watch Trailer</h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <ReactPlayer url={movie.video} controls width="100%" height="500px" />

          <video src={movie.video} controls width="100%" height="500" />
        </div>
      </div>
    </div>
  ) : (
    "loading"
  );
};

export default MovieSingleCard;
