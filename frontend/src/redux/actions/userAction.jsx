import axios from "../../api/config"
import {toast} from "react-toastify"





export const asyncUserRegister=(user)=> async (dispatch,getstate)=>{

    try {
        const {data}=await axios.post("/user/register",user)
        console.log(data);
        toast.success("user register sucessfully")
        
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message)
    }
}

export const asyncUserLogin=(user)=> async (dispatch,getstate)=>{

    try {
        const {data}=await axios.post("/user/login",user)
        console.log(data);
        toast.success("user login sucessfully")
        
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message)
    }
}