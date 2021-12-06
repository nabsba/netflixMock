import React, { ReactElement } from 'react';
import getImg from '../../../asset';

import {
	ArrowDown,
	ArrowDownBroken,
	Indication,
	NotificationIcon,
	Plus,
	ProfileIcon,
	Search,
	ThumbsDown,
	ThumbsUp,
	Triangle,
	VolumeHigh,
	VolumeOff,
} from '../../tree/atom/icon';
import IconWrapper from '../../tree/atom/icon/IconWrapper';
import { ImageAsComponent } from '../../tree/molecule';

// https://react-icons.github.io/react-icons/icons?name=fa

const getIcon = (indice: string): ReactElement => {
	switch (indice) {
		case 'Search':
			return <IconWrapper Icon={<Search />} />;
		case 'ArrowDown':
			return <IconWrapper Icon={<ArrowDown />} />;
		case 'NotificationIcon':
			return <IconWrapper Icon={<NotificationIcon />} />;
		case 'ProfileIcon':
			return <ProfileIcon />;
		case 'Indication':
			return <Indication />;
		case 'Triangle':
			return <Triangle />;
		case 'ThumbsUp':
			return <ThumbsUp />;
		case 'ThumbsDown':
			return <ThumbsDown />;
		case 'Plus':
			return <Plus />;
		case 'ArrowDownBroken':
			return <ArrowDownBroken />;
		case 'Netflix':
			return (
				<ImageAsComponent
					data={{
						src: getImg('icons', 'netflix'),
						alt: 'netflix',
					}}
				/>
			);
		case 'VolumeHigh':
			return <VolumeHigh />;
		case 'VolumeOff':
			return <VolumeOff />;
		default:
			return <span> {indice}</span>;
	}
};
export default getIcon;
