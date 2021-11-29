import React, { ReactElement } from 'react';
import {
	ArrowDown,
	Indication,
	NotificationIcon,
	ProfileIcon,
	Search,
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

		default:
			return <span> {indice}</span>;
	}
};
export default getIcon;
