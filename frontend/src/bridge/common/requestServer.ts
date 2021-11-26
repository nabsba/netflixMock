/* eslint-disable no-console */
import axios from 'axios';
import { Result } from '../../Common/type/type';

const resultTemplate: Result = {
	state: false,
	data: null,
	error: '',
	serverError: false,
	errorMessage: '',
	errorCodeSql: '',
};
// To create a copy.
// let result: TResult = Object.assign({}, resultTemplate);

/* Return object from get or post example:
{
config: {url: "http://localhost:3001/authentification/check/code", method: "get",
headers: {…}, params: {…}, transformRequest: Array(1), …}
data: false or true (if object).
headers: {content-length: "5", content-type: "application/json; charset=utf-8"}
request: XMLHttpRequest {readyState: 4, timeout: 0,
withCredentials: false, upload: XMLHttpRequestUpload,
onreadystatechange: ƒ, …}
status: 200
statusText: "OK"
__proto__: Object
} */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const serverGet = async (
	url: string,
	time?: number | null,
	source?: any,
	params?: any,
): Promise<Result> => {
	let result: Result = { ...resultTemplate };
	try {
		result = await axios.get(url, {
			timeout: time ? time : 15000,
			cancelToken: source ? source.token : null,
			params,
		});
	} catch (error) {
		console.log(
			'file: bridge/requestServer, method: serverGet, error: ',
			error,
		);
		result.error = '400';
		result.serverError = true;
	} finally {
		result = result.data ? result.data : result;
		return result;
	}
};
// TODO: Protection against XSRF axios
const serverPost = async (
	url: string,
	body: any,
	time?: number | null,
): Promise<Result> => {
	let result: Result = { ...resultTemplate };
	// let times = new Date().toLocaleTimeString();
	try {
		result = await axios.post(url, body, { timeout: time ? time : 15000 });
	} catch (error) {
		console.log(
			'file: bridge/requestServer, method: serverPost, error: ',
			error,
		);
		result.serverError = true;
		result.error = '500';
	} finally {
		// times = new Date().toLocaleTimeString();

		result = result.data ? result.data : result;
		return result;
	}
};

export { serverGet, serverPost, resultTemplate };
