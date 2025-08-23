import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Slices/movie.slice";


export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
