import React from 'react';
import { GroupArticleOne } from '../../organism';
import './style.css';
import TArcturus from './type';

type Props = {
	data: TArcturus;
};

const Arcturus: React.FC<Props> = ({ data: { groupArticleOne } }) => {
	return (
		<div id="arturus">
			<section id="arturus-section-one">
				<GroupArticleOne data={groupArticleOne} />
			</section>
		</div>
	);
};
export default Arcturus;
