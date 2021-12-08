import React from 'react';
import { H2, Paragraph } from '../../../atom';
import './style.css';
import TArticleOne from './type';

type Props = {
	data: TArticleOne;
};

const ArticleOne: React.FC<Props> = ({ data: { h2, paragraph } }) => {
	return (
		<div id="ArticleOne">
			<H2 title={h2.title} />
			<Paragraph data={paragraph} />
		</div>
	);
};
export default ArticleOne;
