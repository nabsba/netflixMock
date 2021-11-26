/*eslint-disable*/
import '@testing-library/jest-dom/extend-expect';
/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia =
	global.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};
