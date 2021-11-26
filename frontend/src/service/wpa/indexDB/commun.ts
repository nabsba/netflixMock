import { deleteDB, openDB } from 'idb';
import { TAnyValues } from '../../../Common/type/type';

const createDBIndexDB = (
	database: string,
	version: number,
	store: string,
	ref?: string,
): boolean => {
	console.log(database);
	const dataB = openDB(database, version, {
		upgrade(db) {
			db.createObjectStore(
				store,
				ref ? { keyPath: ref } : { autoIncrement: true },
			);
		},
	});
	const result = Boolean(dataB);
	return result;
};
const addDataToIndexDB = async (
	database: string,
	version: number,
	store: string,
	data: Record<string, unknown>,
): Promise<void> => {
	const db = await openDB(database, version);
	try {
		db.add(store, data);
	} catch (error) {
		console.log(
			'*** file: webworker/commun, method:addDataToIndexDB , error: ',
			error,
		);
	} finally {
		db.close();
	}
};
const getAllDatas = async (
	database: string,
	version: number,
	store: string,
): Promise<TAnyValues[] | undefined> => {
	const db = await openDB(database, version);
	try {
		const datas = await db.getAll(store);
		return datas;
	} catch (error) {
		// Need to close the DB before deleting.
		db.close();
		// We delete the database if there is no store as it gets created automatically when we check in.
		await deleteDB('dashboard', {
			blocked() {
				// 	// …
			},
		});
		console.log(
			'*** file: webworker/commun, method: getAllData, error: ',
			error,
		);
	}
};
const getDataFromID = async (
	database: string,
	version: number,
	store: string,
	ID: string | number,
): Promise<void> => {
	try {
		const db = await openDB(database, version);
		const data = await db.get(store, ID);
		return data;
	} catch (error) {
		console.log(
			'*** file: webworker/commun, method: getAllData, error: ',
			error,
		);
	}
};
const getAllKeys = async (
	database: string,
	version: number,
	store: string,
): Promise<IDBValidKey[] | undefined> => {
	try {
		const db = await openDB(database, version);
		const allKeys = await db.getAllKeys(store);
		return allKeys;
	} catch (error) {
		console.log(
			'*** file: webworker/getAllKey, method: getAllKey, error: ',
			error,
		);
	} finally {
	}
};
const updateData = async (
	database: string,
	version: number,
	store: string,
	data: Record<string, unknown>,
): Promise<void> => {
	const db = await openDB(database, version);
	try {
		db.put(store, data);
	} catch (error) {
		console.log(
			'*** file: webworker/updateData, method:updateData, error: ',
			error,
		);
	} finally {
		db.close();
	}
};

// demo7: move supercat: 2 operations in 1 transaction:
// export async function demo7() {
// 	const db2 = await openDB('db2', 1);
// 	// open a new transaction, declare which stores are involved:
// 	let transaction = db2.transaction(['store3', 'store4'], 'readwrite');
// 	// do multiple things inside the transaction, if one fails all fail:
// 	let superCat = await transaction.objectStore('store3').get('cat001');
// 	transaction.objectStore('store3').delete('cat001');
// 	transaction.objectStore('store4').add(superCat);
// 	db2.close();
// }
export {
	createDBIndexDB,
	addDataToIndexDB,
	getAllDatas,
	getDataFromID,
	getAllKeys,
	updateData,
};
