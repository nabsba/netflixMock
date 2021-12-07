import React from 'react';
import { Paragraph, Span } from '../../atom';
import './style.css';
import TFooter from './type';

type Props = {
	data: TFooter;
};

const Footer: React.FC<Props> = ({ data: { top, bottom } }) => {
	const TopHTML = () =>
		top.list.map((list: string[], index: number) => (
			<div key={index} className="foot_top_sub_wrapper">
				<div key={index}>
					{list.map((menu: string) => (
						<Span key={menu} data={menu} />
					))}
				</div>
			</div>
		));

	return (
		<div id="footer">
			<div className="footer_top">{(() => TopHTML())()}</div>
			<div className="footer_bottom">
				<Span data={bottom.span} />
				<Paragraph data={bottom.paragraph} />
			</div>
		</div>
	);
};
export default Footer;
