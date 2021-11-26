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
exports.getObjectByID = exports.getObject = exports.handleObject = exports.checkIfObject = void 0;
const __1 = require("../..");
const repos_1 = require("../../../repos");
const filterObject = (object, type, mode) => {
    if (mode === 'select' || mode === 'pagination') {
        switch (type) {
            case 'account':
                object.map((obj) => __1.deletePropretyFromObject(obj, ['password']));
                break;
            default:
                object;
        }
    }
    return object;
};
const checkIfObject = (type, object) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Object.assign({}, repos_1.resultTemplate);
    try {
        const tableDefinition = repos_1.getTableDefinition(object.type);
        const value = typeof object.value === 'string' ? `"${object.value}"` : object.value;
        const sql = `SELECT ${type} from ${tableDefinition.table} WHERE ${type}=${value};`;
        result = yield repos_1.queryDataBase(sql);
    }
    catch (error) {
        console.log('file: data.ts, method: checkIfObject, error: ', error);
    }
    finally {
        return result;
    }
});
exports.checkIfObject = checkIfObject;
const getObjectByID = (object) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Object.assign({}, repos_1.resultTemplate);
    try {
        const sql = __1.generatorSQL.custom(object);
        result = yield repos_1.queryDataBase(sql);
    }
    catch (error) {
        console.log('file: data.ts, method: getObjectByID, error: ', error);
    }
    finally {
        return result;
    }
});
exports.getObjectByID = getObjectByID;
const getObject = (objectSql, isSQL) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Object.assign({}, repos_1.resultTemplate);
    let sql;
    try {
        sql = isSQL ? isSQL : __1.generatorSQL.custom(objectSql);
        result = yield repos_1.queryDataBase(sql);
    }
    catch (error) {
        console.log('file: data.ts, method: getObject, error: ', error);
    }
    finally {
        return result;
    }
});
exports.getObject = getObject;
const handleObject = (objectSql) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Object.assign({}, repos_1.resultTemplate);
    try {
        const sql = __1.generatorSQL.custom(objectSql);
        result = yield repos_1.queryDataBase(sql);
        if (result.state && result.data) {
            result.data = filterObject(result.data, objectSql.type, objectSql.mode);
        }
    }
    catch (error) {
        console.log('file: data.ts, method: handleObject, error: ', error);
    }
    finally {
        return result;
    }
});
exports.handleObject = handleObject;
