import React, { useEffect, useState } from 'react';
import { APIS } from '../../../../../service/Common/constant';
import { appendDataToArticleTwo } from '../../../../../service/Common/logic/functions';
import { H3 } from '../../../atom';
import { TArticleTwo } from '../../../molecule';
import ArticleTwo from '../../../molecule/article/two/ArticleTwo';
import SliderTwo from '../../../molecule/slide/sliderTwo/SliderTwo';
import './style.css';
import TGroupArticleOne, { TListArticle } from './type';

type Props = {
	data: TGroupArticleOne;
};
const GroupArticleOne: React.FC<Props> = ({
	data: { articleTwo, data, type },
}) => {
	// const [listArticleTwo, setListArticleTwo] = useState<any[]>([]);
	const [isMouseEnter, setMouseEnter] = useState({
		state: true,
		identification: '',
	});

	let listArticleTwo: any;
	if (data && data.length > 0 && articleTwo.type) {
		listArticleTwo = appendDataToArticleTwo(articleTwo.type, data, articleTwo);
	}

	const addClassesForSliders = (event: any) => {
		const currentDiv = event.currentTarget as HTMLElement;
		const getArticles = currentDiv.getElementsByClassName('slick-active');
		const articlesLength = getArticles.length;
		getArticles[articlesLength - 1].classList.add('last_slide');
	};
	const handleMouseClick = (event: any) => addClassesForSliders(event);

	const handleMouseEnter = (identification: string, event: any) => {
		addClassesForSliders(event);
		setMouseEnter({
			state: true,
			identification,
		});
	};
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
					type,
					path: path,
				}}
			/>
		);
	};
	const displayListWishes = () => {
		if (listArticleTwo && listArticleTwo.length > 0)
			return listArticleTwo.map((listArticle: TListArticle) => (
				<div
					className="group_article_one_sub_main"
					key={listArticle.title}
					onMouseEnter={(event) => handleMouseEnter(listArticle.title, event)}
					onClick={handleMouseClick}
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
	};
	return <div className="group_article_one">{displayListWishes()}</div>;
};

export default GroupArticleOne;
