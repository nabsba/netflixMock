import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './component/common/css/share.css';

import { useDispatch } from 'react-redux';
import { Home } from './component/tree/page';
import {
	fetchDataNetflix,
	getDatasPages,
	TBrowserInfo,
	updateInfoDevice,
} from './service';
// Reminder: https://medium.com/@jenniferdobak/react-router-vs-switch-components-2af3a9fc72e

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		let storage: { used: number | undefined; available: number | undefined } = {
			used: 0,
			available: 0,
		};
		if ('storage' in navigator && 'estimate' in navigator.storage) {
			navigator.storage.estimate().then(({ usage, quota }) => {
				storage = { used: usage, available: quota };
			});
		}
		// Check if the browser support the hover.
		const isHoverSupported = !matchMedia('(hover: none)').matches;
		// Check if the browser support webworker (We will also need this information to fetchDashboard)
		const isBrowserSupportWebWorker = typeof Worker !== 'undefined';
		const isBrowserSupportServiceWorker = 'serviceWorker' in navigator;
		// https://caniuse.com/?search=indexDB
		const isIndexDbSupported = true;
		const infoDevice: TBrowserInfo = {
			isHoverSupported: isHoverSupported,
			isWebWorker: isBrowserSupportWebWorker,
			isServiceWorker: isBrowserSupportServiceWorker,
			isWebService: false,
			isIndexDB: isIndexDbSupported,
			storageClient: storage,
		};
		// Update redux
		dispatch(getDatasPages());
		dispatch(fetchDataNetflix());
		dispatch(updateInfoDevice(infoDevice));
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <ErrorServer />
				</Route>
				<Route path="*">
					<ErrorPath /> */}
				{/* </Route> */}
			</Routes>
		</BrowserRouter>
	);
};
// (App as any).whyDidYouRender = true;
export default App;
