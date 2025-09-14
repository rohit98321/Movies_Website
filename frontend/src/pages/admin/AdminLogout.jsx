import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncLogoutUser } from '../../redux/actions/userAction'
import { useNavigate } from 'react-router-dom'




const AdminLogout = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const logoutHandler=()=>{
        dispatch(asyncLogoutUser())
        navigate("/user/login")
    }

  return (
    <div className='h-screen' >


        <button
        className='bg-blue-700 p-2 rounded uppercase font-bold'
        onClick={logoutHandler}>logout</button>
    </div>
  )
}

export default AdminLogout