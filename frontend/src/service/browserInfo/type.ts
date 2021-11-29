export type TBrowserInfo = {
	isHoverSupported: boolean;
	isWebWorker: boolean;
	isServiceWorker: boolean;
	isWebService: boolean;
	isIndexDB: boolean;
	storageClient: {
		used: number | undefined;
		available: number | undefined;
	};
};
