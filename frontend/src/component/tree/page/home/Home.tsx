import React, { useEffect } from 'react';
import './style.css';

import {
	initGroupArticleWithNetflixData,
	TReducers,
} from '../../../../service';
import { useDispatch, useSelector } from 'react-redux';
import { Arcturus, Header } from '../../template';

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const {
		//todo: make sure you have a backup for dataNetflix
		dataNetflix,
		dataPages: {
			home: { header, arcturus },
		},
	} = useSelector((state: TReducers) => state);
	useEffect(() => {
		dispatch(initGroupArticleWithNetflixData(dataNetflix));
	}, [dataNetflix, dispatch]);

	return (
		<div id="home-page">
			<Header data={header} />
			<Arcturus data={arcturus} />
		</div>
	);
};
export default Home;
