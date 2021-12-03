import { TGroupIcon, TMinorInformationVideo, TVideoPlayer } from '../..';
import { TImageAsComponent } from '../../../atom';

type TArticleTwo = {
	iconGroup: {
		one: TGroupIcon;
		two: TGroupIcon;
		three: React.ReactNode;
	};
	iconVolume: React.ReactNode[];
	minorInformationVideo: TMinorInformationVideo;
	videoPlayer: TVideoPlayer;
	imagePresentation: TImageAsComponent;
	icon: string;
	type?: string;
};

export default TArticleTwo;
