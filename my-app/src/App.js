import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SingleCharPage from './singleCharPage/SingleCharPage';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';

function App() {

	// const [userLogged, setUserLogged] = useState(0);
	// const [user, setUser] = useState('');

	// const userLogOut = () => {
	// 	setUserLogged(0);
	// }

	// const userLogIn = () => {
	// 	setUserLogged(1);
	// }

	// const loginAccount = (name) => {
	// 	setUser(name);
	// }

	// <Header 
	// userLogged={userLogged} 
	// userLogOut={userLogOut}
	// user={user}/>

	// <Route 
	// path="/login" 
	// element={<Login 
	// 	userLogIn={userLogIn}
	// 	loginAccount={loginAccount} />} />

	// <Route 
	// path="/signup" 
	// element={<SignUp 
	// 	userLogIn={userLogIn}
	// 	loginAccount={loginAccount} />} />
	return (
		<Router>
			<div className="app">
				<Header/>
				<Routes>
					<Route 
						path='/' 
						element={<Home/>}/>

					<Route 
						path="/login" 
						element={<Login />} />

					<Route 
						path="/signup" 
						element={<SignUp />} />

					<Route 
						path='/character/:itemId'
						element={<SingleCharPage/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
