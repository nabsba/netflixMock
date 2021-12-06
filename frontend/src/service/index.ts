import { getBrowserInfo, updateInfoDevice } from './browserInfo/reducer';
import { TBrowserInfo } from './browserInfo/type';
import { APIS } from './Common/constant';
import {
	completeArticleTwoWithDataReceived,
	doWeRequireANewPage,
	getNewPage,
	getPrototypeDuringPending,
} from './Common/logic/functions';
import reducers from './Common/reducer/reducer';
import { TReducers } from './Common/reducer/type';
import { INFOS_PAGE_NETFLIX, PROTOTYPE } from './netflix/constant';
import { fetchDataNetflix } from './netflix/dataManagment/reducer';
import { getVideoUrl } from './netflix/logic/getter';

import {
	dataBackup,
	getDatasPages,
	initGroupArticleWithNetflixData,
} from './pages/Common/dataManagment/reducer';
import TDataPages from './pages/Common/dataManagment/type';

export {
	reducers,
	fetchDataNetflix,
	updateInfoDevice,
	getBrowserInfo,
	dataBackup,
	getDatasPages,
	initGroupArticleWithNetflixData,
	getVideoUrl,
	APIS,
	completeArticleTwoWithDataReceived,
	doWeRequireANewPage,
	getPrototypeDuringPending,
	INFOS_PAGE_NETFLIX,
	getNewPage,
	PROTOTYPE,
};
export type { TReducers, TBrowserInfo, TDataPages };
