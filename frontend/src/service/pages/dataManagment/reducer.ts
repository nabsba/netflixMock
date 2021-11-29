import { createSlice } from '@reduxjs/toolkit';
import * as dataBackup from '../datas/backup/data.json';
import { header } from '../datas/datasCommon';

// Those which are imported from home are those who the admin cannot update from his pannel.
const initialState = {
	home: {
		header: header,
	},
};

const data = createSlice({
	name: 'dataPages',
	initialState,
	reducers: {
		getDatasPages: (state) => state,
	},
});
const dataPages = data.reducer;
const { getDatasPages } = data.actions;

export default dataPages;
export { dataBackup, getDatasPages };
