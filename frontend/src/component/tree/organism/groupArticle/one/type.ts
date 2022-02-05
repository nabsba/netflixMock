import { TArticleTwo } from '../../../molecule';

type TGroupArticleOne = {
	articleTwo: TArticleTwo;
	type: string;
	data?: any;
};

export type TListArticle = {
	title: string;
	allArticles: TArticleTwo[];
};
export default TGroupArticleOne;
