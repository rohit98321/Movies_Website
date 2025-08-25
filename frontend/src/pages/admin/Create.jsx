import React from 'react'
import {useForm} from "react-hook-form"
import axios from "axios"
import {toast} from "react-toastify"

const Create = () => {

  const {register,reset,handleSubmit }=useForm()


    const movieHandler= async (movie)=>{

      console.log(movie);

      const formData=new FormData();

      formData.append("title",movie.title);
      formData.append("genre",movie.genre);
      formData.append("stars",movie.stars);
      formData.append("languages",movie.languages);
      formData.append("director",movie.director);
      formData.append("video",movie.video[0]);
      formData.append("poster",movie.poster[0]);
      console.log(formData);

      try {

        toast.success("please wait some time it's uploading here")
        const res= await axios.post("http://localhost:3000/movie/movies",formData,{headers:{
          "Content-Type": "multipart/form-data",
        },
        
        
      });
      reset()
      toast.success("movie addred successfully")
        
        console.log(res);
      } catch (error) {
        console.log(error);
        
      }
      

    }

  return (
    <div>
      <form
      className='flex flex-col gap-6 w-1/2 mx-auto justify-center p-7 items-center'
       onSubmit={handleSubmit(movieHandler)}>
      <input className='w-[400px] h-[50px] sm:w-[600px]  border-b' {...register("title")} type="text" placeholder='Title' />
      <input className='w-[400px] h-[50px] sm:w-[600px]  border-b' {...register("genre")} type="text" placeholder='Genre' />
      <input className='w-[400px] h-[50px] sm:w-[600px]  border-b' {...register("stars")} type="text" placeholder='Stars' />
      <input className='w-[400px] h-[50px] sm:w-[600px]  border-b' {...register("languages")} type="text" placeholder='Languages' />
      <input className='w-[400px] h-[50px] sm:w-[600px]  border-b' {...register("director")} type="text" placeholder='Director' />
      <input className='w-[400px] h-[50px] sm:w-[600px]  border-b' {...register("video")} type="file" placeholder='Video' />
      <input className='w-[400px] h-[50px] sm:w-[600px]  border-b' {...register("poster")} type="file" placeholder='Poster Image' />

      <select 
      {...register("category")}
        defaultValues=""
        className='outline-0 bg-neutral-700  w-[600px] sm:w-[600px] transition-all duration-700 ease-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400'
        >
        <option value="bollywood">Bollywood</option>
        <option value="hollywood">Hollywood</option>
        <option value="animation">Animation</option>
        <option value="south">South</option>
        <option value="webseries">WebSeries</option>
      </select>
      

      <button className='bg-amber-800 p-3 rounded-3xl'>Create</button>
      </form>

    </div>
  )
}

export default Create