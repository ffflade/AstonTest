import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userLogIn, wrongPassword, errorUser } from "../../features/user/userSlice";

import './login.scss'

const Login = () => {

	const [data, setData] = useState({
		username: '',
		password: ''
	});

	const wrongPass = useSelector(wrongPassword);
	const error = useSelector(errorUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(userLogIn(data));
		console.log(wrongPass, error, !userLogIn)
		if ((!wrongPass && !error && !userLogIn)) {
			navigate('/')
		}
		
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
					<Link to="/signIn" className="login__link_one">Sign Up</Link>
					/
					<Link to="/" className="login__link_two">Home</Link>
				</div>
				{
					error ? 
						<div className="error">
							<h1 className="error__title">
								Account not existing
							</h1>
						</div> : null

					||
					wrongPass ? 
						<div className="error">
							<h1 className="error__title">
								Wrong Password!
							</h1>
						</div> : null
				}
			</div>
		</>
	)
}

export default Login;