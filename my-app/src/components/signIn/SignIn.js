import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { usersignIn } from "../../features/user/userSlice";

import './signIn.scss';

const SignIn = () => {

	const [data, setData] = useState({
		username: '',
		password: ''
	});
	
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(usersignIn(data))
		navigate('/login')
	}

	return (
		<>
			<div className="signIn">
				<form  
					className="signIn__form"
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
					<button type="submit" className="signIn__button">Create Account</button>
				</form>
				<p>or</p>
				<div className="signIn__alternative">
					<Link to="/login" className="signIn__link_one">Login</Link>
					/
					<Link to="/" className="signIn__link_two">Home</Link>
				</div>
			</div>
		</>
	)
}

export default SignIn;