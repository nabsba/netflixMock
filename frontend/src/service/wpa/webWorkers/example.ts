// /*  */

// // web.worker.file.ts
// //  1 create web worker
// const dashboardWorker: Worker = self as any;
// // 2 add event message
// //3 listen to message (with data) coming from the thirst thread js file.
// dashboardWorker.addEventListener('message', (event: any) => {
// 	switch (event.data) {
// 		case 'postDashboard':
// 			//call any function
// 			return;
// 		case 'getDashboard':
// 			dashboardWorker.postMessage({ type: 'one', data: { nab: 'two' } });
// 			return;
// 		default:
// 			dashboardWorker.postMessage('Patronus');
// 	}
// });

// //  file.ts
// //  1/ we call our webworker
// const workerDashboard = new (dashboardWorker as any)();

// // We send message to the webworker that will be read in the event 'message'.
// dashboardWorker.postMessage({ type: 'one', data: { nab: 'two' } });
export {};
