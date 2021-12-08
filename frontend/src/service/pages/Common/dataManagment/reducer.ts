import { createSlice } from '@reduxjs/toolkit';
import * as dataBackup from '../datas/backup/data.json';
import { header, footer } from '../datas/datasCommon';
import { arcturus } from '../../home/data';
import { TNetflixMovie } from '../../../netflix/type';
import { URL_ADDRESSES } from '../../../../bridge';
import { IMAGE_SIZE, randomIntFromInterval, VIDEO_PLAYER } from '../../..';

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
			const { payload } = action;
			state.home.arcturus.groupArticleOne.data = payload.data;
			if (payload.data && payload.data.length > 0) {
				const randomList: number = Math.round(
					randomIntFromInterval(0, payload.data.length - 1),
				);
				const randomMovie = Math.round(
					randomIntFromInterval(
						0,
						payload.data[randomList].result.data.results.length - 1,
					),
				);
				//todo: check a random index in results not only 0. like this when you refresh it changes.
				const movie: TNetflixMovie =
					payload.data[randomList].result.data.results[randomMovie];
				state.home.header = {
					...state.home.header,
					imageBackground: {
						src: URL_ADDRESSES.api.netflix.image(
							movie.backdrop_path,
							IMAGE_SIZE.original,
						),
						alt: movie.title ? movie.title : movie.name,
					},
					articleOne: {
						h2: { title: movie.title ? movie.title : movie.name },
						paragraph: movie.overview,
					},
					videoPlayer: {
						url: '',
						name: movie.title,
						typeConfiguration: VIDEO_PLAYER.typeConfiguration,
						date: movie.release_date,
						type: VIDEO_PLAYER.type,
						isVolumeUp: 1,
						id: movie.id,
					},
				};
			}
		},
		polulateDataPagesWithApiData: (state, action) => {
			console.log('action');
		},
	},
});
const dataPages = data.reducer;
const { getDatasPages, initGroupArticleWithNetflixData } = data.actions;

export default dataPages;
export { dataBackup, getDatasPages, initGroupArticleWithNetflixData };
