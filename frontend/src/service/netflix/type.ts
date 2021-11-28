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
	results: any;
	total_pages: number;
	total_results: number;
};
