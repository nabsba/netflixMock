import React from 'react';
import { Span } from '../../../atom';
import './style.css';
import TButtonRectangle from './type';

type Props = {
	data: TButtonRectangle;
};

const ButtonRectangle: React.FC<Props> = ({
	data: { text, componentPassed },
}) => {
	return (
		<button className="button_rectangle flex_row_center_align_center">
			{componentPassed && componentPassed}
			<Span data={text} />
		</button>
	);
};
export default ButtonRectangle;
