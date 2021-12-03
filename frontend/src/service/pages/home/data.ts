import getIcon from '../../../component/factory/icon/Icon';

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
			icon: 'netflix',
			iconVolume: [getIcon('VolumeHigh'), getIcon('VolumeOff')],
			type: 'netflix',
		},
		data: [],
		type: 'movies',
	},
};

export { arcturus };
