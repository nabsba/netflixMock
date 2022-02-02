import { TArticleTwo } from '../../../molecule';

type TGroupArticleOne = {
	articleTwo: TArticleTwo;
	data?: any;
};

export type TListArticle = {
	title: string;
	allArticles: TArticleTwo[];
};
export default TGroupArticleOne;
