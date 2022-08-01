import img from './error.gif';
import './errorMessage.scss';

const ErrorMessage = () => {
	return (
		<div className="error">
			<h1 className="error__message">Something went wrong.<br/> We working on the problem
			<br/> Try again later!</h1>
			<img className='error__img' alt='error' src={img}/>
		</div>

	)
}

export default ErrorMessage;