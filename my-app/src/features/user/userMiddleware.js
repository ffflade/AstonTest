import { isLogged } from "./userSlice";

const userMiddleware = (store) => (next) => (action) => {

	let currentStore = store.getState();


	let currentUser =  JSON.parse(localStorage.getItem(`${currentStore.user.username}`));

	let payloadUser = JSON.parse(localStorage.getItem(`${action.payload.username}`));

	if (action.type === 'user/usersignIn') {

		if (payloadUser) {
			return next({type:'user/userExisting'});
		} else {
			localStorage.setItem(action.payload.username, JSON.stringify({
				username: action.payload.username,
				password: action.payload.password,
				history: {}
			}));
		}
	}

	else if (action.type === 'user/userLogIn') {

		if (payloadUser) {
			if (payloadUser.password === action.payload.password) {
				return next(action);
			} else {
				return next({type: 'user/userWrongPassword'});
			}
		} else {
			return next({type:'user/userNotRegistered'});
		}
	}

	else if (action.type === 'user/addHistory') {
		if (!isLogged === true) {
			currentUser[`history`][action.payload] = true;
		}
	}

	if (!isLogged) {
		localStorage.setItem(currentUser.username, JSON.stringify({
			username: currentUser.username,
			password: currentUser.password,
			history: currentUser.history
		}))
	}



	return next(action);
}

export default userMiddleware;