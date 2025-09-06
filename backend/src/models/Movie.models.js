const mongoose =require("mongoose")

const movieSchema=new mongoose.Schema({
    title:String,
    genre:String,
    stars:String,
    languages:String,
    director:String,
    video:String,
    poster:String,
    category:String
    
})

const movieModel=mongoose.model("movie",movieSchema);

module.exports = movieModel;