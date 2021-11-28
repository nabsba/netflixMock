import React, { ReactElement } from 'react';
import { Search } from '../../tree/atom/icon';
import IconWrapper from '../../tree/atom/icon/IconWrapper';

// https://react-icons.github.io/react-icons/icons?name=fa

const getIcon = (indice: string): ReactElement => {
	switch (indice) {
		case 'Search':
			return <IconWrapper Icon={<Search />} />;
		default:
			return <span> {indice}</span>;
	}
};
export default getIcon;
