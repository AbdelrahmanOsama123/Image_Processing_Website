import express from 'express';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/ban-types
const checkResizedImage = (req:express.Request,res:express.Response,next:Function)=>
    {
        let bool = false; 
        const resizedImagesPath = path.join(__dirname, '../images/resizedImages');
        const currFileName = (req.query.filename) as string;
        const currWidth = parseInt((req.query.width) as string);
        const currHeight = parseInt((req.query.height) as string);
        const currResizedImage = `${currFileName}_${currWidth}_${currHeight}.jpg` as string;

        fs.readdir(resizedImagesPath,(err,filesNames)=>{
            if(err){
              throw new Error("Error =>" +err);
            }
            else{
              filesNames.forEach((fileName)=>{
                if(fileName == currResizedImage){
                  bool = true;
                }
                
              });
          }
          if(bool){
            res.sendFile(`${resizedImagesPath}/${currResizedImage}`);
          }
          else
            next();
        });
        
  }

export default checkResizedImage;