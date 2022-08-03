import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


import useMarvelService from '../services/useMarverService';
import { addFavourite, removeFavourite, isLogged } from '../features/user/userSlice';
import './singleCharPage.scss'

const SingleCharPage = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { itemId } = useParams();
	const logged = useSelector(isLogged);

	const goBack = () => navigate(-1);

	const [char, setChar] = useState(null);
	const {getCharacter} = useMarvelService();

	useEffect(() => {
		updateChar();
		 // eslint-disable-next-line
	}, [itemId]);

	const updateChar = () => {
		getCharacter(itemId)
		.then((char) => {
			setChar(char)
		})
	}

	const handleClick = () => {
		dispatch(addFavourite(`${itemId}`));
	}
	const handleClick_remover = () => {
		dispatch(removeFavourite(`${itemId}`));
	}

	const content = !!char ? <View char={char}/> : null;

	return (
		<div className="char__info">
			<div className='char__back' onClick={goBack}>Back</div>
			{
				logged ?
				<>
					<button
						className='char__favourite'
						onClick={handleClick}
					>add to favourite</button>
					<button
						className='char__favourite char__favourite_remove'
						onClick={handleClick_remover}
					>remove favourite</button>
				</> :
				null
			}
			{content}
		</div>
	)
}

const View = ({char}) => {
	const {name, description, thumbnail, wiki, comics} = char;

	let imgStyle = {'objectFit': 'cover'};
	if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
		imgStyle = {'objectFit' : 'contain'};
	}

	return (
		<>
		<div className="char__container">
			<div className="char__first">
				<div className="char__basics">
					<img src={thumbnail} alt={name} style={imgStyle}/>
					<div>
						<div className="char__info-name">{name}</div>
						<div className="char__btns">
							<Link  to={`/`} className="button button__main">
								<div className="inner">homepage</div>
							</Link>
							<a href={wiki} className="button button__secondary">
								<div className="inner">Wiki</div>
							</a>
						</div>
					</div>
				</div>
				<div className="char__descr">
					{description}
				</div>
				
			</div>
			<div className="char__second">
			<div className="char__comics">Comics:</div>
				<ul className="char__comics-list">
					{comics.length > 0 ? null : 'There is no comics'}
					{
						comics.map((item, i) => {
							return (
								<li key={i}className="char__comics-item">
								{item.name}
							</li>
							)
						})
					}
				</ul>
			</div>
		</div>
		</>
	)
}

SingleCharPage.propTypes = {
	itemId: PropTypes.string,
}

View.propTypes = {
	char: PropTypes.object
}

export default SingleCharPage;