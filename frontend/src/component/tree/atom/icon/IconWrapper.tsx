import React from 'react';
import { IconContext } from 'react-icons';

// https://react-icons.github.io/react-icons/icons?name=fa

type TProps = {
	Icon: React.ReactNode;
};

const IconWrapper: React.FC<TProps> = ({ Icon }) => {
	return (
		<IconContext.Provider
			value={{
				size: '100%',
			}}
		>
			{Icon}
		</IconContext.Provider>
	);
};
export default IconWrapper;
