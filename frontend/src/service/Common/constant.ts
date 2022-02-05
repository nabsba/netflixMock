import { IMAGE_SIZE } from '../netflix/constant';

const APIS = ['netflix'];
const INFOS_PAGE_DEFAULT = {
	INDICE_TO_TRIGGER_NEW_PAGE: 5,
	NUMBER_OF_ITEMS_IN_PAGE: 20,
};
const ERROR_MESSAGE: { [key: string]: string } = {
	DEFAULT: 'An error has occured',
	_400: 'The request cannot be fulfilled due to bad syntax',
	_404: 'The requested page could not be found but may be available again in the future',
	_500: 'Internal Server Error',
};

// Reminder: each times we make a change in the .env we have to recompile the app. However, to avoid this on dev we can change it here directly...

const URL_ADDRESS: { [key: string]: string } = {
	LOCAL: 'http://localhost:3001',
	LOCAL_HTTPS: 'https://localhost:3001',
	HEROKU: 'https://netflix-mock.herokuapp.com',
	CENTOS: 'www.yourname.com',
	// Reminder: active the self api, write: npx json-server db.json --routes routes.json
	SELF_API: 'http://localhost:3000',
	NAMECHEAP: 'www.yourname.com',
};

const URL_ADDRESSES: {
	default: string;
	api: {
		googlePlace: string;
		netflix: {
			data: (wish: string, extraFilter?: string | null) => string;
			image: (
				id: number | string,
				size: string,
				extraFilter?: string,
			) => string;
			queryVideoEndPoint: (id: number | string, extraFilter?: string) => string;
			video: (endPoint: string, extraFilter?: string) => string;
		};
	};
	media: { [key: string]: string };
} = {
	default: URL_ADDRESS[process.env.HOST ? process.env.HOST : 'LOCAL'],
	api: {
		googlePlace: `${
			URL_ADDRESS[process.env.HOST ? process.env.HOST : 'LOCAL']
		}/api/googlePlace`,
		netflix: {
			data: (wish: string, extraFilter = '') =>
				`https://api.themoviedb.org/3/${wish}?api_key=${process.env.REACT_APP_NETFLIX_KEY}${extraFilter}`,
			image: (id: number | string, size = IMAGE_SIZE.small, extraFilter) =>
				`https://image.tmdb.org/t/p/${size}${id}${
					extraFilter ? extraFilter : ''
				}`,
			queryVideoEndPoint: (id: number | string, extraFilter = '') =>
				`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_NETFLIX_KEY}${extraFilter}`,
			video: (endPoint: string) =>
				`https://www.youtube.com/watch?v=${endPoint}`,
		},
	},
	media: {
		facebook: '',
	},
};

export { APIS, INFOS_PAGE_DEFAULT, ERROR_MESSAGE, URL_ADDRESSES };
