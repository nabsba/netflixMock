import { TInfosPage } from '../Common/type';
import { TNetflixMovie, TWishListMovies } from './type';

const LIST_OF_WISHES_CATEGORIES_MOVIES: TWishListMovies[] = [
	{
		title: 'Popular on Netflix',
		path: 'trending/all/day',
	},
	{
		title: 'Our guest',
		path: 'tv/airing_today',
	},
	// {
	// 	title: 'Top 10 in the uk',
	// 	path: 'movie/latest',
	// },
	{
		title: 'Now playing',
		path: 'movie/now_playing',
		extraFilter:
			'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate',
	},
	{
		title: 'Top rated',
		path: 'movie/top_rated',
		extraFilter: '&sort_by=popularity.desc',
	},
];
const INFOS_PAGE_NETFLIX: TInfosPage = {
	INDICE_TO_TRIGGER_NEW_PAGE: 5,
	NUMBER_OF_ITEMS_IN_PAGE: 20,
};
const PROTOTYPE = {
	PAGE: (): TNetflixMovie[] => {
		const page = [];
		const prototype = {
			adult: true,
			backdrop_path: 'string',
			genre_ids: [1, 2, 3],
			id: 1,
			media_type: 'string',
			original_language: 'string',
			original_title: 'string',
			overview: 'string',
			popularity: 1,
			poster_path: 'string',
			release_date: 'string',
			title: 'string',
			video: true,
			vote_average: 1,
			vote_count: 1,
			name: 'movie',
		};

		for (let i = 0; i < INFOS_PAGE_NETFLIX.NUMBER_OF_ITEMS_IN_PAGE; i++) {
			prototype.id = i;
			page.push(prototype);
		}
		return page;
	},
};
const IMAGE_SIZE = {
	original: 'original',
	small: 'w500',
};

const VIDEO_PLAYER = {
	typeConfiguration: 'youtube',
	type: 'netflix',
};
export {
	LIST_OF_WISHES_CATEGORIES_MOVIES,
	INFOS_PAGE_NETFLIX,
	PROTOTYPE,
	IMAGE_SIZE,
	VIDEO_PLAYER,
};
