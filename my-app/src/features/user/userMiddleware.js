const userMiddleware = (store) => (next) => (action) => {

	if (action.type === 'user/userSignUp') {
		if (JSON.parse(localStorage.getItem(`${action.payload.username}`))) {
			console.log('existing')
			return null;
		} else {

			localStorage.setItem(action.payload.username, JSON.stringify({
				username: action.payload.username,
				password: action.payload.password,
			}))
		}
	}

	let {username : user, password} = JSON.parse(localStorage.getItem(`${action.payload.username}`));

	if (action.type === 'user/userLogIn') {
		if (user) {
			if (password === action.payload.password) {
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

	return next(action);
}

export default userMiddleware;