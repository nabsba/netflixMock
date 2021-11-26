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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFileManagerReading = exports.handleFileManagerWriting = void 0;
const repos_1 = require("../../repos");
const handleFileManagerWriting = (type, object, folderPath) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Object.assign({}, repos_1.resultTemplate);
    switch (type) {
        case 'admin':
        default:
            return result;
    }
});
exports.handleFileManagerWriting = handleFileManagerWriting;
const handleFileManagerReading = (type, folderPath) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Object.assign({}, repos_1.resultTemplate);
    try {
        switch (type) {
            case 'data':
            default:
                return result;
        }
    }
    catch (error) {
        console.log(error);
    }
    finally {
        return result;
    }
});
exports.handleFileManagerReading = handleFileManagerReading;
