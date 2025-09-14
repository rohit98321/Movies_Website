const express =require("express")
const movieRoute =require("./routes/movie.router")
const UserRoute=require("./routes/User.router")
const cors=require("cors")

const cookieParser = require("cookie-parser")


const app=express()

app.use(cors({
    origin:[    
        "http://localhost:5173",
        "https://movies-website-1-qu9q.onrender.com"
    ],
    credentials: true
}))


app.use(cookieParser())
app.use(express.json())

app.use("/movie",movieRoute)
app.use("/user",UserRoute)


module.exports=app