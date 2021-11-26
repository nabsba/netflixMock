import { generateObjectAsOneStringKeyValue, stringFromKeysObject, TObjectSql } from '../..';
import { getTableDefinition } from '../../../repos';

const sqlValuesToInsert = (object: any, keys: string[], sqlOperation: string) => {
  const columns: string[] = [];
  keys.map((key: string) => {
    const type = typeof object[key];
    const value = type === 'string' ? `"${object[key]}"` : object[key];
    if (sqlOperation === 'update') return columns.push(`${key}=${value}`);
    return columns.push(`${value}`);
  });
  return columns.toString();
};

// Nested queries
const generatorSQLSpecialCase: any = {
  availability: (object: any) =>
    `SELECT(SELECT (${object[1].object[0]}) from ${object[1].type} where ${object[1].condition.key}='${object[1].condition.value}') AS email, (SELECT (${object[0].object[0]}) from ${object[0].type} where ${object[0].condition.key}='${object[0].condition.value}') AS code;`,
  login: (table: string, email: string) => `SELECT * from ${table} WHERE email="${email}"`,
  // Does not work.
  // profile: (ID: number, email: string, course: string) => `SELECT(SELECT name, surname, number, email, course from account where email='${email}') AS identity, ${course === 'cet/det' ? generatorSQLSpecialCase.cetDet(ID) : `(SELECT * from ${course} where account_id=${ID}) AS course`}, (SELECT * from user where account_id=${ID}) as user;`,
  // cetDet: (ID: number) => `(SELECT unit_1, unit_2, unit_3, unit_4, unit_5, unit_8, unit_32 unit_33 from cet where account_id=${ID}) AS cet, (SELECT unit_1, unit_2, unit_3, unit_4, unit_5, unit_10, unit_16, null from det where account_id=${ID}) AS det`,
  inscription: (objectSQL: any) => {
    return `START TRANSACTION; ${generatorSQL.custom(objectSQL)} ${
      objectSQL.object.course === 'cet/det'
        ? 'INSERT INTO cet (account_id) VALUES(LAST_INSERT_ID()); INSERT INTO det (account_id) VALUES((SELECT account_id from cet WHERE id=LAST_INSERT_ID()));'
        : `INSERT INTO ${objectSQL.object.course} (account_id) VALUES(LAST_INSERT_ID());`
    } INSERT INTO user (account_id, surname, course) VALUES((SELECT account_id from ${
      objectSQL.object.course === 'cet/det' ? 'det' : objectSQL.object.course
    } WHERE id=LAST_INSERT_ID()), "${objectSQL.object.surname}", "${
      objectSQL.object.course
    }"); COMMIT;`;
  },
  getAllRoomsDetailsConversationOfUser: (ID: string) =>
    `SELECT * from room WHERE user_one=${ID} OR user_two=${ID};`,
  retrievePrivateRoom: (user1ID: number, user2ID: number) =>
    `SELECT * from room WHERE id="${user1ID}-${user2ID}" OR id="${user2ID}-${user1ID}";`,
  // paginationMessage: (roomID: string, lastIDRetrieved: number | null, limit?: number) =>
  //   `select * from room_message where room_id = '${roomID}'  ${
  //     lastIDRetrieved ? ' 		and id < ' + lastIDRetrieved : ''
  //   } order by id asc limit ${limit ? limit : 10};`,
};

const generatorSQL: any = {
  custom: (object: TObjectSql) => {
    if (object.sql) return object.sql;
    const typeOfObject = typeof object.object;
    const tableDefinition = getTableDefinition(object.type);
    const columns = Array.isArray(object.object)
      ? object.object.join()
      : stringFromKeysObject(object.object);
    const values =
      typeOfObject === 'object'
        ? sqlValuesToInsert(object.object, Object.keys(object.object), 'insert')
        : object;
    const ID = object.ID ? object.ID : undefined;
    const condition = object.condition ? object.condition : undefined;
    const sql =
      object.mode === 'delete' || object.mode === 'pagination'
        ? generatorSQL[object.mode](tableDefinition, condition)
        : generatorSQL[object.mode](tableDefinition, columns, values, condition, ID);
    return sql;
  },
  // reminder: condition 'where' doesn't work with insert
  insert: (tableDefinition: any, columns: any, values: any) => {
    const sql = `INSERT INTO ${tableDefinition.table} (${columns}) VALUES(${values});`;
    return sql;
  },
  update: (
    tableDefinition: any,
    columns: any,
    values: any,
    condition: { key: string; value: string; pagination?: string | number } | undefined,
    ID: number | string | undefined,
  ) => {
    const setOfColumnValue = generateObjectAsOneStringKeyValue(
      columns.split(','),
      values.split(','),
    );
    let sql: string;
    if (tableDefinition && !condition) {
      sql = `update ${tableDefinition.table} set ${setOfColumnValue} WHERE ${tableDefinition.foreignKey}=${ID};`;
    } else {
      sql = `update ${tableDefinition.table} set ${setOfColumnValue} WHERE ${condition!.key}= ${
        typeof condition!.value === 'string' ? `${condition!.value}` : condition!.value
      };`;
    }
    return sql;
  },
  select: (
    tableDefinition: any,
    columns: any,
    values: any,
    condition: { key: string; value: string; pagination?: string | number } | undefined,
  ) => {
    let sql;
    if (condition) {
      sql = `SELECT ${columns ? columns : '*'} from ${tableDefinition.table} WHERE ${
        condition.key
      }=${typeof condition.value === 'string' ? `"${condition.value}"` : condition.value};`;
    } else {
      sql = `SELECT ${columns ? columns : '*'} from ${tableDefinition.table};`;
    }
    return sql;
  },
  delete: (
    tableDefinition: any,
    condition: { key: string; value: string; pagination?: string | number } | undefined,
  ) => {
    let sql;
    if (condition) {
      sql = `DELETE FROM ${tableDefinition.table} WHERE ${condition.key}=${
        typeof condition.value === 'string' ? `"${condition.value}"` : condition.value
      };`;
    }
    return sql;
  },
  pagination: (
    tableDefinition: any,
    condition:
      | { key: string; value: string; pagination?: number; paginationOrderType: string }
      | undefined,
  ) => {
    console.log('pagination ', tableDefinition!.table);
    let sql;
    if (condition && condition.key) {
      sql = `select * from ${tableDefinition!.table} WHERE ${condition.key} > ${
        typeof condition.value === 'string' ? `"${condition.value}"` : condition.value
      } order by id ${
        condition.paginationOrderType ? condition.paginationOrderType : 'asc'
      } limit ${condition.pagination ? condition.pagination : 100};`;
    } else {
      sql = `select * from ${tableDefinition!.table} order by id ${
        condition!.paginationOrderType
      } limit ${condition!.pagination ? condition!.pagination : 100};`;
    }
    return sql;
  },
};

export { generatorSQL, generatorSQLSpecialCase };
