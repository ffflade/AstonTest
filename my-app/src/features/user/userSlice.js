import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isRegged: false,
	username: '',
	password: '',
	history: {}
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
		}
	}
});

const { actions } = userSlice;

export const { usersignIn, userLogIn, userLogOut, addHistory } = actions;
export const isLogged = state => state.user.isRegged;
export const getUser = state => state.user.username;
export default userSlice.reducer;
