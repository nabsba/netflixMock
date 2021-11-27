import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	resultTemplate,
	serverGet,
} from '../../../bridge/common/requestServer';
import URL_ADDRESSES from '../../../bridge/url';
import { Result } from '../../../Common/type/type';
import * as dataBackup from '../datas/backup/data.json';

// Those which are imported from home are those who the admin cannot update from his pannel.
const initialState = {
	pending: true,
	state: false,
	data: {},
	error: '',
	errorServer: '',
};

export const fetchDataPages = createAsyncThunk('dataPages', async () => {
	let result: Result = { ...resultTemplate };
	try {
		result = await serverGet(URL_ADDRESSES.default, null);
		if (!result.state) {
			result.state = true;
			result.data = JSON.parse(JSON.stringify(dataBackup));
		}
		return result;
	} catch (error) {
		console.log(
			'*** file: redux/midleware, method: fetchDataPages, error: ',
			error,
		);
	}
});

const data = createSlice({
	name: 'dataPages',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchDataPages.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				// Add user to the state array
				state.state = true;
				state.data = action.payload;
			},
		);
		builder.addCase(fetchDataPages.rejected, (state) => {
			state.state = false;
			state.pending = false;
		});
		builder.addCase(fetchDataPages.pending, (state) => {
			state.state = false;
			state.pending = true;
		});
	},
});
const dataPages = data.reducer;

export default dataPages;
export { dataBackup };
