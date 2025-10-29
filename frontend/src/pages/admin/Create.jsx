import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncCreateMovie } from "../../redux/actions/movieAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { register, reset, handleSubmit } = useForm();
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movieHandler = async (movie) => {
    console.log(movie);
    setUpload(true);

    const formData = new FormData();
    formData.append("title", movie.title);
    formData.append("genre", movie.genre);
    formData.append("stars", movie.stars);
    formData.append("languages", movie.languages);
    formData.append("director", movie.director);
    formData.append("video", movie.video[0]);
    formData.append("poster", movie.poster[0]);
    formData.append("category", movie.category);

    dispatch(asyncCreateMovie(formData));
    reset();
    toast.warning("Please wait, uploading...");
    setTimeout(() => navigate("/"), 10000);
  };

  return (
    <div className="flex justify-center items-center py-10 px-4 sm:px-10 bg-gray-950 min-h-screen">
      <form
        className="flex flex-col gap-6 w-full max-w-lg bg-neutral-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800"
        onSubmit={handleSubmit(movieHandler)}
      >
        <h1 className="text-2xl font-bold text-center text-yellow-400">🎬 Create Movie</h1>

        {upload && <p className="text-green-500 text-center">Uploading...</p>}

        {/* Title */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Movie Title</label>
          <input
            {...register("title")}
            type="text"
            placeholder="Enter movie title"
            className="w-full h-12 border-b border-gray-600 bg-transparent text-white px-3 outline-none focus:border-yellow-400"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Genre</label>
          <input
            {...register("genre")}
            type="text"
            placeholder="e.g., Action, Comedy"
            className="w-full h-12 border-b border-gray-600 bg-transparent text-white px-3 outline-none focus:border-yellow-400"
          />
        </div>

        {/* Stars */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Stars</label>
          <input
            {...register("stars")}
            type="text"
            placeholder="Enter cast names"
            className="w-full h-12 border-b border-gray-600 bg-transparent text-white px-3 outline-none focus:border-yellow-400"
          />
        </div>

        {/* Languages */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Languages</label>
          <input
            {...register("languages")}
            type="text"
            placeholder="e.g., Hindi, English"
            className="w-full h-12 border-b border-gray-600 bg-transparent text-white px-3 outline-none focus:border-yellow-400"
          />
        </div>

        {/* Director */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Director</label>
          <input
            {...register("director")}
            type="text"
            placeholder="Enter director name"
            className="w-full h-12 border-b border-gray-600 bg-transparent text-white px-3 outline-none focus:border-yellow-400"
          />
        </div>

        {/* Upload Video */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-300 text-sm font-medium">🎥 Upload Movie Video</label>
          <input
            {...register("video")}
            type="file"
            accept="video/*"
            className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 
                       file:text-sm file:font-semibold file:bg-yellow-500 file:text-black
                       hover:file:bg-yellow-400 w-full cursor-pointer bg-neutral-800 text-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Upload Poster */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-300 text-sm font-medium">🖼️ Upload Movie Poster</label>
          <input
            {...register("poster")}
            type="file"
            accept="image/*"
            className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 
                       file:text-sm file:font-semibold file:bg-yellow-500 file:text-black
                       hover:file:bg-yellow-400 w-full cursor-pointer bg-neutral-800 text-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Category</label>
          <select
            {...register("category")}
            className="w-full h-12 bg-neutral-800 text-white px-3 rounded-md outline-none 
                       focus:ring-2 focus:ring-yellow-400"
          >
            <option value="bollywood">Bollywood</option>
            <option value="hollywood">Hollywood</option>
            <option value="animation">Animation</option>
            <option value="south">South</option>
            <option value="webseries">Web Series</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-500 text-black py-3 rounded-xl font-semibold 
                     hover:bg-yellow-400 transition-all duration-300"
        >
          Create Movie
        </button>
      </form>
    </div>
  );
};

export default Create;
