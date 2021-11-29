import { TImageAsComponent } from '../../atom';
import { TArticleOne } from '../../molecule';
import TButtonRectangle from '../../molecule/button/rectangle/type';

import { TNavigation } from '../navigation/type';

export type THeader = {
	navigation: TNavigation;
	imageBackground: TImageAsComponent;
	imageDescription: TImageAsComponent;
	articleOne: TArticleOne;
	buttons: {
		one: TButtonRectangle;
		two: TButtonRectangle;
	};
};
