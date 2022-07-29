import { useState } from "react";

import Search from '../search/Search';
import CharList from "../charList/CharList";

import './home.scss'

const Home = () => {
	const [selectedChar, setChar] = useState(null);

	const onCharSelected = (id) => {
		setChar(id);
	}

	return (
		<>
			<div className="char__content">
				<Search/>
				<CharList onCharSelected={onCharSelected}/>
			</div>
		</>

	)
}

export default Home;