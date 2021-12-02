import { TBrowserInfo } from '..';
import { THeader } from '../../component/tree/organism/header/type';
import { TDataNetflix } from '../netflix/type';

export type TReducers = {
	dataPages: {
		home: { header: THeader };
		course: any;
	};
	dataNetflix: TDataNetflix;
	browserInfo: TBrowserInfo;
};
