import React, { useEffect, useState } from 'react';
import {
	APIS,
	completeArticleTwoWithDataReceived,
} from '../../../../../service';
import { H3 } from '../../../atom';
import { TArticleTwo } from '../../../molecule';
import ArticleTwo from '../../../molecule/article/two/ArticleTwo';
import SliderTwo from '../../../molecule/slide/sliderTwo/SliderTwo';
import './style.css';
import TGroupArticleOne, { TListArticle } from './type';

type Props = {
	data: TGroupArticleOne;
};

const GroupArticleOne: React.FC<Props> = ({ data: { articleTwo, data } }) => {
	const [listArticleTwo, setListArticleTwo] = useState<any[]>([]);
	useEffect(() => {
		if (data && data.state && articleTwo.type) {
			const listArticleTwo = completeArticleTwoWithDataReceived(
				articleTwo.type,
				data,
				articleTwo,
			);
			setListArticleTwo(listArticleTwo);
		}
	}, [data, articleTwo]);

	const displayArticleMovies = (listArticle: TArticleTwo[]) => {
		/*todo: essaye d'activer le scroll lorsque une image de film apparait en gros (hover). et desactive la quand tu es sorti. Ca permettra peut etre de conserver le scale et d'avoir acces au scroll */
		const articles: React.ReactNode[] = [];
		let path = '';
		listArticle.map((article: TArticleTwo, index: number) => {
			path = article.path ? article.path : '';
			articles.push(
				<ArticleTwo
					key={
						APIS.includes(article.videoPlayer.type)
							? article.videoPlayer.type + index
							: index
					}
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
					// todo: remove hardcoding
					type: 'netflix',
					path: path,
				}}
			/>
		);
	};
	const displayListWishes = () =>
		listArticleTwo.map((listArticle: TListArticle) => (
			<div className="group_article_one_sub_main" key={listArticle.title}>
				<H3 title={listArticle.title} />
				<div className="group_article_one_sub_main_articles_wrapper">
					{displayArticleMovies(listArticle.allArticleMovie)}
				</div>
			</div>
		));
	return <div className="group_article_one">{displayListWishes()}</div>;
};
export default GroupArticleOne;
