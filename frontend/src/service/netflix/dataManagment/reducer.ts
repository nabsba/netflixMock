import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	resultTemplate,
	serverGet,
} from '../../../bridge/common/requestServer';
import URL_ADDRESSES from '../../../bridge/url';
import { Result } from '../../../Common/type/type';

// Those which are imported from home are those who the admin cannot update from his pannel.
const initialState = {
	pending: true,
	state: false,
	data: {},
	error: '',
	errorServer: '',
};

export const fetchDataNetflix = createAsyncThunk(
	'dataNetflix',
	async (wish: string) => {
		let result: Result = { ...resultTemplate };
		try {
			result = await serverGet(URL_ADDRESSES.api.netflix.data(wish), null);
			return result;
		} catch (error) {
			console.log(
				'*** file: redux/midleware, method: fetchDataPages, error: ',
				error,
			);
		}
	},
);

const data = createSlice({
	name: 'dataNetflix',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchDataNetflix.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				// Add user to the state array
				state.state = true;
				state.data = action.payload;
			},
		);
		builder.addCase(fetchDataNetflix.rejected, (state) => {
			state.state = false;
			state.pending = false;
		});
		builder.addCase(fetchDataNetflix.pending, (state) => {
			state.state = false;
			state.pending = true;
		});
	},
});

const dataNetflix = data.reducer;

export default dataNetflix;
