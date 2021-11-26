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
exports.sendAMail = exports.receiveMail = void 0;
const Common_1 = require("../Common");
const receiveMail = (body) => __awaiter(void 0, void 0, void 0, function* () {
    let notif;
    try {
        notif = yield Common_1.transport.sendMail({
            from: process.env.USER_MAIL,
            to: process.env.USER_MAIL,
            subject: 'New demand',
            html: `<div>
            <h3> You have received the following message </h3>
            <ul>
            <li> name: ${body.name} </li>
            <li> surname: ${body.surname} </li>
            <li> email: ${body.email} </li>
						<li> address: ${body.address} </li>
            <li> interest: ${body.course} </li>
            <li> textarea: ${body.textArea} </li>
            </ul>
         </div>`,
        });
    }
    catch (error) {
        console.log('file: repos/transporter.ts, method: receiveAmail: ', error);
    }
    finally {
        return notif;
    }
});
exports.receiveMail = receiveMail;
const sendAMail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let result = {
        serverError: false,
    };
    try {
        result = yield Common_1.transport.sendMail({
            from: 'admin@thenorthwestcollege.co.uk',
            to: email,
            subject: 'Received ✔',
            html: "<div><div class=header; style='padding:0; margin:0;margin:2rem; display:flex; position:relative;'><h1 style='margin:auto; color:#454545; border-bottom: 2px solid #9b8a3c'> The North West College </h1> </div> <p style='color:#454545;'>Dear Student, </p><p style='color:#454545;'> Thank you for reaching out to us. We have received your email, and our support team will be in touch within 48 hours.</p><p style='color:#454545;'>Please note that our working hours are 9am to 6pm from Monday to Friday. We regret the delay in reply over the non-working hours. </p><p style='color:#454545;'>Thank you for your understanding.</p><p style='color:#454545;'>Best regards,</p><ul style='list-style:none; padding-left:0px;text-weight:bold;color:#454545;'><li><span style='color:#454545; font-weight:600;'> Support Team </span></li><li></li></ul></div>",
        });
    }
    catch (error) {
        console.log('file: repos/transporter.ts, method: sendAMail: ', error);
        result.serverError = true;
    }
    finally {
        return result;
    }
});
exports.sendAMail = sendAMail;
