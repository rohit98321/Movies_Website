import axios from "axios";

const instance = axios.create({
  baseURL: "https://movies-website-ulxw.onrender.com", // JSON server URL

  //
  
});

export default instance;