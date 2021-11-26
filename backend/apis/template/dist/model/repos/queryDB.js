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
exports.queryDataBase = exports.resultTemplate = void 0;
const sql_1 = require("../Common/config/sql");
exports.resultTemplate = {
    state: false,
    data: null,
    serverError: false,
    errorMessage: '',
    errorCodeSql: '',
};
const queryDataBase = (sql, allowMultipleStatements, Type) => __awaiter(void 0, void 0, void 0, function* () {
    const result = Object.assign({}, exports.resultTemplate);
    let promisePool;
    try {
        allowMultipleStatements = allowMultipleStatements || undefined;
        const type = Type ? Type : 'tnwc';
        const config = sql_1.getConfig(type, allowMultipleStatements);
        const pool = sql_1.mysql.createPool(config);
        promisePool = pool.promise();
        const query = yield promisePool.query(sql);
        result.state =
            query[0].length || (query[0] && query[0].affectedRows) || (query[0] && query[0].insertId)
                ? true
                : false;
        result.data = query[0];
        result.serverError = false;
    }
    catch (error) {
        console.log('*** file: queryDB, method: queryDB, error: ', error);
        result.state = false;
        result.serverError = true;
        result.errorMessage = error.sqlMessage ? error.sqlMessage : ' ';
        result.errorCodeSql = error.code ? error.code : '';
    }
    finally {
        return result;
    }
});
exports.queryDataBase = queryDataBase;
