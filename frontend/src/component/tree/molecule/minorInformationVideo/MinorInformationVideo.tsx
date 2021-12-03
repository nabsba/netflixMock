import React from 'react';
import { Span } from '../../atom';
import Hd from '../hd/Hd';
import './style.css';
import TMinorInformationVideo from './type';

type Props = {
	data: TMinorInformationVideo;
};

const MinorInformationVideo: React.FC<Props> = ({ data: { number, time } }) => {
	return (
		<div className="minor_information_video article_two_part_one_padding flex_row_align_items_center">
			<div className="icon_circular">
				<Span data={number.toString()} />
			</div>
			<div className="minor_information_video_time">
				<Span data={time} />
			</div>
			<Hd />
		</div>
	);
};
export default MinorInformationVideo;
