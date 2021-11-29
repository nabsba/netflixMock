import React, { ReactElement } from 'react';
import {
	ArrowDown,
	NotificationIcon,
	ProfileIcon,
	Search,
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

		default:
			return <span> {indice}</span>;
	}
};
export default getIcon;
