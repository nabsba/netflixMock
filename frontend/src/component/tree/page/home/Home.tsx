import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataNetflix, TReducers } from '../../../../service';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
// import THome from './type';

const Home: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDataNetflix('trending/all/day'));
	}, []);

	// To grab address.com/:id
	const { id } = useParams();
	const {
		dataNetflix: { data },
	} = useSelector((state: TReducers) => state);
	console.log(data);
	return (
		<div>
			<h1> Hello netflix app 2</h1>
		</div>
	);
};
export default Home;
