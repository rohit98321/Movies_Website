import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncCreateMovie } from "../../redux/actions/movieAction";
import { toast } from "react-toastify";

const Create = () => {
  const { register, reset, handleSubmit } = useForm();
  const [upload, setupload] = useState(false)
  const dispatch=useDispatch()

  const movieHandler = async (movie) => {
    console.log(movie);
    setupload(true)
    const formData = new FormData();
    formData.append("title", movie.title);
    formData.append("genre", movie.genre);
    formData.append("stars", movie.stars);
    formData.append("languages", movie.languages);
    formData.append("director", movie.director);
    formData.append("video", movie.video[0]);
    formData.append("poster", movie.poster[0]);
    formData.append("category", movie.category);


    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    console.log(formData);
    dispatch(asyncCreateMovie(formData))
   
    toast.warning("please wait some time uploading..")

  };


      

  return (
    <div className="flex justify-center items-center py-10 px-10">

      <form
        className="flex flex-col gap-6 w-full max-w-lg bg-neutral-900 p-6 rounded-2xl shadow-lg"
        onSubmit={handleSubmit(movieHandler)}
        >
        {upload && <h1 className="text-green-500">uploading...</h1> }
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

       

        {/* Button */}
        <button
          type="submit"
          className="bg-amber-800 text-white py-3 rounded-2xl hover:bg-amber-700 transition duration-300"
          
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
