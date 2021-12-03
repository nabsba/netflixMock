import { TBrowserInfo, TDataPages } from '..';
import { TDataNetflix } from '../netflix/type';

export type TReducers = {
	dataPages: TDataPages;
	dataNetflix: TDataNetflix;
	browserInfo: TBrowserInfo;
};
