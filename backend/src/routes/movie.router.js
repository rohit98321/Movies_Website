const express = require("express");
const movieModel = require("../models/Movie.models");
const multer = require("multer");
const uploadFile =require("../storageService/storage.service");
const { default: mongoose } = require("mongoose");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });




  router.get("/movies",async (req,res)=>{
    try {

      const movies=await movieModel.find();
      res.status(200).json({
        message:"movies fetch successfully",
        movies
      })

    } catch (error) {
      console.log(error);
      
    }
  })



router.post(
  "/movies",
  upload.fields([
    { name: "poster", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  async (req, res) => {


        

    
        const posterFile=req.files['poster'][0];
        const posterUpload=await uploadFile(posterFile)
        console.log(posterUpload.url);

        const videoFile=req.files['video'][0]
        const videoUpload=await uploadFile(videoFile)
        console.log(videoUpload.url);


        const movie= await movieModel.create({
            title:req.body.title,
            genre:req.body.genre,
            stars:req.body.stars,
            languages:req.body.languages,
            director:req.body.director,
            video:videoUpload.url,
            poster:posterUpload.url
        })

        if(!movie){
          return res.status(404).json({
            message: "no any data meet here",
          });
        }

    res.status(201).json({
      message: "movie details added succesfully",
    });
  }
);

//update
router.patch("/movies/:id",async(req,res)=>{

    try {

      const {id}=req.params
     

    
  
    const existmovie=await movieModel.findById(id)


    if(!existmovie){
      return res.status(404).json({
        message:"movie not found in database"

      })
    }
   
    const updatedmovie=await movieModel.findByIdAndUpdate(id,req.body,{new:true})

    res.status(200).json({
      message:"movie updated successfully",
      updatedmovie
    })

      
    } catch (error) {
      res.status(500).json({
        message:"server error"
      })
    }
  


   

})

//delete
router.delete("/movies/:id",async (req,res)=>{

      const {id}=req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid movie ID" });
      }

     try {

      const movie=await movieModel.findOneAndDelete(id)

      if(!movie){res.json({message:"movie not found"})}else{res.json({message:"movie deleted successfully",movie})}
      
     } catch (error) {
      console.log(error);
      
     }



})

module.exports = router;
