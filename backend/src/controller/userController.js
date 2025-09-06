const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userRegisterController = async (req, res) => {
  const { email, username, password } = req.body;

  const existEmail = await userModel.findOne({ email });
  if (existEmail) {
    return res.status(400).json({
      message: "email already exist",
    });
  }

  const hashpassword = await bcrypt.hash(password, 10);
  console.log(hashpassword);

  try {
    const user = await userModel.create({
      email,
      username,
      password: hashpassword,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({
      message: "user register successfully",
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: "server error",
    });
  }
};



const userLoginController= async(req,res)=>{
    const {email,password} = req.body;

    const existEmail=await userModel.findOne({email})
    if(!existEmail){
        return res.status(400).json({
            message:"email id not exist"
        })
    }

    const matchpassword=await bcrypt.compare(password,existEmail.password)
    if(!matchpassword){
        return res.status(404).json({message:"password not match"})
    }

    const token =jwt.sign({id:existEmail._id},process.env.JWT_SECRET)
    res.cookie('token',token)

    res.status(200).json({
        message:"user logged in successfully",
        existEmail
    })

}

module.exports = {
  userRegisterController,
  userLoginController
};
