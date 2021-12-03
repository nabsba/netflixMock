import React from 'react';
import './style.css';
import TGroupIcon from './type';

type Props = {
	data: TGroupIcon;
};

const GroupIcon: React.FC<Props> = ({ data }) => {
	return (
		<div className="group_icons_wrapper_part_one display flex_row">
			{data.map((componentElement: React.ReactNode, index: number) => (
				<div key={index} className="icon_with_a_circle_around">
					{componentElement}
				</div>
			))}
		</div>
	);
};
export default GroupIcon;
