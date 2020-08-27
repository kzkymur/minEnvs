import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Home = props => {
	const { history } = props;
	const toHomePage = () => {
		history.push('/');
	}
	return (
		<>
			<Link to="/">Home</Link> {/* これでページ遷移 */}
			<h1>Enterだよ！！</h1>
			<button onClick={toHomePage}>toHomePage!</button> {/* 間に処理噛ませたい時はこっち */}
		</>
	)
}

