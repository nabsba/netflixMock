import React, { useEffect } from 'react';
import { fetchDataNetflix, TReducers } from '../../../../service';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { Header } from '../../organism';

const Home: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDataNetflix());
	}, [dispatch]);
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
