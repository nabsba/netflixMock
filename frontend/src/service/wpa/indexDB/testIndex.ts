export {};
// import { openDB, deleteDB, wrap, unwrap } from 'idb';
// import { resultTemplate } from '../../../bridge/common/requestServer';
// import { typeCommon } from '../../../service';
// // const db = await openDB(name, version, {
// // 	upgrade(db, oldVersion, newVersion, transaction) {
// // 		// …
// // 	},
// // 	blocked() {
// // 		// …
// // 	},
// // 	blocking() {
// // 		// …
// // 	},
// // 	terminated() {
// // 		// …
// // 	},
// // });

// // 1 Can open my db like this.

// // export const idb[key: string: any] = {
// // 	db1: openDB('db1', 1),
// // 	db2: openDB('db2', 1),
// // };

// /* To add Value */
// // const addValue = async (name: string, value: string) => { (await idb[name]).add('store1', value, key);}

// const addValue = async (name: string) => {
// 	try {
// 		const db2 = await openDB(name, 1);
// 		const value = await db2.add('store1', 'shuch world', 'message2');
// 		// console.log(value); => return message2. (reminder: key is the value)
// 		db2.close();
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const createTable = async (
// 	table: string,
// 	store: string,
// 	version: number,
// ): Promise<typeCommon.Result> => {
// 	const result: typeCommon.Result = { ...resultTemplate };
// 	try {
// 		if (!('indexedDB' in window)) {
// 			console.warn('IndexedDB not supported');
// 			throw new Error('cannot create');
// 		}
// 		await openDB(table, version, {
// 			upgrade(db) {
// 				db.createObjectStore('store1');
// 				db.createObjectStore('store2');
// 			},

// 			blocked() {
// 				// …
// 			},
// 			blocking() {
// 				// …
// 			},
// 			terminated() {
// 				// …
// 			},
// 		});
// 		await openDB('db2', 1, {
// 			upgrade(db) {
// 				db.createObjectStore('store3', { keyPath: 'id' });
// 				db.createObjectStore('store4', { autoIncrement: true });
// 			},
// 		});
// 		addValue('table1');

// 		return result;
// 	} catch (error) {
// 		result.state = false;
// 		result.error = error;
// 		result.server = true;
// 		console.log('*** file: redux/midleware, method: fetchStudentDetails, error: ', error);
// 		return result;
// 	}
// };

// // const initIndex = async () => {
// // 	try {
// // 		const dbName = 'mydbname';
// // 		const storeName = 'store1';
// // 		const version = 1; // versions start at 1
// // 		const database = await openDB(dbName, version, {
// // 			// upgrade(db, oldVersion, newVersion, transaction) {
// // 			// 	const store = db.createObjectStore(storeName);
// // 			// 	store.put('Hello world!', 'Hello');
// // 			// },
// // 		});
// // 	} catch (error) {
// // 		console.log('1');
// // 	} finally {
// // 		console.log('2');
// // 	}
// // };

// export function demo1() {
// 	openDB('db5', 1, {
// 		upgrade(db) {
// 			db.createObjectStore('store1');
// 			db.createObjectStore('store2');
// 		},
// 	});
// 	openDB('d62', 1, {
// 		upgrade(db) {
// 			db.createObjectStore('store3', { keyPath: 'id' });
// 			db.createObjectStore('store4', { autoIncrement: true });
// 		},
// 	});
// }
// // demo1();

// // ADD key value
// export async function demo4() {
// 	const db2 = await openDB('d62', 1);
// 	// 'cat001' will be the key of the value as it was initiated  as 'keyPath: 'id''
// 	db2.add('store3', { id: 'cat001', strength: 10, speed: 10 });
// 	db2.add('store3', { id: 'cat002', strength: 11, speed: 9 });
// 	db2.add('store4', { id: 'cat003', strength: 8, speed: 12 });
// 	db2.add('store4', { id: 'cat004', strength: 12, speed: 13 });
// 	db2.close();
// }
// // demo4();

// // GETTER
// export async function demo5() {
// 	const db2 = await openDB('d62', 1);
// 	// retrieve by key:
// 	let result = await db2.get('store3', 'cat001');
// 	console.log(result);
// 	// retrieve all:
// 	result = await db2.getAll('store3');
// 	console.log(result);
// 	// count the total number of items in a store:
// 	result = await db2.count('store3');
// 	console.log(result);
// 	// get all keys:
// 	result = await db2.getAllKeys('store3');
// 	console.log(result);
// 	db2.close();
// }

// demo5();

// // UPDATE_STUDENT// demo6: overwrite values with the same key
// export async function demo6() {
// 	// set db1/store1/delivered to be false:
// 	const db1 = await openDB('db1', 1);
// 	db1.put('store1', false, 'delivered');
// 	db1.close();
// 	// replace cat001 with a supercat:
// 	const db2 = await openDB('db2', 1);
// 	db2.put('store3', { id: 'cat001', strength: 99, speed: 99 });
// 	db2.close();
// }
// // Put has the same meaning in IndexedDB, so you can run demo6 as many times as you want.
// //  If you used add() instead of put(), error would occur because you're trying to add a new item with an existing key, and keys must be unique.
// const naba = async () => {
// 	createTable('table1', 'bino', 1);
// 	// ...IndexedDB code
// };

// export { createTable, naba };
