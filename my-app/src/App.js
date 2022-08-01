import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SingleCharPage from './singleCharPage/SingleCharPage';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import SearchPage from './components/searchPage/SearchPage';

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
						path="/signup" 
						element={<SignUp />} />

					<Route 
						path='/character/:itemId'
						element={<SingleCharPage/>}/>

					<Route 
						path='/search/:name'
						element={<SearchPage/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
