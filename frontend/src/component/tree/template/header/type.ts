import { TArticleOne, TImageAsComponent } from '../../molecule';
import TButtonRectangle from '../../molecule/button/rectangle/type';

import { TNavigation } from '../../organism/navigation/type';

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
