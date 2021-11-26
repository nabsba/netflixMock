'use strict';
import nodemailer from 'nodemailer';
const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASS,
  },
});
export { transport };
