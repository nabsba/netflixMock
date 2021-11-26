export {};
// import { typeCommon } from '../../../type';

// export const handleFetch = async (
// 	ev: any,
// 	staticName: string,
// 	dynamicName: string,
// ) => {
// 	// try {
// 	// 	const request = await caches.match(ev.request);
// 	// 	if (request) {
// 	// 		return request;
// 	// 	} else {
// 	// 		const isSameOrigin = ev.request.url.startsWith(location.origin);
// 	// 		let opts: typeCommon.CacheOption | any = {
// 	// 			mode: isSameOrigin ? ev.request.mode : 'cors', //cors, no-cors, same-origin, navigate
// 	// 			cache: 'no-cache',
// 	// 			//not on the same domain as my html file for security concern we don't send our credentials.
// 	// 			credentials: isSameOrigin ? 'include' : 'omit',
// 	// 		};
// 	// 		let fetchURL = await fetch(ev.request.url, opts);
// 	// 		if (fetchURL.ok) {
// 	// 			let type = fetchURL.headers.get('content-type');
// 	// 			let cache = await caches.open(dynamicName);
// 	// 			ev.waitUntil(cache.put(ev.request, fetchURL.clone()));
// 	// 			return fetchURL;
// 	// 		}
// 	// 		//not ok 404 error
// 	// 		if (fetchURL.status == 404) {
// 	// 			if (ev.request.url.match(/\.html/i)) {
// 	// 				let cache = caches.open(staticName);
// 	// 				console.log('ERROR');
// 	// 				// We need a 404.html error.
// 	// 				// return  cache.match('/404.html');
// 	// 			}
// 	// 		}
// 	// 	}
// 	// } catch (error) {
// 	// 	if (ev.request.url.match(/\.html/i)) {
// 	// 		let cache = await caches.open(staticName);
// 	// 		cache.match('/404.html');
// 	// 	}
// 	// 	console.log(error);
// 	// }
// };
