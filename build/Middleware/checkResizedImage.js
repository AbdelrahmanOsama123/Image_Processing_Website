"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// eslint-disable-next-line @typescript-eslint/ban-types
var checkResizedImage = function () {
    var resizedImages = [];
    var resizedImagesPath = 'C:/Users/hp/OneDrive/Desktop/ImageProcessing_API/src/images/resizedImages/';
    fs_1.default.readdir(resizedImagesPath, function (err, filesNames) {
        if (err) {
            throw new Error("Error =>" + err);
        }
        else {
            filesNames.forEach(function (fileName) {
                if (fileName.endsWith('.jpg')) {
                    resizedImages.push(fileName);
                }
                else {
                    console.log('a7a');
                }
            });
        }
    });
    // const currFileName = (req.query.filename) as string;
    // const currWidth = parseInt((req.query.width) as string);
    // const currHeight = parseInt((req.query.height) as string);
    // const currResizedImage = `${currFileName}_${currWidth}_${currHeight}.jpg` as string;
    // console.log(currResizedImage);
    // console.log(resizedImages);
    // if(resizedImages.includes(currResizedImage as string)){
    //     return res.sendFile(`${resizedImagesPath}/${currResizedImage}`);
    // }
    // else{
    //     next();
    // }
};
checkResizedImage();
exports.default = checkResizedImage;
