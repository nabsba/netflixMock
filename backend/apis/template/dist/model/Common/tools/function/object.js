"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringFromKeysObject = exports.generateObjectAsOneStringKeyValue = exports.deletePropretyFromObject = void 0;
const deletePropretyFromObject = (object, propreties) => {
    propreties.map((proprety) => delete object[proprety]);
    return object;
};
exports.deletePropretyFromObject = deletePropretyFromObject;
const generateObjectAsOneStringKeyValue = (keys, values) => {
    const array = [];
    keys.map((key, index) => {
        array.push(typeof values[index] === 'string' ? `${key}=` + `${values[index]}` : values[index]);
    });
    return array.join(',');
};
exports.generateObjectAsOneStringKeyValue = generateObjectAsOneStringKeyValue;
const stringFromKeysObject = (object) => Object.keys(object).toString();
exports.stringFromKeysObject = stringFromKeysObject;
