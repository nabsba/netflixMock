import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './component/common/css/share.css';
// import {
// 	ErrorPath,
// 	ErrorServer,
// } from './component/specialCase';
import { useDispatch, useSelector } from 'react-redux';
import { Home } from './component/tree/page';
// import { TInfoDevice, TReducer } from './service/common/redux/type';
// import { updateInfoDevice } from './service';
// import { fetchDataPages } from './service/pages/redux/reducer';

// Reminder: https://medium.com/@jenniferdobak/react-router-vs-switch-components-2af3a9fc72e

const App: React.FC = () => {
	// const [HomeComponent, setHomeComponent] = useState<React.ReactNode>();
	// const dispatch = useDispatch();
	// const {
	// 	dataPages: { pending },
	// } = useSelector((state: TReducer) => state);
	//Init Redux info device of user & dashboardData of user.
	// useEffect(() => {
	// 	// navigator.serviceWorker.ready.then((registration) => {
	// 	// 	if (registration && registration.active) {
	// 	// 		registration.active.postMessage('Hi mon gro');
	// 	// 	}
	// 	// });
	// 	// Home page has been load
	// 	import('./component/tree/page').then((Home) => {
	// 		setHomeComponent({ Home });
	// 	});
	// 	//https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/indexeddb-best-practices

	// 	// Check storage of the client.
	// 	let storage: { used: number | undefined; available: number | undefined } = {
	// 		used: 0,
	// 		available: 0,
	// 	};
	// 	if ('storage' in navigator && 'estimate' in navigator.storage) {
	// 		navigator.storage.estimate().then(({ usage, quota }) => {
	// 			storage = { used: usage, available: quota };
	// 		});
	// 	}
	// 	// Check if the browser support the hover.
	// 	const isHoverSupported = !matchMedia('(hover: none)').matches;
	// 	// Check if the browser support webworker (We will also need this information to fetchDashboard)
	// 	const isBrowserSupportWebWorker = typeof Worker !== 'undefined';
	// 	const isBrowserSupportServiceWorker = 'serviceWorker' in navigator;
	// 	// https://caniuse.com/?search=indexDB
	// 	const isIndexDbSupported = true;
	// 	const infoDevice: TInfoDevice = {
	// 		isHover: isHoverSupported,
	// 		isWebWorker: isBrowserSupportWebWorker,
	// 		isServiceWorker: isBrowserSupportServiceWorker,
	// 		isWebService: false,
	// 		isIndexDB: isIndexDbSupported,
	// 		storageClient: storage,
	// 	};
	// 	// Update redux
	// 	dispatch(fetchDataPages());
	// 	dispatch(updateInfoDevice(infoDevice));
	// }, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test/:id" element={<Home />} />
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
