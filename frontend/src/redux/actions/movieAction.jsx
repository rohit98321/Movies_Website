import axios from "../../api/config";
import { loadMovie } from "../Slices/movie.slice";
import { toast } from "react-toastify";

export const asyncgetmovies = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/movie/movies");
    console.log("first moive fetch data", data);

    dispatch(loadMovie(data.movies));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateMovie = (formData) => async (dispatch, getsate) => {
  try {
    const res = await axios.post("/movie/movies", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("moive created");
    dispatch(asyncgetmovies());
  } catch (error) {
    toast.success(error.response.data.message);
  }
};

export const asyncUpdateMovie =
  (updatedMoive, id) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.patch(`/movie/movies/${id}`, updatedMoive);
      console.log(data.message);
      dispatch(asyncgetmovies());
      toast.success("updated");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

export const asyncDeleteMovie = (id) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.delete(`/movie/movies/${id}`,{withCredentials:true});
    console.log(data);
    toast.success("movie deleted successfully");
    dispatch(asyncgetmovies());
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};
