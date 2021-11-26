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
exports.writeFileData = exports.readFileData = exports.isDirectoryCreated = exports.createDirectoryIfNot = exports.checkIfDirectory = exports.createDirectory = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const fs_2 = __importDefault(require("fs"));
const fs_3 = require("fs");
const queryDB_1 = require("../../../repos/queryDB");
const paths = {
    ['data.json']: path_1.default.join(__dirname, '../../../../../../upload/data/adminDashboard/data.json'),
    ['dataStudentDashboard.json']: path_1.default.join(__dirname, '../../../../../../upload/data/adminDashboard/dataStudentDashboard.json'),
};
const createDirectoryIfNot = (directory) => __awaiter(void 0, void 0, void 0, function* () {
    let result = false;
    try {
        const isDirectory = checkIfDirectory(directory);
        if (isDirectory) {
            result = true;
        }
        else {
            yield createDirectory(directory);
            result = true;
        }
    }
    catch (error) {
        console.log('file: fileSystem.ts, method: createDirectoryIfNot, error: ', error);
    }
    finally {
        return result;
    }
});
exports.createDirectoryIfNot = createDirectoryIfNot;
const createDirectory = (directory) => fs_2.default.promises.mkdir(path_1.default.join(__dirname + '../../../../../../../upload', directory), { recursive: true });
exports.createDirectory = createDirectory;
const checkIfDirectory = (directory) => fs_2.default.existsSync(path_1.default.join(__dirname + '../../../../../../../upload', directory));
exports.checkIfDirectory = checkIfDirectory;
const isDirectoryCreated = (folderPath) => __awaiter(void 0, void 0, void 0, function* () {
    let result = false;
    try {
        const directory = folderPath.folder;
        const subFolder = folderPath.subFolder ? folderPath.subFolder : null;
        const fullPath = subFolder ? directory + '/' + subFolder : directory + '/';
        result = yield createDirectoryIfNot(fullPath);
    }
    catch (error) {
        console.log('file: fileSystem.ts, method: createDirectoryIfNot, error: ', error);
    }
    finally {
    }
    return result;
});
exports.isDirectoryCreated = isDirectoryCreated;
const readFileData = (folderPath) => __awaiter(void 0, void 0, void 0, function* () {
    const result = Object.assign({}, queryDB_1.resultTemplate);
    try {
        const file = yield fs_1.promises.readFile(paths[folderPath.fileName], 'utf8');
        if (file && typeof file === 'string') {
            result.state = true;
            result.data = JSON.parse(file);
        }
        return result;
    }
    catch (error) {
        result.serverError = true;
        result.errorMessage = error;
        console.log('file: ~/Desktop/thenorthwestcollege/backend/apis/tnwc/src/model/service/dashboard, method: readpDataAdmin, error: ', error);
        return result;
    }
});
exports.readFileData = readFileData;
const writeFileData = (folderPath, object) => __awaiter(void 0, void 0, void 0, function* () {
    const result = Object.assign({}, queryDB_1.resultTemplate);
    try {
        yield fs_3.promises.writeFile(paths[folderPath.fileName], JSON.stringify(object), {
            flag: 'w',
        });
    }
    catch (error) {
        result.serverError = true;
        result.errorMessage = error;
        console.log('file: ~/Desktop/thenorthwestcollege/backend/apis/tnwc/src/model/service/common/filesystem, method: writeDataAdmin, error: ', error);
    }
    finally {
        return result;
    }
});
exports.writeFileData = writeFileData;
