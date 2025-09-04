import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[]
}


 const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        loadMovie:(state,actions)=>{
            state.movies=actions.payload;
            console.log(state.movies);
        }
    }
})
export const {loadMovie} =movieSlice.actions   
export default movieSlice.reducer