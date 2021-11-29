import { getBrowserInfo, updateInfoDevice } from './browserInfo/reducer';
import { TBrowserInfo } from './browserInfo/type';
import reducers from './Common/reducer';
import { TReducers } from './Common/type';
import { fetchDataNetflix } from './netflix/dataManagment/reducer';
import { dataBackup, getDatasPages } from './pages/dataManagment/reducer';
import { DATA_TYPE_SERVICE_WORKER } from './wpa/serviceWorker/data';

export {
	DATA_TYPE_SERVICE_WORKER,
	reducers,
	fetchDataNetflix,
	updateInfoDevice,
	getBrowserInfo,
	dataBackup,
	getDatasPages,
};
export type { TReducers, TBrowserInfo };
