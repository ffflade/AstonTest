import Search from '../search/Search';
import CharList from "../charList/CharList";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './home.scss'

const Home = () => {


	return (
		<>
			<div className="char__content">
				<Search/>
				<ErrorBoundary>
					<CharList />
				</ErrorBoundary>
			</div>
		</>

	)
}

export default Home;