import React from 'react';
import ImageAsComponent from '../image/Image';

const ProfileIcon: React.FC = () => {
	return (
		<div>
			<ImageAsComponent
				data={{
					src: 'https://occ-0-475-1167.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSUh5vTXaNW1xUVnK-poES8g1_JY-i91igMvNwDyQANKvlNfhGpcibSZA-Y8QqnOOXWqeT7ST5pYDvPMqrIvrrY.png?r=8aa',
					alt: 'src',
				}}
			/>
		</div>
	);
};
export default ProfileIcon;
