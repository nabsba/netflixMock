import { createSlice } from '@reduxjs/toolkit';
import * as dataBackup from '../datas/backup/data.json';
import { header, footer } from '../datas/datasCommon';
import { arcturus } from '../../home/data';

// Those which are imported from home are those who the admin cannot update from his pannel.
const initialState = {
	home: {
		header,
		arcturus,
		footer,
	},
};

const data = createSlice({
	name: 'dataPages',
	initialState,
	reducers: {
		getDatasPages: (state) => state,
		initGroupArticleWithNetflixData: (state, action) => {
			const data = action.payload;
			state.home.arcturus.groupArticleOne.data = data;
		},
		polulateDataPagesWithApiData: (state, action) => {
			console.log('action');
		},
	},
});
const dataPages = data.reducer;
const {
	getDatasPages,
	polulateDataPagesWithApiData,
	initGroupArticleWithNetflixData,
} = data.actions;

export default dataPages;
export { dataBackup, getDatasPages, initGroupArticleWithNetflixData };
