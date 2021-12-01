import React, { ReactElement } from 'react';
import getImg from '../../../asset';
import { ImageAsComponent } from '../../tree/atom';
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
} from '../../tree/atom/icon';
import IconWrapper from '../../tree/atom/icon/IconWrapper';

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
		default:
			return <span> {indice}</span>;
	}
};
export default getIcon;
