import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userSignUp } from "../../features/user/userSlice";

import './signUp.scss';

const SignUp = () => {

	const [data, setData] = useState({
		username: '',
		password: ''
	});

	const dispatch = useDispatch();

	const onSubmitHandler = (e) => {
		
		e.preventDefault();
		dispatch(userSignUp(data))
	}

	return (
		<>
			<div className="signUp">
				<form  
					className="signUp__form"
					onSubmit={onSubmitHandler}>
					<label htmlFor="name">Enter your name:</label>
					<input 
						required
						type="text"
						id="name"
						placeholder="your nickname example"
						value={data.username}
						onChange={(e) => setData({ ...data, username: e.target.value })}/>
					<label htmlFor="name">Enter your password:</label>
					<input 
						required
						type="password"
						id="password"
						placeholder="your password example"
						value={data.password}
						onChange={(e) => setData({ ...data, password: e.target.value })}/>
					<button type="submit" className="signUp__button">Create Account</button>
				</form>
				<p>or</p>
				<div className="signUp__alternative">
					<Link to="/login" className="signUp__link_one">Login</Link>
					/
					<Link to="/" className="signUp__link_two">Home</Link>
				</div>
			</div>
		</>
	)
}

export default SignUp;