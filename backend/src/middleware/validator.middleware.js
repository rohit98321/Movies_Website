const {body,validationResult} = require("express-validator")

const responseWithValidationsErrors = (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    next();
  };


 

  const createMovieValidator = [
    body("title")
      .notEmpty().withMessage("Title is required")
      .isLength({ min: 2 }).withMessage("Title must be at least 2 characters long"),
  
    body("genre")
      .notEmpty().withMessage("Genre is required")
      .isString().withMessage("Genre must be a string"),
  
    body("stars")
      .notEmpty().withMessage("Stars field is required")
      .isString().withMessage("Stars must be a string"),
  
    body("languages")
      .notEmpty().withMessage("Languages are required")
      .isString().withMessage("Languages must be a string"),
  
    body("director")
      .notEmpty().withMessage("Director name is required")
      .isString().withMessage("Director must be a string"),
  
    body("category")
      .notEmpty().withMessage("Category is required")
      .isIn(["bollywood", "hollywood", "animation", "south", "webseries"])
      .withMessage("Invalid category value"),
      responseWithValidationsErrors
  ];

module.exports={
  createMovieValidator
}