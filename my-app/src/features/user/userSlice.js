import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isRegged: false,
	username: '',
	password: '',
	history: {},
	existing: false,
	wrongPassword: false,
	error: false,
	favourite: {}
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		usersignIn(state, action) {
			state.username = action.payload.username;
			state.password = action.payload.password;
			state.isRegged = true;
		},
		userLogIn(state, action) {
			state.username = action.payload.username;
			state.password = action.payload.password;
			state.isRegged = true;
		},
		userLogOut(state) {
			state.isRegged = false;
		},
		addHistory(state, action) {
			state.history[action.payload] = true;
		},
		userExisting(state) {
			state.existing = true;
		},
		userWrongPassword(state) {
			state.wrongPassword = true;
		},
		userNotRegistered(state) {
			state.error = true;
		},
		addFavourite(state, action) {
			state.favourite[action.payload] = true;
		},
		removeFavourite(state, action) {
			delete state.favourite[action.payload];
		}
	}
});

const { actions } = userSlice;

export const { usersignIn, userLogIn, userLogOut, addHistory, addFavourite, removeFavourite } = actions;

export const isLogged = state => state.user.isRegged;
export const getUser = state => state.user.username;
export const isExisting = state => state.user.existing;
export const wrongPassword = state => state.user.wrongPassword;
export const errorUser = state => state.user.error;

export default userSlice.reducer;
