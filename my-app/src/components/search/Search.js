import React, {useState} from "react";
import { Link } from "react-router-dom";

import "./search.scss";

export const Search = () => {

	const [search, setSearch] = useState('');


	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(e.target.value);

	}

	return <div className="search">
		<form onSubmit={handleSubmit} className='search__form'>
			<input
				className="search__input"
				type="search"
				name="search"
				value={search}
				placeholder="Type character name"
				onChange={e => setSearch(e.target.value)}
			/>
			<Link to={`/search/${search}`}>
				<button type="submit" className="search__button" disabled={!search}>search</button>
			</Link>
		</form>

	</div>
}

export default Search;