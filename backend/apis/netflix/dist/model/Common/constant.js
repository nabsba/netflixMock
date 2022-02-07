"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORTS = void 0;
const PORTS = {
    LOCAL: '3001',
    HEROKU: process.env.PORT ? process.env.PORT : 80,
    CENTOS: '8080',
    NAMECHEAP: null,
};
exports.PORTS = PORTS;
