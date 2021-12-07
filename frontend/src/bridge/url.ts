// Local server
// const URL_ADDRESS = 'https://localhost:3001';
// fake api server
// do not forget to write: npx json-server db.json --routes routes.json
const URL_ADDRESS = 'http://localhost:3000';

const URL_ADDRESSES: {
	default: string;
	api: {
		googlePlace: string;
		netflix: {
			data: (wish: string, extraFilter?: string | null) => string;
			image: (id: number | string, extraFilter?: string) => string;
			queryVideoEndPoint: (id: number | string, extraFilter?: string) => string;
			video: (endPoint: string, extraFilter?: string) => string;
		};
	};
	media: { [key: string]: string };
} = {
	default: URL_ADDRESS,
	api: {
		googlePlace: `${URL_ADDRESS}/api/googlePlace`,
		netflix: {
			data: (wish: string, extraFilter = '') =>
				`https://api.themoviedb.org/3/${wish}?api_key=${process.env.REACT_APP_NETFLIX_KEY}${extraFilter}`,
			image: (id: number | string, extraFilter) =>
				// `https://image.tmdb.org/t/p/original${id}${
				`https://image.tmdb.org/t/p/w300${id}${extraFilter ? extraFilter : ''}`,
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

export default URL_ADDRESSES;
