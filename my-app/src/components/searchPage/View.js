import { Link } from "react-router-dom";

const View = (props) => {

	let {charList : arr} = props;

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

export default View;