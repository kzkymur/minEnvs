import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, useHistory } from 'react-router';
import { State } from '@/store/reducer';
import { IncrementAction } from '@/store/action';

type Props = {
}

const Enter: React.FC<Props> = props => {
  const count = useSelector((state: State)=>state.count)
  const dispatch = useDispatch();
  const history = useHistory();
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
