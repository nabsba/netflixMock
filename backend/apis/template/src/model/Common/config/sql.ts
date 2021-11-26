/**************************SQL**************************/
// eslint-disable-next-line @typescript-eslint/no-var-requires
//  yarn add mysql2 --save
import mysql from 'mysql2';
import { DATA_BASE } from '../../repos/tableDefinition';

const getConfig = (type: string, allowMultipleStatements: boolean | undefined) => {
  const config = {
    host: 'localhost',
    user: process.env.DB_USER,
    password: DATA_BASE[type].password,
    database: DATA_BASE[type].name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

    // //Turn it false for security reason when not needed.
    // multipleStatements: allowMultipleStatements ? true : false,
    multipleStatements: true,
  };
  return config;
};
export { mysql, getConfig };
