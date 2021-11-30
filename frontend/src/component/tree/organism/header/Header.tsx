import React, { useEffect, useState } from 'react';
import { ImageAsComponent } from '../../atom';
import { ArticleOne } from '../../molecule';
import ButtonRectangle from '../../molecule/button/rectangle/ButtonRectangle';
import Navigation from '../navigation/Navigation';
import './style.css';
import { THeader } from './type';

type Props = {
	data: THeader;
};

const Header: React.FC<Props> = ({
	data: { navigation, imageBackground, imageDescription, articleOne, buttons },
}) => {
	const [scroll, setScroll] = useState(false);
	const divRef = React.useRef<HTMLDivElement>(null);

	const handleScroll = (): void => {
		let result = false;
		if (divRef.current) {
			const bodyPosition = divRef.current?.getBoundingClientRect().top;
			result = bodyPosition < -10;
			setScroll(result);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return (): void => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<div className="header" ref={divRef}>
			<Navigation data={navigation} isOnScroll={scroll} />
			<div className="header_image_background">
				<ImageAsComponent data={imageBackground} />
			</div>
			<div className="header_description">
				<div className="header_description_image">
					<ImageAsComponent data={imageDescription} />
				</div>
				<div className="header_description_paragraph">
					<ArticleOne data={articleOne} />
				</div>
				<div className="header_description_buttons flex_row ">
					<ButtonRectangle data={buttons.one} />
					<ButtonRectangle data={buttons.two} />
				</div>
				<div></div>
			</div>
		</div>
	);
};
export default Header;
