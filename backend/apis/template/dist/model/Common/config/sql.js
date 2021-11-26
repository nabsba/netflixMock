"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.mysql = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.mysql = mysql2_1.default;
const tableDefinition_1 = require("../../repos/tableDefinition");
const getConfig = (type, allowMultipleStatements) => {
    const config = {
        host: 'localhost',
        user: process.env.DB_USER,
        password: tableDefinition_1.DATA_BASE[type].password,
        database: tableDefinition_1.DATA_BASE[type].name,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        multipleStatements: true,
    };
    return config;
};
exports.getConfig = getConfig;
