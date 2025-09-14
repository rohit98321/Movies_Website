import React from "react";
import { useForm } from "react-hook-form";
import { asyncUserRegister } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const userRegisterHandler=(user)=>{
    console.log(user);
    dispatch(asyncUserRegister(user))
    navigate("/")
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 p-4">
  <form
    onSubmit={handleSubmit(userRegisterHandler)}
    className="w-full max-w-md bg-black-900 p-6 rounded-lg shadow-md space-y-4"
  >
    <h2 className="text-2xl font-semibold text-center text-gray-700">Register</h2>

    <input
      {...register("username")}
      type="text"
      placeholder="Username"
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

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
      Register
    </button>

    <p className="text-center text-sm text-gray-600">
      Already have an account?{" "}
      <Link to="/user/login" className="text-blue-600 hover:underline">
        Login here
      </Link>

      
    </p>
  </form>
</div>

  );
};

export default AdminRegister;
