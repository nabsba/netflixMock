import React, { useEffect, useState } from 'react';
import { URL_ADDRESSES } from '../../../../../bridge';
import {
	TNetflixListMoviesReturned,
	TNetflixMovie,
} from '../../../../../service/netflix/type';
import { H1 } from '../../../atom';
import { TArticleTwo } from '../../../molecule';
import ArticleTwo from '../../../molecule/article/two/ArticleTwo';
import SliderTwo from '../../../molecule/slide/sliderTwo/SliderTwo';
import './style.css';
import TGroupArticleOne from './type';

type Props = {
	data: TGroupArticleOne;
};

type TListArticle = {
	title: string;
	allArticleMovie: TArticleTwo[];
};
const GroupArticleOne: React.FC<Props> = ({ data: { articleTwo, data } }) => {
	// const getImage = () => {
	const [listArticleTwo, setListArticleTwo] = useState<any[]>([]);
	const APIS = ['netflix'];
	{
		/*todo: make swtich statement for neutral */
	}
	useEffect(() => {
		{
			/*todo: create props factory to get this*/
		}
		if (data.state) {
			data.data.map((listMovieReturned: TNetflixListMoviesReturned) => {
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
						};
					}),
				};
				setListArticleTwo((prevState) => [
					...prevState,
					articleTwoCompletedWithDataFromAPI,
				]);
			});
		}
	}, [data, articleTwo]);

	const displayArticleMovies = (listArticle: TArticleTwo[]) => {
		/*todo: essaye d'activer le scroll lorsque une image de film apparait en gros (hover). et desactive la quand tu es sorti. Ca permettra peut etre de conserver le scale et d'avoir acces au scroll */
		const articles: React.ReactNode[] = [];
		listArticle.map((article: TArticleTwo, index: number) => {
			articles.push(
				<ArticleTwo
					key={APIS.includes(article.videoPlayer.type) ? index : index}
					data={article}
				/>,
			);
		});
		return (
			<SliderTwo
				data={{
					ComponentProps: articles,
					setting: {
						method: 'responsive',
						animation: false,
					},
				}}
			/>
		);
	};
	const displayListWishes = () =>
		listArticleTwo.map((listArticle: TListArticle) => (
			<div className="group_article_one_sub_main" key={listArticle.title}>
				<H1 title={listArticle.title} />
				<div className="test_nabil">
					{displayArticleMovies(listArticle.allArticleMovie)}
				</div>
			</div>
		));

	return <div className="group_article_one">{displayListWishes()}</div>;
};
export default GroupArticleOne;
