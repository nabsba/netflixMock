import { addDashboardUserToIDB } from '../../indexDB/dashboard/dashboard';
// // https://webpack.js.org/loaders/worker-loader/
/* eslint-disable  @typescript-eslint/no-explicit-any */
const dashboardWorker: Worker = self as any;

// Respond to message from parent thread
// Listen to the channel web worker
// dashboardWorker.postMessage({ type: 'one', data: { nab: 'hi' } });
dashboardWorker.addEventListener(
	'message',
	(event: { data: { type: string; object: Record<string, unknown> } }) => {
		switch (event.data.type) {
			case 'postDashboard':
				addDashboardUserToIDB(event.data.object);
				return;
			default:
				dashboardWorker.postMessage('Patronus');
		}
	},
);

export default dashboardWorker;
