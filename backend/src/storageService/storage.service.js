const Imagekit = require("imagekit")

var imagekit = new Imagekit({
    publicKey: "public_Sx+a/QrzcXiFZif+znFoW3A97zQ=",
    privateKey: "private_28yClUJo+pNOe0iMSsL+0n7jUwA=",
    urlEndpoint: "https://ik.imagekit.io/rhjxkrt0i"
});

const uploadFile =(file)=>{

    return new Promise((resolve,reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:"videos & posters"
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
