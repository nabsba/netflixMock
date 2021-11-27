import reducers from './Common/reducer';
import { TReducers } from './Common/type';
import { fetchDataNetflix } from './netflix/dataManagment/reducer';
import { DATA_TYPE_SERVICE_WORKER } from './wpa/serviceWorker/data';

export { DATA_TYPE_SERVICE_WORKER, reducers, fetchDataNetflix };
export type { TReducers };
