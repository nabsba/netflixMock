// Local server
// const URL_ADDRESS = 'https://localhost:3001';
// fake api server
// do not forget to write: npx json-server db.json --routes routes.json
const URL_ADDRESS = 'http://localhost:3000';

const URL_ADDRESSES: {
	default: string;
	fileManager: {
		default: string;
		image: { load: (name: string) => string; url: string };
		video: { load: (name: string) => string; url: string };
		data: { write: string; read: string };
	};
	data: {
		postObject: string;
		getObject: string;
	};
	api: {
		googlePlace: string;
	};
	form: {
		[key: string]: string;
	};
	media: { [key: string]: string };
} = {
	default: URL_ADDRESS,
	fileManager: {
		default: `${URL_ADDRESS}/fileManager/file`,
		image: {
			load: (path: string) => `${URL_ADDRESS}/fileManager/file/image/${path}`,
			url: `${URL_ADDRESS}/fileManager/file/image`,
		},
		video: {
			load: (path: string) => `${URL_ADDRESS}/fileManager/file/video/${path}`,
			url: `${URL_ADDRESS}/fileManager/file/video`,
		},
		data: {
			write: `${URL_ADDRESS}/fileManager/file/write`,
			read: `${URL_ADDRESS}/fileManager/file/read`,
		},
	},
	api: {
		googlePlace: `${URL_ADDRESS}/api/googlePlace`,
	},
	form: {
		registerwithus: `${URL_ADDRESS}/form/contact`,
		inscription: `${URL_ADDRESS}/authentification/inscription`,
		login: `${URL_ADDRESS}/authentification/login`,
		admin: `${URL_ADDRESS}/authentification/login`,
		logout: `${URL_ADDRESS}/authentification/logout`,
	},
	data: {
		postObject: `${URL_ADDRESS}/data`,
		getObject: `${URL_ADDRESS}/data/get`,
	},
	media: {
		facebook: '',
	},
};

export default URL_ADDRESSES;
