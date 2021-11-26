"use strict";
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
exports.fileManager = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const Common_1 = require("../model/Common");
const service_1 = require("../model/service");
const router = express_1.default();
exports.fileManager = router;
router.get('/file/image/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params.name;
    res.sendFile(path_1.default.join(__dirname + `../../../../../upload/image/${name}`));
}));
router.post('/file/image', Common_1.uploadFiles.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(true);
}));
router.post('/file/video', Common_1.uploadFiles.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(true);
}));
router.post('/file/write', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, object, folderPath } = req.body;
    const result = yield service_1.handleFileManagerWriting(type, object, folderPath);
    res.send(result);
}));
router.get('/file/read/:type', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.params.type;
    const result = yield service_1.handleFileManagerReading(type);
    res.send(result);
}));
router.post('/file/:ID/:folder', Common_1.uploadUnits.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(false);
}));
router.get('/file/:ID/:folder/:table/:value', (req, res) => {
    const ID = req.params.ID;
    const folder = req.params.folder;
    const table = req.params.table;
    const value = req.params.value;
    const fileLocation = path_1.default.join(`${__dirname}/../../../../upload/${ID}/${folder}/${table}/${value}`);
    res.sendFile(fileLocation);
});
