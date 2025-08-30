import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const Create = () => {
  const { register, reset, handleSubmit } = useForm();
  const [uploadProgress, setUploadProgress] = useState(0);

  const movieHandler = async (movie) => {
    console.log(movie);

    const formData = new FormData();
    formData.append("title", movie.title);
    formData.append("genre", movie.genre);
    formData.append("stars", movie.stars);
    formData.append("languages", movie.languages);
    formData.append("director", movie.director);
    formData.append("video", movie.video[0]);
    formData.append("poster", movie.poster[0]);
    formData.append("category", movie.category);

    try {
      toast.info("Uploading movie... Please wait 🚀");

      const res = await axios.post("https://movies-website-ulxw.onrender.com/movie/movies", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percent);
          }
        },
      });

      reset();
      setUploadProgress(0);
      toast.success("Movie uploaded successfully 🎉");
      console.log(res);
    } catch (error) {
      console.log(error);
      setUploadProgress(0);
      toast.error("Failed to upload movie ❌");
    }
  };


      const moviecreate=(movie)=>{
        

      }

  return (
    <div className="flex justify-center items-center py-10 px-10">
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
  );
};

export default Create;
