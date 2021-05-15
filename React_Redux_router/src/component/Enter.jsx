import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { IncrementAction } from '../store/action';

const Enter = props => {
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch();
	const { history } = props;
	const toHomePage = () => {
		history.push('/');
    dispatch(IncrementAction());
	}
	return (
		<>
			<Link to="/">Home</Link> {/* これでページ遷移 */}
			<h1>Enterだよ！！</h1>
			<button onClick={toHomePage}>toHomePage!</button> {/* 間に処理噛ませたい時はこっち */}
      <p>toHomePage counter: {count}</p>
		</>
	)
}

export default withRouter(Enter);
