import { Result } from '../Common/type/type';
import { mysql, getConfig } from '../Common/config/sql';

export const resultTemplate: Result = {
  state: false,
  data: null,
  serverError: false,
  errorMessage: '',
  errorCodeSql: '',
};

const queryDataBase = async (
  sql: string,
  allowMultipleStatements?: boolean,
  Type?: string,
): Promise<Result> => {
  const result = { ...resultTemplate };
  let promisePool: any;
  try {
    //Connection
    allowMultipleStatements = allowMultipleStatements || undefined;
    const type = Type ? Type : 'tnwc';
    const config = getConfig(type, allowMultipleStatements);
    const pool = mysql.createPool(config);
    promisePool = pool.promise();
    //Query
    const query = await promisePool.query(sql);
    result.state =
      query[0].length || (query[0] && query[0].affectedRows) || (query[0] && query[0].insertId)
        ? true
        : false;
    result.data = query[0];
    result.serverError = false;
  } catch (error: any) {
    console.log('*** file: queryDB, method: queryDB, error: ', error);
    result.state = false;
    result.serverError = true;
    result.errorMessage = error.sqlMessage ? error.sqlMessage : ' ';
    result.errorCodeSql = error.code ? error.code : '';
  } finally {
    return result;
  }
};

export { queryDataBase };
