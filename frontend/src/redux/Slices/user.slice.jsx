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

        }
    }
})


export const {loaduser}=userSlice.actions
export default userSlice.reducer