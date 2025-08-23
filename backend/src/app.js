const express =require("express")
const movieRoute =require("./routes/movie.router")
const cors=require("cors")


const app=express()

app.use(cors())

app.use(express.json())

app.use("/movie",movieRoute)


module.exports=app