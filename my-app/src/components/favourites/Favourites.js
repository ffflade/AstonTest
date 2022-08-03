import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


import { getUser, isLogged } from '../../features/user/userSlice';

import useMarvelService from '../../services/useMarverService';
import View from '../searchPage/View';
import './favourites.scss'

const Favourites = () => {
	const navigate = useNavigate();
	const isLog = useSelector(isLogged);
	const {getCharacter} = useMarvelService();

	const getUsername = useSelector(getUser);
	const [favourites, setFavourites] = useState({});
	const [charList, setCharList] = useState([]);

	useEffect(() => {
		if (!!isLog === false) {
			return navigate(-1)
		}
	}, []);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem(getUsername));

		for (let itemId in user.favourite) {
			getCharacter(itemId).then((newCharList) => {
				setCharList(charList => [...charList, newCharList])
			});
		}
	}, [favourites]);

	return (
		<div className="char__content">
			<h1 className="favourite__header">
				Favourites:
			</h1>
			<div className="char__list"> 
			{
				charList.length > 0 ?
				<View charList={charList}/> :
				<h1 className="char__notfound">Nothing in favourites</h1>
			}
			</div>
		</div>
	)
}

export default Favourites;