import { TBrowserInfo } from '..';

export type TReducers = {
	dataPages: {
		pending: boolean;
		data: {
			home: any;
			course: any;
		};
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
