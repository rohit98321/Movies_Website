const mongoose=require("mongoose")


const connectDb=()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("db connected successfully");
    }).catch((error)=> console.log(error))
}


module.exports=connectDb