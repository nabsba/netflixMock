import getIcon from '../../../../component/factory/icon/Icon';
import { TFooter } from '../../../../component/tree/template';
import { THeader } from '../../../../component/tree/template/header/type';

const header: THeader = {
	navigation: {
		listNavigation: ['Home', 'TV Show', 'Movies', 'Latest', 'My list'],
		navigationNetflixLogo: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png',
			alt: 'netflix',
		},
		navigationMobileSpan: 'browser',
		listIcon: {
			IconSearch: getIcon('Search'),
			ArrowDown: getIcon('ArrowDown'),
			ProfileIcon: getIcon('ProfileIcon'),
			NotificationIcon: getIcon('NotificationIcon'),
		},
	},
	imageBackground: {
		src: '',
		alt: '',
	},
	articleOne: {
		h2: { title: 'Regardez la saison 1 maintenant' },
		paragraph:
			'Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.',
	},
	buttons: {
		one: {
			text: 'lecture',
			componentPassed: getIcon('Triangle'),
		},
		two: {
			text: 'more',
			componentPassed: getIcon('Indication'),
		},
	},
	videoPlayer: {
		url: '',
		name: '',
		typeConfiguration: 'youtube',
		date: '',
		type: 'netflix',
		isVolumeUp: 1,
	},
};

const footer: TFooter = {
	top: {
		list: [
			['Audio and Subtitles', 'Investor Relations', 'Legal Notices'],
			['Audio Description', 'Jobs', 'Cookie Preferences'],
			['Gift Cards', 'Term of Use', 'Corporate Information'],
			['Media Center', 'Privacy', 'Contact Us'],
		],
	},
	bottom: {
		paragraph:
			'© 1997-2021 Netflix, Inc. {de7ecc95-19aa-4a03-93a2-71f220c7f533}',
		span: 'Service',
	},
};
export { header, footer };
