/*eslint-disable  @typescript-eslint/ban-ts-comment*/
//@ts-nocheck
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
	const [isViewTopPage, setViewTopPage] = useState(false);
	const scrollToTheTop = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		const result = window.scrollY === 0;
		setViewTopPage(result);
	};
	useEffect(() => {
		if (window.scrollY === 0) {
			setViewTopPage(true);
		}
		if (!isViewTopPage) {
			window.addEventListener('scroll', scrollToTheTop);
		}
		return (): void => window.removeEventListener('scroll', scrollToTheTop);
	}, [isViewTopPage]);

	return isViewTopPage && children;
};

export default withRouter(ScrollToTop);
