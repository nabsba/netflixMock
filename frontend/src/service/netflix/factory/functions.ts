import { serverGetApi, URL_ADDRESSES } from '../../../bridge';

//tofold
type infosFetchTest = {
	type: string;
	specific: {
		pageList: string;
		path: string;
	};
};
const getNewPage = async (infosFetchTest: infosFetchTest) => {
	try {
		const newPage = await serverGetApi(
			URL_ADDRESSES.api.netflix.data(
				infosFetchTest.specific.path,
				`&page=${infosFetchTest.specific.pageList}`,
			),
			null,
		);
		return newPage;
	} catch (error) {
		console.log(
			'*** file: redux/midleware, method: getNewPage, error: ',
			error,
		);
	}
};

//todo: finish function
const getVideoUrl = async (id: number | string) => {
	try {
		const result = await serverGetApi(
			URL_ADDRESSES.api.netflix.queryVideoEndPoint(id, '&language=en'),
		);
		if (result.state && result.data[0].key) {
			const url = URL_ADDRESSES.api.netflix.video(result.data[0].key);
			return url;
		}
	} catch (error) {
		console.log(
			'*** file: factory/functions, method: getVideoUrl, error: ',
			error,
		);
		return false;
	}
};
// async () => {
// 	const infosFetchTest: infosFetchTest = {
// 		type: TYPE_FETCH.SPECIFIC,
// 		specific: {
// 			pageList: '3',
// 			path: 'trending/all/day',
// 		},
// 	};
// 	const query = await getNewPage(infosFetchTest);
// 	if (query && query.state) {
// 		const infosForUpdateDatePage: TInfosForUpdateDataPage = {
// 			path: 'trending/all/day',
// 			newPage: query.data,
// 		};
// 		dispatch(updateDataPage(infosForUpdateDatePage));
// 	} else {
// 		//todo: display an error message in case if the new page cannot be loaded.
// 	}
// };

export { getNewPage, getVideoUrl };
