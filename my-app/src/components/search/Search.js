import React from "react";

import "./search.scss";

export const Search = () => {

	return <div className="search">
		<input
			className="search__input"
			type="text"
			placeholder="Type character name"
		/>
	</div>
}

export default Search;