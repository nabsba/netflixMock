export type TResultFetch = {
	type: string;
	data: any;
	path?: string;
};

export type TInfosForUpdateDataPage = {
	path: string;
	newPage: TNewPage;
};
export type TNewPage = {
	page: number;
	results: TNetflixMovie[];
	total_pages: number;
	total_results: number;
};
export type TNetflixListMoviesReturned = {
	title: string;
	result: TDataNetflix;
	path: string;
	extraFilter: string | null;
};
export type TWishReturnList = {
	results: TNetflixMovie[];
	total_pages: number;
	total_results: number;
	page: number;
};
export type TNetflixMovie = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	name: string;
};
export type TDataNetflix = {
	state: boolean;
	data: TWishReturnList;
	errorCodeServer: string;
	serverError: boolean;
	errorMessage: string;
	errorCodeSql: string;
};

export type TWishListMovies = {
	title: string;
	path: string;
	extraFilter?: string;
};

export type TInfosFetchTest = {
	type: string;
	specific: {
		pageList: string;
		path: string;
	};
};

export type TInfosPage = {
	path: string;
	page: number;
};
