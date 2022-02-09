import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { resultTemplate, serverGetApi } from '../../Common/logic/requestServer';
import {
	TDataNetflix,
	TInfosPage,
	TNetflixListMoviesReturned,
	TWishListMovies,
} from '../type';
import { LIST_OF_WISHES_CATEGORIES_MOVIES, PROTOTYPE } from '../constant';
import { URL_ADDRESSES } from '../../Common/constant';

const initialState = { ...resultTemplate, pending: false };

//https://developers.themoviedb.org/3/discover/movie-discover

export const fetchDataNetflix = createAsyncThunk(
	'dataNetflix/init',
	async (): Promise<TNetflixListMoviesReturned[] | false> => {
		try {
			const list: TNetflixListMoviesReturned[] = [];
			await Promise.all(
				LIST_OF_WISHES_CATEGORIES_MOVIES.map(async (wish: TWishListMovies) =>
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
						extraFilter: wish.extraFilter ? wish.extraFilter : null,
					}),
				),
			);
			return list;
		} catch (error) {
			console.log(
				'*** file: redux/midleware, method: fetchDataNetflix, error: ',
				error,
			);
			return false;
		}
	},
);
export const getNewPageNetFlix = createAsyncThunk(
	'dataNetflix/getPage',
	async (infosPage: TInfosPage): Promise<any | false> => {
		try {
			const { path, page } = infosPage;
			const newPage = await serverGetApi(
				URL_ADDRESSES.api.netflix.data(path, `&page=${page}`),
				null,
			);
			const pagePayload = {
				path,
				newPage,
			};
			return pagePayload;
		} catch (error) {
			console.log(
				'*** file: redux/midleware, method: fetchDataNetflix, error: ',
				error,
			);
			return false;
		}
	},
);
const data = createSlice({
	name: 'dataNetflix',
	initialState,
	reducers: {
		addPrototype: (state: any, action: { payload: { path: string } }) => {
			const { path } = action.payload;
			const prototypes = PROTOTYPE.PAGE();
			state.data.map((element: TNetflixListMoviesReturned) => {
				if (element.path === path) {
					element.result.data.results =
						element.result.data.results.concat(prototypes);
					element.result.data.page = element.result.data.page + 1;
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
		builder.addCase(
			getNewPageNetFlix.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: { path: string; newPage: TDataNetflix } }) => {
				const { path, newPage } = action.payload;
				state.data.map((element: TNetflixListMoviesReturned) => {
					if (element.path === path && newPage.state) {
						const { results } = newPage.data;
						element.result.data.results =
							element.result.data.results.concat(results);
						element.result.data.page = newPage.data.page;
					}
				});
			},
		);
		builder.addCase(getNewPageNetFlix.rejected, () => {
			console.log('error');
		});
	},
});
const dataNetflix = data.reducer;
const { addPrototype } = data.actions;
export { dataNetflix, addPrototype };
