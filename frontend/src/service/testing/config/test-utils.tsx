/* eslint-disable*/
//@ts-nocheck
import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import reducers from '../../../service/reducers';

//test utils file

const renderWithRouter = (
	ui,
	{
		route = '/',
		history = createMemoryHistory({ initialEntries: [route] }),
	} = {},
) => {
	return {
		...render(
			<Provider store={reducers}>
				<Router history={history}>{ui}</Router>,
			</Provider>,
		),
		history,
	};
};

export default renderWithRouter;
