import express from 'express';
import checkImageExist from '../../Middleware/checkImageExist';
import imageProcess from '../../conroller/imagesController';
import checkWidth_HeightValidation from '../../Middleware/checkWidth_HeightValidation';
import checkResizedImage from '../../Middleware/checkResizedImage';

const routes = express.Router();

routes.get('/images',checkWidth_HeightValidation,checkImageExist,checkResizedImage,async (req,res):Promise<void>=>{
    const filename = ((req.query.filename) as unknown) as string;
    const width = parseInt((req.query.width)as string);
    const height = parseInt((req.query.height)as string);
    const newPath = await imageProcess(filename,width,height);
    res.sendFile(newPath);

});
export default routes;