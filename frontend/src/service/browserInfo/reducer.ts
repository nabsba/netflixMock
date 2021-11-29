import { createSlice } from '@reduxjs/toolkit';
import { TBrowserInfo } from './type';

const initialStateBrowserInfo: TBrowserInfo = {
	isHoverSupported: false,
	isWebWorker: false,
	isServiceWorker: false,
	isWebService: false,
	isIndexDB: false,
	storageClient: {
		used: 0,
		available: 0,
	},
};
const data = createSlice({
	name: 'browserInfo',
	initialState: initialStateBrowserInfo,
	reducers: {
		getBrowserInfo: (state: TBrowserInfo) => state,
		updateInfoDevice: (state, action: { payload: TBrowserInfo }) => {
			state.isHoverSupported = action.payload.isHoverSupported;
			state.isWebService = action.payload.isWebService;
			state.isServiceWorker = action.payload.isServiceWorker;
			state.isIndexDB = action.payload.isServiceWorker;
		},
	},
});

const browserInfo = data.reducer;
const { getBrowserInfo, updateInfoDevice } = data.actions;

export { browserInfo, updateInfoDevice, getBrowserInfo };
