import { TErrorBundary } from './type';

const ERROR_BUNDARY: { [key: string]: TErrorBundary } = {
	default: {
		h1: 'We are sorry...',
		paragraph: 'We are really sorry',
		navLink: { email: 'email@example.com', text: 'email' },
		span2: 'ByeBye',
	},
};

export { ERROR_BUNDARY };
