import express from 'express';
import {JSDOM} from 'jsdom';
import { parseInt } from 'lodash';

function getWindowSize(): { screenwidth: number; screenheight: number } 
    {
        const { window } = new JSDOM();
        const screenwidth = window.innerWidth;
        const screenheight = window.innerHeight;
        return { screenwidth, screenheight };
    }
const checkWidth_HeightValidation =
     // eslint-disable-next-line @typescript-eslint/ban-types
     async(req:express.Request,res:express.Response,next:Function)=>
    {
        const { screenwidth, screenheight } = getWindowSize();
        const {filename,width,height } = req.query;
        if(filename ==undefined || width ==undefined || height== undefined){
            return res.status(400).json({ error: "you don't enter file name with width and height" 
        });
        }

        if (!parseInt(width as string) || !parseInt(height as string) || isNaN(parseInt(width as string)) || isNaN(parseInt(height as string))) {
            return res.status(400).json({ error: 'Invalid width or height' });
        }

        if(parseInt(width as string) > screenwidth || parseInt(height as string) > screenheight){
            return res.status(400).json({ error: 'width or height are higher than screen size' });
        }
        else{
            next();
        }
    }
    export default checkWidth_HeightValidation;