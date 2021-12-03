import { getBrowserInfo, updateInfoDevice } from './browserInfo/reducer';
import { TBrowserInfo } from './browserInfo/type';
import reducers from './Common/reducer';
import { TReducers } from './Common/type';
import { fetchDataNetflix } from './netflix/dataManagment/reducer';
import { getVideoUrl } from './netflix/factory/functions';
import {
	dataBackup,
	getDatasPages,
	initGroupArticleWithNetflixData,
} from './pages/Common/dataManagment/reducer';
import TDataPages from './pages/Common/dataManagment/type';

import { DATA_TYPE_SERVICE_WORKER } from './wpa/serviceWorker/data';

export {
	DATA_TYPE_SERVICE_WORKER,
	reducers,
	fetchDataNetflix,
	updateInfoDevice,
	getBrowserInfo,
	dataBackup,
	getDatasPages,
	initGroupArticleWithNetflixData,
	getVideoUrl,
};
export type { TReducers, TBrowserInfo, TDataPages };
