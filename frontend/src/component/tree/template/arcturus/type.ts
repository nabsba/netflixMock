import { TDataNetflix } from '../../../../service/netflix/type';
import { TArticleTwo } from '../../molecule';

// type TArcturus = {
// 	articleTwo: TArticleTwo;
// };
type TArcturus = {
	type: string;
	groupArticleOne: {
		articleTwo: TArticleTwo;
		data: TDataNetflix;
	};
};
export default TArcturus;
