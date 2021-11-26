export {};
// import { openDB } from 'idb';
//https://github.com/jakearchibald/idb
// // https://hackernoon.com/use-indexeddb-with-idb-a-1kb-library-that-makes-it-easy-8p1f3yqq
// function demo1() {
// 	openDB('example3', 1, {
// 		upgrade(db) {
// 			db.createObjectStore('store1');
// 			db.createObjectStore('store2');
// 		},
// 	});
// 	openDB('example2', 1, {
// 		upgrade(db) {
// 			db.createObjectStore('store3', { keyPath: 'id' });
// 			db.createObjectStore('store4', { autoIncrement: true });
// 		},
// 	});
// }

// async function demo4() {
// 	const db2 = await openDB('example2', 1);
// 	db2.add('store3', { id: 'cat001', strength: 10, speed: 10 });
// 	db2.add('store3', { id: 'cat002', strength: 11, speed: 9 });
// 	db2.add('store4', { id: 'cat003', strength: 8, speed: 12 });
// 	db2.add('store4', { id: 'cat004', strength: 12, speed: 13 });
// 	db2.close();
// }

// const fireFunctions = () => {
// 	demo1();
// 	demo4();
// };

// export default fireFunctions;

// // demo1: Getting started
// // The upgrade callback is the only place where you can create and delete stores.
// // The upgrade callback is a transaction itself. It's not 'readonly' or 'readwrite' (see transaction), but a more powerful transaction type called 'versionchange',
// in which you have the permission to do anything, including readwrite to any stores, as well as create/delete stores.
// Since it's a big transaction itself, don't use single-action transaction wrappers like db.add() inside it, use the transaction object provided as an argument for you .
// export function demo1() {
// 	openDB('db1', 1, {
// 		upgrade(db) {
// 			db.createObjectStore('store1');
// 			db.createObjectStore('store2');
// 		},
// 	});
// 	openDB('db2', 1, {
// 		upgrade(db) {
// 			db.createObjectStore('store3', { keyPath: 'id' });
// 			db.createObjectStore('store4', { autoIncrement: true });
// 		},
// 	});
// }

// // demo2: add some data into db1/store1/
// export async function demo2() {
// 	const db1 = await openDB('db1', 1);
// 	db1.add('store1', 'hello world', 'message');
// 	db1.add('store1', true, 'delivered');
// 	db1.close();
// }

// // demo3: error handling
// export async function demo3() {
// 	const db1 = await openDB('db1', 1);
// 	db1
// 		.add('store1', 'hello again!!', 'new message')
// 		.then((result) => {
// 			console.log('success!', result);
// 		})
// 		.catch((err) => {
// 			console.error('error: ', err);
// 		});
// 	db1.close();
// }
// // Other way of opening
// export const idb = {
// 	db1: openDB('db1', 1),
// 	db2: openDB('db2', 1),
// };
// // you use as follow:
// export async function addToStore1(key, value) {
// 	(await idb.db1).add('store1', value, key);
// }

// // demo4: auto generate keys:
// // Do not forget for db2 we add 'id' as default key.
// // result: key: cat002  value: {strength: 10, speed: 10 }}

// export async function demo4() {
// 	const db2 = await openDB('db2', 1);
// 	db2.add('store3', { id: 'cat001', strength: 10, speed: 10 });
// 	db2.add('store3', { id: 'cat002', strength: 11, speed: 9 });
// 	db2.add('store4', { id: 'cat003', strength: 8, speed: 12 });
// 	db2.add('store4', { id: 'cat004', strength: 12, speed: 13 });
// 	db2.close();
// }

// // demo5: retrieve values:
// export async function demo5() {
// 	const db2 = await openDB('db2', 1);
// 	// retrieve by key:
// 	db2.get('store3', 'cat001').then(console.log);
// 	// retrieve all:
// 	db2.getAll('store3').then(console.log);
// 	// count the total number of items in a store:
// 	db2.count('store3').then(console.log);
// 	// get all keys:
// 	db2.getAllKeys('store3').then(console.log);
// 	db2.close();
// }

// // demo6: overwrite values with the same key
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

// // In RESTful APIs, PUT is "idempotent" (POST is not), meaning you can PUT something multiple times, and it'll always replace itself, whereas POST will create a new item every time.
// // Put has the same meaning in IndexedDB, so you can run demo6 as many times as you want. If you used add() instead of put(), error would occur because you're trying to add a new item with an existing key, and keys must be unique.

// // demo7: move supercat: 2 operations in 1 transaction:
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

// // You first open a transaction with db.transaction(), and declare which stores are involved in this transaction. Notice the second argument 'readwrite', which means this transaction has permission to both read and write. If all you need is read, use 'readonly' instead (it's also the default).
// // After the transaction is opened, you can't use any of the previous methods we showed before, because those were shortcuts that encapsulate a transaction containing only one action. Instead, you do your actions using transaction.objectStore(storeName).methodName(..). Arguments are the same, except the first argument (the storeName) is moved forward to .objectStore(storeName). ("objectStore" is the official term for a "store")
// // Readonly is faster than readwrite, because each store will only perform one readwrite transaction at a time, during which the store is locked, whereas multiple readonly transactions will execute at the same time.

// // demo8: transaction on a single store, and error handling:
// export async function demo8() {
// 	// we'll only operate on one store this time:
// 	const db1 = await openDB('db1', 1);
// 	// ↓ this is equal to db1.transaction(['store2'], 'readwrite'):
// 	let transaction = db1.transaction('store2', 'readwrite');
// 	// ↓ this is equal to transaction.objectStore('store2').add(..)
// 	transaction.store.add('foo', 'foo');
// 	transaction.store.add('bar', 'bar');
// 	// monitor if the transaction was successful:
// 	transaction.done
// 		.then(() => {
// 			console.log('All steps succeeded, changes committed!');
// 		})
// 		.catch(() => {
// 			console.error('Something went wrong, transaction aborted');
// 		});
// 	db1.close();
// }

// // Notice in the end we monitor the promise transaction.done, which tells us whether the transaction succeeded or failed. Demo8 adds some data into store2, and you can run it twice to see one success and one fail in console log (fail because keys need to be unique).
// // A transaction will auto commit itself when it runs out of things to do, `transaction.done` is a nice thing to monitor, but not required.

// /* DB versioning and store creation:
// It's finally time to answer the burning question: what the heck is 1?
// Imagine this scenario: you launched a web app, a user visited it, so DBs and stores have been created in his browser. Later you deployed a new version of the app, and changed the structure of DBs and stores. Now you have a problem: when someone visits your app, if he's an old user with the old db schema, and the db already contains data, you would want to convert his db into the new schema, while preserving the data.
// To solve this problem, IndexedDB enforces a version system: each db must exist as a db name paired with a version number, in DevTools you can see db1 and db2 are both at version 1. Whenever you call openDB(), you must supply a positive integer as the version number. If this integer is greater than the existing one in the browser, you can provide a callback named upgrade, and it'll fire. If the DB doesn't exist in the browser, the user's version will be 0, so the callback will also fire.
// */

// demo10: handle both upgrade: 0->2 and 1->2
// export async function demo10() {
// 	const db3 = await openDB('db3', 2, {
// 		upgrade: (db, oldVersion, newVersion, transaction) => {
// 			switch (oldVersion) {
// 				case 0:
// 					upgradeDB3fromV0toV1();
// 				// falls through
// 				case 1:
// 					upgradeDB3fromV1toV2();
// 					break;
// 				default:
// 					console.error('unknown db version');
// 			}

// 			function upgradeDB3fromV0toV1() {
// 				db.createObjectStore('moreCats', { keyPath: 'id' });
// 				generate100cats().forEach((cat) => {
// 					transaction.objectStore('moreCats').add(cat);
// 				});
// 			}

// 			function upgradeDB3fromV1toV2() {
// 				db.createObjectStore('userPreference');
// 				transaction.objectStore('userPreference').add(false, 'useDarkMode');
// 				transaction.objectStore('userPreference').add(25, 'resultsPerPage');
// 			}
// 		},
// 	});
// 	db3.close();
// }

// function generate100cats() {
// 	return new Array(100).fill().map((item, index) => {
// 		let id = 'cat' + index.toString().padStart(3, '0');
// 		let strength = Math.round(Math.random() * 100);
// 		let speed = Math.round(Math.random() * 100);
// 		return { id, strength, speed };
// 	});
// }

// // demo11: upgrade db version even when no schema change is needed:
// // Many people think of upgrade as a "schema change" event. True, a version change is the only place where you can create or delete stores, but there are often other scenarios when a version change is good choice even if you don't need to add / delete stores.
// // the new user will have the version 0 so we need to updates it with all version are evolutif from each other.
// export async function demo11() {
// 	const db3 = await openDB('db3', 3, {
// 		upgrade: async (db, oldVersion, newVersion, transaction) => {
// 			switch (oldVersion) {
// 				case 0:
// 					upgradeDB3fromV0toV1();
// 				// falls through
// 				case 1:
// 					upgradeDB3fromV1toV2();
// 				// falls through
// 				case 2:
// 					await upgradeDB3fromV2toV3();
// 					break;
// 				default:
// 					console.error('unknown db version');
// 			}

// 			function upgradeDB3fromV0toV1() {
// 				db.createObjectStore('moreCats', { keyPath: 'id' });
// 				generate100cats().forEach((cat) => {
// 					transaction.objectStore('moreCats').add(cat);
// 				});
// 			}
// 			function upgradeDB3fromV1toV2() {
// 				db.createObjectStore('userPreference');
// 				transaction.objectStore('userPreference').add(false, 'useDarkMode');
// 				transaction.objectStore('userPreference').add(25, 'resultsPerPage');
// 			}
// 			async function upgradeDB3fromV2toV3() {
// 				const store = transaction.objectStore('userPreference');
// 				store.put('English', 'language');
// 				store.delete('resultsPerPage');
// 				let colorTheme = 'automatic';
// 				let useDarkMode = await store.get('useDarkMode');
// 				if (oldVersion === 2 && useDarkMode === false) colorTheme = 'light';
// 				if (oldVersion === 2 && useDarkMode === true) colorTheme = 'dark';
// 				store.put(colorTheme, 'colorTheme');
// 				store.delete('useDarkMode');
// 			}
// 		},
// 	});
// 	db3.close();
// }

// function generate100cats() {
// 	return new Array(100).fill().map((item, index) => {
// 		let id = 'cat' + index.toString().padStart(3, '0');
// 		let strength = Math.round(Math.random() * 10);
// 		let speed = Math.round(Math.random() * 10);
// 		return { id, strength, speed };
// 	});
// }

// // `// falls through` means "don't break". Adding this line of comment will prevent eslint from nagging you to add a break.

// // call back to upgrade in case if the users open another tab at the same time that u push a new version. The user will have two versions.

// const db = await openDB(dbName, version, {
// 	blocked: () => {
// 		// seems an older version of this app is running in another tab
// 		console.log(`Please close this app opened in other browser tabs.`);
// 	},
// 	upgrade: (db, oldVersion, newVersion, transaction) => {
// 		// …
// 	},
// 	blocking: () => {
// 		// seems the user just opened this app again in a new tab
// 		// which happens to have gotten a version change
// 		console.log(`App is outdated, please close this tab`);
// 	},
// });

// // demo12: create an index on the 100 cats' strength:
// export async function demo12() {
// 	const db3 = await openDB('db3', 4, {
// 		upgrade: (db, oldVersion, newVersion, transaction) => {
// 			// upgrade to v4 in a less careful manner:
// 			const store = transaction.objectStore('moreCats');
// 			store.createIndex('strengthIndex', 'strength');
// 		},
// 	});
// 	db3.close();
// }

// // Adding an index is like creating the same store with a different 'keyPath'.
// // Just like how the main store is constantly sorted by the main key, the index store is auto sorted by its own key.

// // demo13: get values from index by key
// export async function demo13() {
//   const db3 = await openDB('db3', 4);
//   const transaction = db3.transaction('moreCats');
//   const strengthIndex = transaction.store.index('strengthIndex');
//   // get all entries where the key is 10:
//   let strongestCats = await strengthIndex.getAll(10);
//   console.log('strongest cats: ', strongestCats);
//   // get the first entry where the key is 10:
//   let oneStrongCat = await strengthIndex.get(10);
//   console.log('a strong cat: ', oneStrongCat);
//   db3.close();
// }

// // demo14: get values from index by key using shortcuts:
// export async function demo14() {
//   const db3 = await openDB('db3', 4);
//   // do similar things as demo13, but use single-action transaction shortcuts:
//   let weakestCats = await db3.getAllFromIndex('moreCats', 'strengthIndex', 0);
//   console.log('weakest cats: ', weakestCats);
//   let oneWeakCat = await db3.getFromIndex('moreCats', 'strengthIndex', 0);
//   console.log('a weak cat: ', oneWeakCat);
//   db3.close();
// }

// // demo15: find items matching a condition by using range
// export async function demo15() {
// 	const db3 = await openDB('db3', 4);
// 	// create some ranges. note that IDBKeyRange is a native browser API,
// 	// it's not imported from idb, just use it:
// 	const strongRange = IDBKeyRange.lowerBound(8);
// 	const midRange = IDBKeyRange.bound(3, 7);
// 	const weakRange = IDBKeyRange.upperBound(2);
// 	let [strongCats, ordinaryCats, weakCats] = [
// 		await db3.getAllFromIndex('moreCats', 'strengthIndex', strongRange),
// 		await db3.getAllFromIndex('moreCats', 'strengthIndex', midRange),
// 		await db3.getAllFromIndex('moreCats', 'strengthIndex', weakRnge),
// 	];
// 	console.log('strong cats (strength >= 8): ', strongCats);
// 	console.log('ordinary cats (strength from 3 to 7): ', ordinaryCats);
// 	console.log('weak cats (strength <=2): ', weakCats);
// 	db3.close();
// }

// // Whenever you call .get() or .getAll() with idb, you can always substitute the key with a range, whether that's a primary key or index key.
// // ok
