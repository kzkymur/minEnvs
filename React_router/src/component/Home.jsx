import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends React.Component {
	render () {
		return (
			<>
				<h1 className={'title'}>Homeだよ！！</h1>
				<Link to="/Enter">Enter</Link>
			</>
		)
	}
}

