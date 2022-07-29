import { configureStore } from "@reduxjs/toolkit";

import userReducer from './user/userSlice';
import userMiddleware from "./user/userMiddleware";

const store = configureStore({
	reducer: {
		user: userReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userMiddleware),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;