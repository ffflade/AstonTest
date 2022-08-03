import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getUser, isLogged } from '../../features/user/userSlice';

import './history.scss'

const History = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	const isLog = useSelector(isLogged);

	const getUsername = useSelector(getUser);
	const [history, setHistory] = useState({});

	useEffect(() => {
		if (isLog === false) {
			return navigate(-1)
		}

		const user = JSON.parse(localStorage.getItem(getUsername));
		setHistory(user.history)
	}, []);

	let items = View(history);



	return 	(
			<div className="history">
				<div className='back' onClick={goBack}>Back</div>
				<h1 className="history__header">
					History:
				</h1>
				{items}
			</div>
		)
};


const View = (history) => {

	let items = [...Object.keys(history)].map((item, i) => {
		return (
			<Link to={`/search/${item}`}>
				<li
					className="history__list__item"
					key={i.toString()}
					>
						{item}
				</li>
			</Link>
		)
	})

	return (
		<>
			<ul className="history__list">
				{items}
			</ul>
		</>

	)
}

View.propTypes = {
	char: PropTypes.objectOf(PropTypes.string)
}

export default History;