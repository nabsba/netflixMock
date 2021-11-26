//Weak: I need to handle error and confirmation.
// Doc library: https://github.com/expressjs/multer

// yarn add multer @types/multer --save
import multer from 'multer';
// var upload = multer({ dest: './img' })
import path from 'path';
import { handleObject } from './manager/data';
import * as fileManager from './manager/file';

const storageUnits = multer.diskStorage({
  destination: async (req: any, file: any, cb: (arg0: null, arg1: string) => void) => {
    const directoryID = req.params.ID;
    const directoryFolder = req.params.folder;
    const subFolder = JSON.parse(req.body.file).table;
    const fullPath = subFolder
      ? directoryID + '/' + directoryFolder + '/' + subFolder
      : directoryID + '/' + directoryFolder;
    const isDirectory = await fileManager.createDirectoryIfNot(fullPath);
    if (isDirectory) {
      const mainDirectory = path.join(__dirname + '../../../../../../../upload/');
      const fileLocation = mainDirectory + fullPath; //Could generate a name from the data sent.
      cb(null, fileLocation);
    }
  },
  filename: (
    req: any,
    file: {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      filename: string;
    },
    cb: (arg0: null, arg1: any) => void,
  ) => {
    const name = JSON.parse(req.body.file).name;
    const table = JSON.parse(req.body.file).table;
    const folder = req.params.folder;
    const extentionsUserFile = file.originalname.split('.')[1];
    const extentionInputFile = file.mimetype.split('/')[1];
    let extention = extentionsUserFile ? extentionsUserFile : extentionInputFile;
    if (extention === 'vnd.openxmlformats-officedocument.wordprocessingml.document') {
      extention = 'docx';
    }
    const finalName = name + '.' + extention;
    //Here u define the name of the file
    cb(null, finalName);
    if (folder === 'course') {
      const object = {
        type: table,
        mode: 'update',
        object: {
          [name]: finalName,
        },
        ID: req.params.ID,
      };
      handleObject(object);
    }
    //cb(null, Date.now() + path.extname(file.originalname));
  },
});
const storageFile = multer.diskStorage({
  destination: async (req: any, file: any, cb: (arg0: null, arg1: string) => void) => {
    const directory = JSON.parse(req.body.file).folder;
    const isSubFolder = JSON.parse(req.body.file).subFolder
      ? JSON.parse(req.body.file).subFolder
      : null;
    const fullPath = isSubFolder ? directory + '/' + isSubFolder + '/' : directory + '/';
    const isDirectory = await fileManager.createDirectoryIfNot(fullPath);
    if (isDirectory) {
      const mainDirectory = path.join(__dirname + `../../../../../../../upload/`);
      const fileLocation = mainDirectory + fullPath;
      cb(null, fileLocation);
    }
  },
  filename: (
    req: any,
    file: {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      filename: string;
    },
    cb: (arg0: null, arg1: any) => void,
  ) => {
    const extentionInputFile = file.mimetype.split('/')[1];
    const extention = extentionInputFile;
    const finalName = file.originalname + '.' + extention;
    //Here u define the name of the file
    cb(null, finalName);
    // update
    // // if (folder === 'course') {
    // //   const object = {
    // //     type: table,
    // //     mode: 'update',
    // //     object: {
    // //       [name]: finalName,
    // //     },
    // //     ID: req.params.ID,
    // //   };
    // updateObject(object);
  },
  //cb(null, Date.now() + path.extname(file.originalname));
});

const uploadUnits = multer({ storage: storageUnits });
const uploadFiles = multer({ storage: storageFile });

export { uploadUnits, uploadFiles };
