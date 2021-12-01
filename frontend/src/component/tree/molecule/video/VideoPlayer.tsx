/*
Library: react-player
yarn: yarn add react-player --save
doc: https://www.npmjs.com/package/react-player
*/

import React from 'react';
import ReactPlayer from 'react-player';
import TVideo from './type';
import './style.css';

type Props = {
	data: TVideo;
};

const CONFIG_VIDEO: { [key: string]: any } = {
	youtube: {
		playerVars: { showinfo: 0, autoplay: 1, controls: 0 },
	},
	local: {},
};
const VideoPlayer: React.FC<Props> = ({ data: { url, type } }) => {
	return (
		<div id="video-player">
			<ReactPlayer url={url} volume={1} config={CONFIG_VIDEO[type]} />
		</div>
	);
};
export default VideoPlayer;
