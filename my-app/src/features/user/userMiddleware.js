import { isLogged } from "./userSlice";

const userMiddleware = (store) => (next) => (action) => {

	let currentStore = store.getState();


	let currentUser =  JSON.parse(localStorage.getItem(`${currentStore.user.username}`));

	let payloadUser = JSON.parse(localStorage.getItem(`${action.payload.username}`));

	if (action.type === 'user/usersignIn') {

		if (payloadUser) {
			console.log('existing')
			return null;
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
				return (next(action));
			} else {
				console.log('wrong pass');
				return null;
			}
		}
		else {
			console.log('not registered');
			return null;
		}
	}

	else if (action.type === 'user/addHistory') {
		currentUser[`history`][action.payload] = true;
	}

	if (isLogged) {
		localStorage.setItem(currentUser.username, JSON.stringify({
			username: currentUser.username,
			password: currentUser.password,
			history: currentUser.history
		}))
	}



	return next(action);
}

export default userMiddleware;