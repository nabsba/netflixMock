const result = {
	state: false,
	data: null,
	serverError: false,
	errorMessage: '',
	errorCodeSql: '',
};

const axiosResponse = {
	data: result,
	status: 200,
	statusText: 'OK',
	config: {},
	headers: {},
};

export default {
	default: {
		get: jest.fn().mockImplementation(() => Promise.resolve(axiosResponse)),
	},
	get: jest.fn(() => Promise.resolve(axiosResponse)),
};
