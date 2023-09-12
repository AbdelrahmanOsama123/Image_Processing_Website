import express from 'express';
import fs from 'fs';

// eslint-disable-next-line @typescript-eslint/ban-types
const checkResizedImage = (req:express.Request,res:express.Response,next:Function)=>
    {
        const resizedImages:string[]=[];
        const resizedImagesPath = 'C:/Users/hp/OneDrive/Desktop/ImageProcessing_API/src/images/resizedImages/';
        
        fs.readdir(resizedImagesPath,(err,filesNames)=>{
            if(err){
              throw new Error("Error =>" +err);
            }
            else{
              filesNames.forEach((fileName)=>{
                  if(fileName.endsWith('.jpg')){
                    resizedImages.push(fileName);
                  }
              })
            }
        });
        const currFileName = (req.query.filename) as string;
        const currWidth = parseInt((req.query.width) as string);
        const currHeight = parseInt((req.query.height) as string);
        const currResizedImage = `${currFileName}_${currWidth}_${currHeight}.jpg` as string;
        console.log(currResizedImage);
        console.log(resizedImages);

        if(resizedImages.includes(currResizedImage as string)){
            return res.sendFile(`${resizedImagesPath}/${currResizedImage}`);
        }
        else{
            next();
        }
    }
    export default checkResizedImage;