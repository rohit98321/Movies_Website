import axios from "../../api/config"




export const ayncgetmovies=()=> async (dispatch,getstate)=>{


    axios.get("/movie/movies")

}