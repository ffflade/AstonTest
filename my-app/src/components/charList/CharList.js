import {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarverService';

import './charList.scss';

const CharList = (props) => {

	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(285);
	const [charEnded, setCharEnded] = useState(false);

	const {getAllCharacters} = useMarvelService();


	useEffect(() => {
		onRequest(offset, true);
		 // eslint-disable-next-line
	}, []);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		
		getAllCharacters(offset)
			.then(onCharListLoaded)
	}

	const onCharListLoaded = (newCharList) => {

		let ended = false;
		if (newCharList.length < 12 ) {
			ended = true;
		}
		
		setCharList(charList => [...charList, ...newCharList]);
		setNewItemLoading(newItemLoading => false);
		setOffset(offset => offset + 12);
		setCharEnded(charEnded => ended);
	}

	const itemRefs = useRef([]);
	const items = View(charList, itemRefs, props);

	return (
		<div className="char__list">
			{items}
			<button 
			className="button button__main button__long"
			disabled={newItemLoading}
			style={{'display': charEnded ? 'none' : 'block'}}
			onClick={() => onRequest(offset)}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

const View = (arr, itemRefs, props) => {
	const focusOnItem = (id) => {
		itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
		itemRefs.current[id].classList.add('char__item_selected');
		itemRefs.current[id].focus();
	}

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
				ref={el => itemRefs.current[i] = el}
				key={i}
				onClick={() => {
						props.onCharSelected(item.id)
						focusOnItem(i)
					}}
				onKeyPress={(e) => {
					if (e.key === ' ' || e.key === 'Enter') {
						props.onCharSelected(item.id);
						focusOnItem(i);
					}
				}}>
				

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

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired
}

export default CharList;