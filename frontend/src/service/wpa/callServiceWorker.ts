export const getProfileIndexDB = (id: number): void => {
	// send some structured-cloneable data from the webpage to the sw
	if (navigator.serviceWorker.controller) {
		navigator.serviceWorker.controller.postMessage({
			type: 'rooms',
			id,
		});
	}
};
