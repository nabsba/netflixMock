/*
Library: react-player
yarn: yarn add react-player --save
doc: https://www.npmjs.com/package/react-player
*/

import React from 'react';
import ReactPlayer from 'react-player';
import TVideoPlayer from './type';
import './style.css';

type Props = {
	data: TVideoPlayer;
};

const CONFIG_VIDEO: { [key: string]: any } = {
	youtube: {
		playerVars: { showinfo: 0, autoplay: 1, controls: 0, loop: 1 },
	},
	local: {},
};
const VideoPlayer: React.FC<Props> = ({
	data: { url, typeConfiguration, isVolumeUp },
}) => {
	return (
		<div id="video-player">
			<ReactPlayer
				url={url}
				volume={isVolumeUp}
				config={CONFIG_VIDEO[typeConfiguration]}
			/>
		</div>
	);
};
export default VideoPlayer;
