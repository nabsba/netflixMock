import { TArticleTwo } from '../../../component/tree/molecule';
import { TListArticle } from '../../../component/tree/organism';
import { URL_ADDRESSES } from '../../Common/constant';
import { IMAGE_SIZE } from '../constant';
import { TNetflixListMoviesReturned, TNetflixMovie } from '../type';

const appendDataToArticleTwoNetflixData = (
	data: [],
	articleTwo: TArticleTwo,
): TListArticle[] => {
	const sections: TListArticle[] = [];
	const listsMovies = data;
	listsMovies.map((listMovieReturned: TNetflixListMoviesReturned) => {
		const title = listMovieReturned.title;
		if (listMovieReturned.result.state) {
			const list =
				listMovieReturned.result.data.results &&
				listMovieReturned.result.data.results.length
					? listMovieReturned.result.data.results
					: false;
			if (!list) return;
			const articleTwoCompletedWithDataFromAPI: TListArticle = {
				title,
				allArticles: list.map((movie: TNetflixMovie) => {
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
							src: URL_ADDRESSES.api.netflix.image(
								movie.poster_path,
								IMAGE_SIZE.small,
							),
							alt: movie.original_title,
						},
						path: listMovieReturned.path,
					};
				}),
			};
			sections.push(articleTwoCompletedWithDataFromAPI);
		} else {
			console.log(listMovieReturned.result);
		}
	});
	return sections;
};

export { appendDataToArticleTwoNetflixData };
