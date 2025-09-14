import React from 'react'
import { useForm } from "react-hook-form";
import { asyncUserLogin } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AdminLogin = () => {

  const { register, reset, handleSubmit } = useForm();
  const dispatch=useDispatch()

  const userLoginHandler=(user)=>{
    console.log(user);
    dispatch(asyncUserLogin(user))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 p-4">
  <form
    onSubmit={handleSubmit(userLoginHandler)}
    className="w-full max-w-md bg-black-900 p-6 rounded-lg shadow-md space-y-4"
  >
    <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>

  
    <input
      {...register("email")}
      type="email"
      placeholder="Email"
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      {...register("password")}
      type="password"
      placeholder="Password"
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
    >
      Login
    </button>

    <p className="text-center text-sm text-gray-600">
      Already have an account?{" "}
      <Link to="/user/register" className="text-blue-600 hover:underline">
        register here
      </Link>

      
    </p>
  </form>
</div>
  )
}

export default AdminLogin