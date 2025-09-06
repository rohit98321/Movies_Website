const express =require("express")
const movieRoute =require("./routes/movie.router")
const UserRoute=require("./routes/User.router")
const cors=require("cors")
const cookie= require("cookie-parser")
const cookieParser = require("cookie-parser")


const app=express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/movie",movieRoute)
app.use("/user",UserRoute)


module.exports=app