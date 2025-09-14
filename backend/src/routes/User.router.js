const express=require("express");
const router=express.Router();
const userController=require("../controller/userController")



router.post("/register",userController.userRegisterController)
router.post("/login",userController.userLoginController)
router.get("/logout",userController.userLogoutController)
router.get("/profile",userController.userProfileController)









module.exports=router