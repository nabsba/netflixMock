// Note: put .env file in dist.
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });
import express from 'express';
import cors from 'cors'; // Local && share hosted
// import session from 'express-session';
// import { redisConfig } from './model/config/redis'; centos - local
import path from 'path';
import { createServer } from 'http';
import https from 'https';
import fs from 'fs';
// yarn add socket.io --save

//Config
const app = express();
const options =
  process.env.DEVELOPMENT && process.env.HTTPS_LOCAL === 'true'
    ? {
        key: fs.readFileSync(path.join(__dirname, '../security/key.pem')),
        cert: fs.readFileSync(path.join(__dirname, '../security/cert.pem')),
      }
    : {};

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../../../frontend/build/')));
app.use(cors());

//Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../../frontend/build/', 'index.html'));
});
app.get('/test', (req, res) => {
  res.send('Your test has worked');
});

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../../frontend/build/', 'index.html'));
});

const PORT = process.env.DEVELOPMENT === 'true' ? 3001 : null; // => local : namecheap web hosted
// const PORT = '8080'; // => Centos

const httpsServer =
  process.env.HTTPS_LOCAL === 'true' && process.env.DEVELOPMENT === 'true'
    ? https.createServer(options, app)
    : createServer(app);

httpsServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port' + PORT);
});
