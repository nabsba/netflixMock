import React, { useState } from 'react';
import { ImageAsComponent, VideoPlayer } from '../..';
import { getUrlForVideo } from '../../../../../service/Common/logic/functions';
import { Paragraph, Span } from '../../../atom';
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
	const [videoUrl, setVideoUrl] = useState('');
	const GroupCategories = informations.map((information: string) => (
		<Span data={information} key={information} />
	));
	videoPlayer.isVolumeUp = isVolumeUp ? 1 : 0;
	const handleMouseEnter = async () => {
		try {
			setIsArticleOnHover(true);
			if (videoPlayer.id) {
				const url = await getUrlForVideo(type, videoPlayer.id);
				videoPlayer.url = url;
				setVideoUrl(url);
			}
		} catch (error) {
			console.log(
				'file: ArticleTwo.tsx, method: handleMouseEnter, error: ',
				error,
			);
		}
	};
	return (
		<div className="article_two">
			<div
				className="article_two_part_one"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={() => setIsArticleOnHover(false)}
			>
				<ImageAsComponent data={imagePresentation} />
				{IsArticleOnHover && (
					<div className="article_two_video_player">
						{videoUrl && (
							<>
								{' '}
								<VideoPlayer data={videoPlayer} />{' '}
								<div
									className="article_two_video_player_volume_icon icon_with_a_circle_around"
									onClick={() => setIsVolumeUp(!isVolumeUp)}
								>
									{isVolumeUp ? iconVolume[0] : iconVolume[1]}
								</div>{' '}
							</>
						)}
					</div>
				)}
				<div className="article_two_part_one_icon_">{icon}</div>
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
