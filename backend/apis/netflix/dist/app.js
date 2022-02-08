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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const http_1 = require("http");
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const Common_1 = require("./model/Common");
const app = express_1.default();
const options = process.env.DEVELOPMENT && process.env.HTTPS_LOCAL === 'true'
    ? {
        key: fs_1.default.readFileSync(path_1.default.join(__dirname, '../security/key.pem')),
        cert: fs_1.default.readFileSync(path_1.default.join(__dirname, '../security/cert.pem')),
    }
    : {};
app.use(express_1.default.static(path_1.default.join(__dirname, '../../../../frontend/build/')));
app.use(cors_1.default());
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../../../frontend/build/', 'index.html'));
});
app.get('/test', (req, res) => {
    res.send('Your test has worked');
});
app.use('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../../../frontend/build/', 'index.html'));
});
const PORT = process.env.PORT
    ? process.env.PORT
    : process.env.HOST_PORT
        ? Common_1.PORTS[process.env.HOST_PORT]
        : null;
const httpsServer = process.env.HTTPS_LOCAL === 'true' && process.env.DEVELOPMENT === 'true'
    ? https_1.default.createServer(options, app)
    : http_1.createServer(app);
httpsServer.listen(PORT, () => {
    console.log('server started on port ' + PORT);
});
