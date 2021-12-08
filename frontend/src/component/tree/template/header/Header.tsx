import React, { useEffect, useState } from 'react';
import { getUrlForVideo } from '../../../../service/Common/logic/functions';
import getIcon from '../../../factory/icon/Icon';
import { H3 } from '../../atom';

import { ArticleOne, ImageAsComponent, VideoPlayer } from '../../molecule';
import ButtonRectangle from '../../molecule/button/rectangle/ButtonRectangle';
import Navigation from '../../organism/navigation/Navigation';
import './style.css';
import { THeader } from './type';

type Props = {
	data: THeader;
};

const Header: React.FC<Props> = ({
	data: { navigation, imageBackground, articleOne, buttons, videoPlayer },
}) => {
	const [videoUrl, setVideoUrl] = useState('');
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
	useEffect(() => {
		if (videoPlayer.id) {
			const getVideoPlayer = async () => {
				try {
					const url = await getUrlForVideo(
						videoPlayer.type,
						videoPlayer.id ? videoPlayer.id : '',
					);
					setVideoUrl(url);
				} catch (error) {
					console.log(error);
				}
			};
			getVideoPlayer();
		}
	}, [videoPlayer]);
	const netflix = getIcon('Netflix');
	const videoPlayerUpdated = { ...videoPlayer, url: videoUrl };

	return (
		<div className="header" ref={divRef}>
			<Navigation data={navigation} isOnScroll={scroll} />
			{videoUrl && <VideoPlayer data={videoPlayerUpdated} />}
			<div className="header_image_background">
				<ImageAsComponent data={imageBackground} />
			</div>
			<div
				className={
					videoUrl
						? 'header_description shrunk_header_description'
						: 'header_description'
				}
			>
				<div className="header_description_icon_and_title flex_row_align_items_center">
					{netflix} <H3 title={articleOne.h2.title} />
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
