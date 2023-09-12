import {promises as fsPromises} from 'fs';
import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
const imageProcess = async (filename:string,width:number,height:number)=>
{
  const outputImagesPath =  path.normalize(path.resolve('../../images/fullImages'));
  const inputImagesPath  =  path.normalize(path.resolve('../../images/resizedImages'));

  fs.mkdirSync(outputImagesPath,{ recursive: true });

  await sharp(inputImagesPath)
  .resize(width, height)
  .toBuffer()
  .then(async(buffer)=>{
    const openFile = await fsPromises.open(`${outputImagesPath}/${filename}_${width}_${height}.jpg`,'w+');
    openFile.write(buffer);
    openFile.close();
  });
  return `${outputImagesPath}/${filename}_${width}_${height}.jpg`;
}
export default imageProcess;