import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // JSON server URL
  // baseURL: "https://movies-website-ulxw.onrender.com", // JSON server URL
  withCredentials: true,
 

  //
  
});

export default instance;