const express = require("express");
const movieModel = require("../models/Movie.models");
const multer = require("multer");
const validator =require("../middleware/validator.middleware")

const { default: mongoose } = require("mongoose");
const moiveController = require("../controller/movieContrller");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get("/movies", moiveController.moviefetchController);

router.post(
  "/movies",
  upload.fields([
    { name: "poster", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  validator.createMovieValidator,
  moiveController.moivepostController
);

//update
router.patch("/movies/:id",moiveController.movieupdateController);

//delete
router.delete("/movies/:id",moiveController.moviedeleteController);

module.exports = router;
