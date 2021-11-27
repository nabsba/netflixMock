// Local server
// const URL_ADDRESS = 'https://localhost:3001';
// fake api server
// do not forget to write: npx json-server db.json --routes routes.json
const URL_ADDRESS = 'http://localhost:3000';

const URL_ADDRESSES: {
	default: string;
	api: {
		googlePlace: string;
		netflix: { data: (wish: string) => string; image: (id: string) => string };
	};
	media: { [key: string]: string };
} = {
	default: URL_ADDRESS,
	api: {
		googlePlace: `${URL_ADDRESS}/api/googlePlace`,
		netflix: {
			data: (wish: string) =>
				`https://api.themoviedb.org/3/${wish}?api_key=${process.env.REACT_APP_NETFLIX_KEY}&language=en-US`,
			image: (id: string) => `https://image.tmdb.org/t/p/original/${id}`,
		},
	},
	media: {
		facebook: '',
	},
};

export default URL_ADDRESSES;
