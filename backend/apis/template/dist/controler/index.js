"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileManager = exports.data = exports.home = void 0;
const data_1 = require("./data");
Object.defineProperty(exports, "data", { enumerable: true, get: function () { return data_1.data; } });
const file_1 = require("./file");
Object.defineProperty(exports, "fileManager", { enumerable: true, get: function () { return file_1.fileManager; } });
const home_1 = require("./home");
Object.defineProperty(exports, "home", { enumerable: true, get: function () { return home_1.home; } });
