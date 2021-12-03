export type TSliderTwo = {
	ComponentProps: React.ReactNode[];
	setting: { method: string; animation: boolean };
};


	// <div className="group_article_one">
	// 	{listArticleTwo.map((listArticle: TListArticle) => {
	// 		listArticle.allArticleMovie.map(
	// 			(article: TArticleTwo, index: number) => {
	// 				articles.push(
	// 					<ArticleTwo
	// 						key={
	// 							APIS.includes(article.videoPlayer.type)
	// 								? article.videoPlayer.type
	// 								: index
	// 						}
	// 						data={article}
	// 					/>,
	// 				);
	// 			},
	// 		);
	// 		console.log(articles);
	// 		return (
	// 			<div key={listArticle.title} className="group_article_one_main">
	// 				<H1 title={listArticle.title} />
	// 				<div className="group_article_one_sub_main">
	// 					<SliderTwo
	// 						data={{
	// 							ComponentProps: articles,
	// 							setting: {
	// 								method: 'responsive',
	// 								animation: false,
	// 							},
	// 						}}
	// 					/>
	// 				</div>
	// 			</div>
	// 		);
	// 	})}
	// </div>
