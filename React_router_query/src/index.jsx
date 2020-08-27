import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home.jsx';
import Enter from './component/Enter.jsx';

class App extends React.Component {
	render () {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Home}/> 
					<Route path='/Enter' component={Enter}/> 
				</Switch>
			</Router>
		);
	}
}

render(<App/>, document.getElementById('app'));
