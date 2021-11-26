"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorSQLSpecialCase = exports.generatorSQL = void 0;
const __1 = require("../..");
const repos_1 = require("../../../repos");
const sqlValuesToInsert = (object, keys, sqlOperation) => {
    const columns = [];
    keys.map((key) => {
        const type = typeof object[key];
        const value = type === 'string' ? `"${object[key]}"` : object[key];
        if (sqlOperation === 'update')
            return columns.push(`${key}=${value}`);
        return columns.push(`${value}`);
    });
    return columns.toString();
};
const generatorSQLSpecialCase = {
    availability: (object) => `SELECT(SELECT (${object[1].object[0]}) from ${object[1].type} where ${object[1].condition.key}='${object[1].condition.value}') AS email, (SELECT (${object[0].object[0]}) from ${object[0].type} where ${object[0].condition.key}='${object[0].condition.value}') AS code;`,
    login: (table, email) => `SELECT * from ${table} WHERE email="${email}"`,
    inscription: (objectSQL) => {
        return `START TRANSACTION; ${generatorSQL.custom(objectSQL)} ${objectSQL.object.course === 'cet/det'
            ? 'INSERT INTO cet (account_id) VALUES(LAST_INSERT_ID()); INSERT INTO det (account_id) VALUES((SELECT account_id from cet WHERE id=LAST_INSERT_ID()));'
            : `INSERT INTO ${objectSQL.object.course} (account_id) VALUES(LAST_INSERT_ID());`} INSERT INTO user (account_id, surname, course) VALUES((SELECT account_id from ${objectSQL.object.course === 'cet/det' ? 'det' : objectSQL.object.course} WHERE id=LAST_INSERT_ID()), "${objectSQL.object.surname}", "${objectSQL.object.course}"); COMMIT;`;
    },
    getAllRoomsDetailsConversationOfUser: (ID) => `SELECT * from room WHERE user_one=${ID} OR user_two=${ID};`,
    retrievePrivateRoom: (user1ID, user2ID) => `SELECT * from room WHERE id="${user1ID}-${user2ID}" OR id="${user2ID}-${user1ID}";`,
};
exports.generatorSQLSpecialCase = generatorSQLSpecialCase;
const generatorSQL = {
    custom: (object) => {
        if (object.sql)
            return object.sql;
        const typeOfObject = typeof object.object;
        const tableDefinition = repos_1.getTableDefinition(object.type);
        const columns = Array.isArray(object.object)
            ? object.object.join()
            : __1.stringFromKeysObject(object.object);
        const values = typeOfObject === 'object'
            ? sqlValuesToInsert(object.object, Object.keys(object.object), 'insert')
            : object;
        const ID = object.ID ? object.ID : undefined;
        const condition = object.condition ? object.condition : undefined;
        const sql = object.mode === 'delete' || object.mode === 'pagination'
            ? generatorSQL[object.mode](tableDefinition, condition)
            : generatorSQL[object.mode](tableDefinition, columns, values, condition, ID);
        return sql;
    },
    insert: (tableDefinition, columns, values) => {
        const sql = `INSERT INTO ${tableDefinition.table} (${columns}) VALUES(${values});`;
        return sql;
    },
    update: (tableDefinition, columns, values, condition, ID) => {
        const setOfColumnValue = __1.generateObjectAsOneStringKeyValue(columns.split(','), values.split(','));
        let sql;
        if (tableDefinition && !condition) {
            sql = `update ${tableDefinition.table} set ${setOfColumnValue} WHERE ${tableDefinition.foreignKey}=${ID};`;
        }
        else {
            sql = `update ${tableDefinition.table} set ${setOfColumnValue} WHERE ${condition.key}= ${typeof condition.value === 'string' ? `${condition.value}` : condition.value};`;
        }
        return sql;
    },
    select: (tableDefinition, columns, values, condition) => {
        let sql;
        if (condition) {
            sql = `SELECT ${columns ? columns : '*'} from ${tableDefinition.table} WHERE ${condition.key}=${typeof condition.value === 'string' ? `"${condition.value}"` : condition.value};`;
        }
        else {
            sql = `SELECT ${columns ? columns : '*'} from ${tableDefinition.table};`;
        }
        return sql;
    },
    delete: (tableDefinition, condition) => {
        let sql;
        if (condition) {
            sql = `DELETE FROM ${tableDefinition.table} WHERE ${condition.key}=${typeof condition.value === 'string' ? `"${condition.value}"` : condition.value};`;
        }
        return sql;
    },
    pagination: (tableDefinition, condition) => {
        console.log('pagination ', tableDefinition.table);
        let sql;
        if (condition && condition.key) {
            sql = `select * from ${tableDefinition.table} WHERE ${condition.key} > ${typeof condition.value === 'string' ? `"${condition.value}"` : condition.value} order by id ${condition.paginationOrderType ? condition.paginationOrderType : 'asc'} limit ${condition.pagination ? condition.pagination : 100};`;
        }
        else {
            sql = `select * from ${tableDefinition.table} order by id ${condition.paginationOrderType} limit ${condition.pagination ? condition.pagination : 100};`;
        }
        return sql;
    },
};
exports.generatorSQL = generatorSQL;
