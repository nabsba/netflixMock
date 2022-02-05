import React, { useEffect, useState } from 'react';
import './style.css';
import { TReducers } from '../../../../service';
import { useDispatch, useSelector } from 'react-redux';
import { Arcturus, Header } from '../../template';
import Footer from '../../template/footer/Footer';
import { NetflixLoader } from '../../molecule';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallback from '../../../specialCase/error/errorBundary/ErrorBoundaryFallback';
import { initGroupArticleWithNetflixData } from '../../../../service/pages/Common/dataManagment/reducer';

const Home: React.FC = () => {
	const [loader, setLoader] = useState(true);
	const dispatch = useDispatch();
	const {
		//todo: make sure you have a backup for dataNetflix
		dataNetflix,
		dataPages: {
			home: { header, arcturus, footer, errorBundaryFallbackType },
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
			<ErrorBoundary
				fallbackRender={() => (
					<ErrorBoundaryFallback type={errorBundaryFallbackType.home} />
				)}
			>
				{loader ? (
					<NetflixLoader />
				) : (
					<>
						<ErrorBoundary
							fallbackRender={() => (
								<ErrorBoundaryFallback type={errorBundaryFallbackType.header} />
							)}
						>
							<Header data={header} />
						</ErrorBoundary>
						<ErrorBoundary
							fallbackRender={() => (
								<ErrorBoundaryFallback
									type={errorBundaryFallbackType.template}
								/>
							)}
						>
							<Arcturus data={arcturus} />
						</ErrorBoundary>
						<ErrorBoundary
							fallbackRender={() => (
								<ErrorBoundaryFallback type={errorBundaryFallbackType.footer} />
							)}
						>
							<Footer data={footer} />
						</ErrorBoundary>
					</>
				)}
			</ErrorBoundary>
		</div>
	);
};
export default Home;
