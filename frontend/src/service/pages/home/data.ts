import getIcon from '../../../component/factory/icon/Icon';
import TErrorBundaryFallbackType from './type';

const arcturus = {
	groupArticleOne: {
		articleTwo: {
			iconGroup: {
				one: [
					getIcon('Triangle'),
					getIcon('Plus'),
					getIcon('ThumbsUp'),
					getIcon('ThumbsDown'),
				],
				two: [getIcon('ArrowDownBroken')],
			},
			icon: getIcon('Netflix'),
			iconVolume: [getIcon('VolumeHigh'), getIcon('VolumeOff')],
			type: 'netflix',
		},
		data: null,
		type: 'movies',
	},
};
const errorBundaryFallbackType: TErrorBundaryFallbackType = {
	home: 'default',
	header: 'default',
	template: 'default',
	footer: 'default',
};

export { arcturus, errorBundaryFallbackType };
