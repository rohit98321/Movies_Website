const express=require("express");
const router=express.Router();
const userController=require("../controller/userController")



router.post("/register",userController.userRegisterController)
router.post("/login",userController.userLoginController)








module.exports=router