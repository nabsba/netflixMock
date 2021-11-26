"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTableDefinition = exports.DATA_BASE = void 0;
exports.DATA_BASE = {
    tnwc: {
        name: process.env.DB_TNWC,
        password: process.env.DB_PASS_TNWC,
    },
};
const TABLE_DEFINITION = {
    account: {
        table: 'account',
        dataBase: 'tnwc',
    },
    code: {
        table: 'code',
        dataBase: 'tnwc',
    },
    form: {
        table: 'form',
        dataBase: 'tnwc',
    },
    room: {
        table: 'room',
        dataBase: 'tnwc',
    },
    roomMessage: {
        table: 'room_message',
        dataBase: 'tnwc',
    },
};
const getTableDefinition = (type) => TABLE_DEFINITION[type];
exports.getTableDefinition = getTableDefinition;
