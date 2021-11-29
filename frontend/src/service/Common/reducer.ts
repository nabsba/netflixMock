import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import dataPages from '../pages/dataManagment/reducer';
import { dataNetflix } from '../netflix/dataManagment/reducer';
import { browserInfo } from '../browserInfo/reducer';
// allReducers
// import { persistReducer } from "redux-persist";
// tell to redux you want want to use your storage as default
// import storage from "redux-persist/lib/storage";
// or session storage: diff between them; if the user closes his windows
// all datas are deleted but with local storage they are saved.
// import sessionStorage from "redux-persist/lib/storage";
// Will define which reducer we want then to be persisted.
const reducer = combineReducers({
	dataPages,
	dataNetflix,
	browserInfo,
});

const reducers = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default reducers;
