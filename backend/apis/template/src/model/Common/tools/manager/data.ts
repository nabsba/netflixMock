import { deletePropretyFromObject, generatorSQL, Result, TObjectSql } from '../..';
import { getTableDefinition, queryDataBase, resultTemplate } from '../../../repos';

const filterObject = (object: any, type: string, mode: string) => {
  if (mode === 'select' || mode === 'pagination') {
    switch (type) {
      case 'account':
        object.map((obj: any) => deletePropretyFromObject(obj, ['password']));
        break;
      default:
        object;
    }
  }
  return object;
};
const checkIfObject = async (type: string, object: any): Promise<Result> => {
  let result: Result = { ...resultTemplate };
  try {
    const tableDefinition = getTableDefinition(object.type);
    const value = typeof object.value === 'string' ? `"${object.value}"` : object.value;
    const sql = `SELECT ${type} from ${tableDefinition.table} WHERE ${type}=${value};`;
    result = await queryDataBase(sql);
  } catch (error) {
    console.log('file: data.ts, method: checkIfObject, error: ', error);
  } finally {
    return result;
  }
};
const getObjectByID = async (object: TObjectSql): Promise<Result> => {
  let result: Result = { ...resultTemplate };
  try {
    const sql = generatorSQL.custom(object);
    result = await queryDataBase(sql);
  } catch (error) {
    console.log('file: data.ts, method: getObjectByID, error: ', error);
  } finally {
    return result;
  }
};
const getObject = async (objectSql: TObjectSql | undefined, isSQL?: string) => {
  let result: Result = { ...resultTemplate };
  let sql: string;
  try {
    sql = isSQL ? isSQL : generatorSQL.custom(objectSql);
    result = await queryDataBase(sql);
  } catch (error) {
    console.log('file: data.ts, method: getObject, error: ', error);
  } finally {
    return result;
  }
};
const handleObject = async (objectSql: TObjectSql) => {
  let result: Result = { ...resultTemplate };
  try {
    const sql = generatorSQL.custom(objectSql);
    result = await queryDataBase(sql);
    if (result.state && result.data) {
      result.data = filterObject(result.data, objectSql.type, objectSql.mode);
    }
  } catch (error) {
    console.log('file: data.ts, method: handleObject, error: ', error);
  } finally {
    return result;
  }
};

export { checkIfObject, handleObject, getObject, getObjectByID };
