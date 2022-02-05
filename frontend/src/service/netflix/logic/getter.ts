import { URL_ADDRESSES } from '../../Common/constant';
import { serverGetApi } from '../../Common/logic/requestServer';
import { TInfosFetchTest } from '../type';

const getNewPage = async (infosFetchTest: TInfosFetchTest) => {
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
const getVideoUrl = async (id: number | string): Promise<string> => {
	try {
		const result = await serverGetApi(
			URL_ADDRESSES.api.netflix.queryVideoEndPoint(id, '&language=en'),
		);
		if (result.state && result.data.results[0].key) {
			const url = URL_ADDRESSES.api.netflix.video(result.data.results[0].key);
			return url;
		}
		return '';
	} catch (error) {
		console.log(
			'*** file: factory/functions, method: getVideoUrl, error: ',
			error,
		);
		return '';
	}
};

export { getNewPage, getVideoUrl };
