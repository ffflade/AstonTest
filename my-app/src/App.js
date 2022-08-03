import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SingleCharPage from './singleCharPage/SingleCharPage';
import Login from './components/login/Login';
import SignIn from './components/signIn/SignIn';
import SearchPage from './components/searchPage/SearchPage';
import History from './components/history/History';

function App() {
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
						path="/signIn" 
						element={<SignIn />} />

					<Route 
						path='/character/:itemId'
						element={<SingleCharPage/>}/>

					<Route 
						path='/search/:name'
						element={<SearchPage/>}/>

					<Route 
						path='/history'
						element={<History/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
