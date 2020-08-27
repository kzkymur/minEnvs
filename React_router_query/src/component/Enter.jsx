import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import queryString from 'query-string';

const Enter = props => {
	const { history, location } = props;
	const addQuery = () => {
		history.push('/Enter?query1=QUERY1');
	}
	const qs = queryString.parse(location.search);
	console.log(qs);
	return (
		<>
			<Link to="/">Home</Link> {/* これでページ遷移 */}
			<h1>Enterだよ！！</h1>
			<button onClick={addQuery}>add query!</button> {/* 間に処理噛ませたい時はこっち */}
		</>
	)
}

export default withRouter(Enter); /* history.push 使うなら必要 */
