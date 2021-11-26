import { transport } from './config/nodemail';
import { mysql, getConfig } from './config/sql';
import { generatorSQL, generatorSQLSpecialCase } from './tools/database/sql';
import {
  deletePropretyFromObject,
  generateObjectAsOneStringKeyValue,
  stringFromKeysObject,
} from './tools/function/object';
import { uploadUnits, uploadFiles } from './tools/imgMulter';
import { checkIfObject, handleObject, getObject, getObjectByID } from './tools/manager/data';
import {
  createDirectory,
  checkIfDirectory,
  createDirectoryIfNot,
  isDirectoryCreated,
  readFileData,
  writeFileData,
} from './tools/manager/file';
import { Result, SQLParameter, TFolderPath, TObjectSql } from './type/type';

export {
  uploadUnits,
  uploadFiles,
  checkIfObject,
  handleObject,
  getObject,
  getObjectByID,
  createDirectory,
  checkIfDirectory,
  createDirectoryIfNot,
  isDirectoryCreated,
  readFileData,
  writeFileData,
  deletePropretyFromObject,
  generateObjectAsOneStringKeyValue,
  transport,
  mysql,
  getConfig,
  stringFromKeysObject,
  generatorSQL,
  generatorSQLSpecialCase,
};
export type { Result, TFolderPath, SQLParameter, TObjectSql };
