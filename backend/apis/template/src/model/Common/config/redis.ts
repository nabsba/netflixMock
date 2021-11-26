// yarn add redis types/redis connect-redis @types/connect-redis express-session @types/express-session  --save
import redis from 'redis';
import connectRedis from 'connect-redis';
import session from 'express-session';
//Terminal: redis-cli/CONFIG SET requirepass yourpassword
const redisStore = connectRedis(session);
const redisClient = redis.createClient({
  //Reminder: do not switch the port even localy (it won't work). And "redis-server start" in your terminal
  port: 6379,
  host: 'localhost',
  no_ready_check: true,
});
redisClient.auth(process.env.REDIS_PASSWORD!);
const redisConfig = {
  store: new redisStore({
    client: redisClient,
  }),
  secret: 'mySect', // will hash
  resave: false, // It means if I make a call and I do not update the session nothing has been writen I will not override the session. But needs more clarification as in some case we should turn it true
  saveUninitialized: false, // It will prevent a lot of empty session objects being stored in the session store. Since there's nothing useful to store, the session is "forgotten" at the end of the request.
  cookie: {
    secure: false, // turn true when you run this on server. It will only transmit throw htmls.
    httpOnly: false, // Prevents client side JS from reading the cookie.
    maxAge: 1000 * 60 * 60 * 24, // session max age in milliseconds.
  },
};
redisClient.on('connect', () => {
  console.log('Redis client connected');
});
redisClient.on('err', (err) => {
  console.log('Do not forget to start your server or' + err);
});
