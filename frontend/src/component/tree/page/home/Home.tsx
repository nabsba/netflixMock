import React, { useEffect, useState } from 'react';
import './style.css';
import {
	initGroupArticleWithNetflixData,
	TReducers,
} from '../../../../service';
import { useDispatch, useSelector } from 'react-redux';
import { Arcturus, Header } from '../../template';
import Footer from '../../template/footer/Footer';
import { NetflixLoader } from '../../molecule';

const Home: React.FC = () => {
	const [loader, setLoader] = useState(true);
	const dispatch = useDispatch();
	const {
		//todo: make sure you have a backup for dataNetflix
		dataNetflix,
		dataPages: {
			home: { header, arcturus, footer },
		},
	} = useSelector((state: TReducers) => state);
	useEffect(() => {
		if (dataNetflix.state && dataNetflix.data) {
			setLoader(false);
			dispatch(initGroupArticleWithNetflixData(dataNetflix));
		}
	}, [dataNetflix, dispatch]);
	return (
		<div id="home-page">
			{loader ? (
				<NetflixLoader />
			) : (
				<>
					<Header data={header} />
					<Arcturus data={arcturus} />
					<Footer data={footer} />
				</>
			)}
		</div>
	);
};
export default Home;
