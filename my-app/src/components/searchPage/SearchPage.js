import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';


import useMarvelService from '../../services/useMarverService';
import View from "./View";
import './searchPage.scss'

const SearchPage = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const {name} = useParams();
	const [charList, setCharList] = useState([]);
	const {getCharaactersStartWith} = useMarvelService();
	


	useEffect(() => {
		getCharaactersStartWith(name)
			.then((newCharList) => {
				setCharList(charList => [...charList, ...newCharList])
			})
		// eslint-disable-next-line
	}, []);


	return (
			<div className="char__content">
				<div className='back' onClick={goBack}>Back</div>
				<div className="char__list"> 
				{
					charList.length > 0 ?
					<View charList={charList}/> :
					<h1 className="char__notfound">No matches found</h1>
				}
				</div>
			</div>
	)
}



export default SearchPage;