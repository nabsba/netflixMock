
 /*  
  library: workbox
 doc https://developers.google.com/web/tools/workbox/guides/configure-workbox
 */
// self.__WB_DISABLE_DEV_LOGS = process.env.REACT_APP_DEVELOPMENT == 'false' ? true: false;
self.__WB_DISABLE_DEV_LOGS =true;

import { registerRoute } from 'workbox-routing';
import {
  NetworkFirst,
  StaleWhileRevalidate,
  CacheFirst,
} from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import {DATA_TYPE_SERVICE_WORKER} from './service'
import {RangeRequestsPlugin} from 'workbox-range-requests';

// check https://developers.google.com/web/tools/workbox/guides/configure-workbox
// workbox.setConfig({ debug: true });
// Use with precache injection 

// To update the service worker of the client, increase the version. The browser will compares the service worker and if it has changed of one single byte or his life time has expired, it will trigger a new installation.
const version = 1;
precacheAndRoute(self.__WB_MANIFEST);
// Used for filtering matches based on status code, header, or both
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// Used to limit entries in cache, remove entries after a certain period of time
import { ExpirationPlugin } from 'workbox-expiration';

 // Register video
registerRoute(
  ({url}) => url.pathname.endsWith('.mp4'),
  new CacheFirst({
    cacheName: `videosV${version}`,
    plugins: [
      new CacheableResponsePlugin({statuses: [200]}),
      new RangeRequestsPlugin(),
    ],
  }),
);
// Check https://developers.google.com/web/tools/workbox/guides/route-requests
// Cache page navigations (html) with a Network First strategy

registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
		/*
		This will try to get a response from the network first.
		 If it receives a response, it’ll pass that to the browser and also save it to a cache.
		 If the network request fails, the last cached response will be used.
	 */
  new NetworkFirst({
    // Put all cached files in a cache named 'pages'
    cacheName: `pagesV${version}`,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// // Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
// /*This strategy will use a cached response for a request if it is available and update the cache in the background with a response from the network. 
// (If it’s not cached it will wait for the network response and use that.) This is a fairly safe strategy as it means users are regularly updating their cache.
//  The downside of this strategy is that it’s always requesting an asset from the network, using up the user’s bandwidth.*/
registerRoute(
//   // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    // Put all cached files in a cache named 'assets'
    cacheName: `assetsV${version}`,
    plugins: [
			  new ExpirationPlugin({
        // Keep at most 50 entries.
        maxEntries: 50,
        // Don't keep any entries for more than 30 days.
        maxAgeSeconds: 30 * 24 * 60 * 60,
        // Automatically cleanup if quota is exceeded.
        purgeOnQuotaError: true,
      }),
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);
// // Cache images with a Cache First strategy
// /*
// This strategy will check the cache for a response first and use that if one is available. 
// If the request isn’t in the cache, the network will be used and any valid response will be added to the cache before being passed to the browser.
//  */
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => request.destination === 'image',
  // Use a Cache First caching strategy
  new CacheFirst({
    // Put all cached files in a cache named 'images'
    cacheName: `imagesV${version}`,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
        purgeOnQuotaError: true,  // Automatically cleanup if quota is exceeded.
      }),
    ],
  }),
);
// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
registerRoute(
  ({url}) => url.origin === 'https://fonts.googleapis.com/css2?family=Jost&family=Playfair+Display&display=swap' || 'https://fonts.googleapis.com/css2?family=Tangerine&display=swap',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

addEventListener('message', (event) => {
  if (event.data && event.data.type === DATA_TYPE_SERVICE_WORKER.SKIP_WAITING) {
    self.skipWaiting();
  }
});