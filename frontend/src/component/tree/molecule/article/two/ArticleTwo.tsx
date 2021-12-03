import React, { useState } from 'react';
import { VideoPlayer } from '../..';
import { getVideoUrl } from '../../../../../service';
import { ImageAsComponent, Paragraph, Span } from '../../../atom';
import GroupIcon from '../../groupIcon/GroupIcon';
import MinorInformationVideo from '../../minorInformationVideo/MinorInformationVideo';
import './style.css';
import TArticleTwo from './type';

type Props = {
	data: TArticleTwo;
};

const ArticleTwo: React.FC<Props> = ({
	data: {
		iconGroup,
		iconVolume,
		minorInformationVideo,
		videoPlayer,
		imagePresentation,
		type,
		icon,
	},
}) => {
	const [IsArticleOnHover, setIsArticleOnHover] = useState(false);
	const [isVolumeUp, setIsVolumeUp] = useState(true);
	const informations = ['habile', 'impertinent', 'palpitant'];
	const GroupCategories = informations.map((information: string) => (
		<Span data={information} key={information} />
	));

	{
		/*todo: remove this and place it to service */
	}
	const getUrl = async (type: string | undefined, id?: number | string) => {
		try {
			switch (type) {
				case 'netflix':
					if (!id) return;
					const url = await getVideoUrl(id);
					if (url) {
						videoPlayer.url = url;
						return url;
					} else {
						{
							/*todo: could send a message through discord with the id of the video where the trailer is not available - For now we just return a default add from netflix*/
							/*todo: remove the hardcoding*/
						}
						return 'https://www.youtube.com/watch?v=sY2djp46FeY';
					}

				default:
					return '';
			}
		} catch (error) {
			return false;
		}
	};

	return (
		<div className="article_two">
			<div
				className="article_two_part_one"
				onMouseEnter={() => {
					setIsArticleOnHover(true);
					getUrl(type, videoPlayer.id);
				}}
				onMouseLeave={() => setIsArticleOnHover(false)}
			>
				{/* <ImageAsComponent data={image} /> */}
				<ImageAsComponent data={imagePresentation} />
				{IsArticleOnHover && (
					<div className="article_two_video_player">
						{/* todo: get video player on hover only not per default */}
						{/* <VideoPlayer data={linkVideo} /> */}

						{videoPlayer.url && <VideoPlayer data={videoPlayer} />}
						<div
							className="article_two_video_player_volume_icon icon_with_a_circle_around"
							onClick={() => setIsVolumeUp(!isVolumeUp)}
						>
							{isVolumeUp ? iconVolume[0] : iconVolume[1]}
						</div>
					</div>
				)}
				{/*todo: remove netflix name from class */}
				<div className="article_two_part_one_icon_netflix">{icon}</div>
			</div>
			<div className="article_two_part_two">
				<div className="group_icons_wrapper flex_row_between">
					<div className="group_icons_wrapper_part_one display flex_row">
						<GroupIcon data={iconGroup.one} />
					</div>
					<div className="group_icons_wrapper_part_two">
						<GroupIcon data={iconGroup.two} />
					</div>
				</div>
				<div className="padding_between_minor_element">
					{/* todo: remove hard coding */}
					<Paragraph data={'Recommendation 95%'} />
				</div>
				<div className="padding_between_minor_element">
					{/* <MinorInformationVideo data={minorInformation} /> */}
					<MinorInformationVideo data={minorInformationVideo} />
				</div>
				<div className="group_categories padding_between_minor_element">
					{GroupCategories}
				</div>
			</div>
		</div>
	);
};

export default ArticleTwo;

// const icons = [
// 	getIcon('Triangle'),
// 	getIcon('Plus'),
// 	getIcon('ThumbsUp'),
// 	getIcon('ThumbsDown'),
// 	getIcon('ArrowDownBroken'),
// 	getIcon('Netflix'),
// ];
// const iconGroup = {
// 	one: [
// 		getIcon('Triangle'),
// 		getIcon('Plus'),
// 		getIcon('ThumbsUp'),
// 		getIcon('ThumbsDown'),
// 	],
// 	two: [getIcon('ArrowDownBroken')],
// };
// const IconsVolumes = [getIcon('VolumeHigh'), getIcon('VolumeOff')];
// const linkVideo = {
// 	url: 'https://www.youtube.com/watch?v=nyc6RJEEe0U',
// 	type: 'youtube',
// 	name: 'ge',
// 	date: '21/01/202',
// 	isVolumeUp: isVolumeUp ? 1 : 0,
// };
// const image = {
// 	src: 'https://occ-0-475-1167.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQHPJ2jrCTdo1LCvqdDYLYeX1YDLNpvS8oe8OribopJ9em2i-HKFaidmFmjcd0MgAjqNUI5sZSgoSlC1F0UCDtL39gN2.webp?r=f3a',
// 	alt: 'arcana',
// };
// const minorInformation = {
// 	number: 13,
// 	time: '12h30',
// };
