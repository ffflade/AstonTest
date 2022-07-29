const userMiddleware = (store) => (next) => (action) => {
	console.log('here')
	let userData = JSON.parse(localStorage.getItem(`${action.payload.username}`));
	
	let {username : user, password} = userData;
	console.log(user, password)

	if (action.type === 'user/userSignUp') {
		if (user) {
			console.log('existing')
			return null;
		} else {

			localStorage.setItem(action.payload.username, JSON.stringify({
				username: action.payload.username,
				password: action.payload.password,
			}))
		}
	}

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

	return (next(action));
}

export default userMiddleware;