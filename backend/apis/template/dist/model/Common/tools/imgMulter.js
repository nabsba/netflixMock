"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = exports.uploadUnits = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const data_1 = require("./manager/data");
const fileManager = __importStar(require("./manager/file"));
const storageUnits = multer_1.default.diskStorage({
    destination: (req, file, cb) => __awaiter(void 0, void 0, void 0, function* () {
        const directoryID = req.params.ID;
        const directoryFolder = req.params.folder;
        const subFolder = JSON.parse(req.body.file).table;
        const fullPath = subFolder
            ? directoryID + '/' + directoryFolder + '/' + subFolder
            : directoryID + '/' + directoryFolder;
        const isDirectory = yield fileManager.createDirectoryIfNot(fullPath);
        if (isDirectory) {
            const mainDirectory = path_1.default.join(__dirname + '../../../../../../../upload/');
            const fileLocation = mainDirectory + fullPath;
            cb(null, fileLocation);
        }
    }),
    filename: (req, file, cb) => {
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
            data_1.handleObject(object);
        }
    },
});
const storageFile = multer_1.default.diskStorage({
    destination: (req, file, cb) => __awaiter(void 0, void 0, void 0, function* () {
        const directory = JSON.parse(req.body.file).folder;
        const isSubFolder = JSON.parse(req.body.file).subFolder
            ? JSON.parse(req.body.file).subFolder
            : null;
        const fullPath = isSubFolder ? directory + '/' + isSubFolder + '/' : directory + '/';
        const isDirectory = yield fileManager.createDirectoryIfNot(fullPath);
        if (isDirectory) {
            const mainDirectory = path_1.default.join(__dirname + `../../../../../../../upload/`);
            const fileLocation = mainDirectory + fullPath;
            cb(null, fileLocation);
        }
    }),
    filename: (req, file, cb) => {
        const extentionInputFile = file.mimetype.split('/')[1];
        const extention = extentionInputFile;
        const finalName = file.originalname + '.' + extention;
        cb(null, finalName);
    },
});
const uploadUnits = multer_1.default({ storage: storageUnits });
exports.uploadUnits = uploadUnits;
const uploadFiles = multer_1.default({ storage: storageFile });
exports.uploadFiles = uploadFiles;
