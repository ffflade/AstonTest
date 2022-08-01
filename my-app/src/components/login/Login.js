import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userLogIn } from "../../features/user/userSlice";

import './login.scss'

const Login = () => {

	const [data, setData] = useState({
		username: '',
		password: ''
	});
	const dispatch = useDispatch();

	const onSubmitHandler = (e) => {
		
		e.preventDefault();
		dispatch(userLogIn(data));
	}

	return (
		<>
			<div className="login">
				<form  
					className="login__form"
					onSubmit={onSubmitHandler}>
					<label htmlFor="name">Enter your username:</label>
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
					<button type="submit" className="login__button">Login</button>
				</form>
				<p>or</p>
				<div className="login__alternative">
					<Link to="/signup" className="login__link_one">Sign Up</Link>
					/
					<Link to="/" className="login__link_two">Home</Link>
				</div>
			</div>
		</>
	)
}

export default Login;