import React from 'react'
import {useForm} from "react-hook-form"
import axios from "axios"
import {toast} from "react-toastify"

const Create = () => {

  const {register,reset,handleSubmit }=useForm()


    const movieHandler= async (movie)=>{

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

        const res= await axios.post("http://localhost:3000/movie/movies",formData,{headers:{
          "Content-Type": "multipart/form-data",
        },

       
      });
        
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
      <input className='w-[600px] h-[50px] border-b outline-0' {...register("title")} type="text" placeholder='Title' />
      <input className='w-[600px] h-[50px] border-b outline-0' {...register("genre")} type="text" placeholder='Genre' />
      <input className='w-[600px] h-[50px] border-b outline-0' {...register("stars")} type="text" placeholder='Stars' />
      <input className='w-[600px] h-[50px] border-b outline-0' {...register("languages")} type="text" placeholder='Languages' />
      <input className='w-[600px] h-[50px] border-b outline-0' {...register("director")} type="text" placeholder='Director' />
      <input className='w-[600px] h-[50px] border-b outline-0' {...register("video")} type="file" placeholder='Video' />
      <input className='w-[600px] h-[50px] border-b outline-0' {...register("poster")} type="file" placeholder='Poster Image' />
      

      <button className='bg-amber-800 p-3 rounded-3xl'>Create</button>
      </form>

    </div>
  )
}

export default Create