import { Result } from './../../../../../Common/type/type';
import { TArticleTwo } from '../../../molecule';

type TGroupArticleOne = {
	articleTwo: TArticleTwo;
	data?: any;
};

export type TListArticle = {
	title: string;
	allArticleMovie: TArticleTwo[];
};
export default TGroupArticleOne;
