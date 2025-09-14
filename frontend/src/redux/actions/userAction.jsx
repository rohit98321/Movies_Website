import axios from "../../api/config";
import { toast } from "react-toastify";
import { loaduser, clearuser } from "../Slices/user.slice";

export const asyncUserRegister = (user) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/user/register", user, {
      withCredentials: true,
    });
    console.log(data);
    dispatch(asyncGetUser())
    toast.success("user register sucessfully");
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message);
  }
};

export const asyncUserLogin = (user) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/user/login", user, {
      withCredentials: true,
    });
    console.log(data);
    dispatch(asyncGetUser());
    toast.success("user login sucessfully");
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message);
  }
};

export const asyncGetUser = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/user/profile", {
      withCredentials: true,
    });
    console.log(data);
    dispatch(loaduser(data.user));
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};

export const asyncLogoutUser = () => async (dispatch, getstate) => {
  try {
    const res = await axios.get("/user/logout", {
      withCredentials: true,
    });
    dispatch(clearuser());
    console.log(res);
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};
