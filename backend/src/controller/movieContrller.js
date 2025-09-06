const movieModel=require("../models/Movie.models")
const uploadFile = require("../storageService/storage.service");


const moviefetchController=async (req,res)=>{
    try {

        const movies=await movieModel.find();
        res.status(200).json({
          message:"movies fetch successfully",
          movies
        })
  
      } catch (error) {
        console.log(error);
        
      }
}


const moivepostController= async(req,res)=>{

    const posterFile = req.files["poster"][0];
    const posterUpload = await uploadFile(posterFile);
    console.log(posterUpload.url);

    const videoFile = req.files["video"][0];
    const videoUpload = await uploadFile(videoFile);
    console.log(videoUpload.url);

    console.log(req.body);

    const movie = await movieModel.create({
      title: req.body.title,
      genre: req.body.genre,
      stars: req.body.stars,
      category:req.body.category,
      languages: req.body.languages,
      director: req.body.director,
      video: videoUpload.url,
      poster: posterUpload.url
    });

    if (!movie) {
      return res.status(404).json({
        message: "no any data meet here",
      });
    }

    res.status(201).json({
      message: "movie details added succesfully",
    });
}

const movieupdateController=async(req,res)=>{
    try {
        const { id } = req.params;
    
        const existmovie = await movieModel.findById(id);
    
        if (!existmovie) {
          return res.status(404).json({
            message: "movie not found in database",
          });
        }
    
        const updatedmovie = await movieModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
    
        res.status(200).json({
          message: "movie updated successfully",
          updatedmovie,
        });
      } catch (error) {
        res.status(500).json({
          message: "server error",
        });
      }
}

const moviedeleteController=async (req,res)=>{
    const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid movie ID" });
  }

  try {
    const movie = await movieModel.findOneAndDelete(id);

    if (!movie) {
      res.json({ message: "movie not found" });
    } else {
      res.json({ message: "movie deleted successfully", movie });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports={
    moviefetchController,
    moivepostController,
    movieupdateController,
    moviedeleteController

}