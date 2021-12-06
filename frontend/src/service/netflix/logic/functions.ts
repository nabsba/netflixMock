import { URL_ADDRESSES } from '../../../bridge';
import { Result } from '../../../Common/type/type';
import { TArticleTwo } from '../../../component/tree/molecule';
import { TListArticle } from '../../../component/tree/organism';
import { TNetflixListMoviesReturned, TNetflixMovie } from '../type';

const appendDataToArticleTwoNetflixData = (
	// listsMovies: TNetflixListMoviesReturned[],
	data: Result,
	articleTwo: TArticleTwo,
): TListArticle[] => {
	const sections: TListArticle[] = [];
	const listsMovies = data.data;
	listsMovies.map((listMovieReturned: TNetflixListMoviesReturned) => {
		const list = listMovieReturned.result.data.results;
		const title = listMovieReturned.title;
		const articleTwoCompletedWithDataFromAPI: TListArticle = {
			title,
			allArticleMovie: list.map((movie: TNetflixMovie) => {
				return {
					...articleTwo,
					minorInformationVideo: {
						number: movie.popularity,
						time: movie.release_date,
					},
					videoPlayer: {
						url: '',
						id: movie.id,
						typeConfiguration: 'youtube',
						name: movie.original_title,
						date: movie.release_date,
						type: 'netflix',
						isVolumeUp: 1,
					},
					imagePresentation: {
						src: URL_ADDRESSES.api.netflix.image(movie.poster_path),
						alt: movie.original_title,
					},
					path: listMovieReturned.path,
				};
			}),
		};
		sections.push(articleTwoCompletedWithDataFromAPI);
	});
	return sections;
};

export { appendDataToArticleTwoNetflixData };
