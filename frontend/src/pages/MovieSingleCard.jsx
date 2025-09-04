import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify"

import { useParams } from "react-router-dom";
import { asyncUpdateMovie,asyncDeleteMovie } from "../redux/actions/movieAction";


const MovieSingleCard = () => {
  const { id } = useParams();


  const dispatch=useDispatch()
  const movies = useSelector((state) => state.movie.movies);
  const movie = movies?.find((movie) => movie._id == id);
  



  const { register, reset, handleSubmit } = useForm(
    {
      defaultValues:{
        title:movie?.title,
        genre:movie?.genre,
        stars:movie?.stars,
        languages:movie?.languages,
        director:movie?.director,
        category:movie?.category

      }
    }
  );



  const updatemovieHandler=(updatedmoive)=>{
    
    console.log(updatedmoive,id);
    dispatch(asyncUpdateMovie(updatedmoive,id))
    toast.success("clicked")

  }

  const moviedeleteHandler=()=>{
    dispatch(asyncDeleteMovie(id))
  }

  return movie ? (
    <div className="grid grid-cols-2 gap-4 cente">

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


          
            <div>
            <form
        className="flex flex-col gap-6 w-full max-w-lg bg-neutral-900 p-6 rounded-2xl shadow-lg"
        onSubmit={handleSubmit(updatemovieHandler)}
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
            
          type="file"
        />
        <input
          className="w-full h-12 border-b bg-transparent text-white px-3 outline-none"
         
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

        {/* Button */}
        <button
          type="submit"
          className="bg-amber-800 text-white py-3 rounded-2xl hover:bg-amber-700 transition duration-300"
         
        >
          Update 
        </button>

        <button
          
          className="bg-red-800 text-white py-3 rounded-2xl hover:bg-red-700 transition duration-300"
          onClick={moviedeleteHandler}
         
        >
          delete 
        </button>


      </form>

      
            </div>

    </div>
  ) : (
    "loading"
  );
};

export default MovieSingleCard;
