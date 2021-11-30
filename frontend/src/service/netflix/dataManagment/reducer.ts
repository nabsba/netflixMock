import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	resultTemplate,
	serverGetApi,
} from '../../../bridge/common/requestServer';
import URL_ADDRESSES from '../../../bridge/url';
import { TInfosForUpdateDataPage } from '../type';

// Those which are imported from home are those who the admin cannot update from his pannel.
const initialState = { ...resultTemplate, pending: false };

//https://developers.themoviedb.org/3/discover/movie-discover

const listOfWishesMovies = [
	{
		title: 'Popular on Netflix',
		path: 'trending/all/day',
	},
	{
		title: 'Our guest',
		path: 'discover/movie',
	},
	{
		title: 'Top 10 in the uk',
		path: 'movie/popular',
		extraFilter: '&sort_by=popularity.asc',
	},
	{
		title: 'popular on Netflix',
		path: 'discover/movie',
		extraFilter:
			'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate',
	},
	{
		title: 'Actions movies',
		path: 'discover/movie',
		extraFilter: '&with_genres=action',
	},
];

export const fetchDataNetflix = createAsyncThunk('dataNetflix', async () => {
	try {
		const list: any = [];
		await Promise.all(
			listOfWishesMovies.map(
				async (wish: { title: string; path: string; extraFilter?: string }) =>
					list.push({
						title: wish.title,
						result: await serverGetApi(
							URL_ADDRESSES.api.netflix.data(
								wish.path,
								wish.extraFilter && wish.extraFilter,
							),
							null,
						),
						path: wish.path,
					}),
			),
		);
		return list;
	} catch (error) {
		console.log(
			'*** file: redux/midleware, method: fetchDataNetflix, error: ',
			error,
		);
	}
});

const data = createSlice({
	name: 'dataNetflix',
	initialState,
	reducers: {
		updateDataPage: (
			state: any,
			action: { payload: TInfosForUpdateDataPage },
		) => {
			state.data.map((element: any) => {
				if (element.path === action.payload.path) {
					element.result.data.results = element.result.data.results.concat(
						action.payload.newPage.results,
					);
					element.result.data.page = action.payload.newPage.page;
				}
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			fetchDataNetflix.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				// Add user to the state array
				state.state = true;
				state.data = action.payload;
				// todelete: console.log(action.payload, 'ACTION PAYLOAD');
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
const { updateDataPage } = data.actions;
const dataNetflix = data.reducer;

export { dataNetflix, updateDataPage };
