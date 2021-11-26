import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import './style.css';
// import THome from './type';

const Home: React.FC = () => {
	// To grab address.com/:id
	const { id } = useParams();
	const {
		dataPages: {
			data: { home },
		},
	} = useSelector((state: TReducers) => state);
	console.log(home, id);
	return (
		<div>
			<h1> Hello </h1>
		</div>
	);
};
export default Home;
