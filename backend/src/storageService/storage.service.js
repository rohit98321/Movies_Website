const Imagekit = require("imagekit")

var imagekit = new Imagekit({
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    urlEndpoint: process.env.URL_ENDPOINT
});

const uploadFile =(file)=>{

    return new Promise((resolve,reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:"videos & posters",
            folder:"movies"
        },(error,result)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(result);
            }
        })
    })
}


module.exports=uploadFile
