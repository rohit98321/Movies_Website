import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[]
}


 const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        loadMovie:(state,actions)=>{
            console.log("actons payload",actions.payload);
            state.movies=actions.payload
        }
    }
})
export const {loadMovie} =movieSlice.actions   
export default movieSlice.reducer