import {
	TGroupIcon,
	TImageAsComponent,
	TMinorInformationVideo,
	TVideoPlayer,
} from '../..';

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
	path?: string;
	type?: string;
};

export default TArticleTwo;
