import express from 'express';
import fs from 'fs';


// eslint-disable-next-line @typescript-eslint/ban-types
const checkImageExist = (req:express.Request,res:express.Response,next:Function)=>{
    const imagePaths:string[]=[];
    const fullImagesPath = 'C:/Users/hp/OneDrive/Desktop/ImageProcessing_API/src/images/fullImages/';
    fs.readdir(fullImagesPath,(err,filesNames)=>{
      if(err){
        throw new Error("Error =>" +err);
      }
      else{
        filesNames.forEach((fileName)=>{
            if(fileName.endsWith('.jpg')){
              imagePaths.push(fileName);
            }
        })
      }
      const myFilename = (req.query.filename +'.jpg') as string;
      if(imagePaths.includes(myFilename)){
        next();
      }
      else{
          return res.status(400).json({ error: 'File name you have entered is not exist , please enter available name' });
      }
    });
  }

  export default checkImageExist;