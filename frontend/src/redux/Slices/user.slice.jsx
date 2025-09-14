import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:""
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loaduser:(state,actions)=>{
            state.user=actions.payload
            console.log("state.user",state.user);
            

        },

        clearuser:(state,actions)=>{
            state.user="";
           

        }
    }
})


export const {loaduser,clearuser}=userSlice.actions
export default userSlice.reducer