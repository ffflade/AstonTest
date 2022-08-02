import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUser, userLogOut, isLogged} from '../../features/user/userSlice'

import './header.scss';

const Header = () => {
	const dispatch = useDispatch();
	const isLog = useSelector(isLogged);
	const user = useSelector(getUser);

	return (
		<header className="app__header">
			<div className="app__header__logo">
				<Link to={'/'} className="app__header__logo__link">Character Base</Link>
			</div>
			
			{
				isLog ? 
					<>
						<div className='user'>{user}</div>
						<nav className="app__menu">
							<ul>
								<li>
									<Link to={'/favourites'}>
									<span>Favourites</span>
									</Link>
								</li>
							/
								<li>
									<Link to={'/history'}>
									<span>History</span>
									</Link>
								</li>
							/
								<li>
									<Link to={'/'} onClick={dispatch(userLogOut)}>
									<span>Log out</span>
									</Link>
								</li>
							</ul>
						</nav>
					</> :
					<>
						<nav className="app__menu">
							<ul>
								<li><Link to={'/login'}>Log In</Link></li>
								/
								<li><Link to={'/signIn'}>Sign In</Link></li>
							</ul>
						</nav>
					</>
			}
		</header>
	)
}

export default Header;