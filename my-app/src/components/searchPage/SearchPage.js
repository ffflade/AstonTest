import { useParams, Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';


import useMarvelService from '../../services/useMarverService';
import './searchPage.scss'

const SearchPage = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const {name} = useParams();
	const [charList, setCharList] = useState([]);
	const {getCharaactersStartWith} = useMarvelService();
	


	useEffect(() => {
		getCharaactersStartWith(name)
			.then(onCharListLoaded)
		// eslint-disable-next-line
	}, []);

	const onCharListLoaded = (newCharList) => {
		setCharList(charList => [...charList, ...newCharList]);
	}
	const items = View(charList);

	return (
			<div className="char__content">
				<div className='back' onClick={goBack}>Back</div>
				<div className="char__list"> 
				{
					charList.length > 0 ?
					{...items} :
					<h1 className="char__notfound">No matches found</h1>
				}
				</div>
			</div>
	)
}

const View = (arr) => {

	const items =  arr.map((item, i) => {
		let imgStyle = {'objectFit' : 'cover'};
		if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
			imgStyle = {'objectFit' : 'unset'};
		}

		if (item.name.length > 15) {
			let newName = item.name.split('(');
			item.name = newName[0];
		}

		return (
			<li 
				className="char__item"
				tabIndex={0}
				//Я бы хотел поставить key={item.id} но у апи иногда совпадают ключи, поэтому отсавляю так
				key={i}
				>

				<img src={item.thumbnail} alt={item.name} style={imgStyle}/>
					<div className="char__name">{item.name}
					<Link  to={`/character/${item.id}`}>
					<button className="char__more">More</button>
				</Link></div>
				
			</li>
		)
	});

	return (
		<>
			<ul className="char__grid">
				{items}
			</ul>
		</>

	)
}

export default SearchPage;