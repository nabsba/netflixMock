import { TBrowserInfo } from '..';
import { THeader } from '../../component/tree/organism/header/type';

export type TReducers = {
	dataPages: {
		home: { header: THeader };
		course: any;
	};
	dataNetflix: {
		pending: boolean;
		state: boolean;
		data: any;
		error: '';
		errorServer: '';
	};
	browserInfo: TBrowserInfo;
};
