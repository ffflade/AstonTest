import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isRegged: false,
	username: '',
	password: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userSignUp(state, action) {
			state.username = action.payload.username;
			state.password = action.payload.password;
			state.isRegged = true;
		},
		userLogIn(state, action) {
			state.username = action.payload.username;
			state.isRegged = true;
		},
		userLogOut(state) {
			state.isRegged = false;
		}
	}
});

const { actions } = userSlice;

export const { userSignUp, userLogIn, userLogOut } = actions;
export const isLogged = state => state.user.isRegged;
export const getUser = state => state.user.username;
export default userSlice.reducer;
