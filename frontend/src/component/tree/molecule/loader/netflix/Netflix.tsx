import React from 'react';
import getIcon from '../../../../factory/icon/Icon';
import './style.css';

const NetflixLoader: React.FC = () => {
	const Netflix = getIcon('Netflix');
	return (
		<div id="loader-netflix">
			<div>{Netflix}</div>
		</div>
	);
};
export default NetflixLoader;
