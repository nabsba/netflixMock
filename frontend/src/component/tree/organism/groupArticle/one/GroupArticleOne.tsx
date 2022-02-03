import React, { useEffect, useState } from 'react';
import { APIS, appendDataToArticleTwo } from '../../../../../service';
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
	const [isMouseEnter, setMouseEnter] = useState({
		state: true,
		identification: '',
	});
	useEffect(() => {
		if (data && data.length > 0 && articleTwo.type) {
			const listArticleTwo = appendDataToArticleTwo(
				articleTwo.type,
				data,
				articleTwo,
			);
			setListArticleTwo(listArticleTwo);
		}
	}, [data, articleTwo]);
	const handleMouseEnter = (identification: string) =>
		setMouseEnter({
			state: true,
			identification,
		});

	const displayAllArticlesFromTheList = (listArticle: TArticleTwo[]) => {
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
		listArticleTwo.map((listArticle: TListArticle, index: number) => (
			<div
				className="group_article_one_sub_main"
				key={listArticle.title}
				onMouseEnter={() => handleMouseEnter(listArticle.title)}
				style={{
					zIndex:
						isMouseEnter.state &&
						isMouseEnter.identification === listArticle.title
							? '10'
							: '0',
				}}
			>
				<H3 title={listArticle.title} />
				<div className="group_article_one_sub_main_articles_wrapper">
					{displayAllArticlesFromTheList(listArticle.allArticles)}
				</div>
			</div>
		));
	return <div className="group_article_one">{displayListWishes()}</div>;
};
export default GroupArticleOne;
