import React from 'react';
import './style.css';
import { Header } from '../../organism';
import { TReducers } from '../../../../service';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
	const {
		dataNetflix,
		dataPages: {
			home: { header },
		},
	} = useSelector((state: TReducers) => state);

	return (
		<div id="home-page" style={{ height: '200vh' }}>
			<Header data={header} />
		</div>
	);
};
export default Home;
