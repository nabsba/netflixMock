"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConfig = exports.redisClient = exports.redisStore = void 0;
const redis_1 = __importDefault(require("redis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const redisStore = connect_redis_1.default(express_session_1.default);
exports.redisStore = redisStore;
const redisClient = redis_1.default.createClient({
    port: 6379,
    host: 'localhost',
    no_ready_check: true,
});
exports.redisClient = redisClient;
redisClient.auth(process.env.REDIS_PASSWORD);
const redisConfig = {
    store: new redisStore({
        client: redisClient,
    }),
    secret: 'mySect',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24,
    },
};
exports.redisConfig = redisConfig;
redisClient.on('connect', () => {
    console.log('Redis client connected');
});
redisClient.on('err', (err) => {
    console.log('Do not forget to start your server or' + err);
});
