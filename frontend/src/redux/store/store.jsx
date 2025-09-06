import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Slices/movie.slice";
import userReducer from "../Slices/user.slice";


export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
});
