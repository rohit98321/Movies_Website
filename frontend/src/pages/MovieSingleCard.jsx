import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";


const MovieSingleCard = () => {
  const { id } = useParams();

  const movies = useSelector((state) => state.movie.movies);

  const movie = movies?.find((movie) => movie._id == id);

  console.log("find movie", movie);



  const { register, reset, handleSubmit } = useForm(
    {
      defaultValues:{
        title:movie?.title,
        genre:movie?.genre,
        stars:movie?.stars,
        languages:movie?.languages,
        director:movie?.director,

      }
    }
  );

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

            <div>
            <form
        className="flex flex-col gap-6 w-full max-w-lg bg-neutral-900 p-6 rounded-2xl shadow-lg"
        onSubmit={handleSubmit(movieHandler)}
      >
        {/* Inputs */}
        <input
          className="w-full h-12 border-b bg-transparent text-white px-3 outline-none"
          {...register("title")}
          type="text"
          placeholder="Title"
        />
        <input
          className="w-full h-12 border-b bg-transparent text-white px-3 outline-none"
          {...register("genre")}
          type="text"
          placeholder="Genre"
        />
        <input
          className="w-full h-12 border-b bg-transparent text-white px-3 outline-none"
          {...register("stars")}
          type="text"
          placeholder="Stars"
        />
        <input
          className="w-full h-12 border-b bg-transparent text-white px-3 outline-none"
          {...register("languages")}
          type="text"
          placeholder="Languages"
        />
        <input
          className="w-full h-12 border-b bg-transparent text-white px-3 outline-none"
          {...register("director")}
          type="text"
          placeholder="Director"
        />
        <input
          className="w-full h-12 border-b bg-transparent text-white px-3 outline-none"
          {...register("video")}
          type="file"
        />
        <input
          className="w-full h-12 border-b bg-transparent text-white px-3 outline-none"
          {...register("poster")}
          type="file"
        />

        {/* Select */}
        <select
          {...register("category")}
          className="w-full h-12 bg-neutral-700 text-white px-3 rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="bollywood">Bollywood</option>
          <option value="hollywood">Hollywood</option>
          <option value="animation">Animation</option>
          <option value="south">South</option>
          <option value="webseries">WebSeries</option>
        </select>

        {/* Progress Bar */}
        {uploadProgress > 0 && (
          <div className="w-full">
            <div className="flex justify-between mb-1 text-sm text-white">
              <span>Uploading...</span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-amber-600 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          className="bg-amber-800 text-white py-3 rounded-2xl hover:bg-amber-700 transition duration-300"
          disabled={uploadProgress > 0 && uploadProgress < 100} // disable while uploading
        >
          {uploadProgress > 0 && uploadProgress < 100 ? "Uploading..." : "Create"}
        </button>
      </form>
            </div>

    </div>
  ) : (
    "loading"
  );
};

export default MovieSingleCard;
