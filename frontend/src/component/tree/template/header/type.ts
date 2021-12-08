import { TArticleOne, TImageAsComponent, TVideoPlayer } from '../../molecule';
import TButtonRectangle from '../../molecule/button/rectangle/type';

import { TNavigation } from '../../organism/navigation/type';

export type THeader = {
	navigation: TNavigation;
	imageBackground: TImageAsComponent;
	articleOne: TArticleOne;
	videoPlayer: TVideoPlayer;
	buttons: {
		one: TButtonRectangle;
		two: TButtonRectangle;
	};
};
