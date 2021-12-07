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
		src: 'https://occ-0-475-1167.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQHPJ2jrCTdo1LCvqdDYLYeX1YDLNpvS8oe8OribopJ9em2i-HKFaidmFmjcd0MgAjqNUI5sZSgoSlC1F0UCDtL39gN2.webp?r=f3a',
		alt: 'Arcane',
	},
	imageDescription: {
		src: 'https://occ-0-475-1167.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcL0sOLj3ZviPqIEs-lqt_7s_D5utZHftF0QKqLnrWeGgh3Cd-taT4S4cFjeHb62iAumeN_JaizOXf7NO5YZfmt6GPo5b8Sqxb5sD56EE0D2p89n2RGa5B7akZqwbHQ80fQA_7zEGXUzBdSKJpdeD77mumF2My12dWxfzOPo3Qk6SA.webp?r=183',
		alt: 'Arcane',
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
			'© 1997-2021 Netflix, Inc.<!-- -->&lrm; {de7ecc95-19aa-4a03-93a2-71f220c7f533}',
		span: 'Service span',
	},
};
export { header, footer };
